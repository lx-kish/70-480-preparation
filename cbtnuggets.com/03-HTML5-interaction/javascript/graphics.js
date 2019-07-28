const colors = ["orange", "black", "purple", "blue", "red", "yellow", "green"];
let curColor = 0;

function changeColor() {
    let circles = document.getElementsByClassName("gg-logo");
    for (let i = 0; i < circles.length; i++) {
        circles[i].setAttribute("fill", colors[curColor]);
    }
    curColor = (curColor + 1) % colors.length;
    
}

function drawCanvas() {

    let c = document.getElementById("gg-canvas");
    var ctx = c.getContext("2d");

    //Add shadow offset
    ctx.shadowColor = "#000";
    ctx.shadowBlur = 4;
    ctx.shadowOffsetX = 10;
    ctx.shadowOffsetY = 10;

    //Draw yellow circles
    ctx.beginPath();
    ctx.fillStyle = "#FFD200";
    ctx.arc(75, 75, 50, 0, 2 * Math.PI, true);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "#FFD200";
    ctx.arc(100, 165, 40, 0, 2 * Math.PI, true);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "#FFD200";
    ctx.arc(125, 23, 20, 0, 2 * Math.PI, true);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "#FFD200";
    ctx.arc(180, 100, 40, 0, 2 * Math.PI, true);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "#FFD200";
    ctx.arc(210, 190, 50, 0, 2 * Math.PI, true);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "#FFD200";
    ctx.arc(225, 58, 20, 0, 2 * Math.PI, true);
    ctx.fill();
}