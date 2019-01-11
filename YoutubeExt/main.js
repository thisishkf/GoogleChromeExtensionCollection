$(document).ready(function () {
	breakAutoPause();
});

const breakAutoPause = function () {
	setInterval(() => {
		$('#confirm-button').click();
	}, 5000);

}

