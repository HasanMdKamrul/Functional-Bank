// ** deposit and withdraw buttons a click korle kisu similar kaj hoi -> example -> input field theke value grab kore
// ? eitar jonno ekhon ekta function likhbo
// ! er por button a click korle amra just function ta call kore code repitation komay felte parbo and code modular hobe

const inputFieldValue = (inputId)=> {

    // ** grab the input field value passing the id in this function

    const inputValueField = document.getElementById(inputId);
    const inputValueString = inputValueField.value;
    const inputValue = parseFloat(inputValueString);

    // clear the input field value

    inputValueField.value = '';

    // returned the input field value amount in number
    return inputValue;
}

// ** Grab the display values from deposit,withdraw and balance summary

const displayValues = (displayId)=>{

    const displayValueField = document.getElementById(displayId);
    const displayValueString = displayValueField.innerText;
    const displayValue = parseFloat(displayValueString);

    return displayValue;
}

// Set the display value 

function setDisplayValue(displayId, totalDisplayAmount) {

    const displayValueField = document.getElementById(displayId);
    displayValueField.innerText = totalDisplayAmount;

}


