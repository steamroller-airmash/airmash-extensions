(function(){
    let keypress_queue = null;
    let last_update = { playersgame: -1, playerstotal: -1 }

    function formatDate(date) {
        let s = date.getSeconds();
        let ms = date.getMilliseconds();

        return "" + (s * 1000 + ms);
    }

    function packetUpdate(packet) {
        if (packet.c === Network.SERVERPACKET.PLAYER_UPDATE) {
            if (keypress_queue === null) return;
            if (packet.id !== Players.getMe().id) return;
            
            let now = new Date();
            let prev = keypress_queue;
            keypress_queue = null;

            console.log("Dequeuing item from " + formatDate(prev));
            console.log(keypress_queue);

            UI.updateStats({
                ping: now.getTime() - prev.getTime(),
                playerstotal: last_update.playerstotal,
                playersgame: last_update.playersgame
            });
        }
        else if (packet.c === Network.SERVERPACKET.PING_RESULT) {
            console.log(packet)
            last_update = packet;
        }
    }

    function trackKeyPress() {
        let now = new Date();
        console.log("Keypress at " + formatDate(now));
        keypress_queue = now;
    }

    window.SWAM.on("gameRunning", function() {
        let Players_network = Players.network;
        let Network_sendKey = Network.sendKey;
        
        Players.network = function(ty, packet) {
            packetUpdate(packet);
            return Players_network(ty, packet);
        }
        Network.sendKey = function(a, b) {
            trackKeyPress();
            return Network_sendKey(a, b);
        }
    });

    SWAM.registerExtension({
        name: 'Better Ping',
        id: 'steamroller-betterping',
        description: 'Improved ping notifications',
        version: '0.0.1'
    })
})();