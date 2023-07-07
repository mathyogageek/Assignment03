// 06-countdown.js
var repeat = true;
// 1
while (repeat) {
var countDown = parseInt(prompt("Enter a number with starting into the countdown:"));

// 2  Checking wheter or not the user input is valid:
if (!isNaN(countDown) && countDown > 0) {
  // 3 a for-loop countDounw by decrement one :

  for (var i = countDown; i >= 0; i--) {
    console.log(i);
  }

  var again = prompt("Repeat entries? (y or n)", "y");

  while (again !== "y" && again !== "n") {
    console.log("Invalid input. Please enter 'y' or 'n'.");
    again = prompt("Repeat entries? (y or n)", "y");
  }

  if (again === "n") {
    repeat = false;
  }
} else {
  console.log("Invalid input. Please enter a valid number greater than 0.");
}
}