if (localStorage.getItem('progressPrepareQuest_3') === null) {
    localStorage.setItem('progressPrepareQuest_3', JSON.stringify(0));
}

function questionPrepareCat_3_1() {
    let questPrepareCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressPrepareQuest_3_1 = JSON.parse(localStorage.getItem('progressPrepareQuest_3_1'));
    let progressPrepareQuest_3_2 = JSON.parse(localStorage.getItem('progressPrepareQuest_3_2'));
    let progressPrepareQuest_3_3 = JSON.parse(localStorage.getItem('progressPrepareQuest_3_3'));

    if (localStorage.getItem('progressPrepareQuest_3_1') === null) {
        localStorage.setItem('progressPrepareQuest_3_1', JSON.stringify(progressPrepareQuest_3_1));
    }

    questPrepareCatLoad.questionBlock('Отбор', 'Отгадай планету', 'Многие фантасты населяли красную планету воинственными чудовищами и человекоподобными существами, стремящихся уничтожить землян. Два спутника этой планеты переводятся как страх и ужас. Планета покровительствует военным, смелым и отчаянным.', 'Юпитер', 'Марс', 'Меркурий');

    let answerVar_3_1_1 = document.getElementById('answerVar_1'),
        answerVar_3_1_2 = document.getElementById('answerVar_2'),
        answerVar_3_1_3 = document.getElementById('answerVar_3'),
        answerVarRight_3_1 = [answerVar_3_1_1, answerVar_3_1_2, answerVar_3_1_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressPrepareQuest_3_1 === 0 &&
        progressPrepareQuest_3_2 === 1 &&
        progressPrepareQuest_3_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_3_1"></li>
            <li id="questionStar_3_2" class="fill"></li>
            <li id="questionStar_3_3"></li>
        `;
    } else if (progressPrepareQuest_3_1 === 0 &&
        progressPrepareQuest_3_2 === 0 &&
        progressPrepareQuest_3_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_3_1"></li>
            <li id="questionStar_3_2"></li>
            <li id="questionStar_3_3" class="fill"></li>
        `;
    } else if (progressPrepareQuest_3_1 === 0 &&
        progressPrepareQuest_3_2 === 1 &&
        progressPrepareQuest_3_3 === 1) {
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
                let progressPrepareQuest_3 = JSON.parse(localStorage.getItem('progressPrepareQuest_3'));
                let progressPrepareQuestSum_3_1 = progressPrepareQuest_3_1 + 1;
                let progressPrepareQuestSum_3 = progressPrepareQuestSum_3_1 + progressPrepareQuest_3;

                localStorage.setItem('progressPrepareQuest_3_1', JSON.stringify(progressPrepareQuestSum_3_1));
                localStorage.setItem('progressPrepareQuest_3', JSON.stringify(progressPrepareQuestSum_3));
                if (progressPrepareQuestSum_3_1 === 1) {
                    questionStar_3_1.className += 'fill';
                }
            });
        }
    }

    questPrepareCatLoad.answerBlock(answerWrightNum, 'Молодец!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_3_2 = JSON.parse(localStorage.getItem('progressPrepareQuest_3_2')),
        questValue_3_3 = JSON.parse(localStorage.getItem('progressPrepareQuest_3_3'))
    ;
    arrowNextClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                if (progressPrepareQuest_3_1 === 0 &&
                    progressPrepareQuest_3_2 === 0 &&
                    progressPrepareQuest_3_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressPrepareQuest_3_1 === 0 &&
                    progressPrepareQuest_3_2 === 1 &&
                    progressPrepareQuest_3_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressPrepareQuest_3_1 === 0 &&
                    progressPrepareQuest_3_2 === 0 &&
                    progressPrepareQuest_3_3 === 1) {
                    wrapper.removeChild(questionStars);
                }
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                if (questValue_3_2 === 1 && questValue_3_3 === 1) {
                    prepareCategory();
                    lockSubQuestPrepare();
                } else if (questValue_3_2 === 0) {
                    questionPrepareCat_3_2();
                } else if (questValue_3_2 === 1 && questValue_3_3 === 0) {
                    questionPrepareCat_3_3();
                }
            }
        });
        if (progressPrepareQuest_3_1 === 0 &&
            progressPrepareQuest_3_2 === 1 &&
            progressPrepareQuest_3_3 === 1) {
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
                prepareCategory();
                lockSubQuestPrepare();
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

function questionPrepareCat_3_2() {
    let questPrepareCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressPrepareQuest_3_1 = JSON.parse(localStorage.getItem('progressPrepareQuest_3_1'));
    let progressPrepareQuest_3_2 = JSON.parse(localStorage.getItem('progressPrepareQuest_3_2'));
    let progressPrepareQuest_3_3 = JSON.parse(localStorage.getItem('progressPrepareQuest_3_3'));

    if (localStorage.getItem('progressPrepareQuest_3_2') === null) {
        localStorage.setItem('progressPrepareQuest_3_2', JSON.stringify(progressPrepareQuest_3_2));
    }

    questPrepareCatLoad.questionBlock('Отбор', 'Подбери планете спутник', 'Планета Земля', 'Солнце', 'спутник Луна', 'Нет спутника');

    let answerVar_3_2_1 = document.getElementById('answerVar_1'),
        answerVar_3_2_2 = document.getElementById('answerVar_2'),
        answerVar_3_2_3 = document.getElementById('answerVar_3'),
        answerVarRight_3_2 = [answerVar_3_2_1, answerVar_3_2_2, answerVar_3_2_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressPrepareQuest_3_1 === 1 &&
        progressPrepareQuest_3_2 === 0 &&
        progressPrepareQuest_3_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_3_1" class="fill"></li>
            <li id="questionStar_3_2"></li>
            <li id="questionStar_3_3"></li>
        `;
    } else if (progressPrepareQuest_3_1 === 0 &&
        progressPrepareQuest_3_2 === 0 &&
        progressPrepareQuest_3_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_3_1"></li>
            <li id="questionStar_3_2"></li>
            <li id="questionStar_3_3" class="fill"></li>
        `;
    } else if (progressPrepareQuest_3_1 === 1 &&
        progressPrepareQuest_3_2 === 0 &&
        progressPrepareQuest_3_3 === 1) {
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
                let progressPrepareQuest_3 = JSON.parse(localStorage.getItem('progressPrepareQuest_3'));
                let progressPrepareQuestSum_3_2 = progressPrepareQuest_3_2 + 1;
                let progressPrepareQuestSum_3 = progressPrepareQuestSum_3_2 + progressPrepareQuest_3;

                localStorage.setItem('progressPrepareQuest_3_2', JSON.stringify(progressPrepareQuestSum_3_2));
                localStorage.setItem('progressPrepareQuest_3', JSON.stringify(progressPrepareQuestSum_3));
                if (progressPrepareQuestSum_3_2 === 1) {
                    questionStar_3_2.className += 'fill';
                }
            });
        }
    }

    questPrepareCatLoad.answerBlock(answerWrightNum, 'Ну конечно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_3_3 = JSON.parse(localStorage.getItem('progressPrepareQuest_3_3'))
    ;
    arrowNextClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                if (progressPrepareQuest_3_1 === 0 &&
                    progressPrepareQuest_3_2 === 0 &&
                    progressPrepareQuest_3_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressPrepareQuest_3_1 === 1 &&
                    progressPrepareQuest_3_2 === 0 &&
                    progressPrepareQuest_3_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressPrepareQuest_3_1 === 0 &&
                    progressPrepareQuest_3_2 === 0 &&
                    progressPrepareQuest_3_3 === 1) {
                    wrapper.removeChild(questionStars);
                }
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                if (questValue_3_3 === 1) {
                    prepareCategory();
                    lockSubQuestPrepare();
                } else if (questValue_3_3 === 0) {
                    questionPrepareCat_3_3();
                }
            }
        });
        if (progressPrepareQuest_3_1 === 1 &&
            progressPrepareQuest_3_2 === 0 &&
            progressPrepareQuest_3_3 === 1) {
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
                prepareCategory();
                lockSubQuestPrepare();
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

function questionPrepareCat_3_3() {
    let questPrepareCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 2;
    let progressPrepareQuest_3_1 = JSON.parse(localStorage.getItem('progressPrepareQuest_3_1'));
    let progressPrepareQuest_3_2 = JSON.parse(localStorage.getItem('progressPrepareQuest_3_2'));
    let progressPrepareQuest_3_3 = JSON.parse(localStorage.getItem('progressPrepareQuest_3_3'));

    if (localStorage.getItem('progressPrepareQuest_3_3') === null) {
        localStorage.setItem('progressPrepareQuest_3_3', JSON.stringify(progressPrepareQuest_3_3));
    }

    questPrepareCatLoad.questionBlock('Отбор', 'Назови планету', 'Какая планета Солнечной системы имеет спутник с самой плотной атмосферой?', 'Земля', 'Юпитер', 'Сатурн');

    let answerVar_3_3_1 = document.getElementById('answerVar_1'),
        answerVar_3_3_2 = document.getElementById('answerVar_2'),
        answerVar_3_3_3 = document.getElementById('answerVar_3'),
        answerVarRight_3_3 = [answerVar_3_3_1, answerVar_3_3_2, answerVar_3_3_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressPrepareQuest_3_1 === 1 &&
        progressPrepareQuest_3_2 === 1 &&
        progressPrepareQuest_3_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_3_1" class="fill"></li>
            <li id="questionStar_3_2" class="fill"></li>
            <li id="questionStar_3_3"></li>
        `;
    } else if (progressPrepareQuest_3_1 === 1 &&
        progressPrepareQuest_3_2 === 0 &&
        progressPrepareQuest_3_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_3_1" class="fill"></li>
            <li id="questionStar_3_2"></li>
            <li id="questionStar_3_3"></li>
        `;
    } else if (progressPrepareQuest_3_1 === 0 &&
        progressPrepareQuest_3_2 === 1 &&
        progressPrepareQuest_3_3 === 0) {
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
                let progressPrepareQuest_3 = JSON.parse(localStorage.getItem('progressPrepareQuest_3'));
                let progressPrepareQuestSum_3_3 = progressPrepareQuest_3_3 + 1;
                let progressPrepareQuestSum_3 = progressPrepareQuestSum_3_3 + progressPrepareQuest_3;

                localStorage.setItem('progressPrepareQuest_3_3', JSON.stringify(progressPrepareQuestSum_3_3));
                localStorage.setItem('progressPrepareQuest_3', JSON.stringify(progressPrepareQuestSum_3));
                localStorage.setItem('progressPrepareAll', JSON.stringify(progressPrepareQuestSum_3));
                if (progressPrepareQuestSum_3_3 === 1) {
                    questionStar_3_3.className += 'fill';
                }
            });
        }
    }

    questPrepareCatLoad.answerBlock(answerWrightNum, 'Титан — крупнейший спутник Сатурна, второй по величине спутник в Солнечной системе, является единственным, кроме Земли, объектом в Солнечной системе, на котором есть плотная атмосфера с облаками, реки и озёра из сжиженных газов, и имеется даже вода в виде льда. Температура на Титане составляет, в среднем, -179&nbsp;°C.');

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
                prepareCategory();
                lockSubQuestPrepare();
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
                prepareCategory();
                lockSubQuestPrepare();
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