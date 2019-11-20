// Copy basic info struct
info = infoStruct;

// Give info actual info instead of undefined values
info.title = "The room";
info.description = `You try to comfort the girl a bit, but it doesn't really help since you aren't that comfortable either. You used a lot of time and the voice suddenly started speaking: "You don't have much time left..."`;
info.background = "";
info.buttons.button1 = {shown : true, levelName : undefined, text : `Get stressed`};
info.buttons.button2 = {shown : true, levelName : undefined, text : `Try to keep calm, and search the room`};
info.buttons.button3 = {shown : false, levelName : undefined, text : undefined};
info.currentLevelName = "theRoom/room22.js";

// Pass info to screen using function
changeLevel(info);