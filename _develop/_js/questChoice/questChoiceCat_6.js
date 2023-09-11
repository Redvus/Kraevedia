if (localStorage.getItem('progressChoiceQuest_6') === null) {
    localStorage.setItem('progressChoiceQuest_6', JSON.stringify(0));
}

function questionChoiceCat_6_1() {
    let questChoiceCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressChoiceQuest_6_1 = JSON.parse(localStorage.getItem('progressChoiceQuest_6_1'));
    let progressChoiceQuest_6_2 = JSON.parse(localStorage.getItem('progressChoiceQuest_6_2'));
    let progressChoiceQuest_6_3 = JSON.parse(localStorage.getItem('progressChoiceQuest_6_3'));

    if (localStorage.getItem('progressChoiceQuest_6_1') === null) {
        localStorage.setItem('progressChoiceQuest_6_1', JSON.stringify(progressChoiceQuest_6_1));
    }

    questChoiceCatLoad.questionBlock('Отбор', 'Самара космическая', 'Какие предприятия в нашем городе трудятся на благо космической отрасли?', 'ФГУП ЦНИИмаш', '«Прогресс», «Кузнецов», «Энергия»', 'АО «Российские Космические Системы»');

    let answerVar_6_1_1 = document.getElementById('answerVar_1'),
        answerVar_6_1_2 = document.getElementById('answerVar_2'),
        answerVar_6_1_3 = document.getElementById('answerVar_3'),
        answerVarRight_6_1 = [answerVar_6_1_1, answerVar_6_1_2, answerVar_6_1_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressChoiceQuest_6_1 === 0 &&
        progressChoiceQuest_6_2 === 1 &&
        progressChoiceQuest_6_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_6_1"></li>
            <li id="questionStar_6_2" class="fill"></li>
            <li id="questionStar_6_3"></li>
        `;
    } else if (progressChoiceQuest_6_1 === 0 &&
        progressChoiceQuest_6_2 === 0 &&
        progressChoiceQuest_6_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_6_1"></li>
            <li id="questionStar_6_2"></li>
            <li id="questionStar_6_3" class="fill"></li>
        `;
    } else if (progressChoiceQuest_6_1 === 0 &&
        progressChoiceQuest_6_2 === 1 &&
        progressChoiceQuest_6_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_6_1"></li>
            <li id="questionStar_6_2" class="fill"></li>
            <li id="questionStar_6_3" class="fill"></li>
        `;
    } else {
        questionStars.innerHTML = `
            <li id="questionStar_6_1"></li>
            <li id="questionStar_6_2"></li>
            <li id="questionStar_6_3"></li>
        `;
    }

    const questionStar_6_1 = document.getElementById('questionStar_6_1');

    for (let i = 0; i < answerVarRight_6_1.length; i++) {
        if (answerVarRight_6_1[i] === answerVarRight_6_1[answerWrightNum]) {
            answerVarRight_6_1[i].addEventListener('click', () => {
                let progressChoiceQuest_6 = JSON.parse(localStorage.getItem('progressChoiceQuest_6'));
                let progressChoiceQuestSum_6_1 = progressChoiceQuest_6_1 + 1;
                let progressChoiceQuestSum_6 = progressChoiceQuestSum_6_1 + progressChoiceQuest_6;

                localStorage.setItem('progressChoiceQuest_6_1', JSON.stringify(progressChoiceQuestSum_6_1));
                localStorage.setItem('progressChoiceQuest_6', JSON.stringify(progressChoiceQuestSum_6));
                if (progressChoiceQuestSum_6_1 === 1) {
                    questionStar_6_1.className += 'fill';
                }
            });
        }
    }

    questChoiceCatLoad.answerBlock(answerWrightNum, 'АО&nbsp;«РКЦ&nbsp;«Прогресс», ПАО&nbsp;РКК&nbsp;«Энергия», ПАО&nbsp;«ОДК-Кузнецов»');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_6_2 = JSON.parse(localStorage.getItem('progressChoiceQuest_6_2')),
        questValue_6_3 = JSON.parse(localStorage.getItem('progressChoiceQuest_6_3'))
    ;
    arrowNextClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                if (progressChoiceQuest_6_1 === 0 &&
                    progressChoiceQuest_6_2 === 0 &&
                    progressChoiceQuest_6_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressChoiceQuest_6_1 === 0 &&
                    progressChoiceQuest_6_2 === 1 &&
                    progressChoiceQuest_6_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressChoiceQuest_6_1 === 0 &&
                    progressChoiceQuest_6_2 === 0 &&
                    progressChoiceQuest_6_3 === 1) {
                    wrapper.removeChild(questionStars);
                }
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                if (questValue_6_2 === 1 && questValue_6_3 === 1) {
                    choiceCategoryDev();
                    lockSubQuestChoice();
                } else if (questValue_6_2 === 0) {
                    questionChoiceCat_6_2();
                } else if (questValue_6_2 === 1 && questValue_6_3 === 0) {
                    questionChoiceCat_6_3();
                }
            }
        });
        if (progressChoiceQuest_6_1 === 0 &&
            progressChoiceQuest_6_2 === 1 &&
            progressChoiceQuest_6_3 === 1) {
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

function questionChoiceCat_6_2() {
    let questChoiceCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressChoiceQuest_6_1 = JSON.parse(localStorage.getItem('progressChoiceQuest_6_1'));
    let progressChoiceQuest_6_2 = JSON.parse(localStorage.getItem('progressChoiceQuest_6_2'));
    let progressChoiceQuest_6_3 = JSON.parse(localStorage.getItem('progressChoiceQuest_6_3'));

    if (localStorage.getItem('progressChoiceQuest_6_2') === null) {
        localStorage.setItem('progressChoiceQuest_6_2', JSON.stringify(progressChoiceQuest_6_2));
    }

    questChoiceCatLoad.questionBlock('Отбор', 'Самара космическая', 'В каком году началась космическая жизнь Самары?', '1941 год', '1958 год', '1961 год');

    let answerVar_6_2_1 = document.getElementById('answerVar_1'),
        answerVar_6_2_2 = document.getElementById('answerVar_2'),
        answerVar_6_2_3 = document.getElementById('answerVar_3'),
        answerVarRight_6_2 = [answerVar_6_2_1, answerVar_6_2_2, answerVar_6_2_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressChoiceQuest_6_1 === 1 &&
        progressChoiceQuest_6_2 === 0 &&
        progressChoiceQuest_6_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_6_1" class="fill"></li>
            <li id="questionStar_6_2"></li>
            <li id="questionStar_6_3"></li>
        `;
    } else if (progressChoiceQuest_6_1 === 0 &&
        progressChoiceQuest_6_2 === 0 &&
        progressChoiceQuest_6_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_6_1"></li>
            <li id="questionStar_6_2"></li>
            <li id="questionStar_6_3" class="fill"></li>
        `;
    } else if (progressChoiceQuest_6_1 === 1 &&
        progressChoiceQuest_6_2 === 0 &&
        progressChoiceQuest_6_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_6_1" class="fill"></li>
            <li id="questionStar_6_2"></li>
            <li id="questionStar_6_3" class="fill"></li>
        `;
    } else {
        questionStars.innerHTML = `
            <li id="questionStar_6_1"></li>
            <li id="questionStar_6_2"></li>
            <li id="questionStar_6_3"></li>
        `;
    }

    const questionStar_6_2 = document.getElementById('questionStar_6_2');

    for (let i = 0; i < answerVarRight_6_2.length; i++) {
        if (answerVarRight_6_2[i] === answerVarRight_6_2[answerWrightNum]) {
            answerVarRight_6_2[i].addEventListener('click', () => {
                let progressChoiceQuest_6 = JSON.parse(localStorage.getItem('progressChoiceQuest_6'));
                let progressChoiceQuestSum_6_2 = progressChoiceQuest_6_2 + 1;
                let progressChoiceQuestSum_6 = progressChoiceQuestSum_6_2 + progressChoiceQuest_6;

                localStorage.setItem('progressChoiceQuest_6_2', JSON.stringify(progressChoiceQuestSum_6_2));
                localStorage.setItem('progressChoiceQuest_6', JSON.stringify(progressChoiceQuestSum_6));
                if (progressChoiceQuestSum_6_2 === 1) {
                    questionStar_6_2.className += 'fill';
                }
            });
        }
    }

    questChoiceCatLoad.answerBlock(answerWrightNum, 'Официальное решение об открытии космического производства в&nbsp;Куйбышеве было принято в начале 1958&nbsp;года.');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_6_3 = JSON.parse(localStorage.getItem('progressChoiceQuest_6_3'))
    ;
    arrowNextClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                if (progressChoiceQuest_6_1 === 0 &&
                    progressChoiceQuest_6_2 === 0 &&
                    progressChoiceQuest_6_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressChoiceQuest_6_1 === 1 &&
                    progressChoiceQuest_6_2 === 0 &&
                    progressChoiceQuest_6_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressChoiceQuest_6_1 === 0 &&
                    progressChoiceQuest_6_2 === 0 &&
                    progressChoiceQuest_6_3 === 1) {
                    wrapper.removeChild(questionStars);
                }
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                if (questValue_6_3 === 1) {
                    choiceCategoryDev();
                    lockSubQuestChoice();
                } else if (questValue_6_3 === 0) {
                    questionChoiceCat_6_3();
                }
            }
        });
        if (progressChoiceQuest_6_1 === 0 &&
            progressChoiceQuest_6_2 === 1 &&
            progressChoiceQuest_6_3 === 1) {
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

function questionChoiceCat_6_3() {
    let questChoiceCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 2;
    let progressChoiceQuest_6_1 = JSON.parse(localStorage.getItem('progressChoiceQuest_6_1'));
    let progressChoiceQuest_6_2 = JSON.parse(localStorage.getItem('progressChoiceQuest_6_2'));
    let progressChoiceQuest_6_3 = JSON.parse(localStorage.getItem('progressChoiceQuest_6_3'));

    if (localStorage.getItem('progressChoiceQuest_6_3') === null) {
        localStorage.setItem('progressChoiceQuest_6_3', JSON.stringify(progressChoiceQuest_6_3));
    }

    questChoiceCatLoad.questionBlock('Отбор', 'Самара космическая', 'Кого Сергей Павлович Королев назначил курировать производство ракеты&nbsp;– носителя Р-7 в г.&nbsp;Куйбышеве?', 'Баранова Д. А.', 'Черток Б. Е.', 'Козлова Д. И.');

    let answerVar_6_3_1 = document.getElementById('answerVar_1'),
        answerVar_6_3_2 = document.getElementById('answerVar_2'),
        answerVar_6_3_3 = document.getElementById('answerVar_3'),
        answerVarRight_6_3 = [answerVar_6_3_1, answerVar_6_3_2, answerVar_6_3_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressChoiceQuest_6_1 === 1 &&
        progressChoiceQuest_6_2 === 1 &&
        progressChoiceQuest_6_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_6_1" class="fill"></li>
            <li id="questionStar_6_2" class="fill"></li>
            <li id="questionStar_6_3"></li>
        `;
    } else if (progressChoiceQuest_6_1 === 0 &&
        progressChoiceQuest_6_2 === 0 &&
        progressChoiceQuest_6_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_6_1"></li>
            <li id="questionStar_6_2"></li>
            <li id="questionStar_6_3" class="fill"></li>
        `;
    } else if (progressChoiceQuest_6_1 === 0 &&
        progressChoiceQuest_6_2 === 1 &&
        progressChoiceQuest_6_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_6_1"></li>
            <li id="questionStar_6_2" class="fill"></li>
            <li id="questionStar_6_3"></li>
        `;
    } else {
        questionStars.innerHTML = `
            <li id="questionStar_6_1"></li>
            <li id="questionStar_6_2"></li>
            <li id="questionStar_6_3"></li>
        `;
    }

    const questionStar_6_3 = document.getElementById('questionStar_6_3');

    for (let i = 0; i < answerVarRight_6_3.length; i++) {
        if (answerVarRight_6_3[i] === answerVarRight_6_3[answerWrightNum]) {
            answerVarRight_6_3[i].addEventListener('click', () => {
                let progressChoiceQuest_6 = JSON.parse(localStorage.getItem('progressChoiceQuest_6'));
                let progressChoiceQuestSum_6_3 = progressChoiceQuest_6_3 + 1;
                let progressChoiceQuestSum_6 = progressChoiceQuestSum_6_3 + progressChoiceQuest_6;

                localStorage.setItem('progressChoiceQuest_6_3', JSON.stringify(progressChoiceQuestSum_6_3));
                localStorage.setItem('progressChoiceQuest_6', JSON.stringify(progressChoiceQuestSum_6));
                localStorage.setItem('progressChoiceAll', JSON.stringify(progressChoiceQuestSum_6));
                if (progressChoiceQuestSum_6_3 === 1) {
                    questionStar_6_3.className += 'fill';
                }
            });
        }
    }

    questChoiceCatLoad.answerBlock(answerWrightNum, 'Д.&nbsp;И.&nbsp;Козлов сохранил и развил традиции организаторской работы своего учителя&nbsp;— С.&nbsp;П.&nbsp;Королёва.в ЦСКБ «Прогресс». В течение многих лет Дмитрий Ильич возглавлял кафедру «Летательные аппараты» Самарского государственного аэрокосмического университета.');

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