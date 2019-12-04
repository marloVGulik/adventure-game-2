function mainLoadLevel() {
    switch (info.currentLoc.z) { // 9 == start
        case 9:
            switch (info.currentLoc.x) {
                case 0:
                    switch (info.currentLoc.y) {
                        case 0:
                            lvl009();
                            break;
                        case 1:
                            lvl019();
                            break;
                        case 2:
                            lvl029();
                            break;
                        case 3:
                            lvl039();
                            break;
                        case 4:
                            lvl049();
                            break;
                    }
                    break;
                case 1:
                    switch (info.currentLoc.y) {
                        case 0:
                            lvl109();
                            break;
                        case 1:
                            lvl119();
                            break;
                        case 2:
                            lvl129();
                            break;
                        case 3:
                            lvl139();
                            break;
                    }
                    break;
                case 2:
                    switch (info.currentLoc.y) {
                        case 0:
                            lvl209();
                            break;
                        case 1:
                            lvl219();
                            break;
                        case 2:
                            lvl229();
                            break;
                        case 3:
                            lvl239();
                            break;
                    }
                    break;
                case 3:
                    switch (info.currentLoc.y) {
                        case 0:
                            lvl309();
                            break;
                        case 1:
                            lvl319();
                            break;
                        case 2:
                            lvl329();
                            break;
                        case 3:
                            lvl339();
                            break;
                    }
                    break;
            }
            break;
        case 5: // gameplay
            switch (info.currentLoc.x) {
                case 0:
                    switch (info.currentLoc.y) {
                        case 0:
                            lvl005();
                            break;
                        case 1:
                            lvl015();
                            break;
                        case 2:
                            lvl025();
                            break;
                        case 3:
                            lvl035();
                            break;
                    }
                    break;
                case 1:
                    switch (info.currentLoc.y) {
                        case 0:
                            lvl105();
                            break;
                        case 1:
                            lvl115();
                            break;
                        case 2:
                            lvl125();
                            break;
                        case 3:
                            lvl135();
                            break;
                    }
                    break;
                case 2:
                    switch (info.currentLoc.y) {
                        case 0:
                            lvl205();
                            break;
                        case 1:
                            lvl215();
                            break;
                        case 2:
                            lvl225();
                            break;
                        case 3:
                            lvl235();
                            break;
                    }
                    break;
                case 3:
                    switch (info.currentLoc.y) {
                        case 0:
                            lvl305();
                            break;
                        case 1:
                            lvl315();
                            break;
                        case 2:
                            lvl325();
                            break;
                        case 3:
                            lvl335();
                            break;
                    }
                    break;
            }
    }
}
/*
var differentLevels = [
    4, 
]
function entrance() {
    // DOet shit

    counter++;
}*/