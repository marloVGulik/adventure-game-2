// Info struct for changing level
infoStruct = {
    title : undefined,
    description : undefined,
    background : undefined,
    buttons : {
        button1 : {shown : true, levelName : undefined, text : undefined},
        button2 : {shown : true, levelName : undefined, text : undefined},
        button3 : {shown : true, levelName : undefined, text : undefined}
    },
    currentLevelName : undefined
};

// Get page info
var title = document.getElementById("title");
var description = document.getElementById("description");
var background = document.body.style;

var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");

var inv = document.getElementById("inventoryItem");
inv.alt = "Inventory is empty";
function changeLevel(info) { // Change level on page
    title.innerHTML = info.title;
    description.innerHTML = info.description;
    background.backgroundImage = `url(data/images/${info.currentLevelName}/${info.background})`;

    // Show (or don't show) buttons on screen
    if(info.buttons.button1.shown) {
        button1.style.display = "block";
        button1.addEventListener("click", function() {loadLevel(info.buttons.button1.levelName)});
    } else {
        button1.style.display = "none";
    }
    if(info.buttons.button2.shown) {
        button2.style.display = "block";
        button2.addEventListener("click", function() {loadLevel(info.buttons.button2.levelName)});
    } else {
        button2.style.display = "none";
    }
    if(info.buttons.button3.shown) {
        button3.style.display = "block";
        button3.addEventListener("click", function() {loadLevel(info.buttons.button3.levelName)});
    } else {
        button3.style.display = "none";
    }
    
    // button1.addEventListener("click", loadLevel(info.buttons.button1.levelName));
    // button2.addEventListener("click", loadLevel(info.buttons.button2.levelName));
    // button3.addEventListener("click", loadLevel(info.buttons.button3.levelName));

    // button1.onclick = `loadLevel(${info.buttons.button1.levelName})`;
    // button2.onclick = `loadLevel(${info.buttons.button2.levelName})`;
    // button3.onclick = `loadLevel(${info.buttons.button3.levelName})`;
    
    button1.innerHTML = info.buttons.button1.text;
    button2.innerHTML = info.buttons.button2.text;
    button3.innerHTML = info.buttons.button3.text;

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
    if(item == "RKey") {
        inv.src = "data/images/RKey.png";
    } else if(item == "Key") {
        inv.src = "data/images/Key.png";
    }
}

loadLevel("start/start1.js");