var includeFiles = [
    { name: "data/js/main.js", type: "script" },
    { name: "data/js/helper/debug.js", type: "script" }
];

var fileManager = {
    addFile: function (file) {
        var doc = document.createElement(file.type);
        doc.id = file.name;
        switch (file.type) {
            case "img":
                doc.src = file.name;
                doc.alt = file.name;
                document.getElementById(fileData.saveLocation).appendChild(doc);
                return 0;
                break;
            case "script":
                doc.src = file.name;
                doc.type = "text/javascript";
                document.body.appendChild(doc);
                return 0;
                break;
            default:
                return 1;
        }
        
    },
    removeFile: function (fileID) {
        document.getElementById(fileID).remove();
    }
}

includeFiles.forEach(function (file) {
    fileManager.addFile(file);
})