// Copy basic info struct
info = infoStruct;

// Give info actual info instead of undefined values
info.title = "Test";
info.description = "Test description";
info.background = "testImage.png";
info.buttons.button1 = {shown : true, levelName : undefined, text : "test text"};
info.buttons.button2 = {shown : true, levelName : undefined, text : "test text"};
info.buttons.button3 = {shown : false, levelName : undefined, text : "test text"};
info.currentLevelName = "start.js";

// Pass info to screen using function
changeLevel(info);