'use strict';

module.exports = function (app) {
    app.service('MessageService', ['$timeout', serviceFun]);
};

function serviceFun($timeout) {
    var messageText = '',
        messageType = '',
        active = false;

    return {
        showMessage: function (text, type) {
            var self = this;
            if (active) {
                $timeout(function () {
                    self.showMessage(text, type);
                }, 20000);
            } else {
                messageText = text;
                messageType = type;
                active = true;
                $timeout(function () {
                    self.hideMessage();
                }, 20000);
            }
        },
        showSuccess: function (text) {
            this.showMessage(text, "success");
        },
        showWarning: function (text) {
            this.showMessage(text, "warning");
        },
        showDanger: function (text) {
            this.showMessage(text, "danger");
        },
        showInfo: function (text) {
            this.showMessage(text, "info");
        },
        hideMessage: function() {
            active = false;
        },
        getActive: function() {
            return active;
        },
        getMessageText: function() {
            return messageText;
        },
        getMessageType: function() {
            return messageType;
        }
    }
}