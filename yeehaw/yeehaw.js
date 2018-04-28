
(function () {
    /* jshint ignore:start */

    var defaults = {};
    // This way google closure compiler won't rename variable names
    defaults["onrecap"] = true;
    defaults["ongrab"] = false;
    defaults["taunt"] = "YEE-HAW!!";
    
    /* jshint ignore:end */

    let settings = {
        onrecap: defaults["onrecap"],
        ongrab: defaults["ongrab"],
        taunt: defaults["taunt"]
    };
    
    function createSettingsProvider() {
        let sp = new SettingsProvider(defaults, function(values) {
            settings = {
                onrecap: values["onrecap"],
                ongrab: values["ongrab"],
                taunt: values["taunt"]
            };
        });

        let section = sp.addSection("YeeHaw");

        section.addBoolean(
            "onrecap",
            "Taunt when recapping"
        );
        section.addBoolean(
            "ongrab",
            "Taunt when grabbing"
        );

        section.addString(
            "taunt",
            "The taunt to use"
        );

        return sp;
    }

    SWAM.on("CTF_FlagEvent", function(e,t,v,p) {
		if (p === Players.getMe().name) {
            if (v === "returned" && settings.onrecap) {
                Network.sendSay(settings.taunt);
            }
            else if (v === "taken" && settings.ongrab) {
                Network.sendSay(settings.taunt);
            }
		}
	});

    var obj = {
        name: "YeeHaw",
        id: "steamroller-yeehaw",
        description: "Yells YEE-HAW!! when you recapture a flag.",
        version: "0.0.4"
    };

    /* jshint ignore:start */
    obj["author"] = "STEAMROLLER";
    obj["settingsProvider"] = createSettingsProvider();
    /* jshint ignore:end */

    SWAM.registerExtension(obj);
}());
