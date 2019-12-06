// START ////////////////////////////////////////
function lvl009() {
    changeLevelVisibleData("Where it all started", `Your phone starts ringing. You pick up: "Hello, your boss here. Someone wants to hire you to explore this alien base. We heard you are a perfect fit for this job. We have no clue what's in there, since no-one we sent has returned yet. Do you want to accept this job?"`, "data/images/backgrounds/start.jpg", true);
    buttons[0].innerHTML = "I accept the job";
    buttons[1].innerHTML = "I don't accept the job";
}
function lvl019() {
    changeLevelVisibleData("The base", "Ok then. I'll send you the coordinates and a picture of the base", "data/images/backgrounds/picture.jpg", true);
    buttons[0].style.display = "block";
    buttons[1].style.display = "none";
    buttons[2].style.display = "none";
    buttons[3].style.display = "none";
    buttons[0].innerHTML = "Fly over to there and head inside";
}
function lvl029() {
    changeLevelVisibleData("The hangar", "You entered through the hangar, and it looks very clean, and the lights were still on.", "data/images/backgrounds/hangar.jpg", true);
    buttons[0].style.display = "block";
    buttons[1].style.display = "none";
    buttons[2].style.display = "none";
    buttons[3].style.display = "none";
    buttons[0].innerHTML = "Enter the door on the left";
}
function lvl039() {
    changeLevelVisibleData("Darkness", "You entered the door, and the door closed behind you automatically. You feel yourself moving around.", "#000000", false);
    buttons[0].style.display = "block";
    buttons[1].style.display = "none";
    buttons[2].style.display = "none";
    buttons[3].style.display = "none";
    buttons[0].innerHTML = "Turn on your flashlight";
}
function lvl049() {
    changeLevelVisibleData("The beginning of your end", "Just when you were searching for your flashlight, some lights in the structure turned on. You feel a bit disoriented. You try to open the door, but it's locked. It says you need a level 4 access card", "data/images/backgrounds/entrance.jpg", true);
    buttons[0].style.display = "block";
    buttons[1].style.display = "none";
    buttons[2].style.display = "none";
    buttons[3].style.display = "none";
    buttons[0].innerHTML = "Start the search for the access card";
    buttons[0].onclick = function() {
        info.currentLoc = {x : 0, y : 0, z : 5};
        changeLevelAuto({x : 0, y : 0, z : 0});
    }
}
function lvl109() {
    changeLevelVisibleData("Your decisions matter now", "That's not a smart decision. You lost the game in the main menu... We don't think you're the right person after all.", "data/images/backgrounds/start.jpg", true);
    buttons[0].style.display = "none";
    buttons[1].style.display = "none";
    buttons[2].style.display = "none";
    buttons[3].style.display = "none";
}
// START ////////////////////////////////////////
// END //////////////////////////////////////////
function lvl000() {

}
// END //////////////////////////////////////////
// Z : 5 ////////////////////////////////////////
// X : 0
function lvl005() {
    changeLevelVisibleData("Elevator door", "You are now at the elevator door, choose your action", "data/images/backgrounds/entrance.jpg", true);   
}
function lvl015() {
    changeLevelVisibleData("Cooling center", "You are now in the cooling center, choose what you will do", "data/images/backgrounds/cooling.jpg", true);
    activatePickup("Pick up cooling cell", "icepack");
}
function lvl025() {
    changeLevelVisibleData("The hologram", `You are in the hologram room, the hologram says to you: "Thou shall not ever leave this place, for as long as your life may last."`, "data/images/backgrounds/hologram.jpg", true);
    buttons.forEach(function(button){
        button.style.display = "none";
    });
    setTimeout(function() {
        changeLevelAuto({x : 0, y : 0});
        info.currentLoc.z = 6;
    }, 5000);
}
function lvl035() {

}
// x : 1
function lvl105() {
    changeLevelVisibleData("A nice room", "You went inside a nice room", "data/images/backgrounds/bedroom.jpg", true);
}
function lvl115() {
    changeLevelVisibleData("Hallway", "You are now in a hallway, choose what you will do", "data/images/backgrounds/furnaceHall.jpg", true);
}
function lvl125() {
    changeLevelVisibleData("Furnace room", "You are in the furnace room, it's very hot in here, and you notice that the furnaces are getting too hot, you might want to cool them down.", "data/images/backgrounds/furnace.jpg", true);
    buttons.forEach(function(button){
        button.style.display = "none";
    });
    buttons[2].style.display = "block";
    buttons[2].innerHTML = "Go back";
    buttons[4].style.display = "block";
    buttons[4].innerHTML = "Ignore the heat and inspect further";
    buttons[4].onclick = function(){
        changeLevelVisibleData("Furnace room", "You close the door behind you, and inspect some further. Because of the heat, the metal in the door expanded and you are stuck. The furnace appears to be missing a cooling module.", "data/images/backgrounds/furnace.jpg", true);
        buttons.forEach(function(button){
            button.style.display = "none";
        });
        buttons[4].style.display = "block";
        buttons[4].innerHTML = "Use the cooling pack to get out";
        buttons[4].onclick = function(){
            for(var i = 0; i < info.inventory.length; i++) {
                if(info.inventory[i].id == "icepack") {
                    clearTimeout(furnaceDeath);
                    changeLevelAuto({x : 0, y : -1});
                }
            }
        };
        var furnaceDeath = setTimeout(function() {
            changeLevelVisibleData("Furnace room", "You passed out and died because of the intense heat, and low oxygen levels in the furnace room.");
            buttons.forEach(function(button) {
                button.style.display = "none";
            });
        }, 3000);
    }
}
function lvl135() {
    changeLevelVisibleData("Server room", "You are now in the server room", "data/images/backgrounds/servers.jpg", true);
    activatePickup("Fill datapad with server data", "datapad");
}
// x : 2
function lvl205() {
    changeLevelVisibleData("Recreation", "This room appears to be for recreation purposes", "data/images/backgrounds/bedroomMain.jpeg", true);
}
function lvl215() {
    changeLevelVisibleData("Nice hallway", "You are walking in a nice hallway, the door on the north side has 'NO ENTRY' on it.", "data/images/backgrounds/nicehallway.png", true);
}
function lvl225() {
    // ENDING
}
function lvl235() {

}
// x : 3
function lvl305() {
    changeLevelVisibleData("Bedroom", "You enter a bedroom, you spot a key.", "data/images/backgrounds/bedroomBed.jpg", true);
    activatePickup("Pick up key", "key");
}
function lvl315() {

}
function lvl325() {

}
function lvl335() {

}
// Z : 5 ////////////////////////////////////////
// Z : 6 ////////////////////////////////////////
function lvl006() {

}
function lvl016() {

}
var teleportedByHologram = false;
function lvl026() {
    if(!teleportedByHologram) {
        changeLevelVisibleData("The hologram", `The hologram disappears, and you are left in a dark room, feeling very disoriented. Your head hurts a lot. You see a light in front of you`);
        buttons[0].innerHTML = "Go to the front";
        buttons[1].style.display = "none";
        buttons[2].style.display = "none";
        teleportedByHologram = true;
    } else {
        changeLevelVisibleData("Hallway", "You are in the hallway.", "data/images/backgrounds/hallway2.jpg", true);
    }
}
function lvl036() {
    changeLevelVisibleData("Hallway", "You are in the hallway.", "data/images/backgrounds/hallway.jpg", true);    
}
function lvl106() {

}
function lvl116() {

}
function lvl126() {
    
}
function lvl136() {
    
}
function lvl206() {

}
function lvl216() {

}
function lvl226() {
    
}
function lvl236() {
    
}
function lvl306() {

}
function lvl316() {

}
function lvl326() {
    
}
function lvl336() {
    
}