/* Запускаем вопросы в квтегории Отбор */
function chicheroneCategory() {
    const chicheroneCatLoad = new ChoiceCategory(),
        arrowBackLoad = new ArrowsAll();
    chicheroneCatLoad.choiceCategory('Чичероне', 'chicherone', 'Chicherone', 'Самарская Лука', 'Самара в зеркале истории', 'Районы, кварталы...', 'Вот дом, который построил...', 'Самара в лицах', 'Создано в Самаре', 'Культурная столица', 'Под мягким светом лампы и шелестом страниц...', 'Литературная Самара', 'Очарованная Самара');

    const containerWrapper = document.querySelector('.container__wrapper'),
        introAboutBack = document.querySelector('.wrapper__chicherone'),
        wrapperTopTitle = document.querySelector('.wrapper__top'),
        categorySubChicherone_1 = document.getElementById('categorySubChicherone_1'),
        categorySubChicherone_2 = document.getElementById('categorySubChicherone_2'),
        categorySubChicherone_3 = document.getElementById('categorySubChicherone_3'),
        categorySubChicherone_4 = document.getElementById('categorySubChicherone_4'),
        categorySubChicherone_5 = document.getElementById('categorySubChicherone_5'),
        categorySubChicherone_6 = document.getElementById('categorySubChicherone_6'),
        categorySubChicherone_7 = document.getElementById('categorySubChicherone_7'),
        categorySubChicherone_8 = document.getElementById('categorySubChicherone_8'),
        categorySubChicherone_9 = document.getElementById('categorySubChicherone_9'),
        categorySubChicherone_10 = document.getElementById('categorySubChicherone_10'),
        categorySubChicheroneAll = [categorySubChicherone_1, categorySubChicherone_2, categorySubChicherone_3, categorySubChicherone_4, categorySubChicherone_5, categorySubChicherone_6, categorySubChicherone_7, categorySubChicherone_8, categorySubChicherone_9, categorySubChicherone_10]
    ;

    //Local Storage. Progress
    let progressChicheroneQuest1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_1'));
    let progressChicheroneQuest2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_2'));
    let progressChicheroneQuest3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_3'));
    let progressChicheroneQuest4 = JSON.parse(localStorage.getItem('progressChicheroneQuest_4'));
    let progressChicheroneQuest5 = JSON.parse(localStorage.getItem('progressChicheroneQuest_5'));
    let progressChicheroneQuest6 = JSON.parse(localStorage.getItem('progressChicheroneQuest_6'));
    let progressChicheroneQuest7 = JSON.parse(localStorage.getItem('progressChicheroneQuest_7'));
    let progressChicheroneQuest8 = JSON.parse(localStorage.getItem('progressChicheroneQuest_8'));
    let progressChicheroneQuest9 = JSON.parse(localStorage.getItem('progressChicheroneQuest_9'));
    let progressChicheroneQuest10 = JSON.parse(localStorage.getItem('progressChicheroneQuest_10'));
    let progressChicheroneQuestAll = progressChicheroneQuest1 + progressChicheroneQuest2 + progressChicheroneQuest3 + progressChicheroneQuest4 + progressChicheroneQuest5 + progressChicheroneQuest6 + progressChicheroneQuest7 + progressChicheroneQuest8 + progressChicheroneQuest9 + progressChicheroneQuest10;
    localStorage.setItem('progressChicheroneAll', JSON.stringify(progressChicheroneQuestAll));

    function chicheroneQuest_1() {
        if (localStorage.getItem('progressChicheroneQuest_1_1') === null ||
            localStorage.getItem('progressChicheroneQuest_1_2') === null ||
            localStorage.getItem('progressChicheroneQuest_1_3') === null) {
            localStorage.setItem('progressChicheroneQuest_1_1', JSON.stringify(0));
            localStorage.setItem('progressChicheroneQuest_1_2', JSON.stringify(0));
            localStorage.setItem('progressChicheroneQuest_1_3', JSON.stringify(0));
        }

        let progressChicheroneQuest1_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_1_1')),
            progressChicheroneQuest1_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_1_2')),
            progressChicheroneQuest1_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_1_3'))
        ;

        const categorySubStars_1 = document.getElementById('categoryElementStars_1'),
            categorySubQuest_2 = document.getElementById('categorySubChicherone_2')
        ;

        categorySubStars_1.id = 'categoryElementStars_1';
        const categoryElementStars_1 = document.getElementById('categoryElementStars_1');

        if (progressChicheroneQuest1_1 === 1 &&
            progressChicheroneQuest1_2 === 0 &&
            progressChicheroneQuest1_3 === 0) {
            categorySubStars_1.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li></li>
        `;
        } else if (progressChicheroneQuest1_1 === 1 &&
            progressChicheroneQuest1_2 === 1 &&
            progressChicheroneQuest1_3 === 0) {
            categorySubStars_1.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressChicheroneQuest1_1 === 1 &&
            progressChicheroneQuest1_2 === 1 &&
            progressChicheroneQuest1_3 === 1) {
            categorySubStars_1.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressChicheroneQuest1_1 === 0 &&
            progressChicheroneQuest1_2 === 1 &&
            progressChicheroneQuest1_3 === 0) {
            categorySubStars_1.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressChicheroneQuest1_1 === 0 &&
            progressChicheroneQuest1_2 === 0 &&
            progressChicheroneQuest1_3 === 1) {
            categorySubStars_1.innerHTML = `
            <li></li>
            <li></li>
            <li class="fill"></li>
        `;
        } else if (progressChicheroneQuest1_1 === 0 &&
            progressChicheroneQuest1_2 === 1 &&
            progressChicheroneQuest1_3 === 1) {
            categorySubStars_1.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressChicheroneQuest1_1 === 1 &&
            progressChicheroneQuest1_2 === 0 &&
            progressChicheroneQuest1_3 === 1) {
            categorySubStars_1.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li class="fill"></li>
        `;
        }

        if (progressChicheroneQuest1 >= 1) {
            categorySubQuest_2.className = 'category__element category__element_2';
        }
    }
    chicheroneQuest_1();

    function chicheroneQuest_2() {
        if (localStorage.getItem('progressChicheroneQuest_2_1') === null ||
            localStorage.getItem('progressChicheroneQuest_2_2') === null ||
            localStorage.getItem('progressChicheroneQuest_2_3') === null) {
            localStorage.setItem('progressChicheroneQuest_2_1', JSON.stringify(0));
            localStorage.setItem('progressChicheroneQuest_2_2', JSON.stringify(0));
            localStorage.setItem('progressChicheroneQuest_2_3', JSON.stringify(0));
        }

        let progressChicheroneQuest2_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_2_1')),
            progressChicheroneQuest2_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_2_2')),
            progressChicheroneQuest2_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_2_3'))
        ;

        const categorySubStars_2 = document.getElementById('categoryElementStars_2'),
            categorySubQuest_3 = document.getElementById('categorySubChicherone_3')
        ;

        categorySubStars_2.id = 'categoryElementStars_2';
        const categoryElementStars_2 = document.getElementById('categoryElementStars_2');

        if (progressChicheroneQuest2_1 === 1 &&
            progressChicheroneQuest2_2 === 0 &&
            progressChicheroneQuest2_3 === 0) {
            categorySubStars_2.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li></li>
        `;
        } else if (progressChicheroneQuest2_1 === 1 &&
            progressChicheroneQuest2_2 === 1 &&
            progressChicheroneQuest2_3 === 0) {
            categorySubStars_2.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressChicheroneQuest2_1 === 1 &&
            progressChicheroneQuest2_2 === 1 &&
            progressChicheroneQuest2_3 === 1) {
            categorySubStars_2.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressChicheroneQuest2_1 === 0 &&
            progressChicheroneQuest2_2 === 1 &&
            progressChicheroneQuest2_3 === 0) {
            categorySubStars_2.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressChicheroneQuest2_1 === 0 &&
            progressChicheroneQuest2_2 === 0 &&
            progressChicheroneQuest2_3 === 1) {
            categorySubStars_2.innerHTML = `
            <li></li>
            <li></li>
            <li class="fill"></li>
        `;
        } else if (progressChicheroneQuest2_1 === 0 &&
            progressChicheroneQuest2_2 === 1 &&
            progressChicheroneQuest2_3 === 1) {
            categorySubStars_2.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressChicheroneQuest2_1 === 1 &&
            progressChicheroneQuest2_2 === 0 &&
            progressChicheroneQuest2_3 === 1) {
            categorySubStars_2.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li class="fill"></li>
        `;
        }

        if (progressChicheroneQuest2 >= 1) {
            categorySubQuest_3.className = 'category__element category__element_3';
        }
    }
    chicheroneQuest_2();

    function chicheroneQuest_3() {
        if (localStorage.getItem('progressChicheroneQuest_3_1') === null ||
            localStorage.getItem('progressChicheroneQuest_3_2') === null ||
            localStorage.getItem('progressChicheroneQuest_3_3') === null) {
            localStorage.setItem('progressChicheroneQuest_3_1', JSON.stringify(0));
            localStorage.setItem('progressChicheroneQuest_3_2', JSON.stringify(0));
            localStorage.setItem('progressChicheroneQuest_3_3', JSON.stringify(0));
        }

        let progressChicheroneQuest3_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_3_1')),
            progressChicheroneQuest3_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_3_2')),
            progressChicheroneQuest3_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_3_3'))
        ;

        const categorySubStars_3 = document.getElementById('categoryElementStars_3'),
            categorySubQuest_4 = document.getElementById('categorySubChicherone_4')
        ;

        categorySubStars_3.id = 'categoryElementStars_3';
        const categoryElementStars_3 = document.getElementById('categoryElementStars_3');

        if (progressChicheroneQuest3_1 === 1 &&
            progressChicheroneQuest3_2 === 0 &&
            progressChicheroneQuest3_3 === 0) {
            categorySubStars_3.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li></li>
        `;
        } else if (progressChicheroneQuest3_1 === 1 &&
            progressChicheroneQuest3_2 === 1 &&
            progressChicheroneQuest3_3 === 0) {
            categorySubStars_3.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressChicheroneQuest3_1 === 1 &&
            progressChicheroneQuest3_2 === 1 &&
            progressChicheroneQuest3_3 === 1) {
            categorySubStars_3.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressChicheroneQuest3_1 === 0 &&
            progressChicheroneQuest3_2 === 1 &&
            progressChicheroneQuest3_3 === 0) {
            categorySubStars_3.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressChicheroneQuest3_1 === 0 &&
            progressChicheroneQuest3_2 === 0 &&
            progressChicheroneQuest3_3 === 1) {
            categorySubStars_3.innerHTML = `
            <li></li>
            <li></li>
            <li class="fill"></li>
        `;
        } else if (progressChicheroneQuest3_1 === 0 &&
            progressChicheroneQuest3_2 === 1 &&
            progressChicheroneQuest3_3 === 1) {
            categorySubStars_3.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressChicheroneQuest3_1 === 1 &&
            progressChicheroneQuest3_2 === 0 &&
            progressChicheroneQuest3_3 === 1) {
            categorySubStars_3.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li class="fill"></li>
        `;
        }

        if (progressChicheroneQuest3 >= 1) {
            categorySubQuest_4.className = 'category__element category__element_4';
        }
    }
    chicheroneQuest_3();

    function chicheroneQuest_4() {
        if (localStorage.getItem('progressChicheroneQuest_4_1') === null ||
            localStorage.getItem('progressChicheroneQuest_4_2') === null ||
            localStorage.getItem('progressChicheroneQuest_4_3') === null) {
            localStorage.setItem('progressChicheroneQuest_4_1', JSON.stringify(0));
            localStorage.setItem('progressChicheroneQuest_4_2', JSON.stringify(0));
            localStorage.setItem('progressChicheroneQuest_4_3', JSON.stringify(0));
        }

        let progressChicheroneQuest4_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_4_1')),
            progressChicheroneQuest4_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_4_2')),
            progressChicheroneQuest4_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_4_3'))
        ;

        const categorySubStars_4 = document.getElementById('categoryElementStars_4'),
            categorySubQuest_5 = document.getElementById('categorySubChicherone_5')
        ;

        categorySubStars_4.id = 'categoryElementStars_4';
        const categoryElementStars_4 = document.getElementById('categoryElementStars_4');

        if (progressChicheroneQuest4_1 === 1 &&
            progressChicheroneQuest4_2 === 0 &&
            progressChicheroneQuest4_3 === 0) {
            categorySubStars_4.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li></li>
        `;
        } else if (progressChicheroneQuest4_1 === 1 &&
            progressChicheroneQuest4_2 === 1 &&
            progressChicheroneQuest4_3 === 0) {
            categorySubStars_4.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressChicheroneQuest4_1 === 1 &&
            progressChicheroneQuest4_2 === 1 &&
            progressChicheroneQuest4_3 === 1) {
            categorySubStars_4.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressChicheroneQuest4_1 === 0 &&
            progressChicheroneQuest4_2 === 1 &&
            progressChicheroneQuest4_3 === 0) {
            categorySubStars_4.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressChicheroneQuest4_1 === 0 &&
            progressChicheroneQuest4_2 === 0 &&
            progressChicheroneQuest4_3 === 1) {
            categorySubStars_4.innerHTML = `
            <li></li>
            <li></li>
            <li class="fill"></li>
        `;
        } else if (progressChicheroneQuest4_1 === 0 &&
            progressChicheroneQuest4_2 === 1 &&
            progressChicheroneQuest4_3 === 1) {
            categorySubStars_4.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressChicheroneQuest4_1 === 1 &&
            progressChicheroneQuest4_2 === 0 &&
            progressChicheroneQuest4_3 === 1) {
            categorySubStars_4.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li class="fill"></li>
        `;
        }

        if (progressChicheroneQuest4 >= 1) {
            categorySubQuest_5.className = 'category__element category__element_5';
        }
    }
    chicheroneQuest_4();

    function chicheroneQuest_5() {
        if (localStorage.getItem('progressChicheroneQuest_5_1') === null ||
            localStorage.getItem('progressChicheroneQuest_5_2') === null ||
            localStorage.getItem('progressChicheroneQuest_5_3') === null) {
            localStorage.setItem('progressChicheroneQuest_5_1', JSON.stringify(0));
            localStorage.setItem('progressChicheroneQuest_5_2', JSON.stringify(0));
            localStorage.setItem('progressChicheroneQuest_5_3', JSON.stringify(0));
        }

        let progressChicheroneQuest_5_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_5_1')),
            progressChicheroneQuest_5_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_5_2')),
            progressChicheroneQuest_5_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_5_3'))
        ;

        const categorySubStars_5 = document.getElementById('categoryElementStars_5'),
            categorySubQuest_5 = document.getElementById('categorySubChicherone_5')
        ;

        categorySubStars_5.id = 'categoryElementStars_5';
        const categoryElementStars_5 = document.getElementById('categoryElementStars_5');

        if (progressChicheroneQuest_5_1 === 1 &&
            progressChicheroneQuest_5_2 === 0 &&
            progressChicheroneQuest_5_3 === 0) {
            categorySubStars_5.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li></li>
        `;
        } else if (progressChicheroneQuest_5_1 === 1 &&
            progressChicheroneQuest_5_2 === 1 &&
            progressChicheroneQuest_5_3 === 0) {
            categorySubStars_5.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressChicheroneQuest_5_1 === 1 &&
            progressChicheroneQuest_5_2 === 1 &&
            progressChicheroneQuest_5_3 === 1) {
            categorySubStars_5.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressChicheroneQuest_5_1 === 0 &&
            progressChicheroneQuest_5_2 === 1 &&
            progressChicheroneQuest_5_3 === 0) {
            categorySubStars_5.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressChicheroneQuest_5_1 === 0 &&
            progressChicheroneQuest_5_2 === 0 &&
            progressChicheroneQuest_5_3 === 1) {
            categorySubStars_5.innerHTML = `
            <li></li>
            <li></li>
            <li class="fill"></li>
        `;
        } else if (progressChicheroneQuest_5_1 === 0 &&
            progressChicheroneQuest_5_2 === 1 &&
            progressChicheroneQuest_5_3 === 1) {
            categorySubStars_5.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressChicheroneQuest_5_1 === 1 &&
            progressChicheroneQuest_5_2 === 0 &&
            progressChicheroneQuest_5_3 === 1) {
            categorySubStars_5.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li class="fill"></li>
        `;
        }

        if (progressChicheroneQuest4 >= 1) {
            categorySubQuest_5.className = 'category__element category__element_5';
        }
    }
    chicheroneQuest_5();

    function chicheroneQuest_6() {
        if (localStorage.getItem('progressChicheroneQuest_6_1') === null ||
            localStorage.getItem('progressChicheroneQuest_6_2') === null ||
            localStorage.getItem('progressChicheroneQuest_6_3') === null) {
            localStorage.setItem('progressChicheroneQuest_6_1', JSON.stringify(0));
            localStorage.setItem('progressChicheroneQuest_6_2', JSON.stringify(0));
            localStorage.setItem('progressChicheroneQuest_6_3', JSON.stringify(0));
        }

        let progressChicheroneQuest_6_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_6_1')),
            progressChicheroneQuest_6_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_6_2')),
            progressChicheroneQuest_6_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_6_3'))
        ;

        const categorySubStars_6 = document.getElementById('categoryElementStars_6'),
            categorySubQuest_6 = document.getElementById('categorySubChicherone_6')
        ;

        categorySubStars_6.id = 'categoryElementStars_6';
        const categoryElementStars_6 = document.getElementById('categoryElementStars_6');

        if (progressChicheroneQuest_6_1 === 1 &&
            progressChicheroneQuest_6_2 === 0 &&
            progressChicheroneQuest_6_3 === 0) {
            categorySubStars_6.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li></li>
        `;
        } else if (progressChicheroneQuest_6_1 === 1 &&
            progressChicheroneQuest_6_2 === 1 &&
            progressChicheroneQuest_6_3 === 0) {
            categorySubStars_6.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressChicheroneQuest_6_1 === 1 &&
            progressChicheroneQuest_6_2 === 1 &&
            progressChicheroneQuest_6_3 === 1) {
            categorySubStars_6.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressChicheroneQuest_6_1 === 0 &&
            progressChicheroneQuest_6_2 === 1 &&
            progressChicheroneQuest_6_3 === 0) {
            categorySubStars_6.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressChicheroneQuest_6_1 === 0 &&
            progressChicheroneQuest_6_2 === 0 &&
            progressChicheroneQuest_6_3 === 1) {
            categorySubStars_6.innerHTML = `
            <li></li>
            <li></li>
            <li class="fill"></li>
        `;
        } else if (progressChicheroneQuest_6_1 === 0 &&
            progressChicheroneQuest_6_2 === 1 &&
            progressChicheroneQuest_6_3 === 1) {
            categorySubStars_6.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressChicheroneQuest_6_1 === 1 &&
            progressChicheroneQuest_6_2 === 0 &&
            progressChicheroneQuest_6_3 === 1) {
            categorySubStars_6.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li class="fill"></li>
        `;
        }

        if (progressChicheroneQuest5 >= 1) {
            categorySubQuest_6.className = 'category__element category__element_6';
        }
    }
    chicheroneQuest_6();

    function chicheroneQuest_7() {
        if (localStorage.getItem('progressChicheroneQuest_7_1') === null ||
            localStorage.getItem('progressChicheroneQuest_7_2') === null ||
            localStorage.getItem('progressChicheroneQuest_7_3') === null) {
            localStorage.setItem('progressChicheroneQuest_7_1', JSON.stringify(0));
            localStorage.setItem('progressChicheroneQuest_7_2', JSON.stringify(0));
            localStorage.setItem('progressChicheroneQuest_7_3', JSON.stringify(0));
        }

        let progressChicheroneQuest_7_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_7_1')),
            progressChicheroneQuest_7_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_7_2')),
            progressChicheroneQuest_7_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_7_3'))
        ;

        const categorySubStars_7 = document.getElementById('categoryElementStars_7'),
            categorySubQuest_7 = document.getElementById('categorySubChicherone_7')
        ;

        categorySubStars_7.id = 'categoryElementStars_7';
        const categoryElementStars_7 = document.getElementById('categoryElementStars_7');

        if (progressChicheroneQuest_7_1 === 1 &&
            progressChicheroneQuest_7_2 === 0 &&
            progressChicheroneQuest_7_3 === 0) {
            categorySubStars_7.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li></li>
        `;
        } else if (progressChicheroneQuest_7_1 === 1 &&
            progressChicheroneQuest_7_2 === 1 &&
            progressChicheroneQuest_7_3 === 0) {
            categorySubStars_7.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressChicheroneQuest_7_1 === 1 &&
            progressChicheroneQuest_7_2 === 1 &&
            progressChicheroneQuest_7_3 === 1) {
            categorySubStars_7.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressChicheroneQuest_7_1 === 0 &&
            progressChicheroneQuest_7_2 === 1 &&
            progressChicheroneQuest_7_3 === 0) {
            categorySubStars_7.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressChicheroneQuest_7_1 === 0 &&
            progressChicheroneQuest_7_2 === 0 &&
            progressChicheroneQuest_7_3 === 1) {
            categorySubStars_7.innerHTML = `
            <li></li>
            <li></li>
            <li class="fill"></li>
        `;
        } else if (progressChicheroneQuest_7_1 === 0 &&
            progressChicheroneQuest_7_2 === 1 &&
            progressChicheroneQuest_7_3 === 1) {
            categorySubStars_7.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressChicheroneQuest_7_1 === 1 &&
            progressChicheroneQuest_7_2 === 0 &&
            progressChicheroneQuest_7_3 === 1) {
            categorySubStars_7.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li class="fill"></li>
        `;
        }

        if (progressChicheroneQuest6 >= 1) {
            categorySubQuest_7.className = 'category__element category__element_7';
        }
    }
    chicheroneQuest_7();

    function chicheroneQuest_8() {
        if (localStorage.getItem('progressChicheroneQuest_8_1') === null ||
            localStorage.getItem('progressChicheroneQuest_8_2') === null ||
            localStorage.getItem('progressChicheroneQuest_8_3') === null) {
            localStorage.setItem('progressChicheroneQuest_8_1', JSON.stringify(0));
            localStorage.setItem('progressChicheroneQuest_8_2', JSON.stringify(0));
            localStorage.setItem('progressChicheroneQuest_8_3', JSON.stringify(0));
        }

        let progressChicheroneQuest_8_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_8_1')),
            progressChicheroneQuest_8_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_8_2')),
            progressChicheroneQuest_8_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_8_3'))
        ;

        const categorySubStars_8 = document.getElementById('categoryElementStars_8'),
            categorySubQuest_8 = document.getElementById('categorySubChicherone_8')
        ;

        categorySubStars_8.id = 'categoryElementStars_8';
        const categoryElementStars_8 = document.getElementById('categoryElementStars_8');

        if (progressChicheroneQuest_8_1 === 1 &&
            progressChicheroneQuest_8_2 === 0 &&
            progressChicheroneQuest_8_3 === 0) {
            categorySubStars_8.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li></li>
        `;
        } else if (progressChicheroneQuest_8_1 === 1 &&
            progressChicheroneQuest_8_2 === 1 &&
            progressChicheroneQuest_8_3 === 0) {
            categorySubStars_8.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressChicheroneQuest_8_1 === 1 &&
            progressChicheroneQuest_8_2 === 1 &&
            progressChicheroneQuest_8_3 === 1) {
            categorySubStars_8.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressChicheroneQuest_8_1 === 0 &&
            progressChicheroneQuest_8_2 === 1 &&
            progressChicheroneQuest_8_3 === 0) {
            categorySubStars_8.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressChicheroneQuest_8_1 === 0 &&
            progressChicheroneQuest_8_2 === 0 &&
            progressChicheroneQuest_8_3 === 1) {
            categorySubStars_8.innerHTML = `
            <li></li>
            <li></li>
            <li class="fill"></li>
        `;
        } else if (progressChicheroneQuest_8_1 === 0 &&
            progressChicheroneQuest_8_2 === 1 &&
            progressChicheroneQuest_8_3 === 1) {
            categorySubStars_8.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressChicheroneQuest_8_1 === 1 &&
            progressChicheroneQuest_8_2 === 0 &&
            progressChicheroneQuest_8_3 === 1) {
            categorySubStars_8.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li class="fill"></li>
        `;
        }

        if (progressChicheroneQuest7 >= 1) {
            categorySubQuest_8.className = 'category__element category__element_8';
        }
    }
    chicheroneQuest_8();

    function chicheroneQuest_9() {
        if (localStorage.getItem('progressChicheroneQuest_9_1') === null ||
            localStorage.getItem('progressChicheroneQuest_9_2') === null ||
            localStorage.getItem('progressChicheroneQuest_9_3') === null) {
            localStorage.setItem('progressChicheroneQuest_9_1', JSON.stringify(0));
            localStorage.setItem('progressChicheroneQuest_9_2', JSON.stringify(0));
            localStorage.setItem('progressChicheroneQuest_9_3', JSON.stringify(0));
        }

        let progressChicheroneQuest_9_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_9_1')),
            progressChicheroneQuest_9_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_9_2')),
            progressChicheroneQuest_9_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_9_3'))
        ;

        const categorySubStars_9 = document.getElementById('categoryElementStars_9'),
            categorySubQuest_9 = document.getElementById('categorySubChicherone_9')
        ;

        categorySubStars_9.id = 'categoryElementStars_9';
        const categoryElementStars_9 = document.getElementById('categoryElementStars_9');

        if (progressChicheroneQuest_9_1 === 1 &&
            progressChicheroneQuest_9_2 === 0 &&
            progressChicheroneQuest_9_3 === 0) {
            categorySubStars_9.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li></li>
        `;
        } else if (progressChicheroneQuest_9_1 === 1 &&
            progressChicheroneQuest_9_2 === 1 &&
            progressChicheroneQuest_9_3 === 0) {
            categorySubStars_9.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressChicheroneQuest_9_1 === 1 &&
            progressChicheroneQuest_9_2 === 1 &&
            progressChicheroneQuest_9_3 === 1) {
            categorySubStars_9.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressChicheroneQuest_9_1 === 0 &&
            progressChicheroneQuest_9_2 === 1 &&
            progressChicheroneQuest_9_3 === 0) {
            categorySubStars_9.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressChicheroneQuest_9_1 === 0 &&
            progressChicheroneQuest_9_2 === 0 &&
            progressChicheroneQuest_9_3 === 1) {
            categorySubStars_9.innerHTML = `
            <li></li>
            <li></li>
            <li class="fill"></li>
        `;
        } else if (progressChicheroneQuest_9_1 === 0 &&
            progressChicheroneQuest_9_2 === 1 &&
            progressChicheroneQuest_9_3 === 1) {
            categorySubStars_9.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressChicheroneQuest_9_1 === 1 &&
            progressChicheroneQuest_9_2 === 0 &&
            progressChicheroneQuest_9_3 === 1) {
            categorySubStars_9.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li class="fill"></li>
        `;
        }

        if (progressChicheroneQuest8 >= 1) {
            categorySubQuest_9.className = 'category__element category__element_9';
        }
    }
    chicheroneQuest_9();

    function chicheroneQuest_10() {
        if (localStorage.getItem('progressChicheroneQuest_10_1') === null ||
            localStorage.getItem('progressChicheroneQuest_10_2') === null ||
            localStorage.getItem('progressChicheroneQuest_10_3') === null) {
            localStorage.setItem('progressChicheroneQuest_10_1', JSON.stringify(0));
            localStorage.setItem('progressChicheroneQuest_10_2', JSON.stringify(0));
            localStorage.setItem('progressChicheroneQuest_10_3', JSON.stringify(0));
        }

        let progressChicheroneQuest_10_1 = JSON.parse(localStorage.getItem('progressChicheroneQuest_10_1')),
            progressChicheroneQuest_10_2 = JSON.parse(localStorage.getItem('progressChicheroneQuest_10_2')),
            progressChicheroneQuest_10_3 = JSON.parse(localStorage.getItem('progressChicheroneQuest_10_3'))
        ;

        const categorySubStars_10 = document.getElementById('categoryElementStars_10'),
            categorySubQuest_10 = document.getElementById('categorySubChicherone_10')
        ;

        categorySubStars_10.id = 'categoryElementStars_10';
        const categoryElementStars_10 = document.getElementById('categoryElementStars_10');

        if (progressChicheroneQuest_10_1 === 1 &&
            progressChicheroneQuest_10_2 === 0 &&
            progressChicheroneQuest_10_3 === 0) {
            categorySubStars_10.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li></li>
        `;
        } else if (progressChicheroneQuest_10_1 === 1 &&
            progressChicheroneQuest_10_2 === 1 &&
            progressChicheroneQuest_10_3 === 0) {
            categorySubStars_10.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressChicheroneQuest_10_1 === 1 &&
            progressChicheroneQuest_10_2 === 1 &&
            progressChicheroneQuest_10_3 === 1) {
            categorySubStars_10.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressChicheroneQuest_10_1 === 0 &&
            progressChicheroneQuest_10_2 === 1 &&
            progressChicheroneQuest_10_3 === 0) {
            categorySubStars_10.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressChicheroneQuest_10_1 === 0 &&
            progressChicheroneQuest_10_2 === 0 &&
            progressChicheroneQuest_10_3 === 1) {
            categorySubStars_10.innerHTML = `
            <li></li>
            <li></li>
            <li class="fill"></li>
        `;
        } else if (progressChicheroneQuest_10_1 === 0 &&
            progressChicheroneQuest_10_2 === 1 &&
            progressChicheroneQuest_10_3 === 1) {
            categorySubStars_10.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressChicheroneQuest_10_1 === 1 &&
            progressChicheroneQuest_10_2 === 0 &&
            progressChicheroneQuest_10_3 === 1) {
            categorySubStars_10.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li class="fill"></li>
        `;
        }

        if (progressChicheroneQuest9 >= 1) {
            categorySubQuest_10.className = 'category__element category__element_10';
        }
    }
    chicheroneQuest_10();

    arrowBackLoad.arrowBack();
    const arrowBackClick = document.getElementById('arrowBack');
    arrowBackClick.addEventListener('click', () => {
        let tl = gsap.timeline({
            autoAlpha: 0,
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                wrapper.removeChild(introAboutBack);
                wrapper.removeChild(wrapperTopTitle);
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

    for (let i = 0; i < categorySubChicheroneAll.length; i++) {
        if (categorySubChicheroneAll[i].className !== 'category__element--hidden') {
            categorySubChicheroneAll[i].addEventListener('click', () => {
                if (categorySubChicheroneAll[i].className !== 'category__element--hidden') {
                    // soundsLoad.rightAnswer('assets/games/cosmicpuzzles/sounds/cp_subCategoryQuest.ogg');
                }
            });
        }
    }

    categorySubChicherone_1.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadQuestChicherone_1();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubChicherone_2.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadQuestChicherone_2();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubChicherone_3.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadQuestChicherone_3();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubChicherone_4.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadQuestChicherone_4();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubChicherone_5.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadQuestChicherone_5();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubChicherone_6.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadQuestChicherone_6();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubChicherone_7.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadQuestChicherone_7();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubChicherone_8.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadQuestChicherone_8();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubChicherone_9.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadQuestChicherone_9();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubChicherone_10.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadQuestChicherone_10();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    let progressChicheroneQuestSum = JSON.parse(localStorage.getItem('progressChicheroneAll'));
    if (progressChicheroneQuestSum === 50) {
        // soundsLoad.rightAnswer('assets/games/cosmicpuzzles/sounds/cp_categoryAllRight.ogg');
    }
}