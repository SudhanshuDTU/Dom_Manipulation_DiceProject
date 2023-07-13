let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImg1 = "images/"+"dice"+randomNumber1+".png";
var randomImg2 = "images/"+"dice"+randomNumber2+".png";

var img1 = document.querySelectorAll("img")[0].setAttribute("src",randomImg1);
var img2 = document.querySelectorAll("img")[1].setAttribute("src",randomImg2);
