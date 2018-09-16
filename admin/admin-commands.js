
(function() {
    function adminCommandHandler(cmdText) {
        var vals = cmdText.split(" ");
        var command = vals[0];
        var data = vals.slice(1).join(" ");

        console.log(cmdText, vals, command, data);

        if (!command || !data)
          return;

        console.log(command, data);

        Network.sendCommand(command, data);
    }

    SWAM.on("gameRunning", function() {
        var UI_parseCommand = UI.parseCommand;

        UI.parseCommand = function(cmd) {
            console.log(cmd);
            if (cmd.startsWith("/admin ")) {
                adminCommandHandler(cmd.substr("/admin ".length));
                return true;
            }

            return UI_parseCommand(cmd);
        }
    });

    SWAM.registerExtension({
        name: "Admin Command Set",
        id: "steamroller-admin-commands",
        description: "Admin/Debugging commands for airmash servers",
        author: "STEAMROLLER",
        version: "0.0.1"
    });
})();
