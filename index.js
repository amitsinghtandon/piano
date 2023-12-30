let drums = document.querySelectorAll(".buttono");

for (let I = 0; I < drums.length; I++) {

    drums[I].addEventListener("click", handleClick);
}
function handleClick() {
    let drumKeys1 = this.innerHTML;
    makeSound(drumKeys1);
    buttonAnimation(drumKeys1);
}


document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);

});

function makeSound(key) {

    switch (key) {
        case "w":
            let crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            let kickbass = new Audio("./sounds/kickbass.mp3");
            kickbass.play();
            break;
        case "s":
            let snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;

        case "d":
            let tom1 = new Audio("./sounds/tom1.mp3");
            tom1.play();
            break;

        case "j":
            let tom2 = new Audio("./sounds/tom2.mp3");
            tom2.play();
            break;
        case "k":
            let tom3 = new Audio("./sounds/tom3.mp3");
            tom3.play();
            break;
        case "l":
            let tom4 = new Audio("./sounds/tom4.mp3");
            tom4.play();
            break;

 
        default: console.log(drumKeys1)
            break;
    }
    

}



function buttonAnimation(currentkey) {
    let activeButton = document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}


