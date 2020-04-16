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





});