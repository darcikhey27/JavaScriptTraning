$(document).ready(function() {
    
    var register = "";
    var display = "";
    var operator = "";
    var left = "";
    var right = "";

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

    $("#btnSubmitEqual").click(function() {
    
        // do the math
        this.right = getLabelString();
        console.log(this.left);
        console.log("this.right "+ this.right);
    })

    function getLabelString() {
        var result = $(".display").val();
        return result;
    }
    $(".operator").click(function(evt) {
        var btn = evt.target;
        var btnString = $(btn).html();
       
        if(btnString == "*") {
            //multiply
            operator = "*";
            left = register;
            console.log("left "+ left);
            clearLabel();
        }
        else if(btnString == "/") {
            //devide
        }
        else if(btnString == "+") {
            //add
        }
        else if(btnString == "-") {
            //subtract
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
         register = newString;
         console.log(register);
    }

    function clearLabel() {
        $(".display").val("");
    }
});


