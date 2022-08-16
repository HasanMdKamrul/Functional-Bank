// ** 1 add event handeler in the deposit button

document.getElementById('deposit-button').addEventListener('click', ()=>{
    
    // ** grab the input value

    const inputValueField = document.getElementById('deposit');
    const inputValueString = inputValueField.value;
    const inputValue = parseFloat(inputValueString);

    // ** clear the input value field

    inputValueField.value = '';

    // ** Now we'll grab the previous deposit value or display deposit value

    const displayDepositValueField = document.getElementById('deposit-display');
    const displayDepositValueString = displayDepositValueField.innerText;
    const displayDepositValue = parseFloat(displayDepositValueString);

    // ** update the deposit display

    const depositDisplay = displayDepositValue + inputValue;
    displayDepositValueField.innerText = depositDisplay;
})