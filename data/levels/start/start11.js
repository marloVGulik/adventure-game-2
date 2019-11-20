// Copy basic info struct
info = infoStruct;

// Give info actual info instead of undefined values
info.title = "A bright room?";
info.description = "Suddenly lights turn on. You get blinded and need to wait a few seconds before you can see clear again. The room is completely white and square. Nothing is inside of the room exept you.";
info.background = "background.png";
info.buttons.button1 = {shown : true, levelName : "start/start111.js", text : "Accept the situation"};
info.buttons.button2 = {shown : false, levelName : undefined, text : undefined};
info.buttons.button3 = {shown : false, levelName : undefined, text : undefined};
info.currentLevelName = "start/start111.js";

// Pass info to screen using function
changeLevel(info);