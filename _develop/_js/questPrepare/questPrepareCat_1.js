
if (localStorage.getItem('progressPrepareQuest_1') === null) {
    localStorage.setItem('progressPrepareQuest_1', JSON.stringify(0));
}

// Prepare. Quest 1
function questionPrepareCat_1_1() {
    let questPrepareCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressPrepareQuest_1_1 = JSON.parse(localStorage.getItem('progressPrepareQuest_1_1'));
    let progressPrepareQuest_1_2 = JSON.parse(localStorage.getItem('progressPrepareQuest_1_2'));
    let progressPrepareQuest_1_3 = JSON.parse(localStorage.getItem('progressPrepareQuest_1_3'));

    if (localStorage.getItem('progressPrepareQuest_1_1') === null) {
        localStorage.setItem('progressPrepareQuest_1_1', JSON.stringify(progressPrepareQuest_1_1));
    }

    questPrepareCatLoad.questionBlock('Подготовка', 'Отгадай планету', 'Планета получила свое название по имени древнеримского бога торговли с крылышками на сандалиях.', 'Венера', 'Меркурий', 'Сатурн');

    let answerVar_1_1_1 = document.getElementById('answerVar_1'),
        answerVar_1_1_2 = document.getElementById('answerVar_2'),
        answerVar_1_1_3 = document.getElementById('answerVar_3'),
        answerVarRight_1_1 = [answerVar_1_1_1, answerVar_1_1_2, answerVar_1_1_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressPrepareQuest_1_1 === 0 &&
        progressPrepareQuest_1_2 === 1 &&
        progressPrepareQuest_1_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_1_1"></li>
            <li id="questionStar_1_2" class="fill"></li>
            <li id="questionStar_1_3"></li>
        `;
    } else if (progressPrepareQuest_1_1 === 0 &&
        progressPrepareQuest_1_2 === 0 &&
        progressPrepareQuest_1_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_1_1"></li>
            <li id="questionStar_1_2"></li>
            <li id="questionStar_1_3" class="fill"></li>
        `;
    } else if (progressPrepareQuest_1_1 === 0 &&
        progressPrepareQuest_1_2 === 1 &&
        progressPrepareQuest_1_3 === 1) {
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
                let progressPrepareQuest_1 = JSON.parse(localStorage.getItem('progressPrepareQuest_1'));
                let progressPrepareQuestSum_1_1 = progressPrepareQuest_1_1 + 1;
                let progressPrepareQuestSum_1 = progressPrepareQuestSum_1_1 + progressPrepareQuest_1;

                localStorage.setItem('progressPrepareQuest_1_1', JSON.stringify(progressPrepareQuestSum_1_1));
                localStorage.setItem('progressPrepareQuest_1', JSON.stringify(progressPrepareQuestSum_1));
                if (progressPrepareQuestSum_1_1 === 1) {
                    questionStar_1_1.className += 'fill';
                }
            });
        }
    }

    questPrepareCatLoad.answerBlock(answerWrightNum, 'Совершенно верно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressPrepareQuest_1_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressPrepareQuest_1_3'))
    ;
    arrowNextClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                if (progressPrepareQuest_1_1 === 0 &&
                    progressPrepareQuest_1_2 === 0 &&
                    progressPrepareQuest_1_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressPrepareQuest_1_1 === 0 &&
                    progressPrepareQuest_1_2 === 1 &&
                    progressPrepareQuest_1_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressPrepareQuest_1_1 === 0 &&
                    progressPrepareQuest_1_2 === 0 &&
                    progressPrepareQuest_1_3 === 1) {
                    wrapper.removeChild(questionStars);
                }
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                if (questValue_1_2 === 1 && questValue_1_3 === 1) {
                    prepareCategory();
                    lockSubQuestPrepare();
                } else if (questValue_1_2 === 0) {
                    questionPrepareCat_1_2();
                } else if (questValue_1_2 === 1 && questValue_1_3 === 0) {
                    questionPrepareCat_1_3();
                }
            }
        });
        if (progressPrepareQuest_1_1 === 0 &&
            progressPrepareQuest_1_2 === 1 &&
            progressPrepareQuest_1_3 === 1) {
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

function questionPrepareCat_1_2() {
    let questPrepareCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 2;
    let progressPrepareQuest_1_1 = JSON.parse(localStorage.getItem('progressPrepareQuest_1_1'));
    let progressPrepareQuest_1_2 = JSON.parse(localStorage.getItem('progressPrepareQuest_1_2'));
    let progressPrepareQuest_1_3 = JSON.parse(localStorage.getItem('progressPrepareQuest_1_3'));

    if (localStorage.getItem('progressPrepareQuest_1_2') === null) {
        localStorage.setItem('progressPrepareQuest_1_2', JSON.stringify(progressPrepareQuest_1_2));
    }

    questPrepareCatLoad.questionBlock('Подготовка', 'Подберите планете спутник', 'Планета Меркурий', 'спутник Титан', 'спутник Европа', 'нет спутников');

    let answerVar_1_2_1 = document.getElementById('answerVar_1'),
        answerVar_1_2_2 = document.getElementById('answerVar_2'),
        answerVar_1_2_3 = document.getElementById('answerVar_3'),
        answerVarRight_1_2 = [answerVar_1_2_1, answerVar_1_2_2, answerVar_1_2_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressPrepareQuest_1_1 === 1 &&
        progressPrepareQuest_1_2 === 0 &&
        progressPrepareQuest_1_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_1_1" class="fill"></li>
            <li id="questionStar_1_2"></li>
            <li id="questionStar_1_3"></li>
        `;
    } else if (progressPrepareQuest_1_1 === 0 &&
        progressPrepareQuest_1_2 === 0 &&
        progressPrepareQuest_1_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_1_1"></li>
            <li id="questionStar_1_2"></li>
            <li id="questionStar_1_3" class="fill"></li>
        `;
    } else if (progressPrepareQuest_1_1 === 1 &&
        progressPrepareQuest_1_2 === 0 &&
        progressPrepareQuest_1_3 === 1) {
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
                let progressPrepareQuest_1 = JSON.parse(localStorage.getItem('progressPrepareQuest_1'));
                let progressPrepareQuestSum_1_2 = progressPrepareQuest_1_2 + 1;
                let progressPrepareQuestSum_1 = progressPrepareQuest_1 + progressPrepareQuestSum_1_2;
                localStorage.setItem('progressPrepareQuest_1_2', JSON.stringify(progressPrepareQuestSum_1_2));
                localStorage.setItem('progressPrepareQuest_1', JSON.stringify(progressPrepareQuestSum_1));
                if (progressPrepareQuestSum_1_2 === 1) {
                    questionStar_1_2.className += 'fill';
                }
            });
        }
    }

    questPrepareCatLoad.answerBlock(answerWrightNum, 'Конечно да!');
    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressPrepareQuest_1_3'))
    ;
    arrowNextClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                if (progressPrepareQuest_1_1 === 0 &&
                    progressPrepareQuest_1_2 === 0 &&
                    progressPrepareQuest_1_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressPrepareQuest_1_1 === 1 &&
                    progressPrepareQuest_1_2 === 0 &&
                    progressPrepareQuest_1_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressPrepareQuest_1_1 === 0 &&
                    progressPrepareQuest_1_2 === 0 &&
                    progressPrepareQuest_1_3 === 1) {
                    wrapper.removeChild(questionStars);
                }
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                if (questValue_1_3 === 1) {
                    prepareCategory();
                    lockSubQuestPrepare();
                } else if (questValue_1_3 === 0) {
                    questionPrepareCat_1_3();
                }
            }
        });
        if (progressPrepareQuest_1_1 === 1 &&
            progressPrepareQuest_1_2 === 0 &&
            progressPrepareQuest_1_3 === 1) {
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

function questionPrepareCat_1_3() {
    let questPrepareCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 2;
    let progressPrepareQuest_1_1 = JSON.parse(localStorage.getItem('progressPrepareQuest_1_1'));
    let progressPrepareQuest_1_2 = JSON.parse(localStorage.getItem('progressPrepareQuest_1_2'));
    let progressPrepareQuest_1_3 = JSON.parse(localStorage.getItem('progressPrepareQuest_1_3'));

    if (localStorage.getItem('progressPrepareQuest_1_3') === null) {
        localStorage.setItem('progressPrepareQuest_1_3', JSON.stringify(progressPrepareQuest_1_3));
    }

    questPrepareCatLoad.questionBlock('Подготовка', 'Отгадай планету', 'На какой из планет Солнечной системы находится самая высокая гора?', 'Венера', 'Земля', 'Марс');

    let answerVar_1_3_1 = document.getElementById('answerVar_1'),
        answerVar_1_3_2 = document.getElementById('answerVar_2'),
        answerVar_1_3_3 = document.getElementById('answerVar_3'),
        answerVarRight_1_3 = [answerVar_1_3_1, answerVar_1_3_2, answerVar_1_3_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressPrepareQuest_1_1 === 1 &&
        progressPrepareQuest_1_2 === 1 &&
        progressPrepareQuest_1_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_1_1" class="fill"></li>
            <li id="questionStar_1_2" class="fill"></li>
            <li id="questionStar_1_3"></li>
        `;
    } else if (progressPrepareQuest_1_1 === 1 &&
        progressPrepareQuest_1_2 === 0 &&
        progressPrepareQuest_1_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_1_1" class="fill"></li>
            <li id="questionStar_1_2"></li>
            <li id="questionStar_1_3"></li>
        `;
    } else if (progressPrepareQuest_1_1 === 0 &&
        progressPrepareQuest_1_2 === 1 &&
        progressPrepareQuest_1_3 === 0) {
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
                let progressPrepareQuest_1 = JSON.parse(localStorage.getItem('progressPrepareQuest_1'));
                let progressPrepareQuestSum_1_3 = progressPrepareQuest_1_3 + 1;
                let progressPrepareQuestSum_1 = progressPrepareQuest_1 + progressPrepareQuestSum_1_3;
                localStorage.setItem('progressPrepareQuest_1_3', JSON.stringify(progressPrepareQuestSum_1_3));
                localStorage.setItem('progressPrepareQuest_1', JSON.stringify(progressPrepareQuestSum_1));
                if (progressPrepareQuestSum_1_3 === 1) {
                    questionStar_1_3.className += 'fill';
                }
            });
        }
    }

    questPrepareCatLoad.answerBlock(answerWrightNum, 'Олимп является высочайшей горой Марса&nbsp;– ее высота с учетом основания составляет 26&nbsp;километров. Это одновременно потухший вулкан. За Олимпом закреплено звание самой высокой горы Солнечной системы.');
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