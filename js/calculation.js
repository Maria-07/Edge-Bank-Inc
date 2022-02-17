//error msg
function errorMessage() {
    const error = document.getElementById('error');
    // Changing content and color of content
    error.textContent = "*** Please enter a valid number. characters or negative numbers are not acceptable ! ***";
    error.style.color = "red";
}

//money Amount
function moneyAmount(idname) {
    const insertAmount = document.getElementById(idname);
    const totalAmount = insertAmount.value;
    const money = parseFloat(totalAmount);
    if (money > 0) {
        return money;
    } else {
        return errorMessage();
    }
}

var incomeMoney;
var leftBalance;

//Calculation Part
document.getElementById('calculate-btn').addEventListener('click', function () {


    //Income Part
    incomeMoney = moneyAmount('income-amount');

    //total expences
    const totalExpences = moneyAmount('food-amount') + moneyAmount('rent-amount') + moneyAmount('clothes-amount');


    if (totalExpences < incomeMoney && totalExpences > 0 && incomeMoney > 0) {
        //expence
        const expencesAmount = document.getElementById('total-expences');
        expencesAmount.innerText = totalExpences;

        //balance
        const balanceAmount = document.getElementById('balance-amount');
        leftBalance = incomeMoney - totalExpences;
        balanceAmount.innerText = leftBalance;
    } else {
        errorMessage();
    }
})

//saving part
document.getElementById('save-btn').addEventListener('click', function () {

    const savingMoneyparcent = moneyAmount('save-amount');

    if (savingMoneyparcent > 0) {
        const savingAmount = incomeMoney * (savingMoneyparcent / 100);

        if (savingAmount > 0 && savingAmount < leftBalance) {
            const saveMoney = document.getElementById('save-money');
            saveMoney.innerText = savingAmount;

            const remainingBalance = document.getElementById('remaining-value');
            remainingBalance.innerText = leftBalance - savingAmount;
        }else{
            errorMessage();
        }
    }
})