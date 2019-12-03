function mainLoadLevel() {
    switch (info.currentLoc.z) {
        case 5:
            switch (info.currentLoc.x) {
                case 0:
                    switch (info.currentLoc.y) {
                        case 0:
                            debug("test", 2);
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