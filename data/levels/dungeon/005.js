// Copy basic info struct
var info = infoStruct;
var buttonInfo = {
    height : "5",
    button1 : "000.js", shown1 : true,
    button2 : "000.js", shown2 : true,
    button3 : "000.js", shown3 : true,
    button4 : "000.js", shown4 : true
};


// Give info actual info instead of undefined values
info.title = "";
info.description = ``;
info.background = "";
info.currentLevelName = "dungeon/005.js";

if(info.currentLevelName.charAt(9) + 1 > 4) {
    buttonInfo.shown1 = false;
} else {
    buttonInfo.button1 = `dungeon/${info.currentLevelName.charAt(9) + 1}${buttonInfo.height}.js`;
    buttonInfo.shown1 = true;
}
if(info.currentLevelName.charAt(8) + 1 > 4) {
    buttonInfo.shown2 = false;
} else {
    buttonInfo.button2 = `dungeon/${info.currentLevelName.charAt(8) + 1}${buttonInfo.height}.js`;
    buttonInfo.shown2 = true;
}
if(info.currentLevelName.charAt(9) - 1 < 0) {
    buttonInfo.shown3 = false;
} else {
    buttonInfo.button3 = `dungeon/${info.currentLevelName.charAt(9) - 1}${buttonInfo.height}.js`;
    buttonInfo.shown3 = true;
}
if(info.currentLevelName.charAt(8) - 1 < 0) {
    buttonInfo.shown4 = false;
} else {
    buttonInfo.button4 = `dungeon/${info.currentLevelName.charAt(8) - 1}${buttonInfo.height}.js`;   
    buttonInfo.shown4 = true;
}

console.log(buttonInfo);


info.buttons.button1 = {shown : buttonInfo.shown1, levelName : buttonInfo.button1, text : "Go north"};
info.buttons.button2 = {shown : buttonInfo.shown2, levelName : buttonInfo.button2, text : "Go east"};
info.buttons.button3 = {shown : buttonInfo.shown3, levelName : buttonInfo.button3, text : "Go south"};
info.buttons.button4 = {shown : buttonInfo.shown4, levelName : buttonInfo.button4, text : "Go west"};

// Pass info to screen using function
changeLevel(info);