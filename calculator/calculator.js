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
            //console.log("in CE");
            this.register = $(".display").val();
            //console.log("buton CE left "+ left);
            //console.log("button CE right "+ right);
            clearLabel();
        }
    });

    $("#btnSubmitRecip").click(function() {
        console.log("recriprical");
        var str = getLabelString();
        var num = eval(str);
        clearLabel()
        updateLabel(1 / num);
    })

    $("#btnSubmitPercent").click(function() {
        console.log("percent was clicked");
        var str = getLabelString();
        var num = eval(str);
        clearLabel()
        updateLabel(num / 100);

    });

    $("#btnSubmitSqrt").click(function() {
        console.log("sqrt button was pressed");
        var num = getLabelString();
        var result;
        if(num != "") {
            result = Math.sqrt(num);
            clearLabel();
            updateLabel(result);
        }
        
    });
    $("#btnSubmitEqual").click(function() {
        // do the math
        right = getLabelString();
        console.log("right is " +right);
        evalute();
        resetValues();
    })

    $("#btnSubmitUnary").click(function() {
        var number = getLabelString();
        if(number != "") {
            //console.log(number);
            number = eval(number);
            number = number * -1;
            clearLabel();
            updateLabel(number);
        }
        else {
            updateLabel("-");
        }
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
         //console.log(register);
    }
    
    function clearLabel() {
        $(".display").val("");
    }
});


