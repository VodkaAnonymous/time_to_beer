<!DOCTYPE html>
<html>
<head>
    <META http-equiv=Content-Type content="text/html; charset=UTF-8">
    <link href="http://fonts.googleapis.com/css?family=Carter+One:regular" rel="stylesheet" type="text/css">
    <link href="http://fonts.googleapis.com/css?family=Lobster:regular" rel="stylesheet" type="text/css">
    <link type="text/css" rel="stylesheet" href="clock_assets/flipclock.css"/>
    <link type="text/css" rel="stylesheet" href="css/style.css"/>
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <script type="text/javascript" src="clock_assets/flipclock.js"></script>
    <script type="text/javascript" src="js/friday-calculator.js"></script>
    <script type="text/javascript" src="js/videos.js"></script>
    <script type="text/javascript" src="js/quotes.js"></script>
    <script type="text/javascript" src="js/booze.js"></script>
    <script type="text/javascript" src="js/script.js"></script>
</head>
<body>
<div class=pg>
    <div class="container">
        <h1 class=title>
            TIME BEFORE NEXT FRIDAY BEGINS.....<br>
            AND <span id="boozes-container"></span> STARTS FLOWING...
        </h1>
        <span class="clock-container" style="">
			<div class="clock-builder-output"></div>
        </span>
    </div>
		 <CENTER>
			<table cellpadding=0 cellspacing=0>
				<tr>
					<td>
				    <img src="images/3D_Animated_Dancing_Girl.gif" height=300>
					</td>
					<td>
				    <img src="images/catbeer.gif" class=imgcat>
					</td>
					<td>
						<img src="images/nasty.GIF" style='margin:0 15px 0 15px' height=300>
					</td>
				</tr>
			</table>
		</center>

    <br>

    <div class=imgbx1><img src="images/cat4.gif" class=imgcatz></div>
    <div class=imgbx2><img src="images/cat1.gif" class=imgcatz></div>
    <div class=imgbx3><img src="images/cat5.gif" class=imgcatz></div>
    <div class=imgbx4><img src="images/cat3.gif" class=imgcatz></div>



    <video autoplay onended="vrun();" id="bgvid1" class=fsvd>
        <source src="video/random1.mp4" type="video/mp4">
	    	<img src="video/random1.gif">
    </video>
    <video onended="vrun();" id="bgvid2" class="fsvd hvd">
        <source src="video/random2.mp4" type="video/mp4">
    </video>
    <video onended="vrun();" id="bgvid3" class="fsvd hvd">
        <source src="video/random3.mp4" type="video/mp4">
    </video>
    <video onended="vrun();" id="bgvid4" class="fsvd hvd">
        <source src="video/random4.mp4" type="video/mp4">
    </video>
    <video onended="vrun();" id="bgvid5" class="fsvd hvd">
        <source src="video/random5.mp4" type="video/mp4">
    </video>
    <div id="motd">
        <blockquote class="message"></blockquote>
        <em class="author"></em>
    </div>
</div>

<script>
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )
{
	$('#bgvid1').attr('poster', 'video/random1.gif');
}

</script>


</body>
</html>