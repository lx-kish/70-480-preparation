const colors = ["orange", "black", "purple", "blue", "red", "yellow", "green"];
let curColor = 0;

function changeColor() {
    let circles = document.getElementsByClassName("gg-logo");
    for (let i = 0; i < circles.length; i++) {
        circles[i].setAttribute("fill", colors[curColor]);
    }
    curColor = (curColor + 1) % colors.length;
    
}