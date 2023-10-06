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

//============================================================================================
// homework of mine after refactoring influenced by Vitaly (15 lines reduced):
//* 1. create primitive lottery with random win-number.
//* 2. create squares with digits.
//* 3. user have only 3 tries.
//* 4. if user guess - alert 'you win' and clean up the page .
//* 5. if user not guess  - alert 'try one more time (2 times)'.
//* 6. if user not guess 3 times - alert 'you lose' and reset all squares.
//* 7. do not allow user click the same button one more time.

const container = document.querySelector(".squares-container");
let numTries = 0;
let win1, win2, win3, win4, win5, win6, win7, win8, win9;
// win10, win11, win12;
const numRandom = Math.floor(Math.random() * 10);
switch (numRandom) {
  case 1:
    win1 = 1;
    break;
  case 2:
    win2 = 1;
    break;
  case 3:
    win3 = 1;
    break;
  case 4:
    win4 = 1;
    break;
  case 5:
    win5 = 1;
    break;
  case 6:
    win6 = 1;
    break;
  case 7:
    win7 = 1;
    break;
  case 8:
    win8 = 1;
    break;
  case 9:
    win9 = 1;
    break;
  default:
    break;
}

function CreateSquares(number, isWin) {
  this.number = number;
  this.isWin = isWin;
  this.clickHandler = function (item, square) {
    ++numTries;
    h1Element.innerHTML = `Check your luck by ${3 - numTries} tries`;
    h2Element.innerHTML = `possibility of winning: ${Math.floor(
      ((3 - numTries) / (squares.length - numTries)) * 100
    )}%`;
    square.classList.add("disabled");
    if (item.isWin && numTries <= 3) {
      square.classList.add("square-right");

      setTimeout(() => {
        document.body.innerHTML = null;
        const greetings = document.createElement("h1");
        const buttonRestart = document.createElement("button");
        document.body.appendChild(greetings);
        greetings.innerHTML = "congratulations, you`re lucky ass!";

        const img = document.createElement("img");
        img.setAttribute("src", "./img/win.png");
        img.setAttribute("alt", "you win!");
        document.body.appendChild(img);

        buttonRestart.innerHTML = "Restart";
        buttonRestart.setAttribute("onClick", "window.location.reload()");
        document.body.appendChild(buttonRestart);
      }, 200);
    } else if (numTries < 3) {
      square.classList.add("square-wrong");
    } else if ((numTries = 3)) {
      square.classList.add("square-wrong");
      setTimeout(() => {
        document.body.innerHTML = null;
        const greetings = document.createElement("h1");
        const buttonRestart = document.createElement("button");
        document.body.appendChild(greetings);
        greetings.innerHTML = "May be you get luck in other time...";

        const img = document.createElement("img");
        img.setAttribute("src", "./img/lose.png");
        img.setAttribute("alt", "you lose!");
        document.body.appendChild(img);

        buttonRestart.innerHTML = "Restart";
        buttonRestart.setAttribute("onClick", "window.location.reload()");
        document.body.appendChild(buttonRestart);
      }, 200);
    }
  };
}

console.log(numRandom); //
const squares = [
  new CreateSquares(1, win1),
  new CreateSquares(2, win2),
  new CreateSquares(3, win3),
  new CreateSquares(4, win4),
  new CreateSquares(5, win5),
  new CreateSquares(6, win6),
  new CreateSquares(7, win7),
  new CreateSquares(8, win8),
  new CreateSquares(9, win9),
  // new CreateSquares(10, win10),
  // new CreateSquares(11, win11),
  // new CreateSquares(12, win12),
];

// possibility:
const h1Element = document.querySelector("h1");
const h2Element = document.createElement("h2");
h2Element.innerHTML = `possibility of winning: ${Math.floor(
  (3 / squares.length) * 100
)}%`;
h1Element.after(h2Element);

function renderSquares(objSquare) {
  objSquare.forEach((item) => {
    const square = document.createElement("div");
    square.innerText = item.number;
    square.classList.add("square");
    square.addEventListener("click", () => item.clickHandler(item, square));
    container.appendChild(square);
  });
  return;
}

// author:
const pElement = document.createElement("p");
pElement.innerHTML =
  "dev by <a href='https://www.linkedin.com/in/lysenko-denys/' target='_blank' rel='noreferrer'>Denys Lysenko</a>";
container.after(pElement);

renderSquares(squares);

//============================================================================================

// homework by Vitaly:
// function LotteryCard(index, isWinning) {
//   this.index = index;
//   this.isWinning = isWinning;
//   this.handleTry = function (attempt, square, squareContainer) {
//     if (this.isWinning) {
//       alert("Congrats! You have won!");
//       square.classList.add("square-right");
//     } else {
//       if (attempt === 3) {
//         alert("Sorry, it was your last time");
//         square.classList.add("square-wrong");
//         squareContainer.innerHTML = null;
//         return;
//       }
//       alert("Sorry, try one more time");
//       square.classList.add("square-wrong");
//     }
//   };
// }

// const cards = [
//   new LotteryCard(7, true),
//   new LotteryCard(1, false),
//   new LotteryCard(3, false),
//   new LotteryCard(4, false),
//   new LotteryCard(8, false),
//   new LotteryCard(2, false),
//   new LotteryCard(5, false),
//   new LotteryCard(6, false),
//   new LotteryCard(9, false),
// ];

// function renderSquares(squares) {
//   let attempt = 0;
//   squares.forEach((item) => {
//     const squareContainer = document.querySelector(".squares-container");
//     const square = document.createElement("div");
//     const squareIndex = document.createElement("h4");
//     squareIndex.innerHTML = item.index;
//     square.appendChild(squareIndex);
//     square.classList.add("square");
//     square.addEventListener("click", () =>
//       item.handleTry(++attempt, square, squareContainer)
//     );
//     squareContainer.appendChild(square);
//   });
// }

// renderSquares(cards);
//============================================================================================
// homework of mine before refactoring:
// const container = document.querySelector(".squares-container");

// function CreateSquares(number, isWin) {
//   this.number = number;
//   this.isWin = isWin;
//   numTries = 0;
// }

// let win1, win2, win3, win4, win5, win6, win7, win8, win9;
// const numRandom = Math.floor(Math.random() * 10);

// // possibility:
// const h1Element = document.querySelector("h1");
// const h2Element = document.createElement("h2");
// h2Element.innerHTML = `possibility of winning: ${Math.floor((3 / 9) * 100)}%`;
// h1Element.after(h2Element);

// switch (numRandom) {
//   case 1:
//     win1 = 1;
//     break;
//   case 2:
//     win2 = 1;
//     break;
//   case 3:
//     win3 = 1;
//     break;
//   case 4:
//     win4 = 1;
//     break;
//   case 5:
//     win5 = 1;
//     break;
//   case 6:
//     win6 = 1;
//     break;
//   case 7:
//     win7 = 1;
//     break;
//   case 8:
//     win8 = 1;
//     break;
//   case 9:
//     win9 = 1;
//     break;
//   default:
//     break;
// }

// const square1 = new CreateSquares(1, win1);
// const square2 = new CreateSquares(2, win2);
// const square3 = new CreateSquares(3, win3);
// const square4 = new CreateSquares(4, win4);
// const square5 = new CreateSquares(5, win5);
// const square6 = new CreateSquares(6, win6);
// const square7 = new CreateSquares(7, win7);
// const square8 = new CreateSquares(8, win8);
// const square9 = new CreateSquares(9, win9);

// function renderSquares(objSquare) {
//   const square = document.createElement("div");

//   square.classList.add("square");
//   square.innerText = objSquare.number;

//   const clickHandler = () => {
//     h1Element.innerHTML = `Check your luck by ${2 - numTries} tries`;
//     h2Element.innerHTML = `possibility of winning: ${Math.floor(
//       ((2 - numTries) / (8 - numTries)) * 100
//     )}%`;
//     numTries++;
//     square.classList.add("disabled");
//     if (objSquare.isWin && numTries <= 3) {
//       square.classList.add("square-right");
//       // alert(
//       //   `Hey, congratulations you have WON with ${numTries} attempt(s) from 3!!!`
//       // );
//       setTimeout(() => {
//         document.body.innerHTML = "";
//         const greetings = document.createElement("h1");
//         const buttonRestart = document.createElement("button");
//         document.body.appendChild(greetings);
//         greetings.innerHTML = "congratulations, you`re lucky ass!";

//         const img = document.createElement("img");
//         img.setAttribute("src", "./img/win.png");
//         img.setAttribute("alt", "you win!");
//         document.body.appendChild(img);

//         buttonRestart.innerHTML = "Restart";
//         buttonRestart.setAttribute("onClick", "window.location.reload()");
//         document.body.appendChild(buttonRestart);
//       }, 200);
//     } else if (numTries < 3) {
//       square.classList.add("square-wrong");
//       // alert(
//       //   `Hey, you are NOT win yet with ${numTries} attempt(s) from 3 - try one more time...`
//       // );
//     } else if ((numTries = 3)) {
//       square.classList.add("square-wrong");
//       // alert(`Hey, you are NOT win with ${numTries} attempt(s) from 3 - loser!`);
//       setTimeout(() => {
//         document.body.innerHTML = "";
//         const greetings = document.createElement("h1");
//         const buttonRestart = document.createElement("button");
//         document.body.appendChild(greetings);
//         greetings.innerHTML = "May be you get luck in other time...";

//         const img = document.createElement("img");
//         img.setAttribute("src", "./img/lose.png");
//         img.setAttribute("alt", "you lose!");
//         document.body.appendChild(img);

//         buttonRestart.innerHTML = "Restart";
//         buttonRestart.setAttribute("onClick", "window.location.reload()");
//         document.body.appendChild(buttonRestart);
//       }, 200);
//     }
//   };

//   square.onclick = () => clickHandler();

//   container.appendChild(square);

//   return;
// }

// // author:
// const pElement = document.createElement("p");
// pElement.innerHTML =
//   "dev by <a href='https://www.linkedin.com/in/lysenko-denys/' target='_blank' rel='noreferrer'>Denys Lysenko</a>";
// container.after(pElement);

// renderSquares(square1);
// renderSquares(square2);
// renderSquares(square3);
// renderSquares(square4);
// renderSquares(square5);
// renderSquares(square6);
// renderSquares(square7);
// renderSquares(square8);
// renderSquares(square9);
