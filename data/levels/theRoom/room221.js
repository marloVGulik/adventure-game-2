// Copy basic info struct
info = infoStruct;

// Give info actual info instead of undefined values
info.title = "The room";
info.description = `You start getting stressed, and so does the girl. You start scavenging around the room, as fast as possible. You throw everything`;
info.background = "";
info.buttons.button1 = {shown : true, levelName : undefined, text : `Get stressed`};
info.buttons.button2 = {shown : true, levelName : undefined, text : `Try to keep calm, and search the room`};
info.buttons.button3 = {shown : false, levelName : undefined, text : undefined};
info.currentLevelName = "theRoom/room22.js";

// Pass info to screen using function
changeLevel(info);