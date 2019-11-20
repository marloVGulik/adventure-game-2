// Copy basic info struct
info = infoStruct;

// Give info actual info instead of undefined values
info.title = "The room";
info.description = `You wake up in a different room. It looks like a normal room. But something seems off. You notice someone else in the room, she is still asleep`;
info.background = "";
info.buttons.button1 = {shown : true, levelName : "theRoom/room1.js", text : "Act like you are sleeping and wait to get woken up by her"};
info.buttons.button2 = {shown : true, levelName : "theRoom/room2.js", text : "Walk over and try to wake her up"};
info.buttons.button3 = {shown : true, levelName : "theRoom/room3.js", text : "Look around the room some more"};
info.currentLevelName = "theRoom/room.js";

// Pass info to screen using function
changeLevel(info);