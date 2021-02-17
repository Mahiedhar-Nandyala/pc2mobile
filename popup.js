var qr = new QRious({
    element: document.getElementById('PC2MOBILE-qr-code'),
    size: 200,
    value: 'PC2MOBILE: To transfer the text from pc to mobile'
});

chrome.extension.sendMessage({type: "getContent"}, function(text) {
    if(typeof text == "undefined") {
        document.getElementById("PC2MOBILE_title").innerHTML = "copy required text(ctrl+c) to generate QR code";
    } else {
        document.getElementById("PC2MOBILE_title").innerHTML = text;
        var qrsize = 200;
        var len = text.split(' ').length;
        qrsize += len;
        if (qrsize > 700) qrsize = 700;
        if (qrsize < 200) qrsize = 200;
        qr.set({
            foreground: 'black',
            size: qrsize,
            value: text
        });
    }
});
