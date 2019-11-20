// Copy basic info struct
info = infoStruct;

// Give info actual info instead of undefined values
info.title = "You died";
info.description = `The voice says: "You were disobedient and didn't listen to what was said. You will now be eleminated." The room suddenly started filling with some sort of gas, and you suffocated.`;
info.background = "";
info.buttons.button1 = {shown : false, levelName : undefined, text : undefined};
info.buttons.button2 = {shown : false, levelName : undefined, text : undefined};
info.buttons.button3 = {shown : false, levelName : undefined, text : undefined};
info.currentLevelName = "start/start.js";

// Pass info to screen using function
changeLevel(info);