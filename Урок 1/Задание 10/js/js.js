"use strict";

window.addEventListener('DOMContentLoaded', function () {

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    // Таймер ===========================================================================

    let deadLine = '2020-04-17';

    function getTimeRemaining(endTime) {
        let t = Date.parse(endTime) - Date.parse(new Date()),
            seconds = 0,
            minuts = 0,
            hours = 0;

        if (t > 0) {
            seconds = Math.floor((t / 1000) % 60);
            minuts = Math.floor((t / 1000 / 60) % 60);
            hours = Math.floor(t / 1000 / 60 / 60);
        } else {
            seconds = 0;
            minuts = 0;
            hours = 0;
        }

        return {
            'total': t,
            'seconds': seconds,
            'minuts': minuts,
            'hours': hours
        };
    }

    function setClock(id, endTime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minuts = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endTime);

            if (t.hours < 10) {
                t.hours = '0' + t.hours;
            }
            if (t.minuts < 10) {
                t.minuts = '0' + t.minuts;
            }
            if (t.seconds < 10) {
                t.seconds = '0' + t.seconds;
            }

            hours.textContent = t.hours;
            minuts.textContent = t.minuts;
            seconds.textContent = t.seconds;

            if (t.total <= 0) {
                clearInterval;
            }
        }
    };

    setClock('timer', deadLine);


    // Модальное окно ===========================================================================

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        descrBtn2 = document.querySelectorAll('.description-btn'),
        descrBtn = document.querySelector('.info');

    more.addEventListener('click', function () {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function () {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');

        for (let i = 0; i < descrBtn2.length; i++) {
            descrBtn2[i].classList.remove('more-splash');
        }

        document.body.style.overflow = '';
    });

    descrBtn.addEventListener('click', function (event) {
        let target = event.target;
        if (target.classList == "description-btn") {
            overlay.style.display = 'block';
            target.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        }
    });

    // Отправка формы ===========================================================================

    let message = {
        loading: "Загрузка...",
        success: "Спасибо! Ваше сообщение отправлено.",
        failure: "Чтото пошло не так!"
    }

    let form = document.querySelector('.main-form'),
        form2 = document.querySelector('#form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        let formData = new FormData(form);
        request.send(formData);
    });

    form2.addEventListener('submit', function (event) {
        event.preventDefault();
        form2.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        let formData = new FormData(form2);
        request.send(formData);
    });

    // Слайдер ===========================================================================

    let sladeIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    showSlides(sladeIndex);

    function showSlides(n) {

        console.log(n);

        sladeIndex = n; 

        if (n > slides.length) {
            sladeIndex = 1;
        } else if (n < 1) {
            sladeIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');
        dots.forEach((item) => item.classList.remove('dot-active'));

        slides[sladeIndex - 1].style.display = 'block';
        dots[sladeIndex - 1].classList.add('dot-active');
    }

    function plusSlide(n) {
        showSlides(sladeIndex += n);
    }

    function currentSlide(n) {
        showSlides(sladeIndex = n);
        console.log(n);
    }

    prev.addEventListener('click', function () {
        plusSlide(-1);
    });

    next.addEventListener('click', function () {
        plusSlide(1);
    });

    dotsWrap.addEventListener('click', function (event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
                currentSlide(i);
                console.log(i);
            }
        }
    });


});