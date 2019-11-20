// Copy basic info struct
info = infoStruct;

// Give info actual info instead of undefined values
info.title = "The voice";
info.description = 'Suddenly a loud beep comes from a hidden speaker. Soon after the voice starts speaking: "Hello, test subject 002, you have been selected. You have 5 minutes to get out of the room. No further hints will be given. Good luck."';
info.background = "background.png";
info.buttons.button1 = {shown : true, levelName : "start/start1111.js", text : "Accept the situation"};
info.buttons.button2 = {shown : true, levelName : "start/start1112.js", text : 'Say: "What am I supposed to do?"'};
info.buttons.button3 = {shown : false, levelName : undefined, text : undefined};
info.currentLevelName = "start/start111.js";

// Pass info to screen using function
changeLevel(info);