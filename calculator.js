function onCalculate(){
    const amountValue = Number(amount.value);
    const rateValue = Number(rate.value);
    const yearsValue = Number(years.value);
    const downValue = Number(downPayment.value)

    const apr = rateValue / 1200 // months and integer percent to fraction 
    const term = yearsValue *12 // months 
    let amt = amountValue;
    const down = downValue;
    amt -= down
    
    const payment = amt*(apr * Math.pow((1 + apr), term))/(Math.pow((1 + apr), term) - 1);
    output.innerText = payment;
}
