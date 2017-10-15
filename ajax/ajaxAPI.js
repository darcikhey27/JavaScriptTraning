$(document).ready(function() {


	var language = 'en';
	var baseURL = "https://od-api.oxforddictionaries.com:443/api/v1/entries/";
	var proxy = "https://cors-anywhere.herokuapp.com/";

	var wordDefinition = "";
	var wordSynonyms = "";
  $("#mybtn").click(function() {
		clearFields();

		$.ajaxSetup({
			headers: {
				"Accept": "application/json",
				"app_id": "df1b9283",
				"app_key": "12fb13689df51c7eb5ba4e457f3ef70a"
			}
		});

		
		var word = getWord();
		var wordURL = proxy + baseURL + "en/"+ word;
		//console.log(wordURL);
		// get word definition
		$.getJSON(wordURL, function(data) {
			//console.log(data);
			wordDefinition = data.results[0].lexicalEntries[0].entries[0].senses[0].definitions.toString();
			$("#definition").append(wordDefinition);
			//processData(data);
		});

		var synonymsURL = proxy + baseURL + "en/" + word + "/synonyms;antonyms";
		$.getJSON(synonymsURL, function(data) {
			console.log(data);
			var synArray = data.results[0].lexicalEntries[0].entries[0].senses[0].synonyms;
			wordSynonyms = parseJSONarray(synArray);
			$("#synonyms").append(wordSynonyms);

			var antonymsArray = data.results[0].lexicalEntries[0].entries[0].senses[0].antonyms;
			var antonyms = parseJSONarray(antonymsArray);
			$("#antonyms").append(antonyms);

		});

		var translationsURL = proxy + baseURL + "en/" + word + "/translations=es";
		$.getJSON(translationsURL, function(data) {
			console.log(data);
			//var trans = data.results[0].lexicalEntries[0].entries[0].senses[0].subsenses[0].translations[0].text;
			//$("#translations").append(trans);
		});

		translationsURL = proxy + baseURL + "en/" + word + "/translations=ro";
		$.getJSON(translationsURL, function(data) {
			console.log(data);
			//var trans = data.results[0].lexicalEntries[0].entries[0].senses[0].subsenses[0].translations[0].text;
			//$("#translations").append(trans);
		});


  });
  
	function appendInfo(wordDefinition, wordSynonyms) {
		console.log("updating page");
		console.log(wordDefinition);
		console.log(wordSynonyms);
		$("#definition").append(wordDefinition);
		$("#synonyms").append(wordSynonyms)
	}

  
  
  function getWord() {
    var word = $("#wordtext").val();
    return word;
  }
  function clearFields() {
		$("#definition").empty();
		$("#synonyms").empty();
		$("#antonyms").empty();
		$("#translations").empty();
  }
  function parseJSONarray(data) {
	if(data == null) {
		return "-";
	}
		
	var str='';
	
	data.map(function(id) {
		 str += id.text+"</br>";
	});
	return str;
}



}); // end jquery