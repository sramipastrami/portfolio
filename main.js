const text = ["San Francisco."];
let count = 0; //counts every texts if more than one in arr
let index = 0; //keeps track of arr
let currentText = "";
let letter = "";

//(IIFE) self-invoked function
(function type() {
  if (count === text.length) {
    count = 0; //resets the count to restart arr elements
  }

  currentText = text[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0; //restarts index
  }

  setTimeout(type, 400);
})();
