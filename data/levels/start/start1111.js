// Copy basic info struct
info = infoStruct;

// Give info actual info instead of undefined values
info.title = "The end?";
info.description = `The room started filling with some kind of gas, and you fell asleep in a few seconds.`;
info.background = "background.png";
info.buttons.button1 = {shown : true, levelName : "theRoom/room.js", text : "Accept the situation"};
info.buttons.button2 = {shown : false, levelName : undefined, text : undefined};
info.buttons.button3 = {shown : false, levelName : undefined, text : undefined};
info.currentLevelName = "start/start1111.js";

// Pass info to screen using function
changeLevel(info);