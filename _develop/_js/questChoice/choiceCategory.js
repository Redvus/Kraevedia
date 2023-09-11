/* Запускаем вопросы в квтегории Отбор */
function choiceCategoryDev() {
    const choiceCatLoad = new ChoiceCategory(),
        arrowBackLoad = new ArrowsAll();
    choiceCatLoad.choiceCategory('Отбор', 'Choice');

    const containerWrapper = document.querySelector('.container__wrapper'),
        introAboutBack = document.querySelector('.wrapper__game'),
        categorySubChoice_1 = document.getElementById('categorySubChoice_1'),
        categorySubChoice_2 = document.getElementById('categorySubChoice_2'),
        categorySubChoice_3 = document.getElementById('categorySubChoice_3'),
        categorySubChoice_4 = document.getElementById('categorySubChoice_4'),
        categorySubChoice_5 = document.getElementById('categorySubChoice_5'),
        categorySubChoice_6 = document.getElementById('categorySubChoice_6'),
        categorySubChoice_7 = document.getElementById('categorySubChoice_7'),
        categorySubChoice_8 = document.getElementById('categorySubChoice_8'),
        categorySubChoiceAll = [categorySubChoice_1, categorySubChoice_2, categorySubChoice_3, categorySubChoice_4, categorySubChoice_5, categorySubChoice_6, categorySubChoice_7, categorySubChoice_8]
    ;

    //Local Storage. Progress
    let progressChoiceQuest1 = JSON.parse(localStorage.getItem('progressChoiceQuest_1'));
    let progressChoiceQuest2 = JSON.parse(localStorage.getItem('progressChoiceQuest_2'));
    let progressChoiceQuest3 = JSON.parse(localStorage.getItem('progressChoiceQuest_3'));
    let progressChoiceQuest4 = JSON.parse(localStorage.getItem('progressChoiceQuest_4'));
    let progressChoiceQuest5 = JSON.parse(localStorage.getItem('progressChoiceQuest_5'));
    let progressChoiceQuest6 = JSON.parse(localStorage.getItem('progressChoiceQuest_6'));
    let progressChoiceQuest7 = JSON.parse(localStorage.getItem('progressChoiceQuest_7'));
    let progressChoiceQuest8 = JSON.parse(localStorage.getItem('progressChoiceQuest_8'));
    let progressChoiceQuestAll = progressChoiceQuest1 + progressChoiceQuest2 + progressChoiceQuest3 + progressChoiceQuest4 + progressChoiceQuest5 + progressChoiceQuest6 + progressChoiceQuest7 + progressChoiceQuest8;
    localStorage.setItem('progressChoiceAll', JSON.stringify(progressChoiceQuestAll));

    function choiceQuest_1() {
        if (localStorage.getItem('progressChoiceQuest_1_1') === null ||
            localStorage.getItem('progressChoiceQuest_1_2') === null ||
            localStorage.getItem('progressChoiceQuest_1_3') === null) {
            localStorage.setItem('progressChoiceQuest_1_1', JSON.stringify(0));
            localStorage.setItem('progressChoiceQuest_1_2', JSON.stringify(0));
            localStorage.setItem('progressChoiceQuest_1_3', JSON.stringify(0));
        }

        let progressChoiceQuest1_1 = JSON.parse(localStorage.getItem('progressChoiceQuest_1_1')),
            progressChoiceQuest1_2 = JSON.parse(localStorage.getItem('progressChoiceQuest_1_2')),
            progressChoiceQuest1_3 = JSON.parse(localStorage.getItem('progressChoiceQuest_1_3'))
        ;

        const categorySubStars_1 = document.getElementById('categoryElementStars_1'),
            categorySubQuest_2 = document.getElementById('categorySubChoice_2')
        ;

        categorySubStars_1.id = 'categoryElementStars_1';
        const categoryElementStars_1 = document.getElementById('categoryElementStars_1');

        if (progressChoiceQuest1_1 === 1 &&
            progressChoiceQuest1_2 === 0 &&
            progressChoiceQuest1_3 === 0) {
            categorySubStars_1.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li></li>
        `;
        } else if (progressChoiceQuest1_1 === 1 &&
            progressChoiceQuest1_2 === 1 &&
            progressChoiceQuest1_3 === 0) {
            categorySubStars_1.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressChoiceQuest1_1 === 1 &&
            progressChoiceQuest1_2 === 1 &&
            progressChoiceQuest1_3 === 1) {
            categorySubStars_1.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressChoiceQuest1_1 === 0 &&
            progressChoiceQuest1_2 === 1 &&
            progressChoiceQuest1_3 === 0) {
            categorySubStars_1.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressChoiceQuest1_1 === 0 &&
            progressChoiceQuest1_2 === 0 &&
            progressChoiceQuest1_3 === 1) {
            categorySubStars_1.innerHTML = `
            <li></li>
            <li></li>
            <li class="fill"></li>
        `;
        } else if (progressChoiceQuest1_1 === 0 &&
            progressChoiceQuest1_2 === 1 &&
            progressChoiceQuest1_3 === 1) {
            categorySubStars_1.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressChoiceQuest1_1 === 1 &&
            progressChoiceQuest1_2 === 0 &&
            progressChoiceQuest1_3 === 1) {
            categorySubStars_1.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li class="fill"></li>
        `;
        }

        if (progressChoiceQuest1 >= 1) {
            categorySubQuest_2.className = 'category__element category__element_2';
        }
    }
    choiceQuest_1();

    function choiceQuest_2() {
        if (localStorage.getItem('progressChoiceQuest_2_1') === null ||
            localStorage.getItem('progressChoiceQuest_2_2') === null ||
            localStorage.getItem('progressChoiceQuest_2_3') === null) {
            localStorage.setItem('progressChoiceQuest_2_1', JSON.stringify(0));
            localStorage.setItem('progressChoiceQuest_2_2', JSON.stringify(0));
            localStorage.setItem('progressChoiceQuest_2_3', JSON.stringify(0));
        }

        let progressChoiceQuest2_1 = JSON.parse(localStorage.getItem('progressChoiceQuest_2_1')),
            progressChoiceQuest2_2 = JSON.parse(localStorage.getItem('progressChoiceQuest_2_2')),
            progressChoiceQuest2_3 = JSON.parse(localStorage.getItem('progressChoiceQuest_2_3'))
        ;

        const categorySubStars_2 = document.getElementById('categoryElementStars_2'),
            categorySubQuest_3 = document.getElementById('categorySubChoice_3')
        ;

        categorySubStars_2.id = 'categoryElementStars_2';
        const categoryElementStars_2 = document.getElementById('categoryElementStars_2');

        if (progressChoiceQuest2_1 === 1 &&
            progressChoiceQuest2_2 === 0 &&
            progressChoiceQuest2_3 === 0) {
            categorySubStars_2.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li></li>
        `;
        } else if (progressChoiceQuest2_1 === 1 &&
            progressChoiceQuest2_2 === 1 &&
            progressChoiceQuest2_3 === 0) {
            categorySubStars_2.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressChoiceQuest2_1 === 1 &&
            progressChoiceQuest2_2 === 1 &&
            progressChoiceQuest2_3 === 1) {
            categorySubStars_2.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressChoiceQuest2_1 === 0 &&
            progressChoiceQuest2_2 === 1 &&
            progressChoiceQuest2_3 === 0) {
            categorySubStars_2.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressChoiceQuest2_1 === 0 &&
            progressChoiceQuest2_2 === 0 &&
            progressChoiceQuest2_3 === 1) {
            categorySubStars_2.innerHTML = `
            <li></li>
            <li></li>
            <li class="fill"></li>
        `;
        } else if (progressChoiceQuest2_1 === 0 &&
            progressChoiceQuest2_2 === 1 &&
            progressChoiceQuest2_3 === 1) {
            categorySubStars_2.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressChoiceQuest2_1 === 1 &&
            progressChoiceQuest2_2 === 0 &&
            progressChoiceQuest2_3 === 1) {
            categorySubStars_2.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li class="fill"></li>
        `;
        }

        if (progressChoiceQuest2 >= 1) {
            categorySubQuest_3.className = 'category__element category__element_3';
        }
    }
    choiceQuest_2();

    function choiceQuest_3() {
        if (localStorage.getItem('progressChoiceQuest_3_1') === null ||
            localStorage.getItem('progressChoiceQuest_3_2') === null ||
            localStorage.getItem('progressChoiceQuest_3_3') === null) {
            localStorage.setItem('progressChoiceQuest_3_1', JSON.stringify(0));
            localStorage.setItem('progressChoiceQuest_3_2', JSON.stringify(0));
            localStorage.setItem('progressChoiceQuest_3_3', JSON.stringify(0));
        }

        let progressChoiceQuest3_1 = JSON.parse(localStorage.getItem('progressChoiceQuest_3_1')),
            progressChoiceQuest3_2 = JSON.parse(localStorage.getItem('progressChoiceQuest_3_2')),
            progressChoiceQuest3_3 = JSON.parse(localStorage.getItem('progressChoiceQuest_3_3'))
        ;

        const categorySubStars_3 = document.getElementById('categoryElementStars_3'),
            categorySubQuest_4 = document.getElementById('categorySubChoice_4')
        ;

        categorySubStars_3.id = 'categoryElementStars_3';
        const categoryElementStars_3 = document.getElementById('categoryElementStars_3');

        if (progressChoiceQuest3_1 === 1 &&
            progressChoiceQuest3_2 === 0 &&
            progressChoiceQuest3_3 === 0) {
            categorySubStars_3.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li></li>
        `;
        } else if (progressChoiceQuest3_1 === 1 &&
            progressChoiceQuest3_2 === 1 &&
            progressChoiceQuest3_3 === 0) {
            categorySubStars_3.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressChoiceQuest3_1 === 1 &&
            progressChoiceQuest3_2 === 1 &&
            progressChoiceQuest3_3 === 1) {
            categorySubStars_3.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressChoiceQuest3_1 === 0 &&
            progressChoiceQuest3_2 === 1 &&
            progressChoiceQuest3_3 === 0) {
            categorySubStars_3.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressChoiceQuest3_1 === 0 &&
            progressChoiceQuest3_2 === 0 &&
            progressChoiceQuest3_3 === 1) {
            categorySubStars_3.innerHTML = `
            <li></li>
            <li></li>
            <li class="fill"></li>
        `;
        } else if (progressChoiceQuest3_1 === 0 &&
            progressChoiceQuest3_2 === 1 &&
            progressChoiceQuest3_3 === 1) {
            categorySubStars_3.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressChoiceQuest3_1 === 1 &&
            progressChoiceQuest3_2 === 0 &&
            progressChoiceQuest3_3 === 1) {
            categorySubStars_3.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li class="fill"></li>
        `;
        }

        if (progressChoiceQuest3 >= 1) {
            categorySubQuest_4.className = 'category__element category__element_4';
        }
    }
    choiceQuest_3();

    function choiceQuest_4() {
        if (localStorage.getItem('progressChoiceQuest_4_1') === null ||
            localStorage.getItem('progressChoiceQuest_4_2') === null ||
            localStorage.getItem('progressChoiceQuest_4_3') === null) {
            localStorage.setItem('progressChoiceQuest_4_1', JSON.stringify(0));
            localStorage.setItem('progressChoiceQuest_4_2', JSON.stringify(0));
            localStorage.setItem('progressChoiceQuest_4_3', JSON.stringify(0));
        }

        let progressChoiceQuest4_1 = JSON.parse(localStorage.getItem('progressChoiceQuest_4_1')),
            progressChoiceQuest4_2 = JSON.parse(localStorage.getItem('progressChoiceQuest_4_2')),
            progressChoiceQuest4_3 = JSON.parse(localStorage.getItem('progressChoiceQuest_4_3'))
        ;

        const categorySubStars_4 = document.getElementById('categoryElementStars_4'),
            categorySubQuest_5 = document.getElementById('categorySubChoice_5')
        ;

        categorySubStars_4.id = 'categoryElementStars_4';
        const categoryElementStars_4 = document.getElementById('categoryElementStars_4');

        if (progressChoiceQuest4_1 === 1 &&
            progressChoiceQuest4_2 === 0 &&
            progressChoiceQuest4_3 === 0) {
            categorySubStars_4.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li></li>
        `;
        } else if (progressChoiceQuest4_1 === 1 &&
            progressChoiceQuest4_2 === 1 &&
            progressChoiceQuest4_3 === 0) {
            categorySubStars_4.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressChoiceQuest4_1 === 1 &&
            progressChoiceQuest4_2 === 1 &&
            progressChoiceQuest4_3 === 1) {
            categorySubStars_4.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressChoiceQuest4_1 === 0 &&
            progressChoiceQuest4_2 === 1 &&
            progressChoiceQuest4_3 === 0) {
            categorySubStars_4.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressChoiceQuest4_1 === 0 &&
            progressChoiceQuest4_2 === 0 &&
            progressChoiceQuest4_3 === 1) {
            categorySubStars_4.innerHTML = `
            <li></li>
            <li></li>
            <li class="fill"></li>
        `;
        } else if (progressChoiceQuest4_1 === 0 &&
            progressChoiceQuest4_2 === 1 &&
            progressChoiceQuest4_3 === 1) {
            categorySubStars_4.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressChoiceQuest4_1 === 1 &&
            progressChoiceQuest4_2 === 0 &&
            progressChoiceQuest4_3 === 1) {
            categorySubStars_4.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li class="fill"></li>
        `;
        }

        if (progressChoiceQuest4 >= 1) {
            categorySubQuest_5.className = 'category__element category__element_5';
        }
    }
    choiceQuest_4();

    function choiceQuest_5() {
        if (localStorage.getItem('progressChoiceQuest_5_1') === null ||
            localStorage.getItem('progressChoiceQuest_5_2') === null ||
            localStorage.getItem('progressChoiceQuest_5_3') === null) {
            localStorage.setItem('progressChoiceQuest_5_1', JSON.stringify(0));
            localStorage.setItem('progressChoiceQuest_5_2', JSON.stringify(0));
            localStorage.setItem('progressChoiceQuest_5_3', JSON.stringify(0));
        }

        let progressChoiceQuest_5_1 = JSON.parse(localStorage.getItem('progressChoiceQuest_5_1')),
            progressChoiceQuest_5_2 = JSON.parse(localStorage.getItem('progressChoiceQuest_5_2')),
            progressChoiceQuest_5_3 = JSON.parse(localStorage.getItem('progressChoiceQuest_5_3'))
        ;

        const categorySubStars_5 = document.getElementById('categoryElementStars_5'),
            categorySubQuest_5 = document.getElementById('categorySubChoice_5')
        ;

        categorySubStars_5.id = 'categoryElementStars_5';
        const categoryElementStars_5 = document.getElementById('categoryElementStars_5');

        if (progressChoiceQuest_5_1 === 1 &&
            progressChoiceQuest_5_2 === 0 &&
            progressChoiceQuest_5_3 === 0) {
            categorySubStars_5.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li></li>
        `;
        } else if (progressChoiceQuest_5_1 === 1 &&
            progressChoiceQuest_5_2 === 1 &&
            progressChoiceQuest_5_3 === 0) {
            categorySubStars_5.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressChoiceQuest_5_1 === 1 &&
            progressChoiceQuest_5_2 === 1 &&
            progressChoiceQuest_5_3 === 1) {
            categorySubStars_5.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressChoiceQuest_5_1 === 0 &&
            progressChoiceQuest_5_2 === 1 &&
            progressChoiceQuest_5_3 === 0) {
            categorySubStars_5.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressChoiceQuest_5_1 === 0 &&
            progressChoiceQuest_5_2 === 0 &&
            progressChoiceQuest_5_3 === 1) {
            categorySubStars_5.innerHTML = `
            <li></li>
            <li></li>
            <li class="fill"></li>
        `;
        } else if (progressChoiceQuest_5_1 === 0 &&
            progressChoiceQuest_5_2 === 1 &&
            progressChoiceQuest_5_3 === 1) {
            categorySubStars_5.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressChoiceQuest_5_1 === 1 &&
            progressChoiceQuest_5_2 === 0 &&
            progressChoiceQuest_5_3 === 1) {
            categorySubStars_5.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li class="fill"></li>
        `;
        }

        if (progressChoiceQuest4 >= 1) {
            categorySubQuest_5.className = 'category__element category__element_5';
        }
    }
    choiceQuest_5();

    function choiceQuest_6() {
        if (localStorage.getItem('progressChoiceQuest_6_1') === null ||
            localStorage.getItem('progressChoiceQuest_6_2') === null ||
            localStorage.getItem('progressChoiceQuest_6_3') === null) {
            localStorage.setItem('progressChoiceQuest_6_1', JSON.stringify(0));
            localStorage.setItem('progressChoiceQuest_6_2', JSON.stringify(0));
            localStorage.setItem('progressChoiceQuest_6_3', JSON.stringify(0));
        }

        let progressChoiceQuest_6_1 = JSON.parse(localStorage.getItem('progressChoiceQuest_6_1')),
            progressChoiceQuest_6_2 = JSON.parse(localStorage.getItem('progressChoiceQuest_6_2')),
            progressChoiceQuest_6_3 = JSON.parse(localStorage.getItem('progressChoiceQuest_6_3'))
        ;

        const categorySubStars_6 = document.getElementById('categoryElementStars_6'),
            categorySubQuest_6 = document.getElementById('categorySubChoice_6')
        ;

        categorySubStars_6.id = 'categoryElementStars_6';
        const categoryElementStars_6 = document.getElementById('categoryElementStars_6');

        if (progressChoiceQuest_6_1 === 1 &&
            progressChoiceQuest_6_2 === 0 &&
            progressChoiceQuest_6_3 === 0) {
            categorySubStars_6.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li></li>
        `;
        } else if (progressChoiceQuest_6_1 === 1 &&
            progressChoiceQuest_6_2 === 1 &&
            progressChoiceQuest_6_3 === 0) {
            categorySubStars_6.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressChoiceQuest_6_1 === 1 &&
            progressChoiceQuest_6_2 === 1 &&
            progressChoiceQuest_6_3 === 1) {
            categorySubStars_6.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressChoiceQuest_6_1 === 0 &&
            progressChoiceQuest_6_2 === 1 &&
            progressChoiceQuest_6_3 === 0) {
            categorySubStars_6.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressChoiceQuest_6_1 === 0 &&
            progressChoiceQuest_6_2 === 0 &&
            progressChoiceQuest_6_3 === 1) {
            categorySubStars_6.innerHTML = `
            <li></li>
            <li></li>
            <li class="fill"></li>
        `;
        } else if (progressChoiceQuest_6_1 === 0 &&
            progressChoiceQuest_6_2 === 1 &&
            progressChoiceQuest_6_3 === 1) {
            categorySubStars_6.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressChoiceQuest_6_1 === 1 &&
            progressChoiceQuest_6_2 === 0 &&
            progressChoiceQuest_6_3 === 1) {
            categorySubStars_6.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li class="fill"></li>
        `;
        }

        if (progressChoiceQuest5 >= 1) {
            categorySubQuest_6.className = 'category__element category__element_6';
        }
    }
    choiceQuest_6();

    function choiceQuest_7() {
        if (localStorage.getItem('progressChoiceQuest_7_1') === null ||
            localStorage.getItem('progressChoiceQuest_7_2') === null ||
            localStorage.getItem('progressChoiceQuest_7_3') === null) {
            localStorage.setItem('progressChoiceQuest_7_1', JSON.stringify(0));
            localStorage.setItem('progressChoiceQuest_7_2', JSON.stringify(0));
            localStorage.setItem('progressChoiceQuest_7_3', JSON.stringify(0));
        }

        let progressChoiceQuest_7_1 = JSON.parse(localStorage.getItem('progressChoiceQuest_7_1')),
            progressChoiceQuest_7_2 = JSON.parse(localStorage.getItem('progressChoiceQuest_7_2')),
            progressChoiceQuest_7_3 = JSON.parse(localStorage.getItem('progressChoiceQuest_7_3'))
        ;

        const categorySubStars_7 = document.getElementById('categoryElementStars_7'),
            categorySubQuest_7 = document.getElementById('categorySubChoice_7')
        ;

        categorySubStars_7.id = 'categoryElementStars_7';
        const categoryElementStars_7 = document.getElementById('categoryElementStars_7');

        if (progressChoiceQuest_7_1 === 1 &&
            progressChoiceQuest_7_2 === 0 &&
            progressChoiceQuest_7_3 === 0) {
            categorySubStars_7.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li></li>
        `;
        } else if (progressChoiceQuest_7_1 === 1 &&
            progressChoiceQuest_7_2 === 1 &&
            progressChoiceQuest_7_3 === 0) {
            categorySubStars_7.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressChoiceQuest_7_1 === 1 &&
            progressChoiceQuest_7_2 === 1 &&
            progressChoiceQuest_7_3 === 1) {
            categorySubStars_7.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressChoiceQuest_7_1 === 0 &&
            progressChoiceQuest_7_2 === 1 &&
            progressChoiceQuest_7_3 === 0) {
            categorySubStars_7.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressChoiceQuest_7_1 === 0 &&
            progressChoiceQuest_7_2 === 0 &&
            progressChoiceQuest_7_3 === 1) {
            categorySubStars_7.innerHTML = `
            <li></li>
            <li></li>
            <li class="fill"></li>
        `;
        } else if (progressChoiceQuest_7_1 === 0 &&
            progressChoiceQuest_7_2 === 1 &&
            progressChoiceQuest_7_3 === 1) {
            categorySubStars_7.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressChoiceQuest_7_1 === 1 &&
            progressChoiceQuest_7_2 === 0 &&
            progressChoiceQuest_7_3 === 1) {
            categorySubStars_7.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li class="fill"></li>
        `;
        }

        if (progressChoiceQuest6 >= 1) {
            categorySubQuest_7.className = 'category__element category__element_7';
        }
    }
    choiceQuest_7();

    function choiceQuest_8() {
        if (localStorage.getItem('progressChoiceQuest_8_1') === null ||
            localStorage.getItem('progressChoiceQuest_8_2') === null ||
            localStorage.getItem('progressChoiceQuest_8_3') === null) {
            localStorage.setItem('progressChoiceQuest_8_1', JSON.stringify(0));
            localStorage.setItem('progressChoiceQuest_8_2', JSON.stringify(0));
            localStorage.setItem('progressChoiceQuest_8_3', JSON.stringify(0));
        }

        let progressChoiceQuest_8_1 = JSON.parse(localStorage.getItem('progressChoiceQuest_8_1')),
            progressChoiceQuest_8_2 = JSON.parse(localStorage.getItem('progressChoiceQuest_8_2')),
            progressChoiceQuest_8_3 = JSON.parse(localStorage.getItem('progressChoiceQuest_8_3'))
        ;

        const categorySubStars_8 = document.getElementById('categoryElementStars_8'),
            categorySubQuest_8 = document.getElementById('categorySubChoice_8')
        ;

        categorySubStars_8.id = 'categoryElementStars_8';
        const categoryElementStars_8 = document.getElementById('categoryElementStars_8');

        if (progressChoiceQuest_8_1 === 1 &&
            progressChoiceQuest_8_2 === 0 &&
            progressChoiceQuest_8_3 === 0) {
            categorySubStars_8.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li></li>
        `;
        } else if (progressChoiceQuest_8_1 === 1 &&
            progressChoiceQuest_8_2 === 1 &&
            progressChoiceQuest_8_3 === 0) {
            categorySubStars_8.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressChoiceQuest_8_1 === 1 &&
            progressChoiceQuest_8_2 === 1 &&
            progressChoiceQuest_8_3 === 1) {
            categorySubStars_8.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressChoiceQuest_8_1 === 0 &&
            progressChoiceQuest_8_2 === 1 &&
            progressChoiceQuest_8_3 === 0) {
            categorySubStars_8.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressChoiceQuest_8_1 === 0 &&
            progressChoiceQuest_8_2 === 0 &&
            progressChoiceQuest_8_3 === 1) {
            categorySubStars_8.innerHTML = `
            <li></li>
            <li></li>
            <li class="fill"></li>
        `;
        } else if (progressChoiceQuest_8_1 === 0 &&
            progressChoiceQuest_8_2 === 1 &&
            progressChoiceQuest_8_3 === 1) {
            categorySubStars_8.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressChoiceQuest_8_1 === 1 &&
            progressChoiceQuest_8_2 === 0 &&
            progressChoiceQuest_8_3 === 1) {
            categorySubStars_8.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li class="fill"></li>
        `;
        }

        if (progressChoiceQuest7 >= 1) {
            categorySubQuest_8.className = 'category__element category__element_8';
        }
    }
    choiceQuest_8();

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

    for (let i = 0; i < categorySubChoiceAll.length; i++) {
        if (categorySubChoiceAll[i].className !== 'category__element--hidden') {
            categorySubChoiceAll[i].addEventListener('click', () => {
                if (categorySubChoiceAll[i].className !== 'category__element--hidden') {
                    soundsLoad.rightAnswer('assets/games/cosmicpuzzles/sounds/cp_subCategoryQuest.ogg');
                }
            });
        }
    }

    categorySubChoice_1.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadQuestReady_1();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubChoice_2.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadQuestReady_2();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubChoice_3.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadQuestReady_3();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubChoice_4.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadQuestReady_4();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubChoice_5.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadQuestReady_5();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubChoice_6.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadQuestReady_6();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubChoice_7.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadQuestReady_7();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubChoice_8.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadQuestReady_8();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    let progressChoiceQuestSum = JSON.parse(localStorage.getItem('progressChoiceAll'));
    if (progressChoiceQuestSum === 24) {
        soundsLoad.rightAnswer('assets/games/cosmicpuzzles/sounds/cp_categoryAllRight.ogg');
    }
}