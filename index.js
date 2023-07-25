// for (var i=0;i<document.querySelectorAll(".drum").length;i++) 
// {
//     document.querySelectorAll("button")[i].addEventListener("click",checking);
// }

// function checking(){
//     alert("i got clicked");
// }
for(i=0;i<7;i++){
document.querySelectorAll("button")[i].addEventListener("click", rome);
}

function rome(){
    var x = this.innerHTML;
    anime(x);
}

document.querySelectorAll("button")[0].addEventListener("click", tone0);
function tone0() {
    var sound = new Audio('sounds/crash.mp3');
    sound.play();
    // this.style.color="green";
    // console.log(this.innerHTML);
    // alert(this.innerHTML);
}
document.querySelectorAll("button")[1].addEventListener("click", tone1);
function tone1() {
    var sound1 = new Audio('sounds/kick-bass.mp3');
    sound1.play();
}
document.querySelectorAll("button")[2].addEventListener("click", tone2);
function tone2() {
    var sound = new Audio('sounds/snare.mp3');
    sound.play();
}
document.querySelectorAll("button")[3].addEventListener("click", tone3);
function tone3() {
    var sound = new Audio('sounds/tom-1.mp3');
    sound.play();
}
document.querySelectorAll("button")[4].addEventListener("click", tone4);
function tone4() {
    var sound = new Audio('sounds/tom-2.mp3');
    sound.play();
}
document.querySelectorAll("button")[5].addEventListener("click", tone5);
function tone5() {
    var sound = new Audio('sounds/tom-3.mp3');
    sound.play();
}
document.querySelectorAll("button")[6].addEventListener("click", tone6);
function tone6() {
    var sound = new Audio('sounds/tom-4.mp3');
    sound.play();
}

// document.addEventListener("keydown", function () { alert(" the button is pressed"); });

document.addEventListener("keydown", function (Event) { console.log(Event); });

//this will not work 👇
// document.querySelectorAll("button")[6].addEventListener("keydown",tone6); 
document.addEventListener("keydown", kalu);
function kalu(prop) {
    switch (prop.key) {
        case "l":
            var sound1 = new Audio("sounds/kick-bass.mp3");
            sound1.play();
            break;
        case "a":
            var sound = new Audio("sounds/snare.mp3");
            sound.play();
            break;
        case "s":
            var sound = new Audio("sounds/tom-1.mp3");
            sound.play();
            break;
        case "d":
            var sound = new Audio("sounds/tom-2.mp3");
            sound.play();
            break;
        case "j":
            var sound = new Audio("sounds/tom-3.mp3");
            sound.play();
            break;
        case "k":
            var sound = new Audio("sounds/tom-4.mp3");
            sound.play();
            break;
        case "w":
            var sound = new Audio("sounds/crash.mp3");
            sound.play();
            break;

        default: alert("press a right key");
            break;
    }
    anime(prop.key);
}

function anime(currentKey) {
    document.querySelector("." + currentKey).classList.add("pressed"); 
    setTimeout(function()
    {document.querySelector("." + currentKey).classList.remove("pressed");}
    ,100);
}
