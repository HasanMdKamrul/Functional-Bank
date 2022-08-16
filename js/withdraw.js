
// ** add withdraw button event handeler

document.getElementById('withdraw-button').addEventListener('click', ()=>{
    
    const withdrawInputValueField = document.getElementById('withdraw');
    const withdrawInputValueString = withdrawInputValueField.value;
    const withdrawInputValue = parseFloat( withdrawInputValueString);

    // ** clear withdraw input field

    withdrawInputValueField.value = '';

    // ** grab the withdraw display value

    const withdrawDisplayValueField = document.getElementById('withdraw-display');
    const withdrawDisplayValueString = withdrawDisplayValueField.innerText;
    const withdrawDisplayValue = parseFloat(withdrawDisplayValueString);

    //** add withdraw display value add input withdraw value and set the new display value

    const displayValue = withdrawDisplayValue + withdrawInputValue;

    withdrawDisplayValueField.innerText = displayValue;

    // ** deduct the withdraw amount from the balance

    const balanceDisplayValueField = document.getElementById('balance-display');
    const balanceDisplayValueString = balanceDisplayValueField.innerText;
    const balanceDisplayValue = parseFloat(balanceDisplayValueString);

    // ** set the final display value after the withdraw amount

    const finalBalance = balanceDisplayValue - withdrawInputValue;

    // ** set the finalBalance 

    balanceDisplayValueField.innerText = finalBalance;
});