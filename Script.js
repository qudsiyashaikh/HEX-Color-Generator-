const generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click",updateColor)

function getRandomColor(){

    const letters = "0123456789ABCDEF";
    let color = "#";

    for(let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
        console.log(color);
    }

    return color;

}

function updateColor(){
const colortext = document.getElementById("colortext");
const colorBox = document.getElementById("colorBox");

const randomColor = getRandomColor();

colorBox.style.backgroundColor = randomColor;
colortext.textContent = randomColor;
}
