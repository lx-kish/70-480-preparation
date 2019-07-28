const colors = ["orange", "black", "purple", "blue", "red", "yellow", "green"];
let curColor = 0;

function createArticle() {
    let newArticle = document.createElement("article");
    let newHeader = document.createElement("header");
    let newH1 = document.createElement("h1");
    let newP = document.createElement("p");
    let newFooter = document.createElement("footer");

    newH1.appendChild(document.createTextNode("New Article!"));
    newP.appendChild(document.createTextNode("More tips on the way, currently under review."));
    newFooter.appendChild(document.createTextNode("Written by: A giant robot."));

    newHeader.appendChild(newH1);
    newArticle.appendChild(newHeader);
    newArticle.appendChild(newP);
    newArticle.appendChild(newFooter);

    document.getElementById("stories").appendChild(newArticle);
}

function playAudio() {
    let audio = document.getElementById("audio_player");
    if(audio.paused) {
        audio.play();
        document.getElementById("sound").textContent = "pause";//innerText = "pause";
    } else {
        audio.pause();
        document.getElementById("sound").textContent = "play";//innerText = "play";
    }
}

function playVideo() {
    let video = document.getElementById("video_player");
    if(video.paused) {
        video.play();
        document.getElementById("play").innerText = "pause";
    } else {
        video.pause();
        document.getElementById("play").innerText = "play";
    }
}

function changeColor() {
    let circles = document.getElementsByClassName("gg-logo");
    for (let i = 0; i < circles.length; i++) {
        circles[i].setAttribute("fill", colors[curColor]);
    }
    curColor = (curColor + 1) % colors.length;
    
}