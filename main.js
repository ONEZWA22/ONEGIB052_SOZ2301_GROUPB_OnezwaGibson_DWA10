let counter = 0;
const counterDisplay = document.getElementById('counter');

function incrementCounter() {
  counter++;
  counterDisplay.textContent = counter;
}

function decrementCounter() {
  if (counter > 0) {
    counter--;
    counterDisplay.textContent = counter;
  }
}

function resetCounter() {
  counter = 0;
  counterDisplay.textContent = counter;
  displayConfirmationMessage("Counter has been reset!");
}

function displayConfirmationMessage(message) {
  alert(message);
}
