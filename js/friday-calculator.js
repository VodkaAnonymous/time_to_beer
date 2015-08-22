"use strict";
var FridayCalculator = {
    jumpToNextFriday: function (date) {
        return new Date(+date + (7 - (date.getDay() + 2) % 7) * 86400000);
    },

    calculateNextFriday: function () {
        var now = new Date();
        var nextFriday;
        if (now.getDay() === 5 && now.getHours() < 17) {
            nextFriday = new Date(now);
        } else {
            nextFriday = this.jumpToNextFriday(now);
        }

        nextFriday.setHours(17);
        nextFriday.setMinutes(0);
        nextFriday.setSeconds(0);

        return (nextFriday.getTime() / 1000) - (now.getTime() / 1000);
    }
};