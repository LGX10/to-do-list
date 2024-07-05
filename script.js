let play = document.getElementById("taskButton");
function playSound() {
let audio = new Audio("dowaa.wav");
audio.play()
}
play.addEventListener("click", playSound);


let play2 = document.querySelectorAll("checkbox");
function playSound2() {
let audio = new Audio("Achievement Sound Effect.mp3");
audio.play2()
}
play2.addEventListener("click", playSound2);







