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
            resetValues();
        }
        else if(btnString == "CE") {
            // clear the register
            this.register = $(".display").val();
            clearLabel();
        }
    })

    $("#btnSubmitEqual").click(function() {
        // do the math
        right = getLabelString();
        evalute();
        resetValues();
    })
   
    function evalute() {
        var num1 = eval(left);
        var num2 = eval(right);
        var result;
        if(operator == "*") {
            result = num1 * num2;
        }
        else if(operator == "/") {
            result = num1 / num2;
        }
        else if(operator == "+") {
            result = num1 + num2;
        }
        else {
            result = num1 - num2;
        }
        $(".display").val(result);
        //clear variables here
    }

    function resetValues() {
        console.log("resetting values");
        register = getLabelString();
        left = register;
        console.log(left);
        right = "";
        
    }
    function getLabelString() {
        var result = $(".display").val();
        return result;
    }
    $(".operator").click(function(evt) {
        var btn = evt.target;
        var btnString = $(btn).html();
       
        if(btnString == "*") {
            //multiply
            console.log("multiplication");
            operator = "*";
            left = register;
            register = "";
            clearLabel();
        }
        else if(btnString == "/") {
            //devide
            console.log("devide");
            operator = "/";
            left = register;
            register = "";
            clearLabel();
        }
        else if(btnString == "+") {
            //add
            console.log("plus");
            operator = "+";
            left = register;
            register = "";
            clearLabel();
        }
        else if(btnString == "-") {
            //subtract
            console.log("subtraction");
            operator = "-";
            left = register;
            register = "";
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
         register = newString;
         console.log(register);
    }

    function clearLabel() {
        $(".display").val("");
    }
});


