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
//* 1. create primitive lottery.
//* 2. create squares with digits.
//* 3. user have only 3 tries.
//* 4. if user guess - alert 'you win' and clean up the page .
//* 5. if user not guess  - alert 'try one more time (2 times)'.
//* 6. if user not guess 3 times - alert 'you lose' and reset all squares.
//* 7. do not allow user click the same button one more time.

function CreateSquares(number, isWin) {
  this.number = number;
  this.isWin = isWin;
  numTries = 0;
}

let win1, win2, win3, win4, win5, win6, win7, win8, win9;
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

const square1 = new CreateSquares(1, win1);
const square2 = new CreateSquares(2, win2);
const square3 = new CreateSquares(3, win3);
const square4 = new CreateSquares(4, win4);
const square5 = new CreateSquares(5, win5);
const square6 = new CreateSquares(6, win6);
const square7 = new CreateSquares(7, win7);
const square8 = new CreateSquares(8, win8);
const square9 = new CreateSquares(9, win9);

function renderSquares(objSquare) {
  // const h2Message = document.createElement(h2);
  const container = document.querySelector(".squares-container");
  const square = document.createElement("div");
  // const pAuthor = document.createElement("p");
  square.classList.add("square");
  square.innerText = objSquare.number;

  const clickHandler = () => {
    numTries++;
    square.classList.add("disabled");
    if (objSquare.isWin && numTries <= 3) {
      square.classList.add("square-right");
      // alert(
      //   `Hey, congratulations you have WON with ${numTries} attempt(s) from 3!!!`
      // );
      setTimeout(() => {
        document.body.innerHTML = "";
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
      }, 500);
    } else if (numTries < 3) {
      square.classList.add("square-wrong");
      // alert(
      //   `Hey, you are NOT win yet with ${numTries} attempt(s) from 3 - try one more time...`
      // );
    } else if ((numTries = 3)) {
      square.classList.add("square-wrong");
      // alert(`Hey, you are NOT win with ${numTries} attempt(s) from 3 - loser!`);
      setTimeout(() => {
        document.body.innerHTML = "";
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
      }, 500);
    }
  };

  square.onclick = () => clickHandler();

  container.appendChild(square);
  // body.appendChild(pAuthor);

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
