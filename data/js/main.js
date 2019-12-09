let info = {
    isDungeonScene: false,
    currentLoc: {x: 0, y: 0, z: 9},
    health: 100,
    inventory: [],
}

// Get page info and create new button
var title = document.getElementById("title");
var description = document.getElementById("description");

var background = document.createElement("div");
background.id = "background";
document.body.appendChild(background);
var backgroundImg = document.createElement("img");
backgroundImg.id = "backgroundImg";
background = document.getElementById("background");
background.appendChild(backgroundImg);
backgroundImg = document.getElementById("backgroundImg");

var button4 = document.createElement("button");
button4.id = "button4";
button4.type = "button";
document.getElementById("game-buttons").appendChild(button4);
var button5 = document.createElement("button");
button5.id = "button5";
button5.type = "button";
document.getElementById("game-buttons").appendChild(button5);
var buttons = [
    document.getElementById("button1"),
    document.getElementById("button2"),
    document.getElementById("button3"),
    document.getElementById("button4"),
    document.getElementById("button5")
];

// Create inventory div instead of image
document.getElementById("inventoryItem").remove();
var invItem = document.createElement("div");
invItem.id = "inventoryContainer";
document.getElementById("game-container").appendChild(invItem);
invItem = document.getElementById("inventoryContainer");

// Create map
var map = document.createElement("canvas");
map.id = "map";
document.body.appendChild(map);
map = document.getElementById("map");
context = map.getContext("2d");
mapGrid();
fillSquare({x : 0, y : 0});

// Set level defaults
function setLevelDefaults() {
    buttons[0].innerHTML = "Go north";
    buttons[1].innerHTML = "Go east";
    buttons[2].innerHTML = "Go south";
    buttons[3].innerHTML = "Go west";

    buttons[0].onclick = function () { changeLevelAuto({ x: 0, y: 1}); };
    buttons[1].onclick = function () { changeLevelAuto({ x: 1, y: 0}); };
    buttons[2].onclick = function () { changeLevelAuto({ x: 0, y: -1}); };
    buttons[3].onclick = function () { changeLevelAuto({ x: -1, y: 0}); };
}

function changeLevelAuto(translation) {
    // Set buttons to default
    setLevelDefaults();
    /*var items = document.getElementsByClassName("inventoryItems");
    info.inventory.forEach(function(item) {
        document.getElementById(item.id).remove();
    });*/
    loadItems();

    
    console.log(info.currentLoc);
    info.currentLoc.x += translation.x;
    info.currentLoc.y += translation.y;

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
    buttons[4].style.display = "none";
    console.log(info.currentLoc);
    mainLoadLevel();
    fillSquare(info.currentLoc);
}
function changeLevelVisibleData(titleData, descriptionData, backgroundData, backgroundIsImage) {
    fillSquare(info.currentLoc);
    title.innerHTML = titleData;
    description.innerHTML = descriptionData;
    if (backgroundIsImage) {
        backgroundImg.style.display = "block";
        backgroundImg.src = backgroundData;
    } else {
        backgroundImg.style.display = "none";
        background.backgroundColor = backgroundData;
    }
}

function pickup(item) {
    info.inventory.push({src : `data/images/items/${item}.png`, id : item});
    buttons[4].style.display = "none"; 
    loadItems();
}
function loadItems() {
    var childs = document.getElementById("inventoryContainer").childNodes;
    for(var i = 0; i < childs.length; i++) {
        childs[i].remove();
    }
    if(document.getElementById("inventoryContainer").childNodes.length != 0) {
        var amountToRemove;
        do {
            console.warn("ERROR: not all items were removed");
            amountToRemove = info.inventory.length - document.getElementById("inventoryContainer").childNodes.length;
            console.warn(`Removing ${amountToRemove} items!`);
            for(var i = 0; i < amountToRemove; i++) {
                console.warn("Removing item!");
                if(childs[i] != undefined) {
                    childs[i].remove();
                }
            }
        } while (document.getElementById("inventoryContainer").childNodes.length != 0);
    }
    info.inventory.forEach(function(item){
        var image = document.createElement("img");
        image.className = "inventoryItems";
        image.src = item.src;
        image.id = item.id;
        document.getElementById("inventoryContainer").appendChild(image);
        console.log("Created picture for item")
    });
}

function activatePickup(text, itemToPickUp) {
    var isFound = false;
    info.inventory.forEach(function(item) {
        if(item.id == itemToPickUp) {
            isFound = true;
            buttons[4].style.display = "none";
            console.log("Item was already picked up");
        }
    });
    if(!isFound) {
        buttons[4].style.display = "block";
        buttons[4].innerHTML = text;
        buttons[4].onclick = function(){pickup(itemToPickUp)};
    }
}

changeLevelAuto({ x: 0, y: 0, z: 0 });