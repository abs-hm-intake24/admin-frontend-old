'use strict';

module.exports = function () {
    function Gettext(params) {
        return {
            gettext: function (msgid) {
                if (json_locale_data && json_locale_data["messages"]) {
                    var dict = json_locale_data["messages"];
                    if (dict[msgid] && dict[msgid].length >= 2 &&
                        dict[msgid][1].trim() != "") {
                        return dict[msgid][1];
                    }
                }
                return msgid;
            },
            // See lib/i18n.js format docs
            format: function (fmt, obj, named) {
                if (!fmt) return "";
                if (!fmt.replace) {
                    return fmt;
                }
                if (named) {
                    return fmt.replace(/%\(\w+\)s/g, function (match) {
                        return String(obj[match.slice(2, -2)])
                    });
                } else {
                    return fmt.replace(/%s/g, function (match) {
                        return String(obj.shift())
                    });
                }
            }
        };
    };

    var params = {
        "domain": "client",
        "locale_data": json_locale_data
    };
    var gt = new Gettext(params);
    window.gettext = gt.gettext.bind(gt);
    window.format = gt.format.bind(gt);
};