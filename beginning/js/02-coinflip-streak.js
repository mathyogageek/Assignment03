// 02 Coin Flip Streak Game
var again = "y";
//  1 Declearing a variable 'coinFlip'
var coinFlip;

// 2 Create do while loop: At least one time execute 
do {
  // 3 using Math.floor and Math.random()to get 0 or 1 
  coinFlip = Math.floor(Math.random() * 2);

  // 4  if 0 then Heads , if 1 then Tails 
  if (coinFlip === 0) {
    console.log("Heads");
  } else {
    console.log("Tails");
  }

  // prompt repeat until the user enters a vaild entry 
again = prompt("Repeat entries? (y or n)", "y");
} while (coinFlip !== 1 && again === "y");
