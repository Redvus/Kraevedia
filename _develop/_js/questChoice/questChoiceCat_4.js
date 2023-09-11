if (localStorage.getItem('progressChoiceQuest_4') === null) {
    localStorage.setItem('progressChoiceQuest_4', JSON.stringify(0));
}

function questionChoiceCat_4_1() {
    let questChoiceCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressChoiceQuest_4_1 = JSON.parse(localStorage.getItem('progressChoiceQuest_4_1'));
    let progressChoiceQuest_4_2 = JSON.parse(localStorage.getItem('progressChoiceQuest_4_2'));
    let progressChoiceQuest_4_3 = JSON.parse(localStorage.getItem('progressChoiceQuest_4_3'));

    if (localStorage.getItem('progressChoiceQuest_4_1') === null) {
        localStorage.setItem('progressChoiceQuest_4_1', JSON.stringify(progressChoiceQuest_4_1));
    }

    questChoiceCatLoad.questionBlock('Отбор', 'Международная космическая станция', 'В строительстве Международной космической станции участвовали Россия, США, страны Европы, Япония. А когда был выведен на орбиту первый модуль?', 'в 2000', 'в 1998', 'в 1995');

    let answerVar_4_1_1 = document.getElementById('answerVar_1'),
        answerVar_4_1_2 = document.getElementById('answerVar_2'),
        answerVar_4_1_3 = document.getElementById('answerVar_3'),
        answerVarRight_4_1 = [answerVar_4_1_1, answerVar_4_1_2, answerVar_4_1_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressChoiceQuest_4_1 === 0 &&
        progressChoiceQuest_4_2 === 1 &&
        progressChoiceQuest_4_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_4_1"></li>
            <li id="questionStar_4_2" class="fill"></li>
            <li id="questionStar_4_3"></li>
        `;
    } else if (progressChoiceQuest_4_1 === 0 &&
        progressChoiceQuest_4_2 === 0 &&
        progressChoiceQuest_4_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_4_1"></li>
            <li id="questionStar_4_2"></li>
            <li id="questionStar_4_3" class="fill"></li>
        `;
    } else if (progressChoiceQuest_4_1 === 0 &&
        progressChoiceQuest_4_2 === 1 &&
        progressChoiceQuest_4_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_4_1"></li>
            <li id="questionStar_4_2" class="fill"></li>
            <li id="questionStar_4_3" class="fill"></li>
        `;
    } else {
        questionStars.innerHTML = `
            <li id="questionStar_4_1"></li>
            <li id="questionStar_4_2"></li>
            <li id="questionStar_4_3"></li>
        `;
    }

    const questionStar_4_1 = document.getElementById('questionStar_4_1');

    for (let i = 0; i < answerVarRight_4_1.length; i++) {
        if (answerVarRight_4_1[i] === answerVarRight_4_1[answerWrightNum]) {
            answerVarRight_4_1[i].addEventListener('click', () => {
                let progressChoiceQuest_4 = JSON.parse(localStorage.getItem('progressChoiceQuest_4'));
                let progressChoiceQuestSum_4_1 = progressChoiceQuest_4_1 + 1;
                let progressChoiceQuestSum_4 = progressChoiceQuestSum_4_1 + progressChoiceQuest_4;

                localStorage.setItem('progressChoiceQuest_4_1', JSON.stringify(progressChoiceQuestSum_4_1));
                localStorage.setItem('progressChoiceQuest_4', JSON.stringify(progressChoiceQuestSum_4));
                if (progressChoiceQuestSum_4_1 === 1) {
                    questionStar_4_1.className += 'fill';
                }
            });
        }
    }

    questChoiceCatLoad.answerBlock(answerWrightNum, '20 ноября 1998, запущен в космос первый модуль станции МКС под названием «Заря»');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_4_2 = JSON.parse(localStorage.getItem('progressChoiceQuest_4_2')),
        questValue_4_3 = JSON.parse(localStorage.getItem('progressChoiceQuest_4_3'))
    ;
    arrowNextClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                if (progressChoiceQuest_4_1 === 0 &&
                    progressChoiceQuest_4_2 === 0 &&
                    progressChoiceQuest_4_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressChoiceQuest_4_1 === 0 &&
                    progressChoiceQuest_4_2 === 1 &&
                    progressChoiceQuest_4_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressChoiceQuest_4_1 === 0 &&
                    progressChoiceQuest_4_2 === 0 &&
                    progressChoiceQuest_4_3 === 1) {
                    wrapper.removeChild(questionStars);
                }
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                if (questValue_4_2 === 1 && questValue_4_3 === 1) {
                    choiceCategoryDev();
                    lockSubQuestChoice();
                } else if (questValue_4_2 === 0) {
                    questionChoiceCat_4_2();
                } else if (questValue_4_2 === 1 && questValue_4_3 === 0) {
                    questionChoiceCat_4_3();
                }
            }
        });
        if (progressChoiceQuest_4_1 === 0 &&
            progressChoiceQuest_4_2 === 1 &&
            progressChoiceQuest_4_3 === 1) {
            gsap.to(questionStars, {
                autoAlpha: 0,
                delay: '-0.3',
                onComplete: () => {
                    wrapper.removeChild(questionStars);
                }
            });
        }
    });

    questArrowBack.arrowBack();
    const arrowBackClick = document.getElementById('arrowBack'),
        containerWrapperCategory = document.querySelector('.container__wrapper_category');
    arrowBackClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                choiceCategoryDev();
                lockSubQuestChoice();
            }
        });
        gsap.to(questionStars, {
            autoAlpha: 0,
            delay: '-0.3',
            onComplete: () => {
                wrapper.removeChild(questionStars);
            }
        });
    });
}

function questionChoiceCat_4_2() {
    let questChoiceCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 2;
    let progressChoiceQuest_4_1 = JSON.parse(localStorage.getItem('progressChoiceQuest_4_1'));
    let progressChoiceQuest_4_2 = JSON.parse(localStorage.getItem('progressChoiceQuest_4_2'));
    let progressChoiceQuest_4_3 = JSON.parse(localStorage.getItem('progressChoiceQuest_4_3'));

    if (localStorage.getItem('progressChoiceQuest_4_2') === null) {
        localStorage.setItem('progressChoiceQuest_4_2', JSON.stringify(progressChoiceQuest_4_2));
    }

    questChoiceCatLoad.questionBlock('Отбор', 'Международная космическая станция', 'Сколько всего модулей насчитывает Международная космическая станция?', 'Один', 'Двадцать', 'Четырнадцать');

    let answerVar_4_2_1 = document.getElementById('answerVar_1'),
        answerVar_4_2_2 = document.getElementById('answerVar_2'),
        answerVar_4_2_3 = document.getElementById('answerVar_3'),
        answerVarRight_4_2 = [answerVar_4_2_1, answerVar_4_2_2, answerVar_4_2_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressChoiceQuest_4_1 === 1 &&
        progressChoiceQuest_4_2 === 0 &&
        progressChoiceQuest_4_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_4_1" class="fill"></li>
            <li id="questionStar_4_2"></li>
            <li id="questionStar_4_3"></li>
        `;
    } else if (progressChoiceQuest_4_1 === 0 &&
        progressChoiceQuest_4_2 === 0 &&
        progressChoiceQuest_4_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_4_1"></li>
            <li id="questionStar_4_2"></li>
            <li id="questionStar_4_3" class="fill"></li>
        `;
    } else if (progressChoiceQuest_4_1 === 1 &&
        progressChoiceQuest_4_2 === 0 &&
        progressChoiceQuest_4_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_4_1" class="fill"></li>
            <li id="questionStar_4_2"></li>
            <li id="questionStar_4_3" class="fill"></li>
        `;
    } else {
        questionStars.innerHTML = `
            <li id="questionStar_4_1"></li>
            <li id="questionStar_4_2"></li>
            <li id="questionStar_4_3"></li>
        `;
    }

    const questionStar_4_2 = document.getElementById('questionStar_4_2');

    for (let i = 0; i < answerVarRight_4_2.length; i++) {
        if (answerVarRight_4_2[i] === answerVarRight_4_2[answerWrightNum]) {
            answerVarRight_4_2[i].addEventListener('click', () => {
                let progressChoiceQuest_4 = JSON.parse(localStorage.getItem('progressChoiceQuest_4'));
                let progressChoiceQuestSum_4_2 = progressChoiceQuest_4_2 + 1;
                let progressChoiceQuestSum_4 = progressChoiceQuestSum_4_2 + progressChoiceQuest_4;

                localStorage.setItem('progressChoiceQuest_4_2', JSON.stringify(progressChoiceQuestSum_4_2));
                localStorage.setItem('progressChoiceQuest_4', JSON.stringify(progressChoiceQuestSum_4));
                if (progressChoiceQuestSum_4_2 === 1) {
                    questionStar_4_2.className += 'fill';
                }
            });
        }
    }

    questChoiceCatLoad.answerBlock(answerWrightNum, '«Заря», «Юнити», «Звезда», «Дестини», «Квест», «Пирс», «Гармония», «Коламбус», «Кибо», «Поиск», «Транквилити», «Купола», «Рассвет», «Леонардо»');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_4_3 = JSON.parse(localStorage.getItem('progressChoiceQuest_4_3'))
    ;
    arrowNextClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                if (progressChoiceQuest_4_1 === 0 &&
                    progressChoiceQuest_4_2 === 0 &&
                    progressChoiceQuest_4_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressChoiceQuest_4_1 === 1 &&
                    progressChoiceQuest_4_2 === 0 &&
                    progressChoiceQuest_4_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressChoiceQuest_4_1 === 0 &&
                    progressChoiceQuest_4_2 === 0 &&
                    progressChoiceQuest_4_3 === 1) {
                    wrapper.removeChild(questionStars);
                }
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                if (questValue_4_3 === 1) {
                    choiceCategoryDev();
                    lockSubQuestChoice();
                } else if (questValue_4_3 === 0) {
                    questionChoiceCat_4_3();
                }
            }
        });
        if (progressChoiceQuest_4_1 === 0 &&
            progressChoiceQuest_4_2 === 1 &&
            progressChoiceQuest_4_3 === 1) {
            gsap.to(questionStars, {
                autoAlpha: 0,
                delay: '-0.3',
                onComplete: () => {
                    wrapper.removeChild(questionStars);
                }
            });
        }
    });

    questArrowBack.arrowBack();
    const arrowBackClick = document.getElementById('arrowBack'),
        containerWrapperCategory = document.querySelector('.container__wrapper_category');
    arrowBackClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                choiceCategoryDev();
                lockSubQuestChoice();
            }
        });
        gsap.to(questionStars, {
            autoAlpha: 0,
            delay: '-0.3',
            onComplete: () => {
                wrapper.removeChild(questionStars);
            }
        });
    });
}

function questionChoiceCat_4_3() {
    let questChoiceCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressChoiceQuest_4_1 = JSON.parse(localStorage.getItem('progressChoiceQuest_4_1'));
    let progressChoiceQuest_4_2 = JSON.parse(localStorage.getItem('progressChoiceQuest_4_2'));
    let progressChoiceQuest_4_3 = JSON.parse(localStorage.getItem('progressChoiceQuest_4_3'));

    if (localStorage.getItem('progressChoiceQuest_4_3') === null) {
        localStorage.setItem('progressChoiceQuest_4_3', JSON.stringify(progressChoiceQuest_4_3));
    }

    questChoiceCatLoad.questionBlock('Отбор', 'Международная космическая станция', 'Путешествие на космическую станцию привлекает многих, за время ее функционирования космическую станцию посетили 8 космических туристов. Назовите имя первого космического туриста', 'Ричард Гэрриот', 'Денис Титто', 'Аноуше Ансари');

    let answerVar_4_3_1 = document.getElementById('answerVar_1'),
        answerVar_4_3_2 = document.getElementById('answerVar_2'),
        answerVar_4_3_3 = document.getElementById('answerVar_3'),
        answerVarRight_4_3 = [answerVar_4_3_1, answerVar_4_3_2, answerVar_4_3_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressChoiceQuest_4_1 === 1 &&
        progressChoiceQuest_4_2 === 1 &&
        progressChoiceQuest_4_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_4_1" class="fill"></li>
            <li id="questionStar_4_2" class="fill"></li>
            <li id="questionStar_4_3"></li>
        `;
    } else if (progressChoiceQuest_4_1 === 0 &&
        progressChoiceQuest_4_2 === 0 &&
        progressChoiceQuest_4_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_4_1"></li>
            <li id="questionStar_4_2"></li>
            <li id="questionStar_4_3" class="fill"></li>
        `;
    } else if (progressChoiceQuest_4_1 === 0 &&
        progressChoiceQuest_4_2 === 1 &&
        progressChoiceQuest_4_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_4_1"></li>
            <li id="questionStar_4_2" class="fill"></li>
            <li id="questionStar_4_3"></li>
        `;
    } else {
        questionStars.innerHTML = `
            <li id="questionStar_4_1"></li>
            <li id="questionStar_4_2"></li>
            <li id="questionStar_4_3"></li>
        `;
    }

    const questionStar_4_3 = document.getElementById('questionStar_4_3');

    for (let i = 0; i < answerVarRight_4_3.length; i++) {
        if (answerVarRight_4_3[i] === answerVarRight_4_3[answerWrightNum]) {
            answerVarRight_4_3[i].addEventListener('click', () => {
                let progressChoiceQuest_4 = JSON.parse(localStorage.getItem('progressChoiceQuest_4'));
                let progressChoiceQuestSum_4_3 = progressChoiceQuest_4_3 + 1;
                let progressChoiceQuestSum_4 = progressChoiceQuestSum_4_3 + progressChoiceQuest_4;

                localStorage.setItem('progressChoiceQuest_4_3', JSON.stringify(progressChoiceQuestSum_4_3));
                localStorage.setItem('progressChoiceQuest_4', JSON.stringify(progressChoiceQuestSum_4));
                localStorage.setItem('progressChoiceAll', JSON.stringify(progressChoiceQuestSum_4));
                if (progressChoiceQuestSum_4_3 === 1) {
                    questionStar_4_3.className += 'fill';
                }
            });
        }
    }

    questChoiceCatLoad.answerBlock(answerWrightNum, 'Денис Титто – американский предприниматель и мультимиллионер итальянского происхождения, первый космический турист.');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext');
    arrowNextClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                choiceCategoryDev();
                lockSubQuestChoice();
            }
        });
        gsap.to(questionStars, {
            autoAlpha: 0,
            delay: '-0.3',
            onComplete: () => {
                wrapper.removeChild(questionStars);
            }
        });
    });

    questArrowBack.arrowBack();
    const arrowBackClick = document.getElementById('arrowBack'),
        containerWrapperCategory = document.querySelector('.container__wrapper_category');
    arrowBackClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                choiceCategoryDev();
                lockSubQuestChoice();
            }
        });
        gsap.to(questionStars, {
            autoAlpha: 0,
            delay: '-0.3',
            onComplete: () => {
                wrapper.removeChild(questionStars);
            }
        });
    });
}