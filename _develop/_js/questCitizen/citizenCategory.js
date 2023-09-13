/* Запускаем вопросы в категории Житель */
function citizenCategoryDev() {
    const choiceCatLoad = new ChoiceCategory(),
        arrowBackLoad = new ArrowsAll();
    choiceCatLoad.choiceCategory('Житель', 'citizen', 'Citizen', 'Самарская Лука', 'Самара в зеркале истории', 'Районы, кварталы...', 'Вот дом, который построил...', 'Самара в лицах', 'Создано в Самаре', 'Культурная столица', 'Под мягким светом лампы и шелестом страниц', 'Литературная Самара', 'Очарованные странники');

    const containerWrapper = document.querySelector('.container__wrapper'),
        introAboutBack = document.querySelector('.wrapper__citizen'),
        wrapperTopTitle = document.querySelector('.wrapper__top'),
        categorySubCitizen_1 = document.getElementById('categorySubCitizen_1'),
        categorySubCitizen_2 = document.getElementById('categorySubCitizen_2'),
        categorySubCitizen_3 = document.getElementById('categorySubCitizen_3'),
        categorySubCitizen_4 = document.getElementById('categorySubCitizen_4'),
        categorySubCitizen_5 = document.getElementById('categorySubCitizen_5'),
        categorySubCitizen_6 = document.getElementById('categorySubCitizen_6'),
        categorySubCitizen_7 = document.getElementById('categorySubCitizen_7'),
        categorySubCitizen_8 = document.getElementById('categorySubCitizen_8'),
        categorySubCitizen_9 = document.getElementById('categorySubCitizen_9'),
        categorySubCitizen_10 = document.getElementById('categorySubCitizen_10'),
        categorySubCitizenAll = [categorySubCitizen_1, categorySubCitizen_2, categorySubCitizen_3, categorySubCitizen_4, categorySubCitizen_5, categorySubCitizen_6, categorySubCitizen_7, categorySubCitizen_8, categorySubCitizen_9, categorySubCitizen_10]
    ;

    //Local Storage. Progress
    let progressCitizenQuest1 = JSON.parse(localStorage.getItem('progressCitizenQuest_1'));
    let progressCitizenQuest2 = JSON.parse(localStorage.getItem('progressCitizenQuest_2'));
    let progressCitizenQuest3 = JSON.parse(localStorage.getItem('progressCitizenQuest_3'));
    let progressCitizenQuest4 = JSON.parse(localStorage.getItem('progressCitizenQuest_4'));
    let progressCitizenQuest5 = JSON.parse(localStorage.getItem('progressCitizenQuest_5'));
    let progressCitizenQuest6 = JSON.parse(localStorage.getItem('progressCitizenQuest_6'));
    let progressCitizenQuest7 = JSON.parse(localStorage.getItem('progressCitizenQuest_7'));
    let progressCitizenQuest8 = JSON.parse(localStorage.getItem('progressCitizenQuest_8'));
    let progressCitizenQuest9 = JSON.parse(localStorage.getItem('progressCitizenQuest_9'));
    let progressCitizenQuest10 = JSON.parse(localStorage.getItem('progressCitizenQuest_10'));
    let progressCitizenQuestAll = progressCitizenQuest1 + progressCitizenQuest2 + progressCitizenQuest3 + progressCitizenQuest4 + progressCitizenQuest5 + progressCitizenQuest6 + progressCitizenQuest7 + progressCitizenQuest8 + progressCitizenQuest9 + progressCitizenQuest10;
    localStorage.setItem('progressCitizenAll', JSON.stringify(progressCitizenQuestAll));

    function citizenQuest_1() {
        if (localStorage.getItem('progressCitizenQuest_1_1') === null ||
            localStorage.getItem('progressCitizenQuest_1_2') === null ||
            localStorage.getItem('progressCitizenQuest_1_3') === null) {
            localStorage.setItem('progressCitizenQuest_1_1', JSON.stringify(0));
            localStorage.setItem('progressCitizenQuest_1_2', JSON.stringify(0));
            localStorage.setItem('progressCitizenQuest_1_3', JSON.stringify(0));
        }

        let progressCitizenQuest1_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_1_1')),
            progressCitizenQuest1_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_1_2')),
            progressCitizenQuest1_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_1_3'))
        ;

        const categorySubStars_1 = document.getElementById('categoryElementStars_1'),
            categorySubQuest_2 = document.getElementById('categorySubCitizen_2')
        ;

        categorySubStars_1.id = 'categoryElementStars_1';
        const categoryElementStars_1 = document.getElementById('categoryElementStars_1');

        if (progressCitizenQuest1_1 === 1 &&
            progressCitizenQuest1_2 === 0 &&
            progressCitizenQuest1_3 === 0) {
            categorySubStars_1.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li></li>
        `;
        } else if (progressCitizenQuest1_1 === 1 &&
            progressCitizenQuest1_2 === 1 &&
            progressCitizenQuest1_3 === 0) {
            categorySubStars_1.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressCitizenQuest1_1 === 1 &&
            progressCitizenQuest1_2 === 1 &&
            progressCitizenQuest1_3 === 1) {
            categorySubStars_1.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressCitizenQuest1_1 === 0 &&
            progressCitizenQuest1_2 === 1 &&
            progressCitizenQuest1_3 === 0) {
            categorySubStars_1.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressCitizenQuest1_1 === 0 &&
            progressCitizenQuest1_2 === 0 &&
            progressCitizenQuest1_3 === 1) {
            categorySubStars_1.innerHTML = `
            <li></li>
            <li></li>
            <li class="fill"></li>
        `;
        } else if (progressCitizenQuest1_1 === 0 &&
            progressCitizenQuest1_2 === 1 &&
            progressCitizenQuest1_3 === 1) {
            categorySubStars_1.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressCitizenQuest1_1 === 1 &&
            progressCitizenQuest1_2 === 0 &&
            progressCitizenQuest1_3 === 1) {
            categorySubStars_1.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li class="fill"></li>
        `;
        }

        if (progressCitizenQuest1 >= 1) {
            categorySubQuest_2.className = 'category__element category__element_2';
        }
    }
    citizenQuest_1();

    function citizenQuest_2() {
        if (localStorage.getItem('progressCitizenQuest_2_1') === null ||
            localStorage.getItem('progressCitizenQuest_2_2') === null ||
            localStorage.getItem('progressCitizenQuest_2_3') === null) {
            localStorage.setItem('progressCitizenQuest_2_1', JSON.stringify(0));
            localStorage.setItem('progressCitizenQuest_2_2', JSON.stringify(0));
            localStorage.setItem('progressCitizenQuest_2_3', JSON.stringify(0));
        }

        let progressCitizenQuest2_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_1')),
            progressCitizenQuest2_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_2')),
            progressCitizenQuest2_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_3'))
        ;

        const categorySubStars_2 = document.getElementById('categoryElementStars_2'),
            categorySubQuest_3 = document.getElementById('categorySubCitizen_3')
        ;

        categorySubStars_2.id = 'categoryElementStars_2';
        const categoryElementStars_2 = document.getElementById('categoryElementStars_2');

        if (progressCitizenQuest2_1 === 1 &&
            progressCitizenQuest2_2 === 0 &&
            progressCitizenQuest2_3 === 0) {
            categorySubStars_2.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li></li>
        `;
        } else if (progressCitizenQuest2_1 === 1 &&
            progressCitizenQuest2_2 === 1 &&
            progressCitizenQuest2_3 === 0) {
            categorySubStars_2.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressCitizenQuest2_1 === 1 &&
            progressCitizenQuest2_2 === 1 &&
            progressCitizenQuest2_3 === 1) {
            categorySubStars_2.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressCitizenQuest2_1 === 0 &&
            progressCitizenQuest2_2 === 1 &&
            progressCitizenQuest2_3 === 0) {
            categorySubStars_2.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressCitizenQuest2_1 === 0 &&
            progressCitizenQuest2_2 === 0 &&
            progressCitizenQuest2_3 === 1) {
            categorySubStars_2.innerHTML = `
            <li></li>
            <li></li>
            <li class="fill"></li>
        `;
        } else if (progressCitizenQuest2_1 === 0 &&
            progressCitizenQuest2_2 === 1 &&
            progressCitizenQuest2_3 === 1) {
            categorySubStars_2.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressCitizenQuest2_1 === 1 &&
            progressCitizenQuest2_2 === 0 &&
            progressCitizenQuest2_3 === 1) {
            categorySubStars_2.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li class="fill"></li>
        `;
        }

        if (progressCitizenQuest2 >= 1) {
            categorySubQuest_3.className = 'category__element category__element_3';
        }
    }
    citizenQuest_2();

    function citizenQuest_3() {
        if (localStorage.getItem('progressCitizenQuest_3_1') === null ||
            localStorage.getItem('progressCitizenQuest_3_2') === null ||
            localStorage.getItem('progressCitizenQuest_3_3') === null) {
            localStorage.setItem('progressCitizenQuest_3_1', JSON.stringify(0));
            localStorage.setItem('progressCitizenQuest_3_2', JSON.stringify(0));
            localStorage.setItem('progressCitizenQuest_3_3', JSON.stringify(0));
        }

        let progressCitizenQuest3_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_1')),
            progressCitizenQuest3_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_2')),
            progressCitizenQuest3_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_3'))
        ;

        const categorySubStars_3 = document.getElementById('categoryElementStars_3'),
            categorySubQuest_4 = document.getElementById('categorySubCitizen_4')
        ;

        categorySubStars_3.id = 'categoryElementStars_3';
        const categoryElementStars_3 = document.getElementById('categoryElementStars_3');

        if (progressCitizenQuest3_1 === 1 &&
            progressCitizenQuest3_2 === 0 &&
            progressCitizenQuest3_3 === 0) {
            categorySubStars_3.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li></li>
        `;
        } else if (progressCitizenQuest3_1 === 1 &&
            progressCitizenQuest3_2 === 1 &&
            progressCitizenQuest3_3 === 0) {
            categorySubStars_3.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressCitizenQuest3_1 === 1 &&
            progressCitizenQuest3_2 === 1 &&
            progressCitizenQuest3_3 === 1) {
            categorySubStars_3.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressCitizenQuest3_1 === 0 &&
            progressCitizenQuest3_2 === 1 &&
            progressCitizenQuest3_3 === 0) {
            categorySubStars_3.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressCitizenQuest3_1 === 0 &&
            progressCitizenQuest3_2 === 0 &&
            progressCitizenQuest3_3 === 1) {
            categorySubStars_3.innerHTML = `
            <li></li>
            <li></li>
            <li class="fill"></li>
        `;
        } else if (progressCitizenQuest3_1 === 0 &&
            progressCitizenQuest3_2 === 1 &&
            progressCitizenQuest3_3 === 1) {
            categorySubStars_3.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressCitizenQuest3_1 === 1 &&
            progressCitizenQuest3_2 === 0 &&
            progressCitizenQuest3_3 === 1) {
            categorySubStars_3.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li class="fill"></li>
        `;
        }

        if (progressCitizenQuest3 >= 1) {
            categorySubQuest_4.className = 'category__element category__element_4';
        }
    }
    citizenQuest_3();

    function citizenQuest_4() {
        if (localStorage.getItem('progressCitizenQuest_4_1') === null ||
            localStorage.getItem('progressCitizenQuest_4_2') === null ||
            localStorage.getItem('progressCitizenQuest_4_3') === null) {
            localStorage.setItem('progressCitizenQuest_4_1', JSON.stringify(0));
            localStorage.setItem('progressCitizenQuest_4_2', JSON.stringify(0));
            localStorage.setItem('progressCitizenQuest_4_3', JSON.stringify(0));
        }

        let progressCitizenQuest4_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_1')),
            progressCitizenQuest4_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_2')),
            progressCitizenQuest4_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_3'))
        ;

        const categorySubStars_4 = document.getElementById('categoryElementStars_4'),
            categorySubQuest_5 = document.getElementById('categorySubCitizen_5')
        ;

        categorySubStars_4.id = 'categoryElementStars_4';
        const categoryElementStars_4 = document.getElementById('categoryElementStars_4');

        if (progressCitizenQuest4_1 === 1 &&
            progressCitizenQuest4_2 === 0 &&
            progressCitizenQuest4_3 === 0) {
            categorySubStars_4.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li></li>
        `;
        } else if (progressCitizenQuest4_1 === 1 &&
            progressCitizenQuest4_2 === 1 &&
            progressCitizenQuest4_3 === 0) {
            categorySubStars_4.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressCitizenQuest4_1 === 1 &&
            progressCitizenQuest4_2 === 1 &&
            progressCitizenQuest4_3 === 1) {
            categorySubStars_4.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressCitizenQuest4_1 === 0 &&
            progressCitizenQuest4_2 === 1 &&
            progressCitizenQuest4_3 === 0) {
            categorySubStars_4.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressCitizenQuest4_1 === 0 &&
            progressCitizenQuest4_2 === 0 &&
            progressCitizenQuest4_3 === 1) {
            categorySubStars_4.innerHTML = `
            <li></li>
            <li></li>
            <li class="fill"></li>
        `;
        } else if (progressCitizenQuest4_1 === 0 &&
            progressCitizenQuest4_2 === 1 &&
            progressCitizenQuest4_3 === 1) {
            categorySubStars_4.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressCitizenQuest4_1 === 1 &&
            progressCitizenQuest4_2 === 0 &&
            progressCitizenQuest4_3 === 1) {
            categorySubStars_4.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li class="fill"></li>
        `;
        }

        if (progressCitizenQuest4 >= 1) {
            categorySubQuest_5.className = 'category__element category__element_5';
        }
    }
    citizenQuest_4();

    function citizenQuest_5() {
        if (localStorage.getItem('progressCitizenQuest_5_1') === null ||
            localStorage.getItem('progressCitizenQuest_5_2') === null ||
            localStorage.getItem('progressCitizenQuest_5_3') === null) {
            localStorage.setItem('progressCitizenQuest_5_1', JSON.stringify(0));
            localStorage.setItem('progressCitizenQuest_5_2', JSON.stringify(0));
            localStorage.setItem('progressCitizenQuest_5_3', JSON.stringify(0));
        }

        let progressCitizenQuest_5_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_1')),
            progressCitizenQuest_5_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_2')),
            progressCitizenQuest_5_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_3'))
        ;

        const categorySubStars_5 = document.getElementById('categoryElementStars_5'),
            categorySubQuest_6 = document.getElementById('categorySubCitizen_6')
        ;

        categorySubStars_5.id = 'categoryElementStars_5';
        const categoryElementStars_5 = document.getElementById('categoryElementStars_5');

        if (progressCitizenQuest_5_1 === 1 &&
            progressCitizenQuest_5_2 === 0 &&
            progressCitizenQuest_5_3 === 0) {
            categorySubStars_5.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li></li>
        `;
        } else if (progressCitizenQuest_5_1 === 1 &&
            progressCitizenQuest_5_2 === 1 &&
            progressCitizenQuest_5_3 === 0) {
            categorySubStars_5.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressCitizenQuest_5_1 === 1 &&
            progressCitizenQuest_5_2 === 1 &&
            progressCitizenQuest_5_3 === 1) {
            categorySubStars_5.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressCitizenQuest_5_1 === 0 &&
            progressCitizenQuest_5_2 === 1 &&
            progressCitizenQuest_5_3 === 0) {
            categorySubStars_5.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressCitizenQuest_5_1 === 0 &&
            progressCitizenQuest_5_2 === 0 &&
            progressCitizenQuest_5_3 === 1) {
            categorySubStars_5.innerHTML = `
            <li></li>
            <li></li>
            <li class="fill"></li>
        `;
        } else if (progressCitizenQuest_5_1 === 0 &&
            progressCitizenQuest_5_2 === 1 &&
            progressCitizenQuest_5_3 === 1) {
            categorySubStars_5.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressCitizenQuest_5_1 === 1 &&
            progressCitizenQuest_5_2 === 0 &&
            progressCitizenQuest_5_3 === 1) {
            categorySubStars_5.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li class="fill"></li>
        `;
        }

        if (progressCitizenQuest5 >= 1) {
            categorySubQuest_6.className = 'category__element category__element_6';
        }
    }
    citizenQuest_5();

    function citizenQuest_6() {
        if (localStorage.getItem('progressCitizenQuest_6_1') === null ||
            localStorage.getItem('progressCitizenQuest_6_2') === null ||
            localStorage.getItem('progressCitizenQuest_6_3') === null) {
            localStorage.setItem('progressCitizenQuest_6_1', JSON.stringify(0));
            localStorage.setItem('progressCitizenQuest_6_2', JSON.stringify(0));
            localStorage.setItem('progressCitizenQuest_6_3', JSON.stringify(0));
        }

        let progressCitizenQuest_6_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_1')),
            progressCitizenQuest_6_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_2')),
            progressCitizenQuest_6_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_3'))
        ;

        const categorySubStars_6 = document.getElementById('categoryElementStars_6'),
            categorySubQuest_7 = document.getElementById('categorySubCitizen_7')
        ;

        categorySubStars_6.id = 'categoryElementStars_6';
        const categoryElementStars_6 = document.getElementById('categoryElementStars_6');

        if (progressCitizenQuest_6_1 === 1 &&
            progressCitizenQuest_6_2 === 0 &&
            progressCitizenQuest_6_3 === 0) {
            categorySubStars_6.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li></li>
        `;
        } else if (progressCitizenQuest_6_1 === 1 &&
            progressCitizenQuest_6_2 === 1 &&
            progressCitizenQuest_6_3 === 0) {
            categorySubStars_6.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressCitizenQuest_6_1 === 1 &&
            progressCitizenQuest_6_2 === 1 &&
            progressCitizenQuest_6_3 === 1) {
            categorySubStars_6.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressCitizenQuest_6_1 === 0 &&
            progressCitizenQuest_6_2 === 1 &&
            progressCitizenQuest_6_3 === 0) {
            categorySubStars_6.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressCitizenQuest_6_1 === 0 &&
            progressCitizenQuest_6_2 === 0 &&
            progressCitizenQuest_6_3 === 1) {
            categorySubStars_6.innerHTML = `
            <li></li>
            <li></li>
            <li class="fill"></li>
        `;
        } else if (progressCitizenQuest_6_1 === 0 &&
            progressCitizenQuest_6_2 === 1 &&
            progressCitizenQuest_6_3 === 1) {
            categorySubStars_6.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressCitizenQuest_6_1 === 1 &&
            progressCitizenQuest_6_2 === 0 &&
            progressCitizenQuest_6_3 === 1) {
            categorySubStars_6.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li class="fill"></li>
        `;
        }

        if (progressCitizenQuest6 >= 1) {
            categorySubQuest_7.className = 'category__element category__element_7';
        }
    }
    citizenQuest_6();

    function citizenQuest_7() {
        if (localStorage.getItem('progressCitizenQuest_7_1') === null ||
            localStorage.getItem('progressCitizenQuest_7_2') === null ||
            localStorage.getItem('progressCitizenQuest_7_3') === null) {
            localStorage.setItem('progressCitizenQuest_7_1', JSON.stringify(0));
            localStorage.setItem('progressCitizenQuest_7_2', JSON.stringify(0));
            localStorage.setItem('progressCitizenQuest_7_3', JSON.stringify(0));
        }

        let progressCitizenQuest_7_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_1')),
            progressCitizenQuest_7_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_2')),
            progressCitizenQuest_7_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_3'))
        ;

        const categorySubStars_7 = document.getElementById('categoryElementStars_7'),
            categorySubQuest_8 = document.getElementById('categorySubCitizen_8')
        ;

        categorySubStars_7.id = 'categoryElementStars_7';
        const categoryElementStars_7 = document.getElementById('categoryElementStars_7');

        if (progressCitizenQuest_7_1 === 1 &&
            progressCitizenQuest_7_2 === 0 &&
            progressCitizenQuest_7_3 === 0) {
            categorySubStars_7.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li></li>
        `;
        } else if (progressCitizenQuest_7_1 === 1 &&
            progressCitizenQuest_7_2 === 1 &&
            progressCitizenQuest_7_3 === 0) {
            categorySubStars_7.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressCitizenQuest_7_1 === 1 &&
            progressCitizenQuest_7_2 === 1 &&
            progressCitizenQuest_7_3 === 1) {
            categorySubStars_7.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressCitizenQuest_7_1 === 0 &&
            progressCitizenQuest_7_2 === 1 &&
            progressCitizenQuest_7_3 === 0) {
            categorySubStars_7.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressCitizenQuest_7_1 === 0 &&
            progressCitizenQuest_7_2 === 0 &&
            progressCitizenQuest_7_3 === 1) {
            categorySubStars_7.innerHTML = `
            <li></li>
            <li></li>
            <li class="fill"></li>
        `;
        } else if (progressCitizenQuest_7_1 === 0 &&
            progressCitizenQuest_7_2 === 1 &&
            progressCitizenQuest_7_3 === 1) {
            categorySubStars_7.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressCitizenQuest_7_1 === 1 &&
            progressCitizenQuest_7_2 === 0 &&
            progressCitizenQuest_7_3 === 1) {
            categorySubStars_7.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li class="fill"></li>
        `;
        }

        if (progressCitizenQuest7 >= 1) {
            categorySubQuest_8.className = 'category__element category__element_8';
        }
    }
    citizenQuest_7();

    function citizenQuest_8() {
        if (localStorage.getItem('progressCitizenQuest_8_1') === null ||
            localStorage.getItem('progressCitizenQuest_8_2') === null ||
            localStorage.getItem('progressCitizenQuest_8_3') === null) {
            localStorage.setItem('progressCitizenQuest_8_1', JSON.stringify(0));
            localStorage.setItem('progressCitizenQuest_8_2', JSON.stringify(0));
            localStorage.setItem('progressCitizenQuest_8_3', JSON.stringify(0));
        }

        let progressCitizenQuest_8_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_1')),
            progressCitizenQuest_8_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_2')),
            progressCitizenQuest_8_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_3'))
        ;

        const categorySubStars_8 = document.getElementById('categoryElementStars_8'),
            categorySubQuest_9 = document.getElementById('categorySubCitizen_9')
        ;

        categorySubStars_8.id = 'categoryElementStars_8';
        const categoryElementStars_8 = document.getElementById('categoryElementStars_8');

        if (progressCitizenQuest_8_1 === 1 &&
            progressCitizenQuest_8_2 === 0 &&
            progressCitizenQuest_8_3 === 0) {
            categorySubStars_8.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li></li>
        `;
        } else if (progressCitizenQuest_8_1 === 1 &&
            progressCitizenQuest_8_2 === 1 &&
            progressCitizenQuest_8_3 === 0) {
            categorySubStars_8.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressCitizenQuest_8_1 === 1 &&
            progressCitizenQuest_8_2 === 1 &&
            progressCitizenQuest_8_3 === 1) {
            categorySubStars_8.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressCitizenQuest_8_1 === 0 &&
            progressCitizenQuest_8_2 === 1 &&
            progressCitizenQuest_8_3 === 0) {
            categorySubStars_8.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressCitizenQuest_8_1 === 0 &&
            progressCitizenQuest_8_2 === 0 &&
            progressCitizenQuest_8_3 === 1) {
            categorySubStars_8.innerHTML = `
            <li></li>
            <li></li>
            <li class="fill"></li>
        `;
        } else if (progressCitizenQuest_8_1 === 0 &&
            progressCitizenQuest_8_2 === 1 &&
            progressCitizenQuest_8_3 === 1) {
            categorySubStars_8.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressCitizenQuest_8_1 === 1 &&
            progressCitizenQuest_8_2 === 0 &&
            progressCitizenQuest_8_3 === 1) {
            categorySubStars_8.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li class="fill"></li>
        `;
        }

        if (progressCitizenQuest8 >= 1) {
            categorySubQuest_9.className = 'category__element category__element_9';
        }
    }
    citizenQuest_8();

    function citizenQuest_9() {
        if (localStorage.getItem('progressCitizenQuest_9_1') === null ||
            localStorage.getItem('progressCitizenQuest_9_2') === null ||
            localStorage.getItem('progressCitizenQuest_9_3') === null) {
            localStorage.setItem('progressCitizenQuest_9_1', JSON.stringify(0));
            localStorage.setItem('progressCitizenQuest_9_2', JSON.stringify(0));
            localStorage.setItem('progressCitizenQuest_9_3', JSON.stringify(0));
        }

        let progressCitizenQuest_9_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_1')),
            progressCitizenQuest_9_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_2')),
            progressCitizenQuest_9_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_3'))
        ;

        const categorySubStars_9 = document.getElementById('categoryElementStars_9'),
            categorySubQuest_10 = document.getElementById('categorySubCitizen_10')
        ;

        categorySubStars_9.id = 'categoryElementStars_9';
        const categoryElementStars_9 = document.getElementById('categoryElementStars_9');

        if (progressCitizenQuest_9_1 === 1 &&
            progressCitizenQuest_9_2 === 0 &&
            progressCitizenQuest_9_3 === 0) {
            categorySubStars_9.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li></li>
        `;
        } else if (progressCitizenQuest_9_1 === 1 &&
            progressCitizenQuest_9_2 === 1 &&
            progressCitizenQuest_9_3 === 0) {
            categorySubStars_9.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressCitizenQuest_9_1 === 1 &&
            progressCitizenQuest_9_2 === 1 &&
            progressCitizenQuest_9_3 === 1) {
            categorySubStars_9.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressCitizenQuest_9_1 === 0 &&
            progressCitizenQuest_9_2 === 1 &&
            progressCitizenQuest_9_3 === 0) {
            categorySubStars_9.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressCitizenQuest_9_1 === 0 &&
            progressCitizenQuest_9_2 === 0 &&
            progressCitizenQuest_9_3 === 1) {
            categorySubStars_9.innerHTML = `
            <li></li>
            <li></li>
            <li class="fill"></li>
        `;
        } else if (progressCitizenQuest_9_1 === 0 &&
            progressCitizenQuest_9_2 === 1 &&
            progressCitizenQuest_9_3 === 1) {
            categorySubStars_9.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressCitizenQuest_9_1 === 1 &&
            progressCitizenQuest_9_2 === 0 &&
            progressCitizenQuest_9_3 === 1) {
            categorySubStars_9.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li class="fill"></li>
        `;
        }

        if (progressCitizenQuest9 >= 1) {
            categorySubQuest_10.className = 'category__element category__element_10';
        }
    }
    citizenQuest_9();

    function citizenQuest_10() {
        if (localStorage.getItem('progressCitizenQuest_10_1') === null ||
            localStorage.getItem('progressCitizenQuest_10_2') === null ||
            localStorage.getItem('progressCitizenQuest_10_3') === null) {
            localStorage.setItem('progressCitizenQuest_10_1', JSON.stringify(0));
            localStorage.setItem('progressCitizenQuest_10_2', JSON.stringify(0));
            localStorage.setItem('progressCitizenQuest_10_3', JSON.stringify(0));
        }

        let progressCitizenQuest_10_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_1')),
            progressCitizenQuest_10_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_2')),
            progressCitizenQuest_10_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_3'))
        ;

        const categorySubStars_10 = document.getElementById('categoryElementStars_10'),
            categorySubQuest_10 = document.getElementById('categorySubCitizen_10')
        ;

        categorySubStars_10.id = 'categoryElementStars_10';
        const categoryElementStars_10 = document.getElementById('categoryElementStars_10');

        if (progressCitizenQuest_10_1 === 1 &&
            progressCitizenQuest_10_2 === 0 &&
            progressCitizenQuest_10_3 === 0) {
            categorySubStars_10.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li></li>
        `;
        } else if (progressCitizenQuest_10_1 === 1 &&
            progressCitizenQuest_10_2 === 1 &&
            progressCitizenQuest_10_3 === 0) {
            categorySubStars_10.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressCitizenQuest_10_1 === 1 &&
            progressCitizenQuest_10_2 === 1 &&
            progressCitizenQuest_10_3 === 1) {
            categorySubStars_10.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressCitizenQuest_10_1 === 0 &&
            progressCitizenQuest_10_2 === 1 &&
            progressCitizenQuest_10_3 === 0) {
            categorySubStars_10.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li></li>
        `;
        } else if (progressCitizenQuest_10_1 === 0 &&
            progressCitizenQuest_10_2 === 0 &&
            progressCitizenQuest_10_3 === 1) {
            categorySubStars_10.innerHTML = `
            <li></li>
            <li></li>
            <li class="fill"></li>
        `;
        } else if (progressCitizenQuest_10_1 === 0 &&
            progressCitizenQuest_10_2 === 1 &&
            progressCitizenQuest_10_3 === 1) {
            categorySubStars_10.innerHTML = `
            <li></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
        } else if (progressCitizenQuest_10_1 === 1 &&
            progressCitizenQuest_10_2 === 0 &&
            progressCitizenQuest_10_3 === 1) {
            categorySubStars_10.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li class="fill"></li>
        `;
        }

        // if (progressCitizenQuest9 >= 1) {
        //     categorySubQuest_10.className = 'category__element category__element_10';
        // }
    }
    citizenQuest_10();

    arrowBackLoad.arrowBack();
    const arrowBackClick = document.getElementById('arrowBack');
    arrowBackClick.addEventListener('click', () => {
        let tl = gsap.timeline( {
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

    for (let i = 0; i < categorySubCitizenAll.length; i++) {
        if (categorySubCitizenAll[i].className !== 'category__element--hidden') {
            categorySubCitizenAll[i].addEventListener('click', () => {
                if (categorySubCitizenAll[i].className !== 'category__element--hidden') {
                    // soundsLoad.rightAnswer('assets/games/kraevedia/sounds/cp_subCategoryQuest.ogg');
                }
            });
        }
    }

    categorySubCitizen_1.addEventListener('click', () => {
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

    categorySubCitizen_2.addEventListener('click', () => {
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

    categorySubCitizen_3.addEventListener('click', () => {
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

    categorySubCitizen_4.addEventListener('click', () => {
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

    categorySubCitizen_5.addEventListener('click', () => {
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

    categorySubCitizen_6.addEventListener('click', () => {
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

    categorySubCitizen_7.addEventListener('click', () => {
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

    categorySubCitizen_8.addEventListener('click', () => {
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

    categorySubCitizen_9.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadQuestReady_9();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    categorySubCitizen_10.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadQuestReady_10();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });

    let progressCitizenQuestSum = JSON.parse(localStorage.getItem('progressCitizenAll'));
    if (progressCitizenQuestSum === 50) {
        // soundsLoad.rightAnswer('assets/games/kraevedia/sounds/cp_categoryAllRight.ogg');
    }
}