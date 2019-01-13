$(document).ready(function () {
	breakAutoPause();
});

const breakAutoPause = function () {
	setInterval(() => {
		if($('ytd-popup-container').html()){
			$('yt-button-renderer').click();
			$('ytd-popup-container').remove();
			console.log('clicked');
		}
	}, 5000);
}

