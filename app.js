//
//
//
var app = {
    version     : '2.0.0',
    targetEvent : '',
    isCordova   : '',
    //
    onDOMContentLoaded : function () {
        alert("onDOMContentLoaded");
        //
        app.targetEvent                           = 'click';
        app.isCordova                             = (typeof window.cordova !== "undefined");
        //
        document.getElementById('appIcon').src    = 'img/bellpepper.png';
        document.getElementById('test').innerHTML = 'app.onDOMContentLoaded';
        document.getElementById('isCordova').innerHTML = app.isCordova;
    },
    //
    onDeviceReady : function () {
        app.targetEvent                           = 'touchend';
        app.isCordova                             = (typeof window.cordova !== "undefined");
        //
        document.getElementById('appIcon').src    = 'img/apple.png';
        document.getElementById('test').innerHTML = 'app.onDeviceReady';
        document.getElementById('isCordova').innerHTML = app.isCordova;
    }
};