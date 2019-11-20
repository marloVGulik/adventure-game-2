// Copy basic info struct
info = infoStruct;

// Give info actual info instead of undefined values
info.title = "The room";
info.description = `You walk over to the girl, and wake her up. She shakes a bit when waking up and looks scared.`;
info.background = "";
info.buttons.button1 = {shown : true, levelName : undefined, text : `Ask her if she understands what's going on`};
info.buttons.button2 = {shown : true, levelName : undefined, text : `Try to comfort the girl a bit`};
info.buttons.button3 = {shown : false, levelName : undefined, text : undefined};
info.currentLevelName = "theRoom/room2.js";

// Pass info to screen using function
changeLevel(info);