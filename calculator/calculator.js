$(document).ready(function() {
    
    var register = "";

    $(".numberButton").click(function(evt) {
        var btn = evt.target;
        var btnString = $(btn).html();
        updateLabel(btnString);
    });

    $(".clearBtn").click(function(evt) {
        var btn = evt.target;
        var btnString = $(btn).html();
        if(btnString == "C") {
            // clear the screen
            clearLabel();
        }
        else if(btnString == "CE") {
            // clear the register
            this.register = $(".display").val();
            clearLabel();

        }
    })

    $("#btnSubmitDecimal").click(function(evt) {
        var existing = $(".display").val();
        if(!existing.includes(".")) {
            updateLabel(".");
        }
    })

    function updateLabel(newData) {
        var existing = $(".display").val();
      
        var newString = existing + newData;
         $(".display").val(newString);
        
        


    }

    function clearLabel() {
        $(".display").val("");
    }
});


