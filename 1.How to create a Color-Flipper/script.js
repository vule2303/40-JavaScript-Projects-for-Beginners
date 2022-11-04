const colors = ["green","red", "rgb(133,122,220)", "#f15025"];
const btn = document.getElementById ("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
  //get random number between 0 - 3

  const randomNumber = getRandommNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];

});

function getRandommNumber(){
  return Math.floor(Math.random() * colors.length);
}