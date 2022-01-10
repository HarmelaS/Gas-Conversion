// calculates miles per gallon using imputted numbers

function calcGas() {

    validateInput();
    start = parseFloat(document.getElementById("startMile").value);
    end = parseFloat(document.getElementById("endMile").value);
    gallons = parseFloat(document.getElementById("gal").value);
    var result = ((end - start)/gallons);
    
    result = result.toFixed(2);
    document.getElementById("gasResult").value = result;


    if (isNaN(result)) {
            document.getElementById("gasResult").value = "";
            return;
        }
}

// validates that users entered requrired values

function validateInput() {

    var input1 = document.getElementById("startMile");
    var input2 = document.getElementById("endMile");
    var input3 = document.getElementById("gal");
    var input4 = document.getElementById("gasResult");

    var inputError = [input1,input2,input3];
    var i;
    for (i = 0; i < inputError.length; i++) {
        if (inputError[i].value.length < 1) {
            inputError[i].style.color = "red";
            inputError[i].value="Value Required";
        }

    }
}
