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
    changeLevelVisibleData("The end?", "You walk out the base and call your boss to let him know that you succeeded. He lets a ship come to you and pick you up", "data/images/backgrounds/picture.jpg", true);
    buttons[1].style.display = "none";
    buttons[0].innerHTML = "Go home";
}
function lvl010() {
    changeLevelVisibleData("Your home", "You get home safely", "data/images/backgrounds/end.jpg", true);
    buttons.forEach(function(button){
        button.style.display = "none";
    });
    info.inventory.forEach(function(item) {
        if(item.id == "datapad") {
            setTimeout(function() {
                changeLevelVisibleData("Destruction 100", "You plugged the datapad into your computer and accidentaly release a dangerous virus, when you look outside you see the world turn into chaos. You died, but this time you weren't the only one", "data/images/backgrounds/datapad-end.jpg", true);
            }, 3000);
        }
    })
}
// END //////////////////////////////////////////
// Z : 4 ////////////////////////////////////////

// Z : 4 ////////////////////////////////////////
// Z : 5 ////////////////////////////////////////
// X : 0
function lvl005() {
    changeLevelVisibleData("Elevator door", "You are now at the elevator door, choose your action", "data/images/backgrounds/entrance.jpg", true);   
    info.inventory.forEach(function(item) {
        if(item.id == "keycard") {
            info.currentLoc = {x : 0, y : 0, z : 0};
            buttons[4].style.display = "block";
            buttons[4].innerHTML = "Go out of the base";
            buttons[4].onclick = function() {changeLevelAuto({x : 0, y : 0})};
        }
    })
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
    }, 3000);
}
function lvl035() {
    changeLevelVisibleData("Teleported to a bedroom", "You were teleported to a bedroom, and in that bedroom is cabinet with 'Keycards' written on it. Unfortunatly it is locked though, if one you had something to break it open with.", "data/images/backgrounds/bedroomBed.jpg", true);
    buttons[2].style.display = "none";
    info.inventory.forEach(function(item) {
        if(item.id == "crowbar") {
            activatePickup("Break open the kabinet with the crowbar, and take the keycards", "keycard");
        }
    });
}
// x : 1
function lvl105() {
    changeLevelVisibleData("A nice room", "You went inside a nice room", "data/images/backgrounds/bedroom.jpg", true);
}
function lvl115() {
    changeLevelVisibleData("Hallway", "You are now in a hallway, choose what you will do", "data/images/backgrounds/furnaceHall.jpg", true);
    buttons[1].style.display = "none";
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
    buttons[2].style.display = "none";
}
// x : 2
function lvl205() {
    changeLevelVisibleData("Recreation", "This room appears to be for recreation purposes", "data/images/backgrounds/bedroomMain.jpeg", true);
}
function lvl215() {
    changeLevelVisibleData("Nice hallway", "You are walking in a nice hallway, the door on the north side has 'NO ENTRY' on it.", "data/images/backgrounds/nicehallway.png", true);
    buttons[3].style.display = "none";
    var showNoEntry = false;
    info.inventory.forEach(function(item){
        if(item.id == "keycard") {
            showNoEntry = true;
        }
    });
    buttons[0].onclick = function() {
        if(showNoEntry) {
            changeLevelAuto({x : 0, y : 1});
        } else {
            buttons[0].innerHTML = "The door is locked, you need a level 4 access card for it";
            setTimeout(function() {buttons[0].innerHTML = "Go north"}, 3000);
        }
    }
    info.inventory.forEach(function(item) {
        if(item.id == "key") {
            activatePickup("Open kabinet and take crowbar", "crowbar");
        }
    });
}
function lvl225() {
    changeLevelVisibleData("Hallway", "You are now in a hallway", "data/images/backgrounds/hallway2.jpg", true);
    buttons[1].style.display = "none";
    buttons[2].style.display = "none";
    buttons[3].style.display = "none";
    info.inventory.forEach(function(item) {
        if(item.id == "keycard") {
            buttons[2].style.display = "block";
        }
    });
}
function lvl235() {
    changeLevelVisibleData("Server cooling room", "You're now in the server cooling room", "data/images/backgrounds/server-cooling.jpg", true);
}
// x : 3
function lvl305() {
    changeLevelVisibleData("Bedroom", "You enter a bedroom, you spot a key.", "data/images/backgrounds/bedroomBed.jpg", true);
    activatePickup("Pick up the key", "key");
    buttons[0].style.display = "none";
    buttons[1].style.display = "none";
    buttons[2].style.display = "none";
    buttons[3].style.display = "block";
}
var blurAmount = 0;
function lvl315() {
    changeLevelVisibleData("Nice hallway, big room on your right", "You're now in the big room you see on your right. The northern door seems to be malfunctioning, but you can still try it, to see if it works", "data/images/backgrounds/nicehallway.png", true);
    buttons[2].style.display = "none";
    buttons[0].onclick = function() {
        var randomChance = Math.floor(Math.random() * 3);
        if(randomChance == 0) {
            changeLevelVisibleData("You died", "You died because of a malfunctioning door, which electrocuted you", "#000000", false);
            buttons.forEach(function(button) {
                button.style.display = "none";
            });
        } else if(randomChance == 1) {
            buttons[0].innerHTML = "ERROR: Door malfunctioning";
            setTimeout(function() {buttons[0].innerHTML = "Go north"}, 3000);
        } else {
            var fade = setInterval(() => {
                if(blurAmount / 10 > 100) {
                    changeLevelVisibleData("Your brain stopped working", "Your brain stopped functioning and you died", "#000000", false);
                    document.body.style.filter = `opacity(100%) blur(0px)`;
                    buttons.forEach(function(button){
                        button.style.display = "none";
                    });                    
                    clearInterval(fade);
                }
                document.body.style.filter = `opacity(${100 - blurAmount / 10}%) blur(${blurAmount / 150}px)`;
                //document.body.style.filter = `blur(${blurAmount / 250}px)`;
                blurAmount++;
            }, 50);
        }
    }
}
function lvl325() {
    // SNE
}
function lvl335() {
    changeLevelVisibleData("Hallway", "You're now in a hallway", "data/images/backgrounds/hallway.jpg", true);
    buttons[2].style.display = "none";
}
// Z : 5 ////////////////////////////////////////
// Z : 6 ////////////////////////////////////////
function lvl006() {

}
var pressedKey = null;
function nobuttons() {
    buttons.forEach(function(button) {
        button.style.display = "none";
    });
}
function lvl016() {
    changeLevelVisibleData("The hologram is back", "Suddenly the hologram appears again, and it says: If you win this fight, I'll let you out of here, if you lose, your life will be taken!", "data/images/backgrounds/hallway2.jpg", true);
    var hologram = document.createElement("img");
    hologram.id = "hologram";
    hologram.src = "data/images/characters/hologram.gif";
    document.body.appendChild(hologram);
    hologram = document.getElementById("hologram");
    nobuttons();
    setTimeout(function() {
        changeLevelVisibleData("CONTROLS", "Press left or right arrow to evade. (Left if attack right, right if attack left)", "data/images/backgrounds/hallway2.jpg", true);
        nobuttons();
        setTimeout(function() {
            var attack1 = {time : Math.floor(Math.random() * 10000), attack : Math.floor(Math.random() * 2)};
            var attack2 = {time : Math.floor(Math.random() * 10000), attack : Math.floor(Math.random() * 2)};
            var attack3 = {time : Math.floor(Math.random() * 10000), attack : Math.floor(Math.random() * 2)};
            console.log(`${attack1.attack}, ${attack2.attack}, ${attack3.attack}`);

            document.addEventListener('keydown', function(event) {
                if(event.keyCode == 37) {
                    pressedKey = "left";
                } else if(event.keyCode == 39) {
                    pressedKey = "right";
                } else {
                    pressedKey = null;
                }
            });
            function died() {
                changeLevelVisibleData("You died because you didn't evade the attack", "You died, try better next time", "#000000", false);
                buttons.forEach(function(button) {
                    button.style.display = "none";
                });
                clearTimeout(timeout1);
                clearTimeout(timeout2);
                clearTimeout(timeout3);
            }

            var timeout1 = setTimeout(function() {
                if(attack1.attack == 0) {
                    changeLevelVisibleData("RIGHT", "RIGHT ATTACK, MOVE LEFT!", "data/images/backgrounds/hallway2.jpg", true);
                    nobuttons();
                    setTimeout(function() {
                        if(pressedKey == "left") {
                            changeLevelVisibleData("Attack evaded", "You evaded the attack, prepare for the next one", "data/images/backgrounds/hallway2.jpg", true);
                            nobuttons();
                        } else {
                            died();
                        }
                    }, 700);
                } else {
                    changeLevelVisibleData("LEFT", "LEFT ATTACK, MOVE RIGHT!", "data/images/backgrounds/hallway2.jpg", true);
                    nobuttons();
                    setTimeout(function() {
                        if(pressedKey == "right") {
                            changeLevelVisibleData("Attack evaded", "You evaded the attack, prepare for the next one", "data/images/backgrounds/hallway2.jpg", true);
                            nobuttons();
                        } else {
                            died();
                        }
                    }, 700);
                }
            }, attack1.time);
            var timeout2 = setTimeout(function() {
                if(attack2.attack == 0) {
                    changeLevelVisibleData("RIGHT", "RIGHT ATTACK, MOVE LEFT!", "data/images/backgrounds/hallway2.jpg", true);
                    nobuttons();
                    setTimeout(function() {
                        if(pressedKey == "left") {
                            changeLevelVisibleData("Attack evaded", "You evaded the attack, prepare for the next one", "data/images/backgrounds/hallway2.jpg", true);
                            nobuttons();
                        } else {
                            died();
                        }
                    }, 700);
                } else {
                    changeLevelVisibleData("LEFT", "LEFT ATTACK, MOVE RIGHT!", "data/images/backgrounds/hallway2.jpg", true);
                    nobuttons();
                    setTimeout(function() {
                        if(pressedKey == "right") {
                            changeLevelVisibleData("Attack evaded", "You evaded the attack, prepare for the next one", "data/images/backgrounds/hallway2.jpg", true);
                            nobuttons();
                        } else {
                            died();
                        }
                    }, 500);
                }
            }, attack1.time + attack2.time + 1000);
            var timeout3 = setTimeout(function() {
                if(attack3.attack == 0) {
                    changeLevelVisibleData("RIGHT", "RIGHT ATTACK, MOVE LEFT!", "data/images/backgrounds/hallway2.jpg", true);
                    nobuttons();
                    setTimeout(function() {
                        if(pressedKey == "left") {
                            changeLevelVisibleData("Attack evaded", "You win! The hologram slowly fades as it's power runs out, and it accepted it's defeat and teleports you to the last room", "data/images/backgrounds/hallway2.jpg", true);
                            hologram.remove();
                            nobuttons();
                            win();
                        } else {
                            died();
                        }
                    }, 500);
                } else {
                    changeLevelVisibleData("LEFT", "LEFT ATTACK, MOVE RIGHT!", "data/images/backgrounds/hallway2.jpg", true);
                    nobuttons();
                    setTimeout(function() {
                        if(pressedKey == "right") {
                            changeLevelVisibleData("Attack evaded", "You win! The hologram slowly fades as it's power runs out, and it accepted it's defeat and teleports you to the last room", "data/images/backgrounds/hallway2.jpg", true);
                            hologram.remove();
                            nobuttons();
                            win();
                        } else {
                            died();
                        }
                    }, 500);
                }
            }, attack1.time + attack2.time + attack3.time + 2000);
        });
    }, 3000);
    function win() {
        info.currentLoc.z = 5;
        buttons[0].onclick = function() {
            changeLevelAuto({x : 0, y : 2});
        }
        buttons[0].style.display = "block";
        buttons[0].innerHTML = "Continue";
    }
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
        buttons[1].style.display = "none";
        buttons[3].style.display = "none";
    }
}
function lvl036() {
    changeLevelVisibleData("Hallway", "You are in a hallway.", "data/images/backgrounds/hallway.jpg", true);
    buttons[1].style.display = "none";
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