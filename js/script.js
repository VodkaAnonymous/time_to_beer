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

$(function () {
    FlipClock.Lang.Custom = {days: 'Days', hours: 'Hours', minutes: 'Minutes', seconds: 'Seconds'};
    var opts =
    {
        clockFace: 'DailyCounter',
        //clockFace: 'HourCounter',
        countdown: true,
        language: 'Custom'
    };
    var countdown = (calculateNextFriday() + (((60 * 60) * 24) * 7)) - ((new Date().getTime()) / 1000);
    countdown = Math.max(3, countdown);
    $('.clock-builder-output').FlipClock(countdown, opts);
});
jumpToNextFriday = function (date) {
    return new Date(+date + (7 - (date.getDay() + 2) % 7) * 86400000);
};
function calculateNextFriday() {
    var today = new Date();
    today.setHours(17);
    today.setMinutes(0);
    today.setSeconds(0);
    return Math.floor(today / 1000);
}