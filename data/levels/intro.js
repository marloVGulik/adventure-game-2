// Copy basic info struct
info = infoStruct;

// Give info actual info instead of undefined values
info.title = "A small bit of information before entering.";
info.description = `You want to enter one of the dungeons, I can say one thing about this place. There is some weird behaviour when entering and leaving rooms, be aware of that. Good luck! It's a grid of 4 by 4, and you start at (0, 0)`;
info.background = "";
info.buttons.button1 = {shown : true, levelName : "dungeon/005.js", text : "Enter the dungeon"};
info.buttons.button2 = {shown : true, levelName : undefined, text : "Don't enter the dungeon"};
info.buttons.button3 = {shown : false, levelName : undefined, text : undefined};
info.buttons.button4 = {shown : false, levelName : undefined, text : undefined};
info.currentLevelName = "intro.js";

// Pass info to screen using function
changeLevel(info);