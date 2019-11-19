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
var inventory = [];

// Get page info
var title = document.getElementById("title");
var description = document.getElementById("description");
var background = document.body.style;

var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");

function changeLevel(info) { // Change level on page
    title.innerHTML = info.title;
    description.innerHTML = info.description;
    background.backgroundImage = `url(data/images/${info.currentLevelName}/${info.background})`;

    // Show (or don't show) buttons on screen
    if(info.buttons.button1.shown) {
        button1.style.display = "initial";
    } else {
        button1.style.display = "none";
    }
    if(info.buttons.button2.shown) {
        button2.style.display = "initial";
    } else {
        button2.style.display = "none";
    }
    if(info.buttons.button3.shown) {
        button3.style.display = "initial";
    } else {
        button3.style.display = "none";
    }

    button1.onclick = info.buttons.button1.levelName;
    button2.onclick = info.buttons.button2.levelName;
    button3.onclick = info.buttons.button3.levelName;
    
    button1.innerHTML = info.buttons.button1.text;
    button2.innerHTML = info.buttons.button2.text;
    button3.innerHTML = info.buttons.button3.text;

    console.log(`Deleting: ${info.currentLevelName}`);
    document.getElementById(info.currentLevelName).remove();
}
function loadLevel(levelName) { // Load JS info
    var doc = document.createElement("script");
    doc.id = levelName;
    doc.src = `data/levels/${levelName}`;
    doc.type = "text/javascript";
    document.body.appendChild(doc);
}

loadLevel("start.js");