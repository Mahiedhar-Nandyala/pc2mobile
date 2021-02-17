chrome.extension.onMessage.addListener(
    function(message, sender, sendResponse) {
        switch(message.type) {
            case "setContent":
                temp = message.text;
                break;
            case "getContent":
                sendResponse(temp);
                break;
            default:
                console.error("Unrecognised message: ", message);
        }
    }
);