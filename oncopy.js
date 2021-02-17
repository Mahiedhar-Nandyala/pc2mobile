document.onkeydown = function(e){
    if (e.ctrlKey && (e.keyCode == 67)) {
        selObj = document.getSelection();
        var selectedText = selObj.toString().trim();
        if (selectedText != "") {
            console.log(selectedText)
            chrome.extension.sendMessage({type: "setContent", text: selectedText});
        }
    }
}
