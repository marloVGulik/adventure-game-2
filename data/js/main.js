var info = {
    isDungeonScene: false,
    currentLoc: {x: 0, y: 0, z: 5},
    health: 100,
}

// Get page info and create new button
var title = document.getElementById("title");
var description = document.getElementById("description");
var background = document.body.style;

var button4 = document.createElement("button");
button4.id = "button4";
button4.type = "button";
document.getElementById("game-buttons").appendChild(button4);
var buttons = [
    document.getElementById("button1"),
    document.getElementById("button2"),
    document.getElementById("button3"),
    document.getElementById("button4")
];

// Create inventory div instead of image
document.getElementById("inventoryItem").remove();
var inv = document.createElement("div");
inv.id = "inventoryItems";
document.getElementById("game-container").appendChild(inv);

// Set level defaults
buttons[0].innerHTML = "Go north";
buttons[1].innerHTML = "Go east";
buttons[2].innerHTML = "Go south";
buttons[3].innerHTML = "Go west";

buttons[0].onclick = function () { changeLevelAuto({ x: 0, y: 1, z: 0 }) };
buttons[1].onclick = function () { changeLevelAuto({ x: 1, y: 0, z: 0 }) };
buttons[2].onclick = function () { changeLevelAuto({ x: 0, y: -1, z: 0 }) };
buttons[3].onclick = function () { changeLevelAuto({ x: -1, y: 0, z: 0 }) };

function changeLevelAuto(translation) {
    info.currentLoc = { x: info.currentLoc.x + translation.x, y: info.currentLoc.y + translation.y, z: info.currentLoc.z + translation.z };
    debug(info.currentLoc, 1);

    if (3 >= info.currentLoc.y + 1) {
        buttons[0].style.display = "block";
    } else {
        buttons[0].style.display = "none";
    }
    if (3 >= info.currentLoc.x + 1) {
        buttons[1].style.display = "block";
    } else {
        buttons[1].style.display = "none";
    }
    if (0 <= info.currentLoc.y - 1) {
        buttons[2].style.display = "block";
    } else {
        buttons[2].style.display = "none";
    }
    if (0 <= info.currentLoc.x - 1) {
        buttons[3].style.display = "block";
    } else {
        buttons[3].style.display = "none";
    }
    mainLoadLevel();
}
changeLevelAuto({ x: 0, y: 0, z: 0 });