// Тоглогчийн ээлжийг хадгалах хувсагч
var activePlayer = 0;
//Тоглогчдийн цуглуулсан оноог хадгалах оноо
var scores = [0, 0];
// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;
// Шоо нь аль талаараан буусныг хадгалах хувсагч
var dice = Math.floor(Math.random() * 6) + 1;
// window.document.querySelector("#score-0").textContent = dice;
// console.log("Шоо " + dice);
// document.querySelector("#score-1").innerHTML = "<em>Yess</em>";
// console.log("Шоо " + dice);
// Програм эхэлхэд бэлдэе
document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;
document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;
document.querySelector(".dice").style.display = "none";
