// Copy basic info struct
info = infoStruct;

// Give info actual info instead of undefined values
info.title = "The room";
info.description = `You hear the girl make a soft noise, and it sounds like she's scared. What will you do?`;
info.background = "";
info.buttons.button1 = {shown : true, levelName : "theRoom/room2.js", text : "Act like you are waking up too, and walk over to her"};
info.buttons.button2 = {shown : true, levelName : "theRoom/room12.js", text : "Keep acting like you are sleeping"};
info.buttons.button3 = {shown : false, levelName : undefined, text : undefined};
info.currentLevelName = "theRoom/room1.js";

// Pass info to screen using function
changeLevel(info);