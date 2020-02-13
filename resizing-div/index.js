;(function () {
	var el = document.querySelector('.resizing-div');
	var state = 'shrinking';

	var switchState = function () {
		if (state == 'expanding') state = 'shrinking';
		else state = 'expanding';
	}

	var resize = function (elem, width) {
		elem.style.width = width + '%';
		var nextWidth = 0;
		if (state == 'shrinking') {
			if (width == 0) {
				switchState();
				nextWidth = 1;
			} else {
				nextWidth = width - 1;
			}
		} else {
			if (width == 100) {
				switchState();
				nextWidth = 99;
			} else {
				nextWidth = width + 1;
			}
		}
		scheduleResizing(elem, nextWidth);
	}

	var scheduleResizing = function (elem, width) {
		setTimeout(function () {
			resize(elem, width);
		}, 100);
	}

	scheduleResizing(el, 99);
})();
