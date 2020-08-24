// Тоглогчийн ээлжийг хадгалах хувсагч
var activePlayer = 0;
//Тоглогчдийн цуглуулсан оноог хадгалах оноо
var scores = [0, 0];
// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;
// Шоо нь аль талаараан буусныг хадгалах хувсагч

// window.document.querySelector("#score-0").textContent = dice;
// console.log("Шоо " + dice);
// document.querySelector("#score-1").innerHTML = "<em>Yess</em>";
// console.log("Шоо " + dice);
// Програм эхэлхэд бэлдэе
document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";
});
