function mainLoadLevel() {
    /*switch (info.currentLoc.z) { // 9 == start
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
            case 4: // gameplay
            switch (info.currentLoc.x) {
                case 0:
                    switch (info.currentLoc.y) {
                        case 0:
                            lvl004();
                            break;
                        case 1:
                            lvl014();
                            break;
                        case 2:
                            lvl024();
                            break;
                        case 3:
                            lvl034();
                            break;
                    }
                    break;
                case 1:
                    switch (info.currentLoc.y) {
                        case 0:
                            lvl104();
                            break;
                        case 1:
                            lvl114();
                            break;
                        case 2:
                            lvl124();
                            break;
                        case 3:
                            lvl134();
                            break;
                    }
                    break;
                case 2:
                    switch (info.currentLoc.y) {
                        case 0:
                            lvl204();
                            break;
                        case 1:
                            lvl214();
                            break;
                        case 2:
                            lvl224();
                            break;
                        case 3:
                            lvl234();
                            break;
                    }
                    break;
                case 3:
                    switch (info.currentLoc.y) {
                        case 0:
                            lvl304();
                            break;
                        case 1:
                            lvl314();
                            break;
                        case 2:
                            lvl324();
                            break;
                        case 3:
                            lvl334();
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
                case "0":
                    switch(info.currentLoc.y) {
                        case "3":
                            lvl035();
                    }
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
            break;
            case 6: // gameplay
            switch (info.currentLoc.x) {
                case 0:
                    switch (info.currentLoc.y) {
                        case 0:
                            lvl006();
                            break;
                        case 1:
                            lvl016();
                            break;
                        case 2:
                            lvl026();
                            break;
                        case 3:
                            lvl036();
                            break;
                    }
                    break;
                case 1:
                    switch (info.currentLoc.y) {
                        case 0:
                            lvl106();
                            break;
                        case 1:
                            lvl116();
                            break;
                        case 2:
                            lvl126();
                            break;
                        case 3:
                            lvl136();
                            break;
                    }
                    break;
                case 2:
                    switch (info.currentLoc.y) {
                        case 0:
                            lvl206();
                            break;
                        case 1:
                            lvl216();
                            break;
                        case 2:
                            lvl226();
                            break;
                        case 3:
                            lvl236();
                            break;
                    }
                    break;
                case 3:
                    switch (info.currentLoc.y) {
                        case 0:
                            lvl306();
                            break;
                        case 1:
                            lvl316();
                            break;
                        case 2:
                            lvl326();
                            break;
                        case 3:
                            lvl336();
                            break;
                    }
                    break;
            }
    }*/
    if(info.currentLoc.z == 9) {
        if(info.currentLoc.x == 0) {
            if(info.currentLoc.y == 0) lvl009();
            if(info.currentLoc.y == 1) lvl019();
            if(info.currentLoc.y == 2) lvl029();
            if(info.currentLoc.y == 3) lvl039();
            if(info.currentLoc.y == 4) lvl049();
        } else if(info.currentLoc.x == 1) {
            if(info.currentLoc.y == 0) lvl109();
            if(info.currentLoc.y == 1) lvl119();
            if(info.currentLoc.y == 2) lvl129();
            if(info.currentLoc.y == 3) lvl139();
        } else if(info.currentLoc.x == 2) {
            if(info.currentLoc.y == 0) lvl209();
            if(info.currentLoc.y == 1) lvl219();
            if(info.currentLoc.y == 2) lvl229();
            if(info.currentLoc.y == 3) lvl239();
        } else if(info.currentLoc.x == 3) {
            if(info.currentLoc.y == 0) lvl309();
            if(info.currentLoc.y == 1) lvl319();
            if(info.currentLoc.y == 2) lvl329();
            if(info.currentLoc.y == 3) lvl339();
        }
    } else if(info.currentLoc.z == 4) {
        if(info.currentLoc.x == 0) {
            if(info.currentLoc.y == 0) lvl004();
            if(info.currentLoc.y == 1) lvl014();
            if(info.currentLoc.y == 2) lvl024();
            if(info.currentLoc.y == 3) lvl034();
        } else if(info.currentLoc.x == 1) {
            if(info.currentLoc.y == 0) lvl104();
            if(info.currentLoc.y == 1) lvl114();
            if(info.currentLoc.y == 2) lvl124();
            if(info.currentLoc.y == 3) lvl134();
        } else if(info.currentLoc.x == 2) {
            if(info.currentLoc.y == 0) lvl204();
            if(info.currentLoc.y == 1) lvl214();
            if(info.currentLoc.y == 2) lvl224();
            if(info.currentLoc.y == 3) lvl234();
        } else if(info.currentLoc.x == 3) {
            if(info.currentLoc.y == 0) lvl304();
            if(info.currentLoc.y == 1) lvl314();
            if(info.currentLoc.y == 2) lvl324();
            if(info.currentLoc.y == 3) lvl334();
        }
    } else if(info.currentLoc.z == 5) {
        if(info.currentLoc.x == 0) {
            if(info.currentLoc.y == 0) lvl005();
            if(info.currentLoc.y == 1) lvl015();
            if(info.currentLoc.y == 2) lvl025();
            if(info.currentLoc.y == 3) lvl035();
        } else if(info.currentLoc.x == 1) {
            if(info.currentLoc.y == 0) lvl105();
            if(info.currentLoc.y == 1) lvl115();
            if(info.currentLoc.y == 2) lvl125();
            if(info.currentLoc.y == 3) lvl135();
        } else if(info.currentLoc.x == 2) {
            if(info.currentLoc.y == 0) lvl205();
            if(info.currentLoc.y == 1) lvl215();
            if(info.currentLoc.y == 2) lvl225();
            if(info.currentLoc.y == 3) lvl235();
        } else if(info.currentLoc.x == 3) {
            if(info.currentLoc.y == 0) lvl305();
            if(info.currentLoc.y == 1) lvl315();
            if(info.currentLoc.y == 2) lvl325();
            if(info.currentLoc.y == 3) lvl335();
        }
    } else if(info.currentLoc.z == 6) {
        if(info.currentLoc.x == 0) {
            if(info.currentLoc.y == 0) lvl006();
            if(info.currentLoc.y == 1) lvl016();
            if(info.currentLoc.y == 2) lvl026();
            if(info.currentLoc.y == 3) lvl036();
        } else if(info.currentLoc.x == 1) {
            if(info.currentLoc.y == 0) lvl106();
            if(info.currentLoc.y == 1) lvl116();
            if(info.currentLoc.y == 2) lvl126();
            if(info.currentLoc.y == 3) lvl136();
        } else if(info.currentLoc.x == 2) {
            if(info.currentLoc.y == 0) lvl206();
            if(info.currentLoc.y == 1) lvl216();
            if(info.currentLoc.y == 2) lvl226();
            if(info.currentLoc.y == 3) lvl236();
        } else if(info.currentLoc.x == 3) {
            if(info.currentLoc.y == 0) lvl306();
            if(info.currentLoc.y == 1) lvl316();
            if(info.currentLoc.y == 2) lvl326();
            if(info.currentLoc.y == 3) lvl336();
        }
    }
}