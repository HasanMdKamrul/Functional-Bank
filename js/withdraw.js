
document.getElementById('withdraw-button').addEventListener('click', ()=>{

    const withdrawAmount = inputFieldValue('withdraw');

    const depositDisplayValue = displayValues('withdraw-display');

    
    const displayTotal = withdrawAmount + depositDisplayValue;

    setDisplayValue('withdraw-display', displayTotal);

    const balanceDisplayValue = displayValues('balance-display');

    const balanceTotal = balanceDisplayValue - withdrawAmount;

    setDisplayValue('balance-display', balanceTotal);

    
});