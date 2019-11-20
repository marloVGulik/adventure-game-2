// Copy basic info struct
info = infoStruct;

// Give info actual info instead of undefined values
info.title = "The voice";
info.description = `I said: "No further hints will be given". Disobedience is not tolerated.`;
info.background = "background.png";
info.buttons.button1 = {shown : true, levelName : "start/start1111.js", text : `Say: "that did't help much"`};
info.buttons.button2 = {shown : true, levelName : "start/start11122.js", text : `Say: "No I won't do as you please, let me out now!"`};
info.buttons.button3 = {shown : false, levelName : undefined, text : undefined};
info.currentLevelName = "start/start1112.js";

// Pass info to screen using function
changeLevel(info);