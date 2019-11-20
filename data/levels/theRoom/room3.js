// Copy basic info struct
info = infoStruct;

// Give info actual info instead of undefined values
info.title = "The room";
info.description = `You are looking around. You don't know what's off, but you feel that something is wrong. You now see that there are no windows, and only one door in the room.`;
info.background = "";
info.buttons.button1 = {shown : false, levelName : undefined, text : "Walk to the door and try to open it"};
info.buttons.button2 = {shown : false, levelName : undefined, text : undefined};
info.buttons.button3 = {shown : false, levelName : undefined, text : undefined};
info.currentLevelName = "theRoom/room3.js";

// Pass info to screen using function
changeLevel(info);