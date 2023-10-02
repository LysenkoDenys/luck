//factory and constructor functions:

// // factory functions:
// function createUsers(name, age, sex) {
//   return { name, age, sex };
// }

// const user1 = createUsers("Vitaly", 16, "male");
// const user2 = createUsers("Brad", 20, "male");
// const user3 = createUsers("Jessica", 23, "female");

// console.log(user1); // object
// console.log(user2); // object
// console.log(user3); // object

// // constructor functions:
// function CreateUsers(name, age, sex) {
//   // under the hood const this = {}
//   this.name = name;
//   this.age = age;
//   this.sex = sex;
//   // under the hood return this;
// }

// const user4 = new CreateUsers("Vitaly", 16, "male");
// const user5 = new CreateUsers("Brad", 20, "male");
// const user6 = new CreateUsers("Jessica", 23, "female");

// console.log(user4); // object
// console.log(user5); // object
// console.log(user6); // object

// homework:
// 1. create primitive lottery.
//* 2. create squares with digits.
// 3. user have only 3 tries.
//* 4. if user guess - alert 'you win'.
// 5. if user not guess  - alert 'try one more time (2 times)'.
// 6. if user not guess 3 times - alert 'you lose' and reset all squares.
//* 7. do not allow user click the same button one more time.

function CreateSquares(number, isWin) {
  this.number = number;
  this.isWin = isWin;
}

const square1 = new CreateSquares(1, true);
const square2 = new CreateSquares(2, false);
const square3 = new CreateSquares(3, false);
const square4 = new CreateSquares(4, false);
const square5 = new CreateSquares(5, false);
const square6 = new CreateSquares(6, false);
const square7 = new CreateSquares(7, false);
const square8 = new CreateSquares(8, false);
const square9 = new CreateSquares(9, false);

function renderSquares(objSquare) {
  let numTries = 0;
  const container = document.querySelector(".squares-container");
  const square = document.createElement("div");
  square.classList.add("square");
  square.innerText = objSquare.number;

  const clickHandler = () => {
    numTries++;
    square.classList.add("disabled");
    if (objSquare.isWin) {
      square.classList.add("square-right");
      alert("Hey, congratulations you have WON!!!");
    } else {
      square.classList.add("square-wrong");
      alert(`Hey, you are NOT win yet ${numTries}`);
    }
  };

  square.onclick = () => clickHandler();

  container.appendChild(square);
  return;
}

renderSquares(square1);
renderSquares(square2);
renderSquares(square3);
renderSquares(square4);
renderSquares(square5);
renderSquares(square6);
renderSquares(square7);
renderSquares(square8);
renderSquares(square9);
