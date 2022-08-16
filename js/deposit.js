// ** click korbo jekhane event handler add hobe seikhane



document.getElementById('deposit-button').addEventListener('click', ()=> {

    // * we grab the same inputFieldValue from 2 input field one is deposit inputfiled and another is withdraw inputfiled
    // ** Now we'll write a function for that and use that according to our need

    const inputAmount = inputFieldValue('deposit');

    const depositDisplayValue = displayValues('deposit-display');

    
    const displayTotal = inputAmount + depositDisplayValue;

    setDisplayValue('deposit-display', displayTotal);

    const balanceDisplayValue = displayValues('balance-display');

    const balanceTotal = inputAmount + balanceDisplayValue;

    setDisplayValue('balance-display', balanceTotal);
    
})