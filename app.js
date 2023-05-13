var button = document.getElementById("btn");
var displayColor = document.getElementById("colorCode");


function changeBgColor() {
    var colorName = ["red", "green" , "blue" , "yellow" , "black" , "aqua"];
    var color = colorName[Math.floor(Math.random()*6)]
    document.body.style.backgroundColor = color
    displayColor.innerHTML = color ;
    
}

button.addEventListener("click" , changeBgColor)