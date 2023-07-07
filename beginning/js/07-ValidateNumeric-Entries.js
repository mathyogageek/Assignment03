// 07-ValidateNumeric-Entries.js


// Prompt for investment amount and validate
var investment = prompt("Enter investment amount as xxxx.xx");
while (isNaN(parseFloat(investment)) || parseFloat(investment) < 0) {
    investment = prompt("Invalid input! Enter investment amount as xxxx.xx");
}

// Prompt for interest rate and validate
var rate = prompt("Enter interest rate as xx.x");
while (isNaN(parseFloat(rate)) || parseFloat(rate) < 0 || parseFloat(rate) > 100) {
    rate = prompt("Invalid input! Enter interest rate as xx.x");
}

// Prompt for number of years and validate
var years = prompt("Enter number of years");
while (isNaN(parseInt(years)) || parseInt(years) < 1 || parseInt(years) > 30) {
    years = prompt("Invalid input! Enter number of years between 1 and 30 Integers!");
}

var futureValue = investment * Math.pow(1 + rate / 100, years);

// Output the validated values
console.log("Validated Investment Amount:", investment);
console.log("Validated Interest Rate:", rate);
console.log("Validated Number of Years:", years);
console.log("Future Value:", futureValue.toFixed(2));
