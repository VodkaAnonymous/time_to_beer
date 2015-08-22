"use strict";
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
