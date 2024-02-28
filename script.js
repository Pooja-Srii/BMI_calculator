_cmnHideElement("OutputResult");
document.getElementById("heightUnit").value = "Centimeter";
document.getElementById("weightUnit").value = "Kg";
function BmiCalculatorFormValidate()
{
    _cmnRemoveAllErrorMessage();


    var bmiHeight = document.getElementById("bmiHeight").value;
    var bmiWeight = document.getElementById("bmiWeight").value;
    if(bmiHeight == "" || isNaN(bmiHeight) || (!isNaN(bmiHeight) && bmiHeight <= 0))
    {
        _cmnShowErrorMessageBottomOfTheInputFiled("bmiHeight", "Enter valid height.");
        return false;
    }
   
    if(bmiWeight == "" || isNaN(bmiWeight) || (!isNaN(bmiWeight) && bmiWeight <= 0))
    {
        _cmnShowErrorMessageBottomOfTheInputFiled("bmiWeight", "Enter valid weight.");
        return false;
    }  
    return true;
}
function BmiCalculatorReset()
{
    document.getElementById("bmiHeight").value = "";
    document.getElementById("bmiWeight").value = "";
    document.getElementById("heightUnit").value = "Centimeter";
    document.getElementById("weightUnit").value = "Kg";
   
    _cmnRemoveAllErrorMessage();
    var weightStatusElement = document.getElementById("weightStatus");
    if (weightStatusElement) {
        weightStatusElement.parentNode.removeChild(weightStatusElement);
    }
    _cmnHideElement("OutputResult");
    _cmnShowElement("OutputInfo", "flex");
   
}
function BmiCalculation()
{
    if(BmiCalculatorFormValidate())
    {
        var result;
        var Height = Number(document.getElementById("bmiHeight").value)
        var Weight = Number(document.getElementById("bmiWeight").value)
        var heightUnit = document.getElementById("heightUnit").value;
        var weightUnit = document.getElementById("weightUnit").value;
            if (heightUnit === "Feet") {
                Height = (Height * 12) * 0.0254;
            } else if (heightUnit === "Inch") {
                Height = Height * 0.0254;
            } else if (heightUnit === "Centimeter") {
                Height = Height / 100;
            }
       
            if (weightUnit === "Pound") {
                Weight = Weight / 2.20462;
            }
        result = Weight / (Height * Height);
        var bmiResultElement = document.getElementById("bmiResult");


        bmiResultElement.innerHTML = result.toFixed(2);
        _cmnHideElement("OutputInfo");
        var outputResultElement = document.getElementById("OutputResult");
        _cmnShowElement("OutputResult", "flex");
        var weightStatusMessage = getWeightStatusMessage(result);
        displayWeightStatus(weightStatusMessage);
        document.getElementById("weightStatus").innerHTML = "Weight Status: " + weightStatusMessage;
    }
}
function getWeightStatusMessage(bmiResult) {
    if (bmiResult < 18.5) {
        return "Underweight";
    } else if (bmiResult >= 18.5 && bmiResult < 25) {
        return "Normal weight";
    } else if (bmiResult >= 25 && bmiResult < 30) {
        return "Overweight";
    } else {
        return "Obesity";
    }
}
function displayWeightStatus(statusMessage) {
    var outputResultElement = document.getElementById("OutputResult");
    var weightStatusElement = document.createElement("p");
    weightStatusElement.id = "weightStatus";
    outputResultElement.appendChild(weightStatusElement);
}
