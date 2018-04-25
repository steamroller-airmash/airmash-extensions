
!function () {
    var messages = [];
    var am_enabled = false;
    var startTime = new Date();

    function createSettingsProvider() {
        let sp = new SettingsProvider({ enabled: false }, function (values) {
            am_enabled = values.enabled;

            if (values.enabled === false) {
                messages = []
            }
        });

        let section = sp.addSection("Flight Recorder");

        section.addBoolean(
            "enabled",
            "Whether the flight recorder is recording data.",
            { useToggle: false });

        return sp;
    }

    function displayDownloadLink() {
        var blob = new Blob(messages);
        window.open(URL.createObjectURL(blob))
    }

    SWAM.on("gameLoaded", function () {
        startTime = new Date();
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
                    var buffer = new ArrayBuffer(8);
                    var view = new Int32Array(buffer);

                    view[0] = msg.length;
                    view[1] = timeDiff;

                    messages.push(buffer);
                    messages.push(msg);
                }

                return ws.oldSend(msg);
            }

            return ws;
        };
    });

    SWAM.on("keyup", function (event) {
        // If j
        if (event.keyCode === 74) {
            displayDownloadLink();
        }
    });
    
    SWAM.registerExtension({
        name: "Airmash Flight Recorder",
        id: "FlightRecorder",
        description: "An extension to record what the client sees and allow it to be replayed at a later time.",
        author: "STEAMROLLER",
        version: "0.7",
        settingsProvider: createSettingsProvider()
    });
}();
