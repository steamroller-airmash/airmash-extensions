
function require() { }
function define(a,b) { }

var UI = {
    parseCommand: function (cmd) { },
    addChatMessage: function (message) { },
    addChatLine: function (player, line, type) { }
};

var SWAM = {
    on: function (type, fun) { },
    registerExtension: function (data) { }
};

class SettingsProvider {
    constructor(a, b) { }

    addSection(name) { }
}

var Players = {
    getMe: function () { }
}

var GeolocatorSettings = null;

var Network = {
    sendChat: function(e) {},
    sendTeam: function(e) {},
    sendWhisper: function(e) {},
    sendSay: function(e) {}
};

var Players = {
    getMe: function() { return {}; } 
}
