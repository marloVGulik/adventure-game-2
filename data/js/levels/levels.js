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

}
function lvl035() {

}
// x : 1
function lvl105() {

}
function lvl115() {

}
function lvl125() {

}
function lvl135() {

}
// x : 2
function lvl205() {

}
function lvl215() {

}
function lvl225() {

}
function lvl235() {

}
// x : 3
function lvl305() {

}
function lvl315() {

}
function lvl325() {

}
function lvl335() {

}
// Z : 5 ////////////////////////////////////////