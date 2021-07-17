var n1 = Math.floor(Math.random()*6)+1;
var img1 = "dice" + n1 + ".png";
var imgsrc1 = "images/" + img1;
document.querySelectorAll("img")[1].setAttribute("src", imgsrc1);

var n = Math.floor(Math.random()*6)+1;
var img = "dice" + n + ".png";
var imgsrc = "images/" + img;
document.querySelectorAll("img")[0].setAttribute("src", imgsrc);

if (n1 > n){
  document.querySelector("h1").innerHTML = "Player 2 wins!"
}
else if(n1 < n){
    document.querySelector("h1").innerHTML = "Player 1 wins!"
}
else{
    document.querySelector("h1").innerHTML = "Equal"

}