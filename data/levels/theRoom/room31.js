// Copy basic info struct
info = infoStruct;

// Give info actual info instead of undefined values
info.title = "The room";
info.description = `You walk to the door and try to open it. It's locked. You see a keyhole though, which means it could be opened. You hear the girl wake up, she sounds scared.`;
info.background = "";
info.buttons.button1 = {shown : true, levelName : "theRoom/room21.js", text : "Walk to the girl and ask if she knows what's going on"};
info.buttons.button2 = {shown : false, levelName : undefined, text : undefined};
info.buttons.button3 = {shown : false, levelName : undefined, text : undefined};
info.currentLevelName = "theRoom/room31.js";

// Pass info to screen using function
changeLevel(info);