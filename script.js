let play = document.getElementById("taskButton");
function playSound() {
let audio = new Audio("dowaa.wav");
audio.play()
}
play.addEventListener("click", playSound);




let addButton = document.getElementById('taskButton');
const allFields = document.querySelectorAll('selectors');
const textField = document.getElementById('input-field');

function addingTask() {
if (textField.value.trim() === "") {
    alert ("you did not put anything in the input field!");
}

}

addButton.addEventListener('click', addingTask);









