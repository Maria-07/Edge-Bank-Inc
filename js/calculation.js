//error msg
function errorMessage() {
    const error = document.getElementById('error');
    // Changing content and color of content
    error.textContent = "Please enter a valid number";
    error.style.color = "red";
}

//money Amount
function moneyAmount(idname) {
    const insertAmount = document.getElementById(idname);
    const totalAmount = insertAmount.value;
    const money = parseFloat(totalAmount);
    if(money>0){
       return money; 
    }else{
        return errorMessage();
    }
}


//Calculation Part
document.getElementById('calculate-btn').addEventListener('click', function () {
    //Income Part
    const incomeMoney = moneyAmount('income-amount');

    //total expences
    const totalExpences = moneyAmount('food-amount') + moneyAmount('rent-amount') + moneyAmount('clothes-amount');

    if (totalExpences < incomeMoney && totalExpences > 0 && incomeMoney > 0) {
        //expence
        const expencesAmount = document.getElementById('total-expences');
        expencesAmount.innerText = totalExpences;

        //balance
        const balanceAmount = document.getElementById('balance-amount');
        balanceAmount.innerText = incomeMoney - totalExpences;
    } else if (totalExpences > incomeMoney) {
        errorMessage();
    }


})