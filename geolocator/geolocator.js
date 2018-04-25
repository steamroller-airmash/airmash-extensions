(function () {
    const findCountry = require('which-country');
    const isoCountries = {
        "AFG": "Afghanistan",
        "ALA": "Aland Islands",
        "ALB": "Albania",
        "DZA": "Algeria",
        "ASM": "American Samoa",
        "AND": "Andorra",
        "AGO": "Angola",
        "AIA": "Anguilla",
        "ATA": "Antarctica",
        "ATG": "Antigua And Barbuda",
        "ARG": "Argentina",
        "ARM": "Armenia",
        "ABW": "Aruba",
        "AUS": "Australia",
        "AUT": "Austria",
        "AZE": "Azerbaijan",
        "BHS": "Bahamas",
        "BHR": "Bahrain",
        "BGD": "Bangladesh",
        "BRB": "Barbados",
        "BLR": "Belarus",
        "BEL": "Belgium",
        "BLZ": "Belize",
        "BEN": "Benin",
        "BMU": "Bermuda",
        "BTN": "Bhutan",
        "BOL": "Bolivia",
        "BIH": "Bosnia And Herzegovina",
        "BWA": "Botswana",
        "BVT": "Bouvet Island",
        "BRA": "Brazil",
        "IOT": "British Indian Ocean Territory",
        "BRN": "Brunei Darussalam",
        "BGR": "Bulgaria",
        "BFA": "Burkina Faso",
        "BDI": "Burundi",
        "KHM": "Cambodia",
        "CMR": "Cameroon",
        "CAN": "Canada",
        "CPV": "Cape Verde",
        "CYM": "Cayman Islands",
        "CAF": "Central African Republic",
        "TCD": "Chad",
        "CHL": "Chile",
        "CHN": "China",
        "CXR": "Christmas Island",
        "CCK": "Cocos (Keeling) Islands",
        "COL": "Colombia",
        "COM": "Comoros",
        "COG": "Congo",
        "COD": "Congo, Democratic Republic",
        "COK": "Cook Islands",
        "CRI": "Costa Rica",
        "CIV": "Cote D'Ivoire",
        "HRV": "Croatia",
        "CUB": "Cuba",
        "CYP": "Cyprus",
        "CZE": "Czech Republic",
        "DNK": "Denmark",
        "DJI": "Djibouti",
        "DMA": "Dominica",
        "DOM": "Dominican Republic",
        "ECU": "Ecuador",
        "EGY": "Egypt",
        "SLV": "El Salvador",
        "GNQ": "Equatorial Guinea",
        "ERI": "Eritrea",
        "EST": "Estonia",
        "ETH": "Ethiopia",
        "FLK": "Falkland Islands (Malvinas)",
        "FRO": "Faroe Islands",
        "FJI": "Fiji",
        "FIN": "Finland",
        "FRA": "France",
        "GUF": "French Guiana",
        "PYF": "French Polynesia",
        "ATF": "French Southern Territories",
        "GAB": "Gabon",
        "GMB": "Gambia",
        "GEO": "Georgia",
        "DEU": "Germany",
        "GHA": "Ghana",
        "GIB": "Gibraltar",
        "GRC": "Greece",
        "GRL": "Greenland",
        "GRD": "Grenada",
        "GLP": "Guadeloupe",
        "GUM": "Guam",
        "GTM": "Guatemala",
        "GGY": "Guernsey",
        "GIN": "Guinea",
        "GNB": "Guinea-Bissau",
        "GUY": "Guyana",
        "HTI": "Haiti",
        "HMD": "Heard Island & Mcdonald Islands",
        "VAT": "Holy See (Vatican City State)",
        "HND": "Honduras",
        "HKG": "Hong Kong",
        "HUN": "Hungary",
        "ISL": "Iceland",
        "IND": "India",
        "IDN": "Indonesia",
        "IRN": "Iran, Islamic Republic Of",
        "IRQ": "Iraq",
        "IRL": "Ireland",
        "IMN": "Isle Of Man",
        "ISR": "Israel",
        "ITA": "Italy",
        "JAM": "Jamaica",
        "JPN": "Japan",
        "JEY": "Jersey",
        "JOR": "Jordan",
        "KAZ": "Kazakhstan",
        "KEN": "Kenya",
        "KIR": "Kiribati",
        "KOR": "Korea",
        "KWT": "Kuwait",
        "KGZ": "Kyrgyzstan",
        "LAO": "Lao People's Democratic Republic",
        "LVA": "Latvia",
        "LBN": "Lebanon",
        "LSO": "Lesotho",
        "LBR": "Liberia",
        "LBY": "Libyan Arab Jamahiriya",
        "LIE": "Liechtenstein",
        "LTU": "Lithuania",
        "LUX": "Luxembourg",
        "MAC": "Macao",
        "MKD": "Macedonia",
        "MDG": "Madagascar",
        "MWI": "Malawi",
        "MYS": "Malaysia",
        "MDV": "Maldives",
        "MLI": "Mali",
        "MLT": "Malta",
        "MHL": "Marshall Islands",
        "MTQ": "Martinique",
        "MRT": "Mauritania",
        "MUS": "Mauritius",
        "MYT": "Mayotte",
        "MEX": "Mexico",
        "FSM": "Micronesia, Federated States Of",
        "MDA": "Moldova",
        "MCO": "Monaco",
        "MNG": "Mongolia",
        "MNE": "Montenegro",
        "MSR": "Montserrat",
        "MAR": "Morocco",
        "MOZ": "Mozambique",
        "MMR": "Myanmar",
        "NAM": "Namibia",
        "NRU": "Nauru",
        "NPL": "Nepal",
        "NLD": "Netherlands",
        "undefined": "Netherlands Antilles",
        "NCL": "New Caledonia",
        "NZL": "New Zealand",
        "NIC": "Nicaragua",
        "NER": "Niger",
        "NGA": "Nigeria",
        "NIU": "Niue",
        "NFK": "Norfolk Island",
        "MNP": "Northern Mariana Islands",
        "NOR": "Norway",
        "OMN": "Oman",
        "PAK": "Pakistan",
        "PLW": "Palau",
        "PSE": "Palestinian Territory, Occupied",
        "PAN": "Panama",
        "PNG": "Papua New Guinea",
        "PRY": "Paraguay",
        "PER": "Peru",
        "PHL": "Philippines",
        "PCN": "Pitcairn",
        "POL": "Poland",
        "PRT": "Portugal",
        "PRI": "Puerto Rico",
        "QAT": "Qatar",
        "REU": "Reunion",
        "ROU": "Romania",
        "RUS": "Russia",
        "RWA": "Rwanda",
        "BLM": "Saint Barthelemy",
        "SHN": "Saint Helena",
        "KNA": "Saint Kitts And Nevis",
        "LCA": "Saint Lucia",
        "MAF": "Saint Martin",
        "SPM": "Saint Pierre And Miquelon",
        "VCT": "Saint Vincent And Grenadines",
        "WSM": "Samoa",
        "SMR": "San Marino",
        "STP": "Sao Tome And Principe",
        "SAU": "Saudi Arabia",
        "SEN": "Senegal",
        "SRB": "Serbia",
        "SYC": "Seychelles",
        "SLE": "Sierra Leone",
        "SGP": "Singapore",
        "SVK": "Slovakia",
        "SVN": "Slovenia",
        "SLB": "Solomon Islands",
        "SOM": "Somalia",
        "ZAF": "South Africa",
        "SGS": "South Georgia And Sandwich Isl.",
        "ESP": "Spain",
        "LKA": "Sri Lanka",
        "SDN": "Sudan",
        "SUR": "Suriname",
        "SJM": "Svalbard And Jan Mayen",
        "SWZ": "Swaziland",
        "SWE": "Sweden",
        "CHE": "Switzerland",
        "SYR": "Syrian Arab Republic",
        "TWN": "Taiwan",
        "TJK": "Tajikistan",
        "TZA": "Tanzania",
        "THA": "Thailand",
        "TLS": "Timor-Leste",
        "TGO": "Togo",
        "TKL": "Tokelau",
        "TON": "Tonga",
        "TTO": "Trinidad And Tobago",
        "TUN": "Tunisia",
        "TUR": "Turkey",
        "TKM": "Turkmenistan",
        "TCA": "Turks And Caicos Islands",
        "TUV": "Tuvalu",
        "UGA": "Uganda",
        "UKR": "Ukraine",
        "ARE": "United Arab Emirates",
        "GBR": "United Kingdom",
        "USA": "United States",
        "UMI": "United States Outlying Islands",
        "URY": "Uruguay",
        "UZB": "Uzbekistan",
        "VUT": "Vanuatu",
        "VEN": "Venezuela",
        "VNM": "Viet Nam",
        "VGB": "Virgin Islands, British",
        "VIR": "Virgin Islands, U.S.",
        "WLF": "Wallis And Futuna",
        "ESH": "Western Sahara",
        "YEM": "Yemen",
        "ZMB": "Zambia",
        "ZWE": "Zimbabwe",
        "RKS": "Republic of Kosovo",
        "SSD": "South Sudan"
    };
    const command = "/whereami";

    GeolocatorSettings = {
        enabled: true,
        boundkey: 74
    };

    function createSettingsProvider() {
        let sp = new SettingsProvider(window.GeolocatorSettings, function (values) {
            GeolocatorSettings.am_enabled = values.enabled;

            let keycode = parseInt(values.boundkey, 10);
            if (isNaN(keycode)) {
                keycode = 74;
                GeolocatorSettings.am_enabled = false;
            }
            else {
                keycode = Math.floor(keycode);
            }

            GeolocatorSettings.boundkey = keycode;
        });

        let section = sp.addSection("Geolocator");

        section.addBoolean(
            "enabled",
            "Whether the configured key will show you the country you're in.",
            { useToggle: false });

        section.addString(
            "boundkey",
            "The shortcut key for /whereami");

        return sp;
    }

    function getCountryName(countryCode) {
        if (isoCountries.hasOwnProperty(countryCode)) {
            return isoCountries[countryCode];
        } else {
            return countryCode;
        }
    }

    function getLatLon(x, y) {
        return {
            lat: -(180 / Math.PI) * 1.25 * Math.atan(Math.sinh((y - 2300) * 0.8 * (Math.PI * 0.5 / 8192))),
            lon: x * (180 / 16384),
        };
    }

    function getLatLonStr(x, y) {
        let coords = getLatLon(x, y);

        return getCountryName(findCountry([coords.lon, coords.lat]));
    }
    function getLocation(x, y) {
        if (x == 0 && y == 0) {
            UI.addChatMessage("You are in Outer Space", true);
            return;
        }

        let name = getLatLonStr(x, y);
        var message = '';
        if (!!name) {
            message = 'You are in ' + name;
        }
        else {
            message = 'No country found for your current location';
        }

        UI.addChatMessage(message, true);
    }

    SWAM.on("keyup", function (event) {
        // If j
        if (GeolocatorSettings.am_enabled &&
            event.keyCode === GeolocatorSettings.boundkey)
        {
            let pos = Players.getMe().pos;
            getLocation(pos.x, pos.y);
        }
    });
    SWAM.on("gameRunning", function () {
        const oldParseCommand = UI.parseCommand;
        UI.parseCommand = function (cmd) {
            let pos = Players.getMe().pos;
            let coords = getLatLon(pos.x, pos.y);
            if (cmd.toLowerCase() === command) {
                getLocation(pos.x, pos.y);
            }
            else if (cmd.toLowerCase() === '/mycoords') {
                UI.addChatMessage("lat: " + coords.lat + ", lon: " + coords.lon);
            }
            else if (cmd.toLowerCase() === '/googleme') {
                UI.addChatLine(Players.getMe(),
                    'You are at https://maps.google.com/maps?q=loc:' +
                    coords.lat + "," + coords.lon,
                    2);
            }
            else {
                return oldParseCommand(cmd);
            }
            return true;
        };
    });

    SWAM.registerExtension({
        name: "Geolocator",
        id: "Geolocator",
        description: "An extension to tell you where you are.",
        author: "STEAMROLLER",
        version: "0.1.4",
        settingsProvider: createSettingsProvider()
    });

})();