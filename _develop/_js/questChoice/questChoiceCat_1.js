
if (localStorage.getItem('progressChoiceQuest_1') === null) {
    localStorage.setItem('progressChoiceQuest_1', JSON.stringify(0));
}

// Choice. Quest 1
function questionChoiceCat_1_1() {
    let questChoiceCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressChoiceQuest_1_1 = JSON.parse(localStorage.getItem('progressChoiceQuest_1_1'));
    let progressChoiceQuest_1_2 = JSON.parse(localStorage.getItem('progressChoiceQuest_1_2'));
    let progressChoiceQuest_1_3 = JSON.parse(localStorage.getItem('progressChoiceQuest_1_3'));

    if (localStorage.getItem('progressChoiceQuest_1_1') === null) {
        localStorage.setItem('progressChoiceQuest_1_1', JSON.stringify(progressChoiceQuest_1_1));
    }

    questChoiceCatLoad.questionBlock('Отбор', 'Белка, Стрелка и ...', 'Кто из животных побывал первым в космосе?', 'Лайка', 'Дезик и Цыган', 'Белка и Стрелка');

    let answerVar_1_1_1 = document.getElementById('answerVar_1'),
        answerVar_1_1_2 = document.getElementById('answerVar_2'),
        answerVar_1_1_3 = document.getElementById('answerVar_3'),
        answerVarRight_1_1 = [answerVar_1_1_1, answerVar_1_1_2, answerVar_1_1_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressChoiceQuest_1_1 === 0 &&
        progressChoiceQuest_1_2 === 1 &&
        progressChoiceQuest_1_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_1_1"></li>
            <li id="questionStar_1_2" class="fill"></li>
            <li id="questionStar_1_3"></li>
        `;
    } else if (progressChoiceQuest_1_1 === 0 &&
        progressChoiceQuest_1_2 === 0 &&
        progressChoiceQuest_1_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_1_1"></li>
            <li id="questionStar_1_2"></li>
            <li id="questionStar_1_3" class="fill"></li>
        `;
    } else if (progressChoiceQuest_1_1 === 0 &&
        progressChoiceQuest_1_2 === 1 &&
        progressChoiceQuest_1_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_1_1"></li>
            <li id="questionStar_1_2" class="fill"></li>
            <li id="questionStar_1_3" class="fill"></li>
        `;
    } else {
        questionStars.innerHTML = `
            <li id="questionStar_1_1"></li>
            <li id="questionStar_1_2"></li>
            <li id="questionStar_1_3"></li>
        `;
    }

    const questionStar_1_1 = document.getElementById('questionStar_1_1');

    for (let i = 0; i < answerVarRight_1_1.length; i++) {
        if (answerVarRight_1_1[i] === answerVarRight_1_1[answerWrightNum]) {
            answerVarRight_1_1[i].addEventListener('click', () => {
                let progressChoiceQuest_1 = JSON.parse(localStorage.getItem('progressChoiceQuest_1'));
                let progressChoiceQuestSum_1_1 = progressChoiceQuest_1_1 + 1;
                let progressChoiceQuestSum_1 = progressChoiceQuestSum_1_1 + progressChoiceQuest_1;

                localStorage.setItem('progressChoiceQuest_1_1', JSON.stringify(progressChoiceQuestSum_1_1));
                localStorage.setItem('progressChoiceQuest_1', JSON.stringify(progressChoiceQuestSum_1));
                if (progressChoiceQuestSum_1_1 === 1) {
                    questionStar_1_1.className += 'fill';
                }
            });
        }
    }

    questChoiceCatLoad.answerBlock(answerWrightNum, '22 июня 1951 года собаки «Дезик и Цыган» стали первыми живыми существами, осуществившими полёт на баллистической ракете З – 1В в верхние слои атмосферы до условной границы с космосом.');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressChoiceQuest_1_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressChoiceQuest_1_3'))
    ;
    arrowNextClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                if (progressChoiceQuest_1_1 === 0 &&
                    progressChoiceQuest_1_2 === 0 &&
                    progressChoiceQuest_1_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressChoiceQuest_1_1 === 0 &&
                    progressChoiceQuest_1_2 === 1 &&
                    progressChoiceQuest_1_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressChoiceQuest_1_1 === 0 &&
                    progressChoiceQuest_1_2 === 0 &&
                    progressChoiceQuest_1_3 === 1) {
                    wrapper.removeChild(questionStars);
                }
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                if (questValue_1_2 === 1 && questValue_1_3 === 1) {
                    choiceCategoryDev();
                    lockSubQuestChoice();
                } else if (questValue_1_2 === 0) {
                    questionChoiceCat_1_2();
                } else if (questValue_1_2 === 1 && questValue_1_3 === 0) {
                    questionChoiceCat_1_3();
                }
            }
        });
        if (progressChoiceQuest_1_1 === 0 &&
            progressChoiceQuest_1_2 === 1 &&
            progressChoiceQuest_1_3 === 1) {
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

function questionChoiceCat_1_2() {
    let questChoiceCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 2;
    let progressChoiceQuest_1_1 = JSON.parse(localStorage.getItem('progressChoiceQuest_1_1'));
    let progressChoiceQuest_1_2 = JSON.parse(localStorage.getItem('progressChoiceQuest_1_2'));
    let progressChoiceQuest_1_3 = JSON.parse(localStorage.getItem('progressChoiceQuest_1_3'));

    if (localStorage.getItem('progressChoiceQuest_1_2') === null) {
        localStorage.setItem('progressChoiceQuest_1_2', JSON.stringify(progressChoiceQuest_1_2));
    }

    questChoiceCatLoad.questionBlock('Отбор', 'Белка, Стрелка и ...', 'Во время отбора собачек предпочтение отдавалось дворнягам, почему?', 'По этическим соображениям', 'Дворняги доступнее', 'Дворняги более выносливые');

    let answerVar_1_2_1 = document.getElementById('answerVar_1'),
        answerVar_1_2_2 = document.getElementById('answerVar_2'),
        answerVar_1_2_3 = document.getElementById('answerVar_3'),
        answerVarRight_1_2 = [answerVar_1_2_1, answerVar_1_2_2, answerVar_1_2_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressChoiceQuest_1_1 === 1 &&
        progressChoiceQuest_1_2 === 0 &&
        progressChoiceQuest_1_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_1_1" class="fill"></li>
            <li id="questionStar_1_2"></li>
            <li id="questionStar_1_3"></li>
        `;
    } else if (progressChoiceQuest_1_1 === 0 &&
        progressChoiceQuest_1_2 === 0 &&
        progressChoiceQuest_1_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_1_1"></li>
            <li id="questionStar_1_2"></li>
            <li id="questionStar_1_3" class="fill"></li>
        `;
    } else if (progressChoiceQuest_1_1 === 1 &&
        progressChoiceQuest_1_2 === 0 &&
        progressChoiceQuest_1_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_1_1" class="fill"></li>
            <li id="questionStar_1_2"></li>
            <li id="questionStar_1_3" class="fill"></li>
        `;
    } else {
        questionStars.innerHTML = `
            <li id="questionStar_1_1"></li>
            <li id="questionStar_1_2"></li>
            <li id="questionStar_1_3"></li>
        `;
    }

    const questionStar_1_2 = document.getElementById('questionStar_1_2');

    for (let i = 0; i < answerVarRight_1_2.length; i++) {
        if (answerVarRight_1_2[i] === answerVarRight_1_2[answerWrightNum]) {
            answerVarRight_1_2[i].addEventListener('click', () => {
                let progressChoiceQuest_1 = JSON.parse(localStorage.getItem('progressChoiceQuest_1'));
                let progressChoiceQuestSum_1_2 = progressChoiceQuest_1_2 + 1;
                let progressChoiceQuestSum_1 = progressChoiceQuest_1 + progressChoiceQuestSum_1_2;
                localStorage.setItem('progressChoiceQuest_1_2', JSON.stringify(progressChoiceQuestSum_1_2));
                localStorage.setItem('progressChoiceQuest_1', JSON.stringify(progressChoiceQuestSum_1));
                if (progressChoiceQuestSum_1_2 === 1) {
                    questionStar_1_2.className += 'fill';
                }
            });
        }
    }

    questChoiceCatLoad.answerBlock(answerWrightNum, 'По сравнению с домашними и породистыми собаками дворняги уже прошли естественный отбор в условиях улицы, у них были отмечены крепкое здоровье, смекалка, неприхотливость в еде, лояльное отношение к человеку.');
    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressChoiceQuest_1_3'))
    ;
    arrowNextClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                if (progressChoiceQuest_1_1 === 0 &&
                    progressChoiceQuest_1_2 === 0 &&
                    progressChoiceQuest_1_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressChoiceQuest_1_1 === 1 &&
                    progressChoiceQuest_1_2 === 0 &&
                    progressChoiceQuest_1_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressChoiceQuest_1_1 === 0 &&
                    progressChoiceQuest_1_2 === 0 &&
                    progressChoiceQuest_1_3 === 1) {
                    wrapper.removeChild(questionStars);
                }
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                if (questValue_1_3 === 1) {
                    choiceCategoryDev();
                    lockSubQuestChoice();
                } else if (questValue_1_3 === 0) {
                    questionChoiceCat_1_3();
                }
            }
        });
        if (progressChoiceQuest_1_1 === 1 &&
            progressChoiceQuest_1_2 === 0 &&
            progressChoiceQuest_1_3 === 1) {
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
        containerWrapperCategory = document.querySelector('.container__wrapper_category')
    ;
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

function questionChoiceCat_1_3() {
    let questChoiceCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 2;
    let progressChoiceQuest_1_1 = JSON.parse(localStorage.getItem('progressChoiceQuest_1_1'));
    let progressChoiceQuest_1_2 = JSON.parse(localStorage.getItem('progressChoiceQuest_1_2'));
    let progressChoiceQuest_1_3 = JSON.parse(localStorage.getItem('progressChoiceQuest_1_3'));

    if (localStorage.getItem('progressChoiceQuest_1_3') === null) {
        localStorage.setItem('progressChoiceQuest_1_3', JSON.stringify(progressChoiceQuest_1_3));
    }

    questChoiceCatLoad.questionBlock('Отбор', 'Белка, Стрелка и ...', 'Совершали ли космический полет кошки?', 'Да, но не удачно', 'Нет', 'Да');

    let answerVar_1_3_1 = document.getElementById('answerVar_1'),
        answerVar_1_3_2 = document.getElementById('answerVar_2'),
        answerVar_1_3_3 = document.getElementById('answerVar_3'),
        answerVarRight_1_3 = [answerVar_1_3_1, answerVar_1_3_2, answerVar_1_3_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressChoiceQuest_1_1 === 1 &&
        progressChoiceQuest_1_2 === 1 &&
        progressChoiceQuest_1_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_1_1" class="fill"></li>
            <li id="questionStar_1_2" class="fill"></li>
            <li id="questionStar_1_3"></li>
        `;
    } else if (progressChoiceQuest_1_1 === 1 &&
        progressChoiceQuest_1_2 === 0 &&
        progressChoiceQuest_1_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_1_1" class="fill"></li>
            <li id="questionStar_1_2"></li>
            <li id="questionStar_1_3"></li>
        `;
    } else if (progressChoiceQuest_1_1 === 0 &&
        progressChoiceQuest_1_2 === 1 &&
        progressChoiceQuest_1_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_1_1"></li>
            <li id="questionStar_1_2" class="fill"></li>
            <li id="questionStar_1_3"></li>
        `;
    } else {
        questionStars.innerHTML = `
            <li id="questionStar_1_1"></li>
            <li id="questionStar_1_2"></li>
            <li id="questionStar_1_3"></li>
        `;
    }

    const questionStar_1_3 = document.getElementById('questionStar_1_3');

    for (let i = 0; i < answerVarRight_1_3.length; i++) {
        if (answerVarRight_1_3[i] === answerVarRight_1_3[answerWrightNum]) {
            answerVarRight_1_3[i].addEventListener('click', () => {
                let progressChoiceQuest_1 = JSON.parse(localStorage.getItem('progressChoiceQuest_1'));
                let progressChoiceQuestSum_1_3 = progressChoiceQuest_1_3 + 1;
                let progressChoiceQuestSum_1 = progressChoiceQuest_1 + progressChoiceQuestSum_1_3;
                localStorage.setItem('progressChoiceQuest_1_3', JSON.stringify(progressChoiceQuestSum_1_3));
                localStorage.setItem('progressChoiceQuest_1', JSON.stringify(progressChoiceQuestSum_1));
                if (progressChoiceQuestSum_1_3 === 1) {
                    questionStar_1_3.className += 'fill';
                }
            });
        }
    }

    questChoiceCatLoad.answerBlock(answerWrightNum, 'Достоверно известно об одном запуске кошки в космос. Он был осуществлен Францией 18 октября 1963 года. В суборбитальный полет отправилась кошка Фелисетт, которая достигла высоты более 100 км. И благополучно вернулась на Землю.');
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