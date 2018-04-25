
(function() {
    const channelName = 'public';
    var channel;

    var pusher = new Pusher({
        appId: "498052",
        key: "6b38144aa630465c2188",
        secret: "b14372c41a49f06027fa",
        encrypted: true
    });

    function sendPusherChat(message) {
        pusher.trigger(channelName, 'client-chat', {
            id: Players.getMe().id,
            message: message
        });
    }

    function receivePusherChat(data) {
        let id = data.id;
        
        UI.addChatLine(Players.getById(id), data.message, 5);
    }

    SWAM.on("gameRunning", function () {
        let oldParseCommand = UI.parseCommand;

        channel = pusher.subscribe(channelName);

        channel.bind('client-chat', receivePusherChat);

        UI.parseCommand = function(cmd) {
            if (cmd.toLowerCase().startsWith('/sm ')) {
                let msg = cmd.substr(3).trim();

                sendPusherChat(msg);
                return true;
            }

            return oldParseCommand(cmd);
        };
    });

    var obj = {
        name: "StarMash Chat",
        id: "steamroller-smchat",
        description: "Allows StarMash users to chat when votemuted.",
        version: "0.0.1",
    };

    /* jshint ignore:start */
    obj["author"] = "STEAMROLLER";
    /* jshint ignore:end */

    SWAM.registerExtension(obj);
}());
