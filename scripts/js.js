(function() {//самовызывающаяся функция
	var sliderUl = $('.slider-ul.featured');//создаем переменную слайдера
	sliderUl.css('margin-left', '0px');//присваиваем слайдеру нулевой изначальный ml
	var curSlideCount = 0;//текущий слайд

	$('.right-a.f, .left-a.f').on('click', function(e) {//обработчик клика
		var slideWidth = 300;//ширина слайда
		var slidesCount = $('.featured').length;//количество слайдов
		var curSlidePos = sliderUl.css('margin-left');//текущие позиция в пикселях
		
		if ($(e.target).hasClass('right-a')) {//если цель клика имеет класс правой кнопки

			if (curSlideCount == (slidesCount - 6)) return;//выход из функции если справа
		} else {
			if (curSlideCount == 0) return;//выход из функции если слева
		}

		if ($(e.target).hasClass('right-a')) {// если цель клика имеет класс правой кнопки
			sliderUl.css('margin-left', (parseInt(curSlidePos) - slideWidth) + 'px');
			curSlideCount++;
		} else {
			sliderUl.css('margin-left', (parseInt(curSlidePos) + slideWidth) + 'px');
			curSlideCount--;
		}
		
	});


	var sliderUlNew = $('.slider-ul.new');//создаем переменную слайдера
	sliderUlNew.css('margin-left', '0px');//присваиваем слайдеру нулевой изначальный ml
	var curSlideCountNew = 0;//текущий слайд

	$('.right-a.n, .left-a.n').on('click', function(ev) {//обработчик клика
		var slideWidthNew = 400;//ширина слайда
		var slidesCountNew = $('.new').length;//количество слайдов
		var curSlidePosNew = sliderUlNew.css('margin-left');//текущие позиция в пикселях

		if ($(ev.target).hasClass('right-a')) {//если цель клика имеет класс правой кнопки

			if (curSlideCountNew == (slidesCountNew - 4)) return;//выход из функции если справа
		} else {
			if (curSlideCountNew == 0) return;//выход из функции если слева
		}

		if ($(ev.target).hasClass('right-a')) {// если цель клика имеет класс правой кнопки
			sliderUlNew.css('margin-left', (parseInt(curSlidePosNew) - slideWidthNew) + 'px');
			curSlideCountNew++;
		} else {
			sliderUlNew.css('margin-left', (parseInt(curSlidePosNew) + slideWidthNew) + 'px');
			curSlideCountNew--;
		}
		
	});


})();
