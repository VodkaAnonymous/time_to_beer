var video_count = 1;

function vrun() {
    var video = document.getElementById("bgvid" + video_count);
    video.style.display = 'none';
    video_count++;
    if (video_count == 6) video_count = 1;
    video = document.getElementById("bgvid" + video_count);
    video.style.display = 'block';
    video.play();
}
var fridayCalculator = {
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


$(function () {
    FlipClock.Lang.Custom = {days: 'Days', hours: 'Hours', minutes: 'Minutes', seconds: 'Seconds'};
    var opts =
    {
        clockFace: 'DailyCounter',
        countdown: true,
        language: 'Custom'
    };
    var countdown = fridayCalculator.calculateNextFriday();
    countdown = Math.max(3, countdown); // 3 seconds should be enough to open a beer
    $('.clock-builder-output').FlipClock(countdown, opts);
});
