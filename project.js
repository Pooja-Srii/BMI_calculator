function _cmnRemoveAllErrorMessage()
{
    var allErrorBorder = document.getElementsByClassName('error-border');
    var allErrorMessage = document.getElementsByClassName('error-message');
    var i;
   
    for(i = (allErrorBorder.length) - 1; i>=0; i--)
    {
        allErrorBorder[i].classList.remove("error-border");
    }
   
    for(i = (allErrorMessage.length) - 1; i>=0; i--)
    {
        allErrorMessage[i].remove();
    }    
}


function _cmnShowErrorMessageBottomOfTheInputFiled(fieldID,errorMessage)
{
    var inputField = document.getElementById(fieldID);  
    inputField.classList.add("error-border");
    inputField.focus();
    var errorMessageElement = document.createElement("p");
    errorMessageElement.innerHTML = errorMessage;
    errorMessageElement.classList.add("error-message");
    inputField.parentNode.insertBefore(errorMessageElement, inputField.nextSibling);
}
function _cmnHideElement(elementId)
{
    var selectedDisplayValue = document.getElementById(elementId).style.display;
    if(selectedDisplayValue != 'none')
    {
        document.getElementById(elementId).style.display = "none";
    }
}
function _cmnShowElement(elementId, displayName)
{
    var selectedDisplayValue = document.getElementById(elementId).style.display;
    if(selectedDisplayValue != displayName)
    {
        document.getElementById(elementId).style.display = displayName;
    }
}
















