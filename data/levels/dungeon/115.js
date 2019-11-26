// Copy basic info struct
info = infoStruct;

// Give info actual info instead of undefined values
info.title = "";
info.description = ``;
info.background = "";
info.buttons.button1 = {shown : true, levelName : undefined, text : undefined};
info.buttons.button2 = {shown : true, levelName : undefined, text : undefined};
info.buttons.button3 = {shown : true, levelName : undefined, text : undefined};
info.buttons.button4 = {shown : true, levelName : undefined, text : undefined};
info.currentLevelName = "";

// Pass info to screen using function
changeLevel(info);