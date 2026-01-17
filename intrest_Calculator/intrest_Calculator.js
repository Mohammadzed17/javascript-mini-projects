function calculate(){
    const totalAmount = document.getElementById("ttl-amount");
    const amount = document.getElementById("amount");
    const rate = document.getElementById("rate");
    const years = document.getElementById("years");

    
    let total = Number(totalAmount.value);
    let Amount = Number(amount.value);
    let Rate = Number(rate.value/100);
    let Years = Number(years.value);
 

    if (Amount<0 || isNaN(Amount)){
        Amount = 0;
        amount.value = 0;
        alert(`please Enter valid Amount`);
    }
    if (Rate<0 || isNaN(Rate)){
        Rate = 0;
        rate.value = 0;
        alert(`please Enter valid Rate`);
    }
    if (Years<0 || isNaN(Years)){
        Years = 0;
        years.value = 0;
        alert(`please Enter valid Years `);
    }

    const result = Amount * Math.pow((1 + Rate/1) ,1*Years);

    totalAmount.textContent = result.toLocaleString(undefined,{style:"currency", currency:"INR"});
}
