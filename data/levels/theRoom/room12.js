// Copy basic info struct
info = infoStruct;

// Give info actual info instead of undefined values
info.title = "The room";
info.description = `You kept sleeping. Suddenly a speaker makes a loud beep, you hear the girl scream softly and wake up yourself too because of instinct`;
info.background = "";
info.buttons.button1 = {shown : true, levelName : undefined, text : `You walk over to the girl and ask what's going on`};
info.buttons.button2 = {shown : true, levelName : undefined, text : `You walk over to the girl and try to comfort her`};
info.buttons.button3 = {shown : false, levelName : undefined, text : undefined};
info.currentLevelName = "theRoom/room12.js";

// Pass info to screen using function
changeLevel(info);