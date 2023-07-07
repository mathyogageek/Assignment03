// 05-marco-polo.js

// 1
for (var i = 1; i <= 100; i++) {
    // 2 multiply 3 or 5 or 15 
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("Marco! Polo!");
    } else if (i % 3 === 0) {
      console.log("Marco!");
    } else if (i % 5 === 0) {
      console.log("Polo!");
    } else {
      console.log(i);
    }
  }
  