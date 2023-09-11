if (localStorage.getItem('progressChoiceQuest_3') === null) {
    localStorage.setItem('progressChoiceQuest_3', JSON.stringify(0));
}

function questionChoiceCat_3_1() {
    let questChoiceCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressChoiceQuest_3_1 = JSON.parse(localStorage.getItem('progressChoiceQuest_3_1'));
    let progressChoiceQuest_3_2 = JSON.parse(localStorage.getItem('progressChoiceQuest_3_2'));
    let progressChoiceQuest_3_3 = JSON.parse(localStorage.getItem('progressChoiceQuest_3_3'));

    if (localStorage.getItem('progressChoiceQuest_3_1') === null) {
        localStorage.setItem('progressChoiceQuest_3_1', JSON.stringify(progressChoiceQuest_3_1));
    }

    questChoiceCatLoad.questionBlock('Отбор', 'Женщины космонавты. Позывные.', 'У этой женщины-космонавта позывной названия морской птицы.', 'Светлана Савицкая&nbsp;–</br>«Альбатрос»', 'Валентина Терешкова&nbsp;–<br>«Чайка»', 'Елена Серова&nbsp;–<br>«Буревестник»');

    let answerVar_3_1_1 = document.getElementById('answerVar_1'),
        answerVar_3_1_2 = document.getElementById('answerVar_2'),
        answerVar_3_1_3 = document.getElementById('answerVar_3'),
        answerVarRight_3_1 = [answerVar_3_1_1, answerVar_3_1_2, answerVar_3_1_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressChoiceQuest_3_1 === 0 &&
        progressChoiceQuest_3_2 === 1 &&
        progressChoiceQuest_3_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_3_1"></li>
            <li id="questionStar_3_2" class="fill"></li>
            <li id="questionStar_3_3"></li>
        `;
    } else if (progressChoiceQuest_3_1 === 0 &&
        progressChoiceQuest_3_2 === 0 &&
        progressChoiceQuest_3_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_3_1"></li>
            <li id="questionStar_3_2"></li>
            <li id="questionStar_3_3" class="fill"></li>
        `;
    } else if (progressChoiceQuest_3_1 === 0 &&
        progressChoiceQuest_3_2 === 1 &&
        progressChoiceQuest_3_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_3_1"></li>
            <li id="questionStar_3_2" class="fill"></li>
            <li id="questionStar_3_3" class="fill"></li>
        `;
    } else {
        questionStars.innerHTML = `
            <li id="questionStar_3_1"></li>
            <li id="questionStar_3_2"></li>
            <li id="questionStar_3_3"></li>
        `;
    }

    const questionStar_3_1 = document.getElementById('questionStar_3_1');

    for (let i = 0; i < answerVarRight_3_1.length; i++) {
        if (answerVarRight_3_1[i] === answerVarRight_3_1[answerWrightNum]) {
            answerVarRight_3_1[i].addEventListener('click', () => {
                let progressChoiceQuest_3 = JSON.parse(localStorage.getItem('progressChoiceQuest_3'));
                let progressChoiceQuestSum_3_1 = progressChoiceQuest_3_1 + 1;
                let progressChoiceQuestSum_3 = progressChoiceQuestSum_3_1 + progressChoiceQuest_3;

                localStorage.setItem('progressChoiceQuest_3_1', JSON.stringify(progressChoiceQuestSum_3_1));
                localStorage.setItem('progressChoiceQuest_3', JSON.stringify(progressChoiceQuestSum_3));
                if (progressChoiceQuestSum_3_1 === 1) {
                    questionStar_3_1.className += 'fill';
                }
            });
        }
    }

    questChoiceCatLoad.answerBlock(answerWrightNum, 'Позывной Терешковой придумал Юрий Гагарин. Валентина Терешкова - единственная женщина в мире, которая имеет звание генерал-майора авиации. Она десятый космонавт в мире и шестой – в СССР.');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_3_2 = JSON.parse(localStorage.getItem('progressChoiceQuest_3_2')),
        questValue_3_3 = JSON.parse(localStorage.getItem('progressChoiceQuest_3_3'))
    ;
    arrowNextClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                if (progressChoiceQuest_3_1 === 0 &&
                    progressChoiceQuest_3_2 === 0 &&
                    progressChoiceQuest_3_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressChoiceQuest_3_1 === 0 &&
                    progressChoiceQuest_3_2 === 1 &&
                    progressChoiceQuest_3_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressChoiceQuest_3_1 === 0 &&
                    progressChoiceQuest_3_2 === 0 &&
                    progressChoiceQuest_3_3 === 1) {
                    wrapper.removeChild(questionStars);
                }
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                if (questValue_3_2 === 1 && questValue_3_3 === 1) {
                    choiceCategoryDev();
                    lockSubQuestChoice();
                } else if (questValue_3_2 === 0) {
                    questionChoiceCat_3_2();
                } else if (questValue_3_2 === 1 && questValue_3_3 === 0) {
                    questionChoiceCat_3_3();
                }
            }
        });
        if (progressChoiceQuest_3_1 === 0 &&
            progressChoiceQuest_3_2 === 1 &&
            progressChoiceQuest_3_3 === 1) {
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

function questionChoiceCat_3_2() {
    let questChoiceCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 2;
    let progressChoiceQuest_3_1 = JSON.parse(localStorage.getItem('progressChoiceQuest_3_1'));
    let progressChoiceQuest_3_2 = JSON.parse(localStorage.getItem('progressChoiceQuest_3_2'));
    let progressChoiceQuest_3_3 = JSON.parse(localStorage.getItem('progressChoiceQuest_3_3'));

    if (localStorage.getItem('progressChoiceQuest_3_2') === null) {
        localStorage.setItem('progressChoiceQuest_3_2', JSON.stringify(progressChoiceQuest_3_2));
    }

    questChoiceCatLoad.questionBlock('Отбор', 'Женщины космонавты. Позывные.', 'Позывной этой женщины космонавта носит название третьей по длине реки после Волги и Дуная', 'Светлана Савицкая&nbsp;–</br>«Днепр»', 'Светлана Савицкая&nbsp;–</br>«Днестр»', 'Светлана Савицкая&nbsp;–</br>«Днепр – 3»');

    let answerVar_3_2_1 = document.getElementById('answerVar_1'),
        answerVar_3_2_2 = document.getElementById('answerVar_2'),
        answerVar_3_2_3 = document.getElementById('answerVar_3'),
        answerVarRight_3_2 = [answerVar_3_2_1, answerVar_3_2_2, answerVar_3_2_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressChoiceQuest_3_1 === 1 &&
        progressChoiceQuest_3_2 === 0 &&
        progressChoiceQuest_3_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_3_1" class="fill"></li>
            <li id="questionStar_3_2"></li>
            <li id="questionStar_3_3"></li>
        `;
    } else if (progressChoiceQuest_3_1 === 0 &&
        progressChoiceQuest_3_2 === 0 &&
        progressChoiceQuest_3_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_3_1"></li>
            <li id="questionStar_3_2"></li>
            <li id="questionStar_3_3" class="fill"></li>
        `;
    } else if (progressChoiceQuest_3_1 === 1 &&
        progressChoiceQuest_3_2 === 0 &&
        progressChoiceQuest_3_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_3_1" class="fill"></li>
            <li id="questionStar_3_2"></li>
            <li id="questionStar_3_3" class="fill"></li>
        `;
    } else {
        questionStars.innerHTML = `
            <li id="questionStar_3_1"></li>
            <li id="questionStar_3_2"></li>
            <li id="questionStar_3_3"></li>
        `;
    }

    const questionStar_3_2 = document.getElementById('questionStar_3_2');

    for (let i = 0; i < answerVarRight_3_2.length; i++) {
        if (answerVarRight_3_2[i] === answerVarRight_3_2[answerWrightNum]) {
            answerVarRight_3_2[i].addEventListener('click', () => {
                let progressChoiceQuest_3 = JSON.parse(localStorage.getItem('progressChoiceQuest_3'));
                let progressChoiceQuestSum_3_2 = progressChoiceQuest_3_2 + 1;
                let progressChoiceQuestSum_3 = progressChoiceQuestSum_3_2 + progressChoiceQuest_3;

                localStorage.setItem('progressChoiceQuest_3_2', JSON.stringify(progressChoiceQuestSum_3_2));
                localStorage.setItem('progressChoiceQuest_3', JSON.stringify(progressChoiceQuestSum_3));
                if (progressChoiceQuestSum_3_2 === 1) {
                    questionStar_3_2.className += 'fill';
                }
            });
        }
    }

    questChoiceCatLoad.answerBlock(answerWrightNum, '59 лет назад космонавт должен был состоять в партии, быть опытным военным летчиком не выше 170 см и не старше 30 лет, обладать безупречным здоровьем и физической подготовкой на уровне мастера спорта.');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_3_3 = JSON.parse(localStorage.getItem('progressChoiceQuest_3_3'))
    ;
    arrowNextClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                if (progressChoiceQuest_3_1 === 0 &&
                    progressChoiceQuest_3_2 === 0 &&
                    progressChoiceQuest_3_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressChoiceQuest_3_1 === 1 &&
                    progressChoiceQuest_3_2 === 0 &&
                    progressChoiceQuest_3_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressChoiceQuest_3_1 === 0 &&
                    progressChoiceQuest_3_2 === 0 &&
                    progressChoiceQuest_3_3 === 1) {
                    wrapper.removeChild(questionStars);
                }
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                if (questValue_3_3 === 1) {
                    choiceCategoryDev();
                    lockSubQuestChoice();
                } else if (questValue_3_3 === 0) {
                    questionChoiceCat_3_3();
                }
            }
        });
        if (progressChoiceQuest_3_1 === 0 &&
            progressChoiceQuest_3_2 === 1 &&
            progressChoiceQuest_3_3 === 1) {
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

function questionChoiceCat_3_3() {
    let questChoiceCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressChoiceQuest_3_1 = JSON.parse(localStorage.getItem('progressChoiceQuest_3_1'));
    let progressChoiceQuest_3_2 = JSON.parse(localStorage.getItem('progressChoiceQuest_3_2'));
    let progressChoiceQuest_3_3 = JSON.parse(localStorage.getItem('progressChoiceQuest_3_3'));

    if (localStorage.getItem('progressChoiceQuest_3_3') === null) {
        localStorage.setItem('progressChoiceQuest_3_3', JSON.stringify(progressChoiceQuest_3_3));
    }

    questChoiceCatLoad.questionBlock('Отбор', 'Женщины космонавты. Позывные.', 'Позывной этой женщины – название мастера кузнечного дела в Бурятии', 'Елена Серова&nbsp;–</br>«Мастер»', 'Елена Серова&nbsp;–</br>«Тархан»', 'Елена Серова&nbsp;–</br>«Тандыр»');

    let answerVar_3_3_1 = document.getElementById('answerVar_1'),
        answerVar_3_3_2 = document.getElementById('answerVar_2'),
        answerVar_3_3_3 = document.getElementById('answerVar_3'),
        answerVarRight_3_3 = [answerVar_3_3_1, answerVar_3_3_2, answerVar_3_3_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressChoiceQuest_3_1 === 1 &&
        progressChoiceQuest_3_2 === 1 &&
        progressChoiceQuest_3_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_3_1" class="fill"></li>
            <li id="questionStar_3_2" class="fill"></li>
            <li id="questionStar_3_3"></li>
        `;
    } else if (progressChoiceQuest_3_1 === 0 &&
        progressChoiceQuest_3_2 === 0 &&
        progressChoiceQuest_3_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_3_1"></li>
            <li id="questionStar_3_2"></li>
            <li id="questionStar_3_3" class="fill"></li>
        `;
    } else if (progressChoiceQuest_3_1 === 0 &&
        progressChoiceQuest_3_2 === 1 &&
        progressChoiceQuest_3_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_3_1"></li>
            <li id="questionStar_3_2" class="fill"></li>
            <li id="questionStar_3_3"></li>
        `;
    } else {
        questionStars.innerHTML = `
            <li id="questionStar_3_1"></li>
            <li id="questionStar_3_2"></li>
            <li id="questionStar_3_3"></li>
        `;
    }

    const questionStar_3_3 = document.getElementById('questionStar_3_3');

    for (let i = 0; i < answerVarRight_3_3.length; i++) {
        if (answerVarRight_3_3[i] === answerVarRight_3_3[answerWrightNum]) {
            answerVarRight_3_3[i].addEventListener('click', () => {
                let progressChoiceQuest_3 = JSON.parse(localStorage.getItem('progressChoiceQuest_3'));
                let progressChoiceQuestSum_3_3 = progressChoiceQuest_3_3 + 1;
                let progressChoiceQuestSum_3 = progressChoiceQuestSum_3_3 + progressChoiceQuest_3;

                localStorage.setItem('progressChoiceQuest_3_3', JSON.stringify(progressChoiceQuestSum_3_3));
                localStorage.setItem('progressChoiceQuest_3', JSON.stringify(progressChoiceQuestSum_3));
                localStorage.setItem('progressChoiceAll', JSON.stringify(progressChoiceQuestSum_3));
                if (progressChoiceQuestSum_3_3 === 1) {
                    questionStar_3_3.className += 'fill';
                }
            });
        }
    }

    questChoiceCatLoad.answerBlock(answerWrightNum, '19 августа 1982 года совершила космический полет Светлана Савицкая совместно с Л. Поповым и А. Серебровым. Позывной она получила «Днепр-3». Экспедиция продлилась 7 дней и почти 22 часа.');

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