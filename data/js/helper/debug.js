var debugLevel = 0;

function debug(message, errorLevel) {
    if (debugLevel <= errorLevel) {
        switch (errorLevel) {
            case 0:
                console.log(message);
                break;
            case 1:
                console.warn(message);
                break;
            case 2:
                console.error(message);
                break;
            default:
                console.log(message);
                break;
        }
    }
}