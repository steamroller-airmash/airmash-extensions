
(function () {
    function evalFn(script) {
        try {
            UI.addChatMessage(new String(window.eval(script)));
        }
        catch (err) {
            UI.addChatMessage(err.name + ': ' + err.message);
        }
    }

    SWAM.on("gameRunning", function () {
        const oldParseCommand = UI.parseCommand;

        UI.parseCommand = function (cmd) {
            if (cmd.substr(0, 4).toLowerCase() === '/js ') {
                evalFn(cmd.substr(4));
            }
            else {
                return oldParseCommand(cmd);
            }
            return true;
        };
    });

    var obj = {
        name: "ExecJS",
        id: "steamroller-execjs",
        description: "Run javascript from the chat box.",
        version: "0.0.4",
    };

    /* jshint ignore:start */
    obj["author"] = "STEAMROLLER";
    /* jshint ignore:end */

    SWAM.registerExtension(obj);
}());
