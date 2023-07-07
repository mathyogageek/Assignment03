// 01-Coin Flip Game

// 1 declaring a variable 'coinFlip' 
var coinFlip;

// 2  - Initialize repeat to start the game
var again = "y"; 

while (again === "y") {
  var numberOfFlips = parseInt(prompt("How many times flip the coin ? :"));

  //  3  A random number between 0 and 1 (inclusive) with Math floor and random 
  for (var i = 0; i < numberOfFlips; i++) {
    
    coinFlip = Math.floor(Math.random() * 2);

    // 4 if-else statment to determin Heads or Tails 
    if (coinFlip === 0) {
      console.log("Heads");
    } else {
      console.log("Tails");
    }
  }

  //  5 Repeat the game until the user eners a vaild entry
  again = window.prompt("Repeat entries? (y or n)", "y");
}

