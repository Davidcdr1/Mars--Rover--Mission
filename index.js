let rover = document.getElementById("rover");
let moveLeft = 0;
let moveFront = 0;
let buttonStart = document.getElementById("buttonStart");
let buttonPosition = document.getElementById("buttonPosition");
let movements;
let planetSizeX = 400;
let planetsizeY = 400;
let roverSizeX = 40;
let roverSizeY = 40;
let roverCrashed;

buttonStart.addEventListener("click", () => {
    roverCrashed = false;
    let inputM = document.getElementById("inputM");
    movements = inputM.value.toUpperCase();

    [...movements].forEach((step) => {
        setTimeout(function() {
            if (!roverCrashed) {
                MoveRover(step);
            }
        }, 1000);
    });
    document.getElementById("inputM").value = "";
});

buttonPosition.addEventListener("click", () => {
    let initialX = document.getElementById("inputX").value;
    let initialY = document.getElementById("inputY").value;
    moveLeft = initialX * 10;
    rover.style.marginLeft = moveLeft + "px";
    moveFront = initialY * 10;
    rover.style.marginTop = moveFront + "px";
    rover.style.visibility = "visible";
    document.getElementById("container-input-movement").style.visibility =
        "visible";
});

function MoveRover(commands) {
    switch (commands) {
        case "L":
            MoveLeft();
            break;

        case "R":
            MoveRight();
            break;

        case "F":
            MoveFront();
            break;

        default:
            break;
    }
}

function MoveLeft() {
    if (moveLeft > 0) {
        moveLeft -= 10;
        rover.style.marginLeft = moveLeft + "px";
    } else {
        roverCrashed = true;
        alert(
            "The rover cannot execute these movements because it would leave the planet."
        );
    }
}

function MoveRight() {
    if (moveLeft < planetSizeX - roverSizeX) {
        moveLeft += 10;
        rover.style.marginLeft = moveLeft + "px";
    } else {
        roverCrashed = true;
        alert(
            "The rover cannot execute these movements because it would leave the planet."
        );
    }
}

function MoveFront() {
    if (moveFront < planetsizeY - roverSizeY) {
        moveFront += 10;
        rover.style.marginTop = moveFront + "px";
    } else {
        roverCrashed = true;
        alert(
            "The rover cannot execute these movements because it would leave the planet."
        );

    }
}

document
    .getElementById("astronaut")
    .addEventListener("mouseover", mouseOverAstronaut);
document
    .getElementById("astronaut")
    .addEventListener("mouseout", mouseOutAstronaut);

function mouseOverAstronaut() {
    document.getElementById("astronaut-paragraph").style.visibility = "visible";
}

function mouseOutAstronaut() {
    document.getElementById("astronaut-paragraph").style.visibility = "hidden";
}

document
    .getElementById("spacecraft")
    .addEventListener("mouseover", mouseOverSpacecraft);
document
    .getElementById("spacecraft")
    .addEventListener("mouseout", mouseOutSpacecraft);

function mouseOverSpacecraft() {
    document.getElementById("spacecraft-paragraph").style.visibility = "visible";
}

function mouseOutSpacecraft() {
    document.getElementById("spacecraft-paragraph").style.visibility = "hidden";
}