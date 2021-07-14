var randomnum1=Math.floor(Math.random()*6)+1;
var randomnum2=Math.floor(Math.random()*6)+1;

var cal1="images/dice"+randomnum1+".png";
var cal2="images/dice"+randomnum2+".png";
document.querySelector(".img1").setAttribute("src",cal1);
document.querySelector(".img2").setAttribute("src",cal2);

if(randomnum1>randomnum2)
{
  document.querySelector("h1").innerHTML="🐼1 is Winner!";
}
if(randomnum1<randomnum2)
{
  document.querySelector("h1").innerHTML="🐲2 is Winner!";
}
if(randomnum1==randomnum2)
{
  document.querySelector("h1").innerHTML="Match Draw!";
}
