"use strict";
function initClock() {
    FlipClock.Lang.Custom = {days: 'Days', hours: 'Hours', minutes: 'Minutes', seconds: 'Seconds'};
    var opts =
    {
        clockFace: 'DailyCounter',
        countdown: true,
        language: 'Custom'
    };
    var countdown = FridayCalculator.calculateNextFriday();
    countdown = Math.max(3, countdown); // 3 seconds should be enough to open a beer
    $('.clock-builder-output').FlipClock(countdown, opts);
}
function initQuote() {
    var motd = $('#motd'),
        message = motd.find('.message').first(),
        author = motd.find('.author').first(),
        randomQuote = Quotes.getRandomQuote();
    message.text(randomQuote.quote);
    author.text(randomQuote.author);
}


function initBoozeLoop() {
    var boozeContainer = $('#boozes-container');
    Booze.loopBooze(boozeContainer);
}
$(function () {
    initClock();
    initQuote();
    initBoozeLoop();
});
