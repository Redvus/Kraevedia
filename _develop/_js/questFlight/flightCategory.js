/* Запускаем вопросы в квтегории Полёт */
function flightCategory() {
    const flightCatLoad = new ChoiceCategory(),
        arrowBackLoad = new ArrowsAll();
    flightCatLoad.choiceCategory('Полет', 'Flight');

    const containerWrapper = document.querySelector('.container__wrapper'),
        introAboutBack = document.querySelector('.wrapper__game'),
        categorySubFlight_1 = document.getElementById('categorySubFlight_1'),
        categorySubFlight_2 = document.getElementById('categorySubFlight_2'),
        categorySubFlight_3 = document.getElementById('categorySubFlight_3'),
        categorySubFlight_4 = document.getElementById('categorySubFlight_4'),
        categorySubFlight_5 = document.getElementById('categorySubFlight_5'),
        categorySubFlight_6 = document.getElementById('categorySubFlight_6'),
        categorySubFlight_7 = document.getElementById('categorySubFlight_7'),
        categorySubFlight_8 = document.getElementById('categorySubFlight_8'),
        categorySubFlightAll = [categorySubFlight_1, categorySubFlight_2, categorySubFlight_3, categorySubFlight_4, categorySubFlight_5, categorySubFlight_6, categorySubFlight_7, categorySubFlight_8]
    ;

    //Local Storage. Progress
    let progressFlightQuest1 = JSON.parse(localStorage.getItem('progressFlightQuest_1'));
    let progressFlightQuest2 = JSON.parse(localStorage.getItem('progressFlightQuest_2'));
    let progressFlightQuest3 = JSON.parse(localStorage.getItem('progressFlightQuest_3'));
    let progressFlightQuest4 = JSON.parse(localStorage.getItem('progressFlightQuest_4'));
    let progressFlightQuest5 = JSON.parse(localStorage.getItem('progressFlightQuest_5'));
    let progressFlightQuest6 = JSON.parse(localStorage.getItem('progressFlightQuest_6'));
    let progressFlightQuest7 = JSON.parse(localStorage.getItem('progressFlightQuest_7'));
    let progressFlightQuest8 = JSON.parse(localStorage.getItem('progressFlightQuest_8'));
    let progressFlightQuestAll = progressFlightQuest1 + progressFlightQuest2 + progressFlightQuest3 + progressFlightQuest4 + progressFlightQuest5 + progressFlightQuest6 + progressFlightQuest7 + progressFlightQuest8;
    localStorage.setItem('progressFlightAll', JSON.stringify(progressFlightQuestAll));

    function flightQuest_1() {
        if (localStorage.getItem('progressFlightQuest_1_1') === null ||
            localStorage.getItem('progressFlightQuest_1_2') === null ||
            localStorage.getItem('progressFlightQuest_1_3') === null) {
            localStorage.setItem('progressFlightQuest_1_1', JSON.stringify(0));
            localStorage.setItem('progressFlightQuest_1_2', JSON.stringify(0));
            localStorage.setItem('progressFlightQuest_1_3', JSON.stringify(0));
        }

        let progressFlightQuest1_1 = JSON.parse(localStorage.getItem('progressFlightQuest_1_1')),
            progressFlightQuest1_2 = JSON.parse(localStorage.getItem('progressFlightQuest_1_2')),
            progressFlightQuest1_3 = JSON.parse(localStorage.getItem('progressFlightQuest_1_3'))
        ;

        const categorySubStars_1 = document.getElementById('categoryElementStars_1'),
            categorySubQuest_2 = document.getElementById('categorySubFlight_2')
        ;

        categorySubStars_1.id = 'categoryElementStars_1';
        const categoryElementStars_1 = document.getElementById('categoryElementStars_1');

        if (progressFlightQuest1_1 === 1 &&
            progressFlightQuest1_2 === 0 &&
            progressFlightQuest1_3 === 0) {
            categorySubStars_1.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li></li>
        `;
        } else if (progressFlightQuest1_1 === 1 &&
            progressFlightQuest1_2 === 1 &&
            progressFlightQuest1_3 === 0) {
            categorySubStars_1.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressFlightQuest1_1 === 1 &&
            progressFlightQuest1_2 === 1 &&
            progressFlightQuest1_3 === 1) {
            categorySubStars_1.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressFlightQuest1_1 === 0 &&
            progressFlightQuest1_2 === 1 &&
            progressFlightQuest1_3 === 0) {
            categorySubStars_1.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressFlightQuest1_1 === 0 &&
            progressFlightQuest1_2 === 0 &&
            progressFlightQuest1_3 === 1) {
            categorySubStars_1.innerHTML = `
            <li></li>
            <li></li>
            <li class="fill"></li>
        `;
        } else if (progressFlightQuest1_1 === 0 &&
            progressFlightQuest1_2 === 1 &&
            progressFlightQuest1_3 === 1) {
            categorySubStars_1.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressFlightQuest1_1 === 1 &&
            progressFlightQuest1_2 === 0 &&
            progressFlightQuest1_3 === 1) {
            categorySubStars_1.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li class="fill"></li>
        `;
        }

        if (progressFlightQuest1 >= 1) {
            categorySubQuest_2.className = 'category__element category__element_2';
        }
    }
    flightQuest_1();

    function flightQuest_2() {
        if (localStorage.getItem('progressFlightQuest_2_1') === null ||
            localStorage.getItem('progressFlightQuest_2_2') === null ||
            localStorage.getItem('progressFlightQuest_2_3') === null) {
            localStorage.setItem('progressFlightQuest_2_1', JSON.stringify(0));
            localStorage.setItem('progressFlightQuest_2_2', JSON.stringify(0));
            localStorage.setItem('progressFlightQuest_2_3', JSON.stringify(0));
        }

        let progressFlightQuest2_1 = JSON.parse(localStorage.getItem('progressFlightQuest_2_1')),
            progressFlightQuest2_2 = JSON.parse(localStorage.getItem('progressFlightQuest_2_2')),
            progressFlightQuest2_3 = JSON.parse(localStorage.getItem('progressFlightQuest_2_3'))
        ;

        const categorySubStars_2 = document.getElementById('categoryElementStars_2'),
            categorySubQuest_3 = document.getElementById('categorySubFlight_3')
        ;

        categorySubStars_2.id = 'categoryElementStars_2';
        const categoryElementStars_2 = document.getElementById('categoryElementStars_2');

        if (progressFlightQuest2_1 === 1 &&
            progressFlightQuest2_2 === 0 &&
            progressFlightQuest2_3 === 0) {
            categorySubStars_2.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li></li>
        `;
        } else if (progressFlightQuest2_1 === 1 &&
            progressFlightQuest2_2 === 1 &&
            progressFlightQuest2_3 === 0) {
            categorySubStars_2.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressFlightQuest2_1 === 1 &&
            progressFlightQuest2_2 === 1 &&
            progressFlightQuest2_3 === 1) {
            categorySubStars_2.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressFlightQuest2_1 === 0 &&
            progressFlightQuest2_2 === 1 &&
            progressFlightQuest2_3 === 0) {
            categorySubStars_2.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressFlightQuest2_1 === 0 &&
            progressFlightQuest2_2 === 0 &&
            progressFlightQuest2_3 === 1) {
            categorySubStars_2.innerHTML = `
            <li></li>
            <li></li>
            <li class="fill"></li>
        `;
        } else if (progressFlightQuest2_1 === 0 &&
            progressFlightQuest2_2 === 1 &&
            progressFlightQuest2_3 === 1) {
            categorySubStars_2.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressFlightQuest2_1 === 1 &&
            progressFlightQuest2_2 === 0 &&
            progressFlightQuest2_3 === 1) {
            categorySubStars_2.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li class="fill"></li>
        `;
        }

        if (progressFlightQuest2 >= 1) {
            categorySubQuest_3.className = 'category__element category__element_3';
        }
    }
    flightQuest_2();

    function flightQuest_3() {
        if (localStorage.getItem('progressFlightQuest_3_1') === null ||
            localStorage.getItem('progressFlightQuest_3_2') === null ||
            localStorage.getItem('progressFlightQuest_3_3') === null) {
            localStorage.setItem('progressFlightQuest_3_1', JSON.stringify(0));
            localStorage.setItem('progressFlightQuest_3_2', JSON.stringify(0));
            localStorage.setItem('progressFlightQuest_3_3', JSON.stringify(0));
        }

        let progressFlightQuest3_1 = JSON.parse(localStorage.getItem('progressFlightQuest_3_1')),
            progressFlightQuest3_2 = JSON.parse(localStorage.getItem('progressFlightQuest_3_2')),
            progressFlightQuest3_3 = JSON.parse(localStorage.getItem('progressFlightQuest_3_3'))
        ;

        const categorySubStars_3 = document.getElementById('categoryElementStars_3'),
            categorySubQuest_4 = document.getElementById('categorySubFlight_4')
        ;

        categorySubStars_3.id = 'categoryElementStars_3';
        const categoryElementStars_3 = document.getElementById('categoryElementStars_3');

        if (progressFlightQuest3_1 === 1 &&
            progressFlightQuest3_2 === 0 &&
            progressFlightQuest3_3 === 0) {
            categorySubStars_3.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li></li>
        `;
        } else if (progressFlightQuest3_1 === 1 &&
            progressFlightQuest3_2 === 1 &&
            progressFlightQuest3_3 === 0) {
            categorySubStars_3.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressFlightQuest3_1 === 1 &&
            progressFlightQuest3_2 === 1 &&
            progressFlightQuest3_3 === 1) {
            categorySubStars_3.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressFlightQuest3_1 === 0 &&
            progressFlightQuest3_2 === 1 &&
            progressFlightQuest3_3 === 0) {
            categorySubStars_3.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressFlightQuest3_1 === 0 &&
            progressFlightQuest3_2 === 0 &&
            progressFlightQuest3_3 === 1) {
            categorySubStars_3.innerHTML = `
            <li></li>
            <li></li>
            <li class="fill"></li>
        `;
        } else if (progressFlightQuest3_1 === 0 &&
            progressFlightQuest3_2 === 1 &&
            progressFlightQuest3_3 === 1) {
            categorySubStars_3.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressFlightQuest3_1 === 1 &&
            progressFlightQuest3_2 === 0 &&
            progressFlightQuest3_3 === 1) {
            categorySubStars_3.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li class="fill"></li>
        `;
        }

        if (progressFlightQuest3 >= 1) {
            categorySubQuest_4.className = 'category__element category__element_4';
        }
    }
    flightQuest_3();

    function flightQuest_4() {
        if (localStorage.getItem('progressFlightQuest_4_1') === null ||
            localStorage.getItem('progressFlightQuest_4_2') === null ||
            localStorage.getItem('progressFlightQuest_4_3') === null) {
            localStorage.setItem('progressFlightQuest_4_1', JSON.stringify(0));
            localStorage.setItem('progressFlightQuest_4_2', JSON.stringify(0));
            localStorage.setItem('progressFlightQuest_4_3', JSON.stringify(0));
        }

        let progressFlightQuest4_1 = JSON.parse(localStorage.getItem('progressFlightQuest_4_1')),
            progressFlightQuest4_2 = JSON.parse(localStorage.getItem('progressFlightQuest_4_2')),
            progressFlightQuest4_3 = JSON.parse(localStorage.getItem('progressFlightQuest_4_3'))
        ;

        const categorySubStars_4 = document.getElementById('categoryElementStars_4'),
            categorySubQuest_5 = document.getElementById('categorySubFlight_5')
        ;

        categorySubStars_4.id = 'categoryElementStars_4';
        const categoryElementStars_4 = document.getElementById('categoryElementStars_4');

        if (progressFlightQuest4_1 === 1 &&
            progressFlightQuest4_2 === 0 &&
            progressFlightQuest4_3 === 0) {
            categorySubStars_4.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li></li>
        `;
        } else if (progressFlightQuest4_1 === 1 &&
            progressFlightQuest4_2 === 1 &&
            progressFlightQuest4_3 === 0) {
            categorySubStars_4.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressFlightQuest4_1 === 1 &&
            progressFlightQuest4_2 === 1 &&
            progressFlightQuest4_3 === 1) {
            categorySubStars_4.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressFlightQuest4_1 === 0 &&
            progressFlightQuest4_2 === 1 &&
            progressFlightQuest4_3 === 0) {
            categorySubStars_4.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressFlightQuest4_1 === 0 &&
            progressFlightQuest4_2 === 0 &&
            progressFlightQuest4_3 === 1) {
            categorySubStars_4.innerHTML = `
            <li></li>
            <li></li>
            <li class="fill"></li>
        `;
        } else if (progressFlightQuest4_1 === 0 &&
            progressFlightQuest4_2 === 1 &&
            progressFlightQuest4_3 === 1) {
            categorySubStars_4.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressFlightQuest4_1 === 1 &&
            progressFlightQuest4_2 === 0 &&
            progressFlightQuest4_3 === 1) {
            categorySubStars_4.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li class="fill"></li>
        `;
        }

        if (progressFlightQuest4 >= 1) {
            categorySubQuest_5.className = 'category__element category__element_5';
        }
    }
    flightQuest_4();

    function flightQuest_5() {
        if (localStorage.getItem('progressFlightQuest_5_1') === null ||
            localStorage.getItem('progressFlightQuest_5_2') === null ||
            localStorage.getItem('progressFlightQuest_5_3') === null) {
            localStorage.setItem('progressFlightQuest_5_1', JSON.stringify(0));
            localStorage.setItem('progressFlightQuest_5_2', JSON.stringify(0));
            localStorage.setItem('progressFlightQuest_5_3', JSON.stringify(0));
        }

        let progressFlightQuest_5_1 = JSON.parse(localStorage.getItem('progressFlightQuest_5_1')),
            progressFlightQuest_5_2 = JSON.parse(localStorage.getItem('progressFlightQuest_5_2')),
            progressFlightQuest_5_3 = JSON.parse(localStorage.getItem('progressFlightQuest_5_3'))
        ;

        const categorySubStars_5 = document.getElementById('categoryElementStars_5'),
            categorySubQuest_5 = document.getElementById('categorySubFlight_5')
        ;

        categorySubStars_5.id = 'categoryElementStars_5';
        const categoryElementStars_5 = document.getElementById('categoryElementStars_5');

        if (progressFlightQuest_5_1 === 1 &&
            progressFlightQuest_5_2 === 0 &&
            progressFlightQuest_5_3 === 0) {
            categorySubStars_5.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li></li>
        `;
        } else if (progressFlightQuest_5_1 === 1 &&
            progressFlightQuest_5_2 === 1 &&
            progressFlightQuest_5_3 === 0) {
            categorySubStars_5.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressFlightQuest_5_1 === 1 &&
            progressFlightQuest_5_2 === 1 &&
            progressFlightQuest_5_3 === 1) {
            categorySubStars_5.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressFlightQuest_5_1 === 0 &&
            progressFlightQuest_5_2 === 1 &&
            progressFlightQuest_5_3 === 0) {
            categorySubStars_5.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressFlightQuest_5_1 === 0 &&
            progressFlightQuest_5_2 === 0 &&
            progressFlightQuest_5_3 === 1) {
            categorySubStars_5.innerHTML = `
            <li></li>
            <li></li>
            <li class="fill"></li>
        `;
        } else if (progressFlightQuest_5_1 === 0 &&
            progressFlightQuest_5_2 === 1 &&
            progressFlightQuest_5_3 === 1) {
            categorySubStars_5.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressFlightQuest_5_1 === 1 &&
            progressFlightQuest_5_2 === 0 &&
            progressFlightQuest_5_3 === 1) {
            categorySubStars_5.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li class="fill"></li>
        `;
        }

        if (progressFlightQuest4 >= 1) {
            categorySubQuest_5.className = 'category__element category__element_5';
        }
    }
    flightQuest_5();

    function flightQuest_6() {
        if (localStorage.getItem('progressFlightQuest_6_1') === null ||
            localStorage.getItem('progressFlightQuest_6_2') === null ||
            localStorage.getItem('progressFlightQuest_6_3') === null) {
            localStorage.setItem('progressFlightQuest_6_1', JSON.stringify(0));
            localStorage.setItem('progressFlightQuest_6_2', JSON.stringify(0));
            localStorage.setItem('progressFlightQuest_6_3', JSON.stringify(0));
        }

        let progressFlightQuest_6_1 = JSON.parse(localStorage.getItem('progressFlightQuest_6_1')),
            progressFlightQuest_6_2 = JSON.parse(localStorage.getItem('progressFlightQuest_6_2')),
            progressFlightQuest_6_3 = JSON.parse(localStorage.getItem('progressFlightQuest_6_3'))
        ;

        const categorySubStars_6 = document.getElementById('categoryElementStars_6'),
            categorySubQuest_6 = document.getElementById('categorySubFlight_6')
        ;

        categorySubStars_6.id = 'categoryElementStars_6';
        const categoryElementStars_6 = document.getElementById('categoryElementStars_6');

        if (progressFlightQuest_6_1 === 1 &&
            progressFlightQuest_6_2 === 0 &&
            progressFlightQuest_6_3 === 0) {
            categorySubStars_6.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li></li>
        `;
        } else if (progressFlightQuest_6_1 === 1 &&
            progressFlightQuest_6_2 === 1 &&
            progressFlightQuest_6_3 === 0) {
            categorySubStars_6.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressFlightQuest_6_1 === 1 &&
            progressFlightQuest_6_2 === 1 &&
            progressFlightQuest_6_3 === 1) {
            categorySubStars_6.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressFlightQuest_6_1 === 0 &&
            progressFlightQuest_6_2 === 1 &&
            progressFlightQuest_6_3 === 0) {
            categorySubStars_6.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressFlightQuest_6_1 === 0 &&
            progressFlightQuest_6_2 === 0 &&
            progressFlightQuest_6_3 === 1) {
            categorySubStars_6.innerHTML = `
            <li></li>
            <li></li>
            <li class="fill"></li>
        `;
        } else if (progressFlightQuest_6_1 === 0 &&
            progressFlightQuest_6_2 === 1 &&
            progressFlightQuest_6_3 === 1) {
            categorySubStars_6.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressFlightQuest_6_1 === 1 &&
            progressFlightQuest_6_2 === 0 &&
            progressFlightQuest_6_3 === 1) {
            categorySubStars_6.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li class="fill"></li>
        `;
        }

        if (progressFlightQuest5 >= 1) {
            categorySubQuest_6.className = 'category__element category__element_6';
        }
    }
    flightQuest_6();

    function flightQuest_7() {
        if (localStorage.getItem('progressFlightQuest_7_1') === null ||
            localStorage.getItem('progressFlightQuest_7_2') === null ||
            localStorage.getItem('progressFlightQuest_7_3') === null) {
            localStorage.setItem('progressFlightQuest_7_1', JSON.stringify(0));
            localStorage.setItem('progressFlightQuest_7_2', JSON.stringify(0));
            localStorage.setItem('progressFlightQuest_7_3', JSON.stringify(0));
        }

        let progressFlightQuest_7_1 = JSON.parse(localStorage.getItem('progressFlightQuest_7_1')),
            progressFlightQuest_7_2 = JSON.parse(localStorage.getItem('progressFlightQuest_7_2')),
            progressFlightQuest_7_3 = JSON.parse(localStorage.getItem('progressFlightQuest_7_3'))
        ;

        const categorySubStars_7 = document.getElementById('categoryElementStars_7'),
            categorySubQuest_7 = document.getElementById('categorySubFlight_7')
        ;

        categorySubStars_7.id = 'categoryElementStars_7';
        const categoryElementStars_7 = document.getElementById('categoryElementStars_7');

        if (progressFlightQuest_7_1 === 1 &&
            progressFlightQuest_7_2 === 0 &&
            progressFlightQuest_7_3 === 0) {
            categorySubStars_7.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li></li>
        `;
        } else if (progressFlightQuest_7_1 === 1 &&
            progressFlightQuest_7_2 === 1 &&
            progressFlightQuest_7_3 === 0) {
            categorySubStars_7.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressFlightQuest_7_1 === 1 &&
            progressFlightQuest_7_2 === 1 &&
            progressFlightQuest_7_3 === 1) {
            categorySubStars_7.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressFlightQuest_7_1 === 0 &&
            progressFlightQuest_7_2 === 1 &&
            progressFlightQuest_7_3 === 0) {
            categorySubStars_7.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressFlightQuest_7_1 === 0 &&
            progressFlightQuest_7_2 === 0 &&
            progressFlightQuest_7_3 === 1) {
            categorySubStars_7.innerHTML = `
            <li></li>
            <li></li>
            <li class="fill"></li>
        `;
        } else if (progressFlightQuest_7_1 === 0 &&
            progressFlightQuest_7_2 === 1 &&
            progressFlightQuest_7_3 === 1) {
            categorySubStars_7.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressFlightQuest_7_1 === 1 &&
            progressFlightQuest_7_2 === 0 &&
            progressFlightQuest_7_3 === 1) {
            categorySubStars_7.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li class="fill"></li>
        `;
        }

        if (progressFlightQuest6 >= 1) {
            categorySubQuest_7.className = 'category__element category__element_7';
        }
    }
    flightQuest_7();

    function flightQuest_8() {
        if (localStorage.getItem('progressFlightQuest_8_1') === null ||
            localStorage.getItem('progressFlightQuest_8_2') === null ||
            localStorage.getItem('progressFlightQuest_8_3') === null) {
            localStorage.setItem('progressFlightQuest_8_1', JSON.stringify(0));
            localStorage.setItem('progressFlightQuest_8_2', JSON.stringify(0));
            localStorage.setItem('progressFlightQuest_8_3', JSON.stringify(0));
        }

        let progressFlightQuest_8_1 = JSON.parse(localStorage.getItem('progressFlightQuest_8_1')),
            progressFlightQuest_8_2 = JSON.parse(localStorage.getItem('progressFlightQuest_8_2')),
            progressFlightQuest_8_3 = JSON.parse(localStorage.getItem('progressFlightQuest_8_3'))
        ;

        const categorySubStars_8 = document.getElementById('categoryElementStars_8'),
            categorySubQuest_8 = document.getElementById('categorySubFlight_8')
        ;

        categorySubStars_8.id = 'categoryElementStars_8';
        const categoryElementStars_8 = document.getElementById('categoryElementStars_8');

        if (progressFlightQuest_8_1 === 1 &&
            progressFlightQuest_8_2 === 0 &&
            progressFlightQuest_8_3 === 0) {
            categorySubStars_8.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li></li>
        `;
        } else if (progressFlightQuest_8_1 === 1 &&
            progressFlightQuest_8_2 === 1 &&
            progressFlightQuest_8_3 === 0) {
            categorySubStars_8.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressFlightQuest_8_1 === 1 &&
            progressFlightQuest_8_2 === 1 &&
            progressFlightQuest_8_3 === 1) {
            categorySubStars_8.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressFlightQuest_8_1 === 0 &&
            progressFlightQuest_8_2 === 1 &&
            progressFlightQuest_8_3 === 0) {
            categorySubStars_8.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressFlightQuest_8_1 === 0 &&
            progressFlightQuest_8_2 === 0 &&
            progressFlightQuest_8_3 === 1) {
            categorySubStars_8.innerHTML = `
            <li></li>
            <li></li>
            <li class="fill"></li>
        `;
        } else if (progressFlightQuest_8_1 === 0 &&
            progressFlightQuest_8_2 === 1 &&
            progressFlightQuest_8_3 === 1) {
            categorySubStars_8.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressFlightQuest_8_1 === 1 &&
            progressFlightQuest_8_2 === 0 &&
            progressFlightQuest_8_3 === 1) {
            categorySubStars_8.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li class="fill"></li>
        `;
        }

        if (progressFlightQuest7 >= 1) {
            categorySubQuest_8.className = 'category__element category__element_8';
        }
    }
    flightQuest_8();

    arrowBackLoad.arrowBack();
    const arrowBackClick = document.getElementById('arrowBack');
    arrowBackClick.addEventListener('click', () => {
        gsap.to(containerWrapper, {
            autoAlpha: 0,
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                wrapper.removeChild(introAboutBack);
                wrapper.className = 'wrapper';
                categoryDev();
            }
        });
    });

    for (let i = 0; i < categorySubFlightAll.length; i++) {
        if (categorySubFlightAll[i].className !== 'category__element--hidden') {
            categorySubFlightAll[i].addEventListener('click', () => {
                if (categorySubFlightAll[i].className !== 'category__element--hidden') {
                    soundsLoad.rightAnswer('assets/games/cosmicpuzzles/sounds/cp_subCategoryQuest.ogg');
                }
            });
        }
    }

    categorySubFlight_1.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadQuestFlight_1();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubFlight_2.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadQuestFlight_2();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubFlight_3.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadQuestFlight_3();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubFlight_4.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadQuestFlight_4();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubFlight_5.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadQuestFlight_5();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubFlight_6.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadQuestFlight_6();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubFlight_7.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadQuestFlight_7();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubFlight_8.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadQuestFlight_8();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    let progressFlightQuestSum = JSON.parse(localStorage.getItem('progressFlightAll'));
    if (progressFlightQuestSum === 24) {
        soundsLoad.rightAnswer('assets/games/cosmicpuzzles/sounds/cp_categoryAllRight.ogg');
    }
}