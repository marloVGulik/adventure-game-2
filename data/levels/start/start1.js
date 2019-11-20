// Copy basic info struct
info = infoStruct;

// Give info actual info instead of undefined values
info.title = "A dark room";
info.description = "You wake up, you can't remember anything about how you got here, you feel disoriented and don't know what's going on.";
info.background = "";
info.buttons.button1 = {shown : true, levelName : "start/start11.js", text : "Accept the situation"};
info.buttons.button2 = {shown : false, levelName : undefined, text : undefined};
info.buttons.button3 = {shown : false, levelName : undefined, text : undefined};
info.currentLevelName = "start/start1.js";

// Pass info to screen using function
changeLevel(info);