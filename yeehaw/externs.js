
function require() { }
function define(a,b) { }

var UI = {
    parseCommand: function (cmd) { },
    addChatMessage: function (message) { },
    addChatLine: function (player, line, type) { }
};

var Network = {
	sendSay: function(msg) { },
	sendChat: function(msg) { }
}

var SWAM = {
    on: function (type, fun) { },
    registerExtension: function (data) { }
};

class SettingsDiv {
    constructor() { }

    addBoolean(a,b) { }
    addString(a,b) { }
}

class SettingsProvider {
    constructor(a, b) { }

    addSection(name) { return new SettingsDiv() }
}

var Players = {
    getMe: function () { }
}

var GeolocatorSettings = null;
