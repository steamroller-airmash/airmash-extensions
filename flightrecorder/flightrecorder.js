﻿
(function () {
    var messages = [];
    var am_enabled = false;
    var startTime = new Date();

    function createSettingsProvider() {
        let sp = new SettingsProvider({ enabled: false }, function (values) {
            am_enabled = values.enabled;

            if (values.enabled === false) {
                messages = [];
            }
        });

        let section = sp.addSection("Flight Recorder");

        section.addBoolean(
            "enabled",
            "Whether the flight recorder is recording data.",
            { useToggle: false });

        return sp;
    }

    var a = document.createElement("a");
    document.body.appendChild(a);

    function displayDownloadLink() {
        var blob = new Blob(messages);
        var url = URL.createObjectURL(blob);
        
        a.href = url;
        a.download = "flightlog";
        a.click();
        URL.revokeObjectURL(url);
    }

    SWAM.on("gameLoaded", function () {
        startTime = new Date();

        var UI_parseCommand = UI.parseCommand;
        UI.parseCommand = function(cmd) {
            if (cmd === "/downloadlog") {
                displayDownloadLink();
                return true;
            }
    
            return UI_parseCommand(cmd);
        };
    });

    SWAM.on("extensionsLoaded", function () {
        const WebSocketOld = WebSocket;
        WebSocket = function (url) {
            var ws = new WebSocketOld(url);

            ws.oldSend = ws.send;
            ws.send = function (msg) {
                if (am_enabled) {
                    var timeDiff = new Date() - startTime;
                    // Store time and packetsize
                    var buffer = new ArrayBuffer(12);
                    var view = new Int32Array(buffer);

                    view[0] = msg.length;
                    view[1] = timeDiff;
                    view[2] = 0;

                    messages.push(buffer);
                    messages.push(msg);
                }

                return ws.oldSend(msg);
            };

            return ws;
        };
    });
    
    SWAM.registerExtension({
        name: "Airmash Flight Recorder",
        id: "FlightRecorder",
        description: "A binary message logger for inbound packets.",
        author: "STEAMROLLER",
        version: "0.8",
        settingsProvider: createSettingsProvider()
    });
}());
