/* Запускаем вопросы в квтегории Отбор */
function prepareCategory() {
    const prepareCatLoad = new ChoiceCategory(),
        arrowBackLoad = new ArrowsAll();
    prepareCatLoad.choiceCategory('Подготовка', 'Prepare');

    const containerWrapper = document.querySelector('.container__wrapper'),
        introAboutBack = document.querySelector('.wrapper__game'),
        categorySubPrepare_1 = document.getElementById('categorySubPrepare_1'),
        categorySubPrepare_2 = document.getElementById('categorySubPrepare_2'),
        categorySubPrepare_3 = document.getElementById('categorySubPrepare_3'),
        categorySubPrepare_4 = document.getElementById('categorySubPrepare_4'),
        categorySubPrepare_5 = document.getElementById('categorySubPrepare_5'),
        categorySubPrepare_6 = document.getElementById('categorySubPrepare_6'),
        categorySubPrepare_7 = document.getElementById('categorySubPrepare_7'),
        categorySubPrepare_8 = document.getElementById('categorySubPrepare_8'),
        categorySubPrepareAll = [categorySubPrepare_1, categorySubPrepare_2, categorySubPrepare_3, categorySubPrepare_4, categorySubPrepare_5, categorySubPrepare_6, categorySubPrepare_7, categorySubPrepare_8]
    ;

    //Local Storage. Progress
    let progressPrepareQuest1 = JSON.parse(localStorage.getItem('progressPrepareQuest_1'));
    let progressPrepareQuest2 = JSON.parse(localStorage.getItem('progressPrepareQuest_2'));
    let progressPrepareQuest3 = JSON.parse(localStorage.getItem('progressPrepareQuest_3'));
    let progressPrepareQuest4 = JSON.parse(localStorage.getItem('progressPrepareQuest_4'));
    let progressPrepareQuest5 = JSON.parse(localStorage.getItem('progressPrepareQuest_5'));
    let progressPrepareQuest6 = JSON.parse(localStorage.getItem('progressPrepareQuest_6'));
    let progressPrepareQuest7 = JSON.parse(localStorage.getItem('progressPrepareQuest_7'));
    let progressPrepareQuest8 = JSON.parse(localStorage.getItem('progressPrepareQuest_8'));
    let progressPrepareQuestAll = progressPrepareQuest1 + progressPrepareQuest2 + progressPrepareQuest3 + progressPrepareQuest4 + progressPrepareQuest5 + progressPrepareQuest6 + progressPrepareQuest7 + progressPrepareQuest8;
    localStorage.setItem('progressPrepareAll', JSON.stringify(progressPrepareQuestAll));

    function prepareQuest_1() {
        if (localStorage.getItem('progressPrepareQuest_1_1') === null ||
            localStorage.getItem('progressPrepareQuest_1_2') === null ||
            localStorage.getItem('progressPrepareQuest_1_3') === null) {
            localStorage.setItem('progressPrepareQuest_1_1', JSON.stringify(0));
            localStorage.setItem('progressPrepareQuest_1_2', JSON.stringify(0));
            localStorage.setItem('progressPrepareQuest_1_3', JSON.stringify(0));
        }

        let progressPrepareQuest1_1 = JSON.parse(localStorage.getItem('progressPrepareQuest_1_1')),
            progressPrepareQuest1_2 = JSON.parse(localStorage.getItem('progressPrepareQuest_1_2')),
            progressPrepareQuest1_3 = JSON.parse(localStorage.getItem('progressPrepareQuest_1_3'))
        ;

        const categorySubStars_1 = document.getElementById('categoryElementStars_1'),
            categorySubQuest_2 = document.getElementById('categorySubPrepare_2')
        ;

        categorySubStars_1.id = 'categoryElementStars_1';
        const categoryElementStars_1 = document.getElementById('categoryElementStars_1');

        if (progressPrepareQuest1_1 === 1 &&
            progressPrepareQuest1_2 === 0 &&
            progressPrepareQuest1_3 === 0) {
            categorySubStars_1.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li></li>
        `;
        } else if (progressPrepareQuest1_1 === 1 &&
            progressPrepareQuest1_2 === 1 &&
            progressPrepareQuest1_3 === 0) {
            categorySubStars_1.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressPrepareQuest1_1 === 1 &&
            progressPrepareQuest1_2 === 1 &&
            progressPrepareQuest1_3 === 1) {
            categorySubStars_1.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressPrepareQuest1_1 === 0 &&
            progressPrepareQuest1_2 === 1 &&
            progressPrepareQuest1_3 === 0) {
            categorySubStars_1.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressPrepareQuest1_1 === 0 &&
            progressPrepareQuest1_2 === 0 &&
            progressPrepareQuest1_3 === 1) {
            categorySubStars_1.innerHTML = `
            <li></li>
            <li></li>
            <li class="fill"></li>
        `;
        } else if (progressPrepareQuest1_1 === 0 &&
            progressPrepareQuest1_2 === 1 &&
            progressPrepareQuest1_3 === 1) {
            categorySubStars_1.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressPrepareQuest1_1 === 1 &&
            progressPrepareQuest1_2 === 0 &&
            progressPrepareQuest1_3 === 1) {
            categorySubStars_1.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li class="fill"></li>
        `;
        }

        if (progressPrepareQuest1 >= 1) {
            categorySubQuest_2.className = 'category__element category__element_2';
        }
    }
    prepareQuest_1();

    function prepareQuest_2() {
        if (localStorage.getItem('progressPrepareQuest_2_1') === null ||
            localStorage.getItem('progressPrepareQuest_2_2') === null ||
            localStorage.getItem('progressPrepareQuest_2_3') === null) {
            localStorage.setItem('progressPrepareQuest_2_1', JSON.stringify(0));
            localStorage.setItem('progressPrepareQuest_2_2', JSON.stringify(0));
            localStorage.setItem('progressPrepareQuest_2_3', JSON.stringify(0));
        }

        let progressPrepareQuest2_1 = JSON.parse(localStorage.getItem('progressPrepareQuest_2_1')),
            progressPrepareQuest2_2 = JSON.parse(localStorage.getItem('progressPrepareQuest_2_2')),
            progressPrepareQuest2_3 = JSON.parse(localStorage.getItem('progressPrepareQuest_2_3'))
        ;

        const categorySubStars_2 = document.getElementById('categoryElementStars_2'),
            categorySubQuest_3 = document.getElementById('categorySubPrepare_3')
        ;

        categorySubStars_2.id = 'categoryElementStars_2';
        const categoryElementStars_2 = document.getElementById('categoryElementStars_2');

        if (progressPrepareQuest2_1 === 1 &&
            progressPrepareQuest2_2 === 0 &&
            progressPrepareQuest2_3 === 0) {
            categorySubStars_2.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li></li>
        `;
        } else if (progressPrepareQuest2_1 === 1 &&
            progressPrepareQuest2_2 === 1 &&
            progressPrepareQuest2_3 === 0) {
            categorySubStars_2.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressPrepareQuest2_1 === 1 &&
            progressPrepareQuest2_2 === 1 &&
            progressPrepareQuest2_3 === 1) {
            categorySubStars_2.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressPrepareQuest2_1 === 0 &&
            progressPrepareQuest2_2 === 1 &&
            progressPrepareQuest2_3 === 0) {
            categorySubStars_2.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressPrepareQuest2_1 === 0 &&
            progressPrepareQuest2_2 === 0 &&
            progressPrepareQuest2_3 === 1) {
            categorySubStars_2.innerHTML = `
            <li></li>
            <li></li>
            <li class="fill"></li>
        `;
        } else if (progressPrepareQuest2_1 === 0 &&
            progressPrepareQuest2_2 === 1 &&
            progressPrepareQuest2_3 === 1) {
            categorySubStars_2.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressPrepareQuest2_1 === 1 &&
            progressPrepareQuest2_2 === 0 &&
            progressPrepareQuest2_3 === 1) {
            categorySubStars_2.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li class="fill"></li>
        `;
        }

        if (progressPrepareQuest2 >= 1) {
            categorySubQuest_3.className = 'category__element category__element_3';
        }
    }
    prepareQuest_2();

    function prepareQuest_3() {
        if (localStorage.getItem('progressPrepareQuest_3_1') === null ||
            localStorage.getItem('progressPrepareQuest_3_2') === null ||
            localStorage.getItem('progressPrepareQuest_3_3') === null) {
            localStorage.setItem('progressPrepareQuest_3_1', JSON.stringify(0));
            localStorage.setItem('progressPrepareQuest_3_2', JSON.stringify(0));
            localStorage.setItem('progressPrepareQuest_3_3', JSON.stringify(0));
        }

        let progressPrepareQuest3_1 = JSON.parse(localStorage.getItem('progressPrepareQuest_3_1')),
            progressPrepareQuest3_2 = JSON.parse(localStorage.getItem('progressPrepareQuest_3_2')),
            progressPrepareQuest3_3 = JSON.parse(localStorage.getItem('progressPrepareQuest_3_3'))
        ;

        const categorySubStars_3 = document.getElementById('categoryElementStars_3'),
            categorySubQuest_4 = document.getElementById('categorySubPrepare_4')
        ;

        categorySubStars_3.id = 'categoryElementStars_3';
        const categoryElementStars_3 = document.getElementById('categoryElementStars_3');

        if (progressPrepareQuest3_1 === 1 &&
            progressPrepareQuest3_2 === 0 &&
            progressPrepareQuest3_3 === 0) {
            categorySubStars_3.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li></li>
        `;
        } else if (progressPrepareQuest3_1 === 1 &&
            progressPrepareQuest3_2 === 1 &&
            progressPrepareQuest3_3 === 0) {
            categorySubStars_3.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressPrepareQuest3_1 === 1 &&
            progressPrepareQuest3_2 === 1 &&
            progressPrepareQuest3_3 === 1) {
            categorySubStars_3.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressPrepareQuest3_1 === 0 &&
            progressPrepareQuest3_2 === 1 &&
            progressPrepareQuest3_3 === 0) {
            categorySubStars_3.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressPrepareQuest3_1 === 0 &&
            progressPrepareQuest3_2 === 0 &&
            progressPrepareQuest3_3 === 1) {
            categorySubStars_3.innerHTML = `
            <li></li>
            <li></li>
            <li class="fill"></li>
        `;
        } else if (progressPrepareQuest3_1 === 0 &&
            progressPrepareQuest3_2 === 1 &&
            progressPrepareQuest3_3 === 1) {
            categorySubStars_3.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressPrepareQuest3_1 === 1 &&
            progressPrepareQuest3_2 === 0 &&
            progressPrepareQuest3_3 === 1) {
            categorySubStars_3.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li class="fill"></li>
        `;
        }

        if (progressPrepareQuest3 >= 1) {
            categorySubQuest_4.className = 'category__element category__element_4';
        }
    }
    prepareQuest_3();

    function prepareQuest_4() {
        if (localStorage.getItem('progressPrepareQuest_4_1') === null ||
            localStorage.getItem('progressPrepareQuest_4_2') === null ||
            localStorage.getItem('progressPrepareQuest_4_3') === null) {
            localStorage.setItem('progressPrepareQuest_4_1', JSON.stringify(0));
            localStorage.setItem('progressPrepareQuest_4_2', JSON.stringify(0));
            localStorage.setItem('progressPrepareQuest_4_3', JSON.stringify(0));
        }

        let progressPrepareQuest4_1 = JSON.parse(localStorage.getItem('progressPrepareQuest_4_1')),
            progressPrepareQuest4_2 = JSON.parse(localStorage.getItem('progressPrepareQuest_4_2')),
            progressPrepareQuest4_3 = JSON.parse(localStorage.getItem('progressPrepareQuest_4_3'))
        ;

        const categorySubStars_4 = document.getElementById('categoryElementStars_4'),
            categorySubQuest_5 = document.getElementById('categorySubPrepare_5')
        ;

        categorySubStars_4.id = 'categoryElementStars_4';
        const categoryElementStars_4 = document.getElementById('categoryElementStars_4');

        if (progressPrepareQuest4_1 === 1 &&
            progressPrepareQuest4_2 === 0 &&
            progressPrepareQuest4_3 === 0) {
            categorySubStars_4.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li></li>
        `;
        } else if (progressPrepareQuest4_1 === 1 &&
            progressPrepareQuest4_2 === 1 &&
            progressPrepareQuest4_3 === 0) {
            categorySubStars_4.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressPrepareQuest4_1 === 1 &&
            progressPrepareQuest4_2 === 1 &&
            progressPrepareQuest4_3 === 1) {
            categorySubStars_4.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressPrepareQuest4_1 === 0 &&
            progressPrepareQuest4_2 === 1 &&
            progressPrepareQuest4_3 === 0) {
            categorySubStars_4.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressPrepareQuest4_1 === 0 &&
            progressPrepareQuest4_2 === 0 &&
            progressPrepareQuest4_3 === 1) {
            categorySubStars_4.innerHTML = `
            <li></li>
            <li></li>
            <li class="fill"></li>
        `;
        } else if (progressPrepareQuest4_1 === 0 &&
            progressPrepareQuest4_2 === 1 &&
            progressPrepareQuest4_3 === 1) {
            categorySubStars_4.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressPrepareQuest4_1 === 1 &&
            progressPrepareQuest4_2 === 0 &&
            progressPrepareQuest4_3 === 1) {
            categorySubStars_4.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li class="fill"></li>
        `;
        }

        if (progressPrepareQuest4 >= 1) {
            categorySubQuest_5.className = 'category__element category__element_5';
        }
    }
    prepareQuest_4();

    function prepareQuest_5() {
        if (localStorage.getItem('progressPrepareQuest_5_1') === null ||
            localStorage.getItem('progressPrepareQuest_5_2') === null ||
            localStorage.getItem('progressPrepareQuest_5_3') === null) {
            localStorage.setItem('progressPrepareQuest_5_1', JSON.stringify(0));
            localStorage.setItem('progressPrepareQuest_5_2', JSON.stringify(0));
            localStorage.setItem('progressPrepareQuest_5_3', JSON.stringify(0));
        }

        let progressPrepareQuest_5_1 = JSON.parse(localStorage.getItem('progressPrepareQuest_5_1')),
            progressPrepareQuest_5_2 = JSON.parse(localStorage.getItem('progressPrepareQuest_5_2')),
            progressPrepareQuest_5_3 = JSON.parse(localStorage.getItem('progressPrepareQuest_5_3'))
        ;

        const categorySubStars_5 = document.getElementById('categoryElementStars_5'),
            categorySubQuest_5 = document.getElementById('categorySubPrepare_5')
        ;

        categorySubStars_5.id = 'categoryElementStars_5';
        const categoryElementStars_5 = document.getElementById('categoryElementStars_5');

        if (progressPrepareQuest_5_1 === 1 &&
            progressPrepareQuest_5_2 === 0 &&
            progressPrepareQuest_5_3 === 0) {
            categorySubStars_5.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li></li>
        `;
        } else if (progressPrepareQuest_5_1 === 1 &&
            progressPrepareQuest_5_2 === 1 &&
            progressPrepareQuest_5_3 === 0) {
            categorySubStars_5.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressPrepareQuest_5_1 === 1 &&
            progressPrepareQuest_5_2 === 1 &&
            progressPrepareQuest_5_3 === 1) {
            categorySubStars_5.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressPrepareQuest_5_1 === 0 &&
            progressPrepareQuest_5_2 === 1 &&
            progressPrepareQuest_5_3 === 0) {
            categorySubStars_5.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressPrepareQuest_5_1 === 0 &&
            progressPrepareQuest_5_2 === 0 &&
            progressPrepareQuest_5_3 === 1) {
            categorySubStars_5.innerHTML = `
            <li></li>
            <li></li>
            <li class="fill"></li>
        `;
        } else if (progressPrepareQuest_5_1 === 0 &&
            progressPrepareQuest_5_2 === 1 &&
            progressPrepareQuest_5_3 === 1) {
            categorySubStars_5.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressPrepareQuest_5_1 === 1 &&
            progressPrepareQuest_5_2 === 0 &&
            progressPrepareQuest_5_3 === 1) {
            categorySubStars_5.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li class="fill"></li>
        `;
        }

        if (progressPrepareQuest4 >= 1) {
            categorySubQuest_5.className = 'category__element category__element_5';
        }
    }
    prepareQuest_5();

    function prepareQuest_6() {
        if (localStorage.getItem('progressPrepareQuest_6_1') === null ||
            localStorage.getItem('progressPrepareQuest_6_2') === null ||
            localStorage.getItem('progressPrepareQuest_6_3') === null) {
            localStorage.setItem('progressPrepareQuest_6_1', JSON.stringify(0));
            localStorage.setItem('progressPrepareQuest_6_2', JSON.stringify(0));
            localStorage.setItem('progressPrepareQuest_6_3', JSON.stringify(0));
        }

        let progressPrepareQuest_6_1 = JSON.parse(localStorage.getItem('progressPrepareQuest_6_1')),
            progressPrepareQuest_6_2 = JSON.parse(localStorage.getItem('progressPrepareQuest_6_2')),
            progressPrepareQuest_6_3 = JSON.parse(localStorage.getItem('progressPrepareQuest_6_3'))
        ;

        const categorySubStars_6 = document.getElementById('categoryElementStars_6'),
            categorySubQuest_6 = document.getElementById('categorySubPrepare_6')
        ;

        categorySubStars_6.id = 'categoryElementStars_6';
        const categoryElementStars_6 = document.getElementById('categoryElementStars_6');

        if (progressPrepareQuest_6_1 === 1 &&
            progressPrepareQuest_6_2 === 0 &&
            progressPrepareQuest_6_3 === 0) {
            categorySubStars_6.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li></li>
        `;
        } else if (progressPrepareQuest_6_1 === 1 &&
            progressPrepareQuest_6_2 === 1 &&
            progressPrepareQuest_6_3 === 0) {
            categorySubStars_6.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressPrepareQuest_6_1 === 1 &&
            progressPrepareQuest_6_2 === 1 &&
            progressPrepareQuest_6_3 === 1) {
            categorySubStars_6.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressPrepareQuest_6_1 === 0 &&
            progressPrepareQuest_6_2 === 1 &&
            progressPrepareQuest_6_3 === 0) {
            categorySubStars_6.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressPrepareQuest_6_1 === 0 &&
            progressPrepareQuest_6_2 === 0 &&
            progressPrepareQuest_6_3 === 1) {
            categorySubStars_6.innerHTML = `
            <li></li>
            <li></li>
            <li class="fill"></li>
        `;
        } else if (progressPrepareQuest_6_1 === 0 &&
            progressPrepareQuest_6_2 === 1 &&
            progressPrepareQuest_6_3 === 1) {
            categorySubStars_6.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressPrepareQuest_6_1 === 1 &&
            progressPrepareQuest_6_2 === 0 &&
            progressPrepareQuest_6_3 === 1) {
            categorySubStars_6.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li class="fill"></li>
        `;
        }

        if (progressPrepareQuest5 >= 1) {
            categorySubQuest_6.className = 'category__element category__element_6';
        }
    }
    prepareQuest_6();

    function prepareQuest_7() {
        if (localStorage.getItem('progressPrepareQuest_7_1') === null ||
            localStorage.getItem('progressPrepareQuest_7_2') === null ||
            localStorage.getItem('progressPrepareQuest_7_3') === null) {
            localStorage.setItem('progressPrepareQuest_7_1', JSON.stringify(0));
            localStorage.setItem('progressPrepareQuest_7_2', JSON.stringify(0));
            localStorage.setItem('progressPrepareQuest_7_3', JSON.stringify(0));
        }

        let progressPrepareQuest_7_1 = JSON.parse(localStorage.getItem('progressPrepareQuest_7_1')),
            progressPrepareQuest_7_2 = JSON.parse(localStorage.getItem('progressPrepareQuest_7_2')),
            progressPrepareQuest_7_3 = JSON.parse(localStorage.getItem('progressPrepareQuest_7_3'))
        ;

        const categorySubStars_7 = document.getElementById('categoryElementStars_7'),
            categorySubQuest_7 = document.getElementById('categorySubPrepare_7')
        ;

        categorySubStars_7.id = 'categoryElementStars_7';
        const categoryElementStars_7 = document.getElementById('categoryElementStars_7');

        if (progressPrepareQuest_7_1 === 1 &&
            progressPrepareQuest_7_2 === 0 &&
            progressPrepareQuest_7_3 === 0) {
            categorySubStars_7.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li></li>
        `;
        } else if (progressPrepareQuest_7_1 === 1 &&
            progressPrepareQuest_7_2 === 1 &&
            progressPrepareQuest_7_3 === 0) {
            categorySubStars_7.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressPrepareQuest_7_1 === 1 &&
            progressPrepareQuest_7_2 === 1 &&
            progressPrepareQuest_7_3 === 1) {
            categorySubStars_7.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressPrepareQuest_7_1 === 0 &&
            progressPrepareQuest_7_2 === 1 &&
            progressPrepareQuest_7_3 === 0) {
            categorySubStars_7.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressPrepareQuest_7_1 === 0 &&
            progressPrepareQuest_7_2 === 0 &&
            progressPrepareQuest_7_3 === 1) {
            categorySubStars_7.innerHTML = `
            <li></li>
            <li></li>
            <li class="fill"></li>
        `;
        } else if (progressPrepareQuest_7_1 === 0 &&
            progressPrepareQuest_7_2 === 1 &&
            progressPrepareQuest_7_3 === 1) {
            categorySubStars_7.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressPrepareQuest_7_1 === 1 &&
            progressPrepareQuest_7_2 === 0 &&
            progressPrepareQuest_7_3 === 1) {
            categorySubStars_7.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li class="fill"></li>
        `;
        }

        if (progressPrepareQuest6 >= 1) {
            categorySubQuest_7.className = 'category__element category__element_7';
        }
    }
    prepareQuest_7();

    function prepareQuest_8() {
        if (localStorage.getItem('progressPrepareQuest_8_1') === null ||
            localStorage.getItem('progressPrepareQuest_8_2') === null ||
            localStorage.getItem('progressPrepareQuest_8_3') === null) {
            localStorage.setItem('progressPrepareQuest_8_1', JSON.stringify(0));
            localStorage.setItem('progressPrepareQuest_8_2', JSON.stringify(0));
            localStorage.setItem('progressPrepareQuest_8_3', JSON.stringify(0));
        }

        let progressPrepareQuest_8_1 = JSON.parse(localStorage.getItem('progressPrepareQuest_8_1')),
            progressPrepareQuest_8_2 = JSON.parse(localStorage.getItem('progressPrepareQuest_8_2')),
            progressPrepareQuest_8_3 = JSON.parse(localStorage.getItem('progressPrepareQuest_8_3'))
        ;

        const categorySubStars_8 = document.getElementById('categoryElementStars_8'),
            categorySubQuest_8 = document.getElementById('categorySubPrepare_8')
        ;

        categorySubStars_8.id = 'categoryElementStars_8';
        const categoryElementStars_8 = document.getElementById('categoryElementStars_8');

        if (progressPrepareQuest_8_1 === 1 &&
            progressPrepareQuest_8_2 === 0 &&
            progressPrepareQuest_8_3 === 0) {
            categorySubStars_8.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li></li>
        `;
        } else if (progressPrepareQuest_8_1 === 1 &&
            progressPrepareQuest_8_2 === 1 &&
            progressPrepareQuest_8_3 === 0) {
            categorySubStars_8.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressPrepareQuest_8_1 === 1 &&
            progressPrepareQuest_8_2 === 1 &&
            progressPrepareQuest_8_3 === 1) {
            categorySubStars_8.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressPrepareQuest_8_1 === 0 &&
            progressPrepareQuest_8_2 === 1 &&
            progressPrepareQuest_8_3 === 0) {
            categorySubStars_8.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressPrepareQuest_8_1 === 0 &&
            progressPrepareQuest_8_2 === 0 &&
            progressPrepareQuest_8_3 === 1) {
            categorySubStars_8.innerHTML = `
            <li></li>
            <li></li>
            <li class="fill"></li>
        `;
        } else if (progressPrepareQuest_8_1 === 0 &&
            progressPrepareQuest_8_2 === 1 &&
            progressPrepareQuest_8_3 === 1) {
            categorySubStars_8.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressPrepareQuest_8_1 === 1 &&
            progressPrepareQuest_8_2 === 0 &&
            progressPrepareQuest_8_3 === 1) {
            categorySubStars_8.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li class="fill"></li>
        `;
        }

        if (progressPrepareQuest7 >= 1) {
            categorySubQuest_8.className = 'category__element category__element_8';
        }
    }
    prepareQuest_8();

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

    for (let i = 0; i < categorySubPrepareAll.length; i++) {
        if (categorySubPrepareAll[i].className !== 'category__element--hidden') {
            categorySubPrepareAll[i].addEventListener('click', () => {
                if (categorySubPrepareAll[i].className !== 'category__element--hidden') {
                    soundsLoad.rightAnswer('assets/games/cosmicpuzzles/sounds/cp_subCategoryQuest.ogg');
                }
            });
        }
    }

    categorySubPrepare_1.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadQuestPrepare_1();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubPrepare_2.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadQuestPrepare_2();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubPrepare_3.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadQuestPrepare_3();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubPrepare_4.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadQuestPrepare_4();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubPrepare_5.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadQuestPrepare_5();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubPrepare_6.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadQuestPrepare_6();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubPrepare_7.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadQuestPrepare_7();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubPrepare_8.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadQuestPrepare_8();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    let progressPrepareQuestSum = JSON.parse(localStorage.getItem('progressPrepareAll'));
    if (progressPrepareQuestSum === 24) {
        soundsLoad.rightAnswer('assets/games/cosmicpuzzles/sounds/cp_categoryAllRight.ogg');
    }
}