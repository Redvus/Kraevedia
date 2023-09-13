/* Запускаем вопросы в квтегории Полёт */
function kraevedCategory() {
    const kraevedCatLoad = new ChoiceCategory(),
        arrowBackLoad = new ArrowsAll();
    kraevedCatLoad.choiceCategory('Краевед', 'kraeved', 'Kraeved', 'Самарская Лука', 'Самара в зеркале истории', 'Районы, кварталы...', 'Вот дом, который построил...', 'Самара в лицах', 'Создано в Самаре', 'Культурная столица', 'Под мягким светом лампы и шелестом страниц', 'Литературная Самара', 'Очарованные странники');

    const containerWrapper = document.querySelector('.container__wrapper'),
        introAboutBack = document.querySelector('.wrapper__kraeved'),
        wrapperTopTitle = document.querySelector('.wrapper__top'),
        categorySubKraeved_1 = document.getElementById('categorySubKraeved_1'),
        categorySubKraeved_2 = document.getElementById('categorySubKraeved_2'),
        categorySubKraeved_3 = document.getElementById('categorySubKraeved_3'),
        categorySubKraeved_4 = document.getElementById('categorySubKraeved_4'),
        categorySubKraeved_5 = document.getElementById('categorySubKraeved_5'),
        categorySubKraeved_6 = document.getElementById('categorySubKraeved_6'),
        categorySubKraeved_7 = document.getElementById('categorySubKraeved_7'),
        categorySubKraeved_8 = document.getElementById('categorySubKraeved_8'),
        categorySubKraeved_9 = document.getElementById('categorySubKraeved_9'),
        categorySubKraeved_10 = document.getElementById('categorySubKraeved_10'),
        categorySubKraevedAll = [categorySubKraeved_1, categorySubKraeved_2, categorySubKraeved_3, categorySubKraeved_4, categorySubKraeved_5, categorySubKraeved_6, categorySubKraeved_7, categorySubKraeved_8, categorySubKraeved_9, categorySubKraeved_10]
    ;

    //Local Storage. Progress
    let progressKraevedQuest1 = JSON.parse(localStorage.getItem('progressKraevedQuest_1'));
    let progressKraevedQuest2 = JSON.parse(localStorage.getItem('progressKraevedQuest_2'));
    let progressKraevedQuest3 = JSON.parse(localStorage.getItem('progressKraevedQuest_3'));
    let progressKraevedQuest4 = JSON.parse(localStorage.getItem('progressKraevedQuest_4'));
    let progressKraevedQuest5 = JSON.parse(localStorage.getItem('progressKraevedQuest_5'));
    let progressKraevedQuest6 = JSON.parse(localStorage.getItem('progressKraevedQuest_6'));
    let progressKraevedQuest7 = JSON.parse(localStorage.getItem('progressKraevedQuest_7'));
    let progressKraevedQuest8 = JSON.parse(localStorage.getItem('progressKraevedQuest_8'));
    let progressKraevedQuest9 = JSON.parse(localStorage.getItem('progressKraevedQuest_9'));
    let progressKraevedQuest10 = JSON.parse(localStorage.getItem('progressKraevedQuest_10'));
    let progressKraevedQuestAll = progressKraevedQuest1 + progressKraevedQuest2 + progressKraevedQuest3 + progressKraevedQuest4 + progressKraevedQuest5 + progressKraevedQuest6 + progressKraevedQuest7 + progressKraevedQuest8 + progressKraevedQuest9 + progressKraevedQuest10;
    localStorage.setItem('progressKraevedAll', JSON.stringify(progressKraevedQuestAll));

    function kraevedQuest_1() {
        if (localStorage.getItem('progressKraevedQuest_1_1') === null ||
            localStorage.getItem('progressKraevedQuest_1_2') === null ||
            localStorage.getItem('progressKraevedQuest_1_3') === null) {
            localStorage.setItem('progressKraevedQuest_1_1', JSON.stringify(0));
            localStorage.setItem('progressKraevedQuest_1_2', JSON.stringify(0));
            localStorage.setItem('progressKraevedQuest_1_3', JSON.stringify(0));
        }

        let progressKraevedQuest1_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_1_1')),
            progressKraevedQuest1_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_1_2')),
            progressKraevedQuest1_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_1_3'))
        ;

        const categorySubStars_1 = document.getElementById('categoryElementStars_1'),
            categorySubQuest_2 = document.getElementById('categorySubKraeved_2')
        ;

        categorySubStars_1.id = 'categoryElementStars_1';
        const categoryElementStars_1 = document.getElementById('categoryElementStars_1');

        if (progressKraevedQuest1_1 === 1 &&
            progressKraevedQuest1_2 === 0 &&
            progressKraevedQuest1_3 === 0) {
            categorySubStars_1.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li></li>
        `;
        } else if (progressKraevedQuest1_1 === 1 &&
            progressKraevedQuest1_2 === 1 &&
            progressKraevedQuest1_3 === 0) {
            categorySubStars_1.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressKraevedQuest1_1 === 1 &&
            progressKraevedQuest1_2 === 1 &&
            progressKraevedQuest1_3 === 1) {
            categorySubStars_1.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressKraevedQuest1_1 === 0 &&
            progressKraevedQuest1_2 === 1 &&
            progressKraevedQuest1_3 === 0) {
            categorySubStars_1.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressKraevedQuest1_1 === 0 &&
            progressKraevedQuest1_2 === 0 &&
            progressKraevedQuest1_3 === 1) {
            categorySubStars_1.innerHTML = `
            <li></li>
            <li></li>
            <li class="fill"></li>
        `;
        } else if (progressKraevedQuest1_1 === 0 &&
            progressKraevedQuest1_2 === 1 &&
            progressKraevedQuest1_3 === 1) {
            categorySubStars_1.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressKraevedQuest1_1 === 1 &&
            progressKraevedQuest1_2 === 0 &&
            progressKraevedQuest1_3 === 1) {
            categorySubStars_1.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li class="fill"></li>
        `;
        }

        if (progressKraevedQuest1 >= 1) {
            categorySubQuest_2.className = 'category__element category__element_2';
        }
    }
    kraevedQuest_1();

    function kraevedQuest_2() {
        if (localStorage.getItem('progressKraevedQuest_2_1') === null ||
            localStorage.getItem('progressKraevedQuest_2_2') === null ||
            localStorage.getItem('progressKraevedQuest_2_3') === null) {
            localStorage.setItem('progressKraevedQuest_2_1', JSON.stringify(0));
            localStorage.setItem('progressKraevedQuest_2_2', JSON.stringify(0));
            localStorage.setItem('progressKraevedQuest_2_3', JSON.stringify(0));
        }

        let progressKraevedQuest2_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_2_1')),
            progressKraevedQuest2_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_2_2')),
            progressKraevedQuest2_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_2_3'))
        ;

        const categorySubStars_2 = document.getElementById('categoryElementStars_2'),
            categorySubQuest_3 = document.getElementById('categorySubKraeved_3')
        ;

        categorySubStars_2.id = 'categoryElementStars_2';
        const categoryElementStars_2 = document.getElementById('categoryElementStars_2');

        if (progressKraevedQuest2_1 === 1 &&
            progressKraevedQuest2_2 === 0 &&
            progressKraevedQuest2_3 === 0) {
            categorySubStars_2.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li></li>
        `;
        } else if (progressKraevedQuest2_1 === 1 &&
            progressKraevedQuest2_2 === 1 &&
            progressKraevedQuest2_3 === 0) {
            categorySubStars_2.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressKraevedQuest2_1 === 1 &&
            progressKraevedQuest2_2 === 1 &&
            progressKraevedQuest2_3 === 1) {
            categorySubStars_2.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressKraevedQuest2_1 === 0 &&
            progressKraevedQuest2_2 === 1 &&
            progressKraevedQuest2_3 === 0) {
            categorySubStars_2.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressKraevedQuest2_1 === 0 &&
            progressKraevedQuest2_2 === 0 &&
            progressKraevedQuest2_3 === 1) {
            categorySubStars_2.innerHTML = `
            <li></li>
            <li></li>
            <li class="fill"></li>
        `;
        } else if (progressKraevedQuest2_1 === 0 &&
            progressKraevedQuest2_2 === 1 &&
            progressKraevedQuest2_3 === 1) {
            categorySubStars_2.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressKraevedQuest2_1 === 1 &&
            progressKraevedQuest2_2 === 0 &&
            progressKraevedQuest2_3 === 1) {
            categorySubStars_2.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li class="fill"></li>
        `;
        }

        if (progressKraevedQuest2 >= 1) {
            categorySubQuest_3.className = 'category__element category__element_3';
        }
    }
    kraevedQuest_2();

    function kraevedQuest_3() {
        if (localStorage.getItem('progressKraevedQuest_3_1') === null ||
            localStorage.getItem('progressKraevedQuest_3_2') === null ||
            localStorage.getItem('progressKraevedQuest_3_3') === null) {
            localStorage.setItem('progressKraevedQuest_3_1', JSON.stringify(0));
            localStorage.setItem('progressKraevedQuest_3_2', JSON.stringify(0));
            localStorage.setItem('progressKraevedQuest_3_3', JSON.stringify(0));
        }

        let progressKraevedQuest3_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_3_1')),
            progressKraevedQuest3_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_3_2')),
            progressKraevedQuest3_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_3_3'))
        ;

        const categorySubStars_3 = document.getElementById('categoryElementStars_3'),
            categorySubQuest_4 = document.getElementById('categorySubKraeved_4')
        ;

        categorySubStars_3.id = 'categoryElementStars_3';
        const categoryElementStars_3 = document.getElementById('categoryElementStars_3');

        if (progressKraevedQuest3_1 === 1 &&
            progressKraevedQuest3_2 === 0 &&
            progressKraevedQuest3_3 === 0) {
            categorySubStars_3.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li></li>
        `;
        } else if (progressKraevedQuest3_1 === 1 &&
            progressKraevedQuest3_2 === 1 &&
            progressKraevedQuest3_3 === 0) {
            categorySubStars_3.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressKraevedQuest3_1 === 1 &&
            progressKraevedQuest3_2 === 1 &&
            progressKraevedQuest3_3 === 1) {
            categorySubStars_3.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressKraevedQuest3_1 === 0 &&
            progressKraevedQuest3_2 === 1 &&
            progressKraevedQuest3_3 === 0) {
            categorySubStars_3.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressKraevedQuest3_1 === 0 &&
            progressKraevedQuest3_2 === 0 &&
            progressKraevedQuest3_3 === 1) {
            categorySubStars_3.innerHTML = `
            <li></li>
            <li></li>
            <li class="fill"></li>
        `;
        } else if (progressKraevedQuest3_1 === 0 &&
            progressKraevedQuest3_2 === 1 &&
            progressKraevedQuest3_3 === 1) {
            categorySubStars_3.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressKraevedQuest3_1 === 1 &&
            progressKraevedQuest3_2 === 0 &&
            progressKraevedQuest3_3 === 1) {
            categorySubStars_3.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li class="fill"></li>
        `;
        }

        if (progressKraevedQuest3 >= 1) {
            categorySubQuest_4.className = 'category__element category__element_4';
        }
    }
    kraevedQuest_3();

    function kraevedQuest_4() {
        if (localStorage.getItem('progressKraevedQuest_4_1') === null ||
            localStorage.getItem('progressKraevedQuest_4_2') === null ||
            localStorage.getItem('progressKraevedQuest_4_3') === null) {
            localStorage.setItem('progressKraevedQuest_4_1', JSON.stringify(0));
            localStorage.setItem('progressKraevedQuest_4_2', JSON.stringify(0));
            localStorage.setItem('progressKraevedQuest_4_3', JSON.stringify(0));
        }

        let progressKraevedQuest4_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_4_1')),
            progressKraevedQuest4_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_4_2')),
            progressKraevedQuest4_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_4_3'))
        ;

        const categorySubStars_4 = document.getElementById('categoryElementStars_4'),
            categorySubQuest_5 = document.getElementById('categorySubKraeved_5')
        ;

        categorySubStars_4.id = 'categoryElementStars_4';
        const categoryElementStars_4 = document.getElementById('categoryElementStars_4');

        if (progressKraevedQuest4_1 === 1 &&
            progressKraevedQuest4_2 === 0 &&
            progressKraevedQuest4_3 === 0) {
            categorySubStars_4.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li></li>
        `;
        } else if (progressKraevedQuest4_1 === 1 &&
            progressKraevedQuest4_2 === 1 &&
            progressKraevedQuest4_3 === 0) {
            categorySubStars_4.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressKraevedQuest4_1 === 1 &&
            progressKraevedQuest4_2 === 1 &&
            progressKraevedQuest4_3 === 1) {
            categorySubStars_4.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressKraevedQuest4_1 === 0 &&
            progressKraevedQuest4_2 === 1 &&
            progressKraevedQuest4_3 === 0) {
            categorySubStars_4.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressKraevedQuest4_1 === 0 &&
            progressKraevedQuest4_2 === 0 &&
            progressKraevedQuest4_3 === 1) {
            categorySubStars_4.innerHTML = `
            <li></li>
            <li></li>
            <li class="fill"></li>
        `;
        } else if (progressKraevedQuest4_1 === 0 &&
            progressKraevedQuest4_2 === 1 &&
            progressKraevedQuest4_3 === 1) {
            categorySubStars_4.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressKraevedQuest4_1 === 1 &&
            progressKraevedQuest4_2 === 0 &&
            progressKraevedQuest4_3 === 1) {
            categorySubStars_4.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li class="fill"></li>
        `;
        }

        if (progressKraevedQuest4 >= 1) {
            categorySubQuest_5.className = 'category__element category__element_5';
        }
    }
    kraevedQuest_4();

    function kraevedQuest_5() {
        if (localStorage.getItem('progressKraevedQuest_5_1') === null ||
            localStorage.getItem('progressKraevedQuest_5_2') === null ||
            localStorage.getItem('progressKraevedQuest_5_3') === null) {
            localStorage.setItem('progressKraevedQuest_5_1', JSON.stringify(0));
            localStorage.setItem('progressKraevedQuest_5_2', JSON.stringify(0));
            localStorage.setItem('progressKraevedQuest_5_3', JSON.stringify(0));
        }

        let progressKraevedQuest_5_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_5_1')),
            progressKraevedQuest_5_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_5_2')),
            progressKraevedQuest_5_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_5_3'))
        ;

        const categorySubStars_5 = document.getElementById('categoryElementStars_5'),
            categorySubQuest_5 = document.getElementById('categorySubKraeved_5')
        ;

        categorySubStars_5.id = 'categoryElementStars_5';
        const categoryElementStars_5 = document.getElementById('categoryElementStars_5');

        if (progressKraevedQuest_5_1 === 1 &&
            progressKraevedQuest_5_2 === 0 &&
            progressKraevedQuest_5_3 === 0) {
            categorySubStars_5.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li></li>
        `;
        } else if (progressKraevedQuest_5_1 === 1 &&
            progressKraevedQuest_5_2 === 1 &&
            progressKraevedQuest_5_3 === 0) {
            categorySubStars_5.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressKraevedQuest_5_1 === 1 &&
            progressKraevedQuest_5_2 === 1 &&
            progressKraevedQuest_5_3 === 1) {
            categorySubStars_5.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressKraevedQuest_5_1 === 0 &&
            progressKraevedQuest_5_2 === 1 &&
            progressKraevedQuest_5_3 === 0) {
            categorySubStars_5.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressKraevedQuest_5_1 === 0 &&
            progressKraevedQuest_5_2 === 0 &&
            progressKraevedQuest_5_3 === 1) {
            categorySubStars_5.innerHTML = `
            <li></li>
            <li></li>
            <li class="fill"></li>
        `;
        } else if (progressKraevedQuest_5_1 === 0 &&
            progressKraevedQuest_5_2 === 1 &&
            progressKraevedQuest_5_3 === 1) {
            categorySubStars_5.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressKraevedQuest_5_1 === 1 &&
            progressKraevedQuest_5_2 === 0 &&
            progressKraevedQuest_5_3 === 1) {
            categorySubStars_5.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li class="fill"></li>
        `;
        }

        if (progressKraevedQuest4 >= 1) {
            categorySubQuest_5.className = 'category__element category__element_5';
        }
    }
    kraevedQuest_5();

    function kraevedQuest_6() {
        if (localStorage.getItem('progressKraevedQuest_6_1') === null ||
            localStorage.getItem('progressKraevedQuest_6_2') === null ||
            localStorage.getItem('progressKraevedQuest_6_3') === null) {
            localStorage.setItem('progressKraevedQuest_6_1', JSON.stringify(0));
            localStorage.setItem('progressKraevedQuest_6_2', JSON.stringify(0));
            localStorage.setItem('progressKraevedQuest_6_3', JSON.stringify(0));
        }

        let progressKraevedQuest_6_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_6_1')),
            progressKraevedQuest_6_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_6_2')),
            progressKraevedQuest_6_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_6_3'))
        ;

        const categorySubStars_6 = document.getElementById('categoryElementStars_6'),
            categorySubQuest_6 = document.getElementById('categorySubKraeved_6')
        ;

        categorySubStars_6.id = 'categoryElementStars_6';
        const categoryElementStars_6 = document.getElementById('categoryElementStars_6');

        if (progressKraevedQuest_6_1 === 1 &&
            progressKraevedQuest_6_2 === 0 &&
            progressKraevedQuest_6_3 === 0) {
            categorySubStars_6.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li></li>
        `;
        } else if (progressKraevedQuest_6_1 === 1 &&
            progressKraevedQuest_6_2 === 1 &&
            progressKraevedQuest_6_3 === 0) {
            categorySubStars_6.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressKraevedQuest_6_1 === 1 &&
            progressKraevedQuest_6_2 === 1 &&
            progressKraevedQuest_6_3 === 1) {
            categorySubStars_6.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressKraevedQuest_6_1 === 0 &&
            progressKraevedQuest_6_2 === 1 &&
            progressKraevedQuest_6_3 === 0) {
            categorySubStars_6.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressKraevedQuest_6_1 === 0 &&
            progressKraevedQuest_6_2 === 0 &&
            progressKraevedQuest_6_3 === 1) {
            categorySubStars_6.innerHTML = `
            <li></li>
            <li></li>
            <li class="fill"></li>
        `;
        } else if (progressKraevedQuest_6_1 === 0 &&
            progressKraevedQuest_6_2 === 1 &&
            progressKraevedQuest_6_3 === 1) {
            categorySubStars_6.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressKraevedQuest_6_1 === 1 &&
            progressKraevedQuest_6_2 === 0 &&
            progressKraevedQuest_6_3 === 1) {
            categorySubStars_6.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li class="fill"></li>
        `;
        }

        if (progressKraevedQuest5 >= 1) {
            categorySubQuest_6.className = 'category__element category__element_6';
        }
    }
    kraevedQuest_6();

    function kraevedQuest_7() {
        if (localStorage.getItem('progressKraevedQuest_7_1') === null ||
            localStorage.getItem('progressKraevedQuest_7_2') === null ||
            localStorage.getItem('progressKraevedQuest_7_3') === null) {
            localStorage.setItem('progressKraevedQuest_7_1', JSON.stringify(0));
            localStorage.setItem('progressKraevedQuest_7_2', JSON.stringify(0));
            localStorage.setItem('progressKraevedQuest_7_3', JSON.stringify(0));
        }

        let progressKraevedQuest_7_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_7_1')),
            progressKraevedQuest_7_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_7_2')),
            progressKraevedQuest_7_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_7_3'))
        ;

        const categorySubStars_7 = document.getElementById('categoryElementStars_7'),
            categorySubQuest_7 = document.getElementById('categorySubKraeved_7')
        ;

        categorySubStars_7.id = 'categoryElementStars_7';
        const categoryElementStars_7 = document.getElementById('categoryElementStars_7');

        if (progressKraevedQuest_7_1 === 1 &&
            progressKraevedQuest_7_2 === 0 &&
            progressKraevedQuest_7_3 === 0) {
            categorySubStars_7.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li></li>
        `;
        } else if (progressKraevedQuest_7_1 === 1 &&
            progressKraevedQuest_7_2 === 1 &&
            progressKraevedQuest_7_3 === 0) {
            categorySubStars_7.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressKraevedQuest_7_1 === 1 &&
            progressKraevedQuest_7_2 === 1 &&
            progressKraevedQuest_7_3 === 1) {
            categorySubStars_7.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressKraevedQuest_7_1 === 0 &&
            progressKraevedQuest_7_2 === 1 &&
            progressKraevedQuest_7_3 === 0) {
            categorySubStars_7.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressKraevedQuest_7_1 === 0 &&
            progressKraevedQuest_7_2 === 0 &&
            progressKraevedQuest_7_3 === 1) {
            categorySubStars_7.innerHTML = `
            <li></li>
            <li></li>
            <li class="fill"></li>
        `;
        } else if (progressKraevedQuest_7_1 === 0 &&
            progressKraevedQuest_7_2 === 1 &&
            progressKraevedQuest_7_3 === 1) {
            categorySubStars_7.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressKraevedQuest_7_1 === 1 &&
            progressKraevedQuest_7_2 === 0 &&
            progressKraevedQuest_7_3 === 1) {
            categorySubStars_7.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li class="fill"></li>
        `;
        }

        if (progressKraevedQuest6 >= 1) {
            categorySubQuest_7.className = 'category__element category__element_7';
        }
    }
    kraevedQuest_7();

    function kraevedQuest_8() {
        if (localStorage.getItem('progressKraevedQuest_8_1') === null ||
            localStorage.getItem('progressKraevedQuest_8_2') === null ||
            localStorage.getItem('progressKraevedQuest_8_3') === null) {
            localStorage.setItem('progressKraevedQuest_8_1', JSON.stringify(0));
            localStorage.setItem('progressKraevedQuest_8_2', JSON.stringify(0));
            localStorage.setItem('progressKraevedQuest_8_3', JSON.stringify(0));
        }

        let progressKraevedQuest_8_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_8_1')),
            progressKraevedQuest_8_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_8_2')),
            progressKraevedQuest_8_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_8_3'))
        ;

        const categorySubStars_8 = document.getElementById('categoryElementStars_8'),
            categorySubQuest_8 = document.getElementById('categorySubKraeved_8')
        ;

        categorySubStars_8.id = 'categoryElementStars_8';
        const categoryElementStars_8 = document.getElementById('categoryElementStars_8');

        if (progressKraevedQuest_8_1 === 1 &&
            progressKraevedQuest_8_2 === 0 &&
            progressKraevedQuest_8_3 === 0) {
            categorySubStars_8.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li></li>
        `;
        } else if (progressKraevedQuest_8_1 === 1 &&
            progressKraevedQuest_8_2 === 1 &&
            progressKraevedQuest_8_3 === 0) {
            categorySubStars_8.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressKraevedQuest_8_1 === 1 &&
            progressKraevedQuest_8_2 === 1 &&
            progressKraevedQuest_8_3 === 1) {
            categorySubStars_8.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressKraevedQuest_8_1 === 0 &&
            progressKraevedQuest_8_2 === 1 &&
            progressKraevedQuest_8_3 === 0) {
            categorySubStars_8.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressKraevedQuest_8_1 === 0 &&
            progressKraevedQuest_8_2 === 0 &&
            progressKraevedQuest_8_3 === 1) {
            categorySubStars_8.innerHTML = `
            <li></li>
            <li></li>
            <li class="fill"></li>
        `;
        } else if (progressKraevedQuest_8_1 === 0 &&
            progressKraevedQuest_8_2 === 1 &&
            progressKraevedQuest_8_3 === 1) {
            categorySubStars_8.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressKraevedQuest_8_1 === 1 &&
            progressKraevedQuest_8_2 === 0 &&
            progressKraevedQuest_8_3 === 1) {
            categorySubStars_8.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li class="fill"></li>
        `;
        }

        if (progressKraevedQuest7 >= 1) {
            categorySubQuest_8.className = 'category__element category__element_8';
        }
    }
    kraevedQuest_8();

    function kraevedQuest_9() {
        if (localStorage.getItem('progressKraevedQuest_9_1') === null ||
            localStorage.getItem('progressKraevedQuest_9_2') === null ||
            localStorage.getItem('progressKraevedQuest_9_3') === null) {
            localStorage.setItem('progressKraevedQuest_9_1', JSON.stringify(0));
            localStorage.setItem('progressKraevedQuest_9_2', JSON.stringify(0));
            localStorage.setItem('progressKraevedQuest_9_3', JSON.stringify(0));
        }

        let progressKraevedQuest_9_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_9_1')),
            progressKraevedQuest_9_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_9_2')),
            progressKraevedQuest_9_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_9_3'))
        ;

        const categorySubStars_9 = document.getElementById('categoryElementStars_9'),
            categorySubQuest_9 = document.getElementById('categorySubKraeved_9')
        ;

        categorySubStars_9.id = 'categoryElementStars_9';
        const categoryElementStars_9 = document.getElementById('categoryElementStars_9');

        if (progressKraevedQuest_9_1 === 1 &&
            progressKraevedQuest_9_2 === 0 &&
            progressKraevedQuest_9_3 === 0) {
            categorySubStars_9.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li></li>
        `;
        } else if (progressKraevedQuest_9_1 === 1 &&
            progressKraevedQuest_9_2 === 1 &&
            progressKraevedQuest_9_3 === 0) {
            categorySubStars_9.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressKraevedQuest_9_1 === 1 &&
            progressKraevedQuest_9_2 === 1 &&
            progressKraevedQuest_9_3 === 1) {
            categorySubStars_9.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressKraevedQuest_9_1 === 0 &&
            progressKraevedQuest_9_2 === 1 &&
            progressKraevedQuest_9_3 === 0) {
            categorySubStars_9.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressKraevedQuest_9_1 === 0 &&
            progressKraevedQuest_9_2 === 0 &&
            progressKraevedQuest_9_3 === 1) {
            categorySubStars_9.innerHTML = `
            <li></li>
            <li></li>
            <li class="fill"></li>
        `;
        } else if (progressKraevedQuest_9_1 === 0 &&
            progressKraevedQuest_9_2 === 1 &&
            progressKraevedQuest_9_3 === 1) {
            categorySubStars_9.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressKraevedQuest_9_1 === 1 &&
            progressKraevedQuest_9_2 === 0 &&
            progressKraevedQuest_9_3 === 1) {
            categorySubStars_9.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li class="fill"></li>
        `;
        }

        if (progressKraevedQuest8 >= 1) {
            categorySubQuest_9.className = 'category__element category__element_9';
        }
    }
    kraevedQuest_9();

    function kraevedQuest_10() {
        if (localStorage.getItem('progressKraevedQuest_10_1') === null ||
            localStorage.getItem('progressKraevedQuest_10_2') === null ||
            localStorage.getItem('progressKraevedQuest_10_3') === null) {
            localStorage.setItem('progressKraevedQuest_10_1', JSON.stringify(0));
            localStorage.setItem('progressKraevedQuest_10_2', JSON.stringify(0));
            localStorage.setItem('progressKraevedQuest_10_3', JSON.stringify(0));
        }

        let progressKraevedQuest_10_1 = JSON.parse(localStorage.getItem('progressKraevedQuest_10_1')),
            progressKraevedQuest_10_2 = JSON.parse(localStorage.getItem('progressKraevedQuest_10_2')),
            progressKraevedQuest_10_3 = JSON.parse(localStorage.getItem('progressKraevedQuest_10_3'))
        ;

        const categorySubStars_10 = document.getElementById('categoryElementStars_10'),
            categorySubQuest_10 = document.getElementById('categorySubKraeved_10')
        ;

        categorySubStars_10.id = 'categoryElementStars_10';
        const categoryElementStars_10 = document.getElementById('categoryElementStars_10');

        if (progressKraevedQuest_10_1 === 1 &&
            progressKraevedQuest_10_2 === 0 &&
            progressKraevedQuest_10_3 === 0) {
            categorySubStars_10.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li></li>
        `;
        } else if (progressKraevedQuest_10_1 === 1 &&
            progressKraevedQuest_10_2 === 1 &&
            progressKraevedQuest_10_3 === 0) {
            categorySubStars_10.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressKraevedQuest_10_1 === 1 &&
            progressKraevedQuest_10_2 === 1 &&
            progressKraevedQuest_10_3 === 1) {
            categorySubStars_10.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressKraevedQuest_10_1 === 0 &&
            progressKraevedQuest_10_2 === 1 &&
            progressKraevedQuest_10_3 === 0) {
            categorySubStars_10.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressKraevedQuest_10_1 === 0 &&
            progressKraevedQuest_10_2 === 0 &&
            progressKraevedQuest_10_3 === 1) {
            categorySubStars_10.innerHTML = `
            <li></li>
            <li></li>
            <li class="fill"></li>
        `;
        } else if (progressKraevedQuest_10_1 === 0 &&
            progressKraevedQuest_10_2 === 1 &&
            progressKraevedQuest_10_3 === 1) {
            categorySubStars_10.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressKraevedQuest_10_1 === 1 &&
            progressKraevedQuest_10_2 === 0 &&
            progressKraevedQuest_10_3 === 1) {
            categorySubStars_10.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li class="fill"></li>
        `;
        }

        if (progressKraevedQuest9 >= 1) {
            categorySubQuest_10.className = 'category__element category__element_10';
        }
    }
    kraevedQuest_10()

    arrowBackLoad.arrowBack();
    const arrowBackClick = document.getElementById('arrowBack');
    arrowBackClick.addEventListener('click', () => {
        let tl = gsap.timeline({
            autoAlpha: 0,
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                wrapper.removeChild(introAboutBack);
                wrapper.className = 'wrapper';
                categoryDev();
            }
        });
        tl
            .to(wrapperTopTitle, {
                duration: 0.4,
                autoAlpha: 0,
                y: '-3%'
            })
            .to(containerWrapper, {
                duration: 0.4,
                delay: '-0.2',
                autoAlpha: 0
            })
            .to(introAboutBack, {
                autoAlpha: 0,
                delay: '-0.1',
                scale: 0.98
            })
        ;
    });

    for (let i = 0; i < categorySubKraevedAll.length; i++) {
        if (categorySubKraevedAll[i].className !== 'category__element--hidden') {
            categorySubKraevedAll[i].addEventListener('click', () => {
                if (categorySubKraevedAll[i].className !== 'category__element--hidden') {
                    soundsLoad.rightAnswer('assets/games/cosmicpuzzles/sounds/cp_subCategoryQuest.ogg');
                }
            });
        }
    }

    categorySubKraeved_1.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadQuestKraeved_1();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubKraeved_2.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadQuestKraeved_2();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubKraeved_3.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadQuestKraeved_3();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubKraeved_4.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadQuestKraeved_4();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubKraeved_5.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadQuestKraeved_5();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubKraeved_6.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadQuestKraeved_6();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubKraeved_7.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadQuestKraeved_7();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubKraeved_8.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadQuestKraeved_8();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubKraeved_9.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadQuestKraeved_9();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubKraeved_10.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadQuestKraeved_10();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    let progressKraevedQuestSum = JSON.parse(localStorage.getItem('progressKraevedAll'));
    if (progressKraevedQuestSum === 50) {
        // soundsLoad.rightAnswer('assets/games/cosmicpuzzles/sounds/cp_categoryAllRight.ogg');
    }
}