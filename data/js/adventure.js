// Info struct for changing level
infoStruct = {
    title : undefined,
    description : undefined,
    background : undefined,
    buttons : {
        button1 : {shown : true, levelName : undefined, text : undefined},
        button2 : {shown : true, levelName : undefined, text : undefined},
        button3 : {shown : true, levelName : undefined, text : undefined},
        button4 : {shown : true, levelName : undefined, text : undefined}
    },
    currentLevelName : undefined
};
invItems = [];

// Get page info
var title = document.getElementById("title");
var description = document.getElementById("description");
var background = document.body.style;

var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");

var button4 = document.createElement("button");
button4.id = "button4";
button4.type = "button";
document.getElementById("game-buttons").appendChild(button4);
button4 = document.getElementById("button4");

document.getElementById("inventoryItem").remove();
var inv = document.createElement("div");
inv.id = "inventoryItems";
document.getElementById("game-container").appendChild(inv);

function changeLevel(info) { // Change level on page
    start = true;
    
    title.innerHTML = info.title;
    description.innerHTML = info.description;
    background.backgroundImage = `url(data/images/${info.currentLevelName}/${info.background})`;



    // Show (or don't show) buttons on screen
    if(info.buttons.button1.shown) {
        button1.style.display = "block";
        button1.removeEventListener("click", function() {loadLevel(info.buttons.button1.levelName)});
        button1.addEventListener("click", function() {loadLevel(info.buttons.button1.levelName)});
    } else {
        button1.style.display = "none";
    }
    if(info.buttons.button2.shown) {
        button2.style.display = "block";
        button2.removeEventListener("click", function() {loadLevel(info.buttons.button2.levelName)});
        button2.addEventListener("click", function() {loadLevel(info.buttons.button2.levelName)});
    } else {
        button2.style.display = "none";
    }
    if(info.buttons.button3.shown) {
        button3.style.display = "block";
        button3.removeEventListener("click", function() {loadLevel(info.buttons.button3.levelName)});
        button3.addEventListener("click", function() {loadLevel(info.buttons.button3.levelName)});
    } else {
        button3.style.display = "none";
    }
    if(info.buttons.button4.shown) {
        button4.style.display = "block";
        button4.removeEventListener("click", function() {loadLevel(info.buttons.button4.levelName)});
        button4.addEventListener("click", function() {loadLevel(info.buttons.button4.levelName)});
    } else {
        button4.style.display = "none";
    }
    
    button1.innerHTML = info.buttons.button1.text;
    button2.innerHTML = info.buttons.button2.text;
    button3.innerHTML = info.buttons.button3.text;
    button4.innerHTML = info.buttons.button4.text;

    console.log(`Deleting: ${info.currentLevelName}`);
    document.getElementById(info.currentLevelName).remove();
}
function loadLevel(levelName) { // Load JS info
    console.log(`Loading : ${levelName}`)
    var doc = document.createElement("script");
    doc.id = levelName;
    doc.src = `data/levels/${levelName}`;
    doc.type = "text/javascript";
    document.body.appendChild(doc);
}

function pickUp(item) {
    invItems.push(item);
    var doc = document.createElement("img");
    doc.className = "inventoryItem";
    doc.id = item;
    doc.src = `data/images/items/${item}`;
    document.getElementById("inventoryItems").appendChild(doc);
}

var time = 300;
var timeDisplay = document.createElement("p");
timeDisplay.id = "timeDisplay";
document.body.appendChild(timeDisplay);

timeDisplay = document.getElementById("timeDisplay");
timeDisplay.innerHTML = 300;

var start = false;
function timer() {
    timeDisplay.innerHTML = time;
    if(start) {
        time--;
    }
}
var timerInterval = setInterval(timer, 1000);

loadLevel("intro.js");