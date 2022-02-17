//money Amount
function moneyAmount(idname){
    const insertAmount = document.getElementById(idname);
    const totalAmount = insertAmount.value;
    const money=parseFloat(totalAmount);
    // console.log(money);
}


//Calculation Part
document.getElementById('calculate-btn').addEventListener('click', function () {
    //Income Part
    moneyAmount('income-amount');

    //food
    moneyAmount('food-amount');

    //Rent
    moneyAmount('rent-amount');

    //clothes
    moneyAmount('clothes-amount');
})