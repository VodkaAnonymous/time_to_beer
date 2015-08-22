"use strict";
var Booze = {
    currentBooze: 0,
    boozes: [
        'beer',
        'vodka',
        'rum & coke',
        'wine',
        'tequila',
        'jager',
        'whiskey'
    ],

    loopBooze: function (boozeContainer) {
        var maxBoozeIndex = this.boozes.length;
        this.boozes.forEach(function (booze) {
            boozeContainer.append('<span class="booze">' + booze + '</span>');
        });

        boozeContainer.find('.booze').first().addClass('current');
        setInterval(function () {
            boozeContainer.find('.booze.current').removeClass('current');
            boozeContainer.find('.booze:eq( ' + this.currentBooze + '  )').addClass('current');
            this.currentBooze++;
            if (this.currentBooze === maxBoozeIndex) {
                this.currentBooze = 0;
            }
        }.bind(this), 2000);
    }
};
