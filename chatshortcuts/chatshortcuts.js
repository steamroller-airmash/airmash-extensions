
(function () {
    var shortcuts = {
        "/lennys": "( ͡°( ͡° ͜ʖ( ͡° ͜ʖ ͡°)ʖ ͡°) ͡°)",
        "/lenny": "( ͡° ͜ʖ ͡°)",
        "/shrug": "¯\_(ツ)_/¯",
        "/guns": "̿̿ ̿̿ ̿̿ ̿'̿'\̵͇̿̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿",
        "/bear": "ʕ•ᴥ•ʔ",
        "/sunglasses": "(▀̿Ĺ̯▀̿ ̿)",
        "/fists": "(ง ͠° ͟ل͜ ͡°)ง",
        "/hug": "༼ つ ◕_◕ ༽つ",
        "/tableflip": "(ノಠ益ಠ)ノ彡┻━┻"
    };

    function replaceChat(text) {
        for (var cmd in shortcuts) {
            text = text.split(cmd).join(shortcuts[cmd]);
        }
        return text;
    }

    SWAM.on("gameRunning", function () {
        let oldSendChat = Network.sendChat;
        let oldSendTeam = Network.sendTeam;
        let oldSendSay  = Network.sendSay;
        let oldSendWhisper = Network.sendWhisper;
        let oldParseCommand = UI.parseCommand;

        Network.sendChat = function(message) {
            oldSendChat(replaceChat(message));
        };

        Network.sendTeam = function(message) {
            oldSendTeam(replaceChat(message));
        };

        Network.sendSay = function(message) {
            oldSendSay(replaceChat(message));
        };

        Network.sendWhisper = function(id, message) {
            oldSendWhisper(id, replaceChat(message));
        };

        UI.parseCommand = function(cmd) {
            for (var shrt in shortcuts) {
                if (cmd.trim().toLowerCase().startsWith(shrt)) {
                    Network.sendChat(replaceChat(cmd.trim()));
                    return true;
                }
            }

            return oldParseCommand(cmd);
        };
    });

    var obj = {
        name: "Chat Shortcuts",
        id: "steamroller-chatshortcuts",
        description: "Adds some chat shortcuts.",
        version: "0.0.3",
    };

    /* jshint ignore:start */
    obj["author"] = "STEAMROLLER";
    /* jshint ignore:end */

    SWAM.registerExtension(obj);
}());
