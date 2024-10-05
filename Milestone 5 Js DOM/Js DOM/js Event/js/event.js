// option 1(directly set on the HTML elements)
//  <button id="make-blue">Make Blue</button>

//option 2 add on click function on the HTML
//important will use this
// <button id="make-purple">Make Purple</button>

function makeRed() {
  document.body.style.backgroundColor = "red";
}

// option 3
const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = makeBlue;
function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

//option 3.5(use sometime)
const purpleButton = document.getElementById("make-purple");
purpleButton.onclick = function makePurple() {
  document.body.style.backgroundColor = "purple";
};

//option 4

const pinkButton = document.getElementById("make-pink");
pinkButton.addEventListener("click", makePink);

function makePink() {
  document.body.style.backgroundColor = "pink";
}

// option 4 another

const tomatoButton = document.getElementById("make-tomato");
tomatoButton.addEventListener("click", function () {
  document.body.style.backgroundColor = "tomato";
});
//option 4 final(important, will use this)
const blackButton = document
  .getElementById("make-black")
  .addEventListener("click", function () {
    document.body.style.backgroundColor = "black";
  });
