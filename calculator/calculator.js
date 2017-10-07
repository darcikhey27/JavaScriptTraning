$(document).ready(function() {
    
    var outputLabel = "";
    var left;
    var right;

    $(".defButton").click(function(evt) {
        var btn = evt.target;
        var btnString = $(btn).html();
        updateLabel(btnString);
    });

    $(".clearBtn").click(function(evt) {
        console.log.evt.target;
    })

    function updateLabel(newData) {
        var existing = $(".display").val();
        var newString = existing + newData;
        $(".display").val(newString);


    }
});


