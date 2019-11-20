// Copy basic info struct
info = infoStruct;

// Give info actual info instead of undefined values
info.title = "The room";
info.description = `You ask the girl if she knows what's up. She tells you about what the voice said. It's exactly the same as what it said to you.`;
info.background = "";
info.buttons.button1 = {shown : true, levelName : undefined, text : `Tell her the voice said the same to you.`};
info.buttons.button2 = {shown : false, levelName : undefined, text : undefined};
info.buttons.button3 = {shown : false, levelName : undefined, text : undefined};
info.currentLevelName = "theRoom/room21.js";

// Pass info to screen using function
changeLevel(info);