if (localStorage.getItem('progressFlightQuest_1') === null) {
    localStorage.setItem('progressFlightQuest_1', JSON.stringify(0));
}

function questionFlightCat_1_1() {
    let questFlightCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressFlightQuest_1_1 = JSON.parse(localStorage.getItem('progressFlightQuest_1_1'));
    let progressFlightQuest_1_2 = JSON.parse(localStorage.getItem('progressFlightQuest_1_2'));
    let progressFlightQuest_1_3 = JSON.parse(localStorage.getItem('progressFlightQuest_1_3'));

    if (localStorage.getItem('progressFlightQuest_1_1') === null) {
        localStorage.setItem('progressFlightQuest_1_1', JSON.stringify(progressFlightQuest_1_1));
    }

    questFlightCatLoad.questionImageBlock('Полет', 'Угадай созвездие', 'cp_dolphin', 'Телец', 'Дельфин', 'Рак');

    let answerVar_1_1_1 = document.getElementById('answerVar_1'),
        answerVar_1_1_2 = document.getElementById('answerVar_2'),
        answerVar_1_1_3 = document.getElementById('answerVar_3'),
        answerVarRight_1_1 = [answerVar_1_1_1, answerVar_1_1_2, answerVar_1_1_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressFlightQuest_1_1 === 0 &&
        progressFlightQuest_1_2 === 1 &&
        progressFlightQuest_1_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_1_1"></li>
            <li id="questionStar_1_2" class="fill"></li>
            <li id="questionStar_1_3"></li>
        `;
    } else if (progressFlightQuest_1_1 === 0 &&
        progressFlightQuest_1_2 === 0 &&
        progressFlightQuest_1_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_1_1"></li>
            <li id="questionStar_1_2"></li>
            <li id="questionStar_1_3" class="fill"></li>
        `;
    } else if (progressFlightQuest_1_1 === 0 &&
        progressFlightQuest_1_2 === 1 &&
        progressFlightQuest_1_3 === 1) {
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
                let progressFlightQuest_1 = JSON.parse(localStorage.getItem('progressFlightQuest_1'));
                let progressFlightQuestSum_1_1 = progressFlightQuest_1_1 + 1;
                let progressFlightQuestSum_1 = progressFlightQuestSum_1_1 + progressFlightQuest_1;

                localStorage.setItem('progressFlightQuest_1_1', JSON.stringify(progressFlightQuestSum_1_1));
                localStorage.setItem('progressFlightQuest_1', JSON.stringify(progressFlightQuestSum_1));
                if (progressFlightQuestSum_1_1 === 1) {
                    questionStar_1_1.className += 'fill';
                }
            });
        }
    }

    questFlightCatLoad.answerBlock(answerWrightNum, 'Угадали!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressFlightQuest_1_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressFlightQuest_1_3'))
    ;
    arrowNextClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                if (progressFlightQuest_1_1 === 0 &&
                    progressFlightQuest_1_2 === 0 &&
                    progressFlightQuest_1_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressFlightQuest_1_1 === 0 &&
                    progressFlightQuest_1_2 === 1 &&
                    progressFlightQuest_1_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressFlightQuest_1_1 === 0 &&
                    progressFlightQuest_1_2 === 0 &&
                    progressFlightQuest_1_3 === 1) {
                    wrapper.removeChild(questionStars);
                }
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                if (questValue_1_2 === 1 && questValue_1_3 === 1) {
                    flightCategory();
                    lockSubQuestFlight();
                } else if (questValue_1_2 === 0) {
                    questionFlightCat_1_2();
                } else if (questValue_1_2 === 1 && questValue_1_3 === 0) {
                    questionFlightCat_1_3();
                }
            }
        });
        if (progressFlightQuest_1_1 === 0 &&
            progressFlightQuest_1_2 === 1 &&
            progressFlightQuest_1_3 === 1) {
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
                flightCategory();
                lockSubQuestFlight();
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

function questionFlightCat_1_2() {
    let questFlightCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 2;
    let progressFlightQuest_1_1 = JSON.parse(localStorage.getItem('progressFlightQuest_1_1'));
    let progressFlightQuest_1_2 = JSON.parse(localStorage.getItem('progressFlightQuest_1_2'));
    let progressFlightQuest_1_3 = JSON.parse(localStorage.getItem('progressFlightQuest_1_3'));

    if (localStorage.getItem('progressFlightQuest_1_2') === null) {
        localStorage.setItem('progressFlightQuest_1_2', JSON.stringify(progressFlightQuest_1_2));
    }

    questFlightCatLoad.questionImageBlock('Полет', 'Угадай созвездие', 'cp_orion', 'Стрелец', 'Орел и Стрела', 'Орион');

    let answerVar_1_2_1 = document.getElementById('answerVar_1'),
        answerVar_1_2_2 = document.getElementById('answerVar_2'),
        answerVar_1_2_3 = document.getElementById('answerVar_3'),
        answerVarRight_1_2 = [answerVar_1_2_1, answerVar_1_2_2, answerVar_1_2_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressFlightQuest_1_1 === 1 &&
        progressFlightQuest_1_2 === 0 &&
        progressFlightQuest_1_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_1_1" class="fill"></li>
            <li id="questionStar_1_2"></li>
            <li id="questionStar_1_3"></li>
        `;
    } else if (progressFlightQuest_1_1 === 0 &&
        progressFlightQuest_1_2 === 0 &&
        progressFlightQuest_1_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_1_1"></li>
            <li id="questionStar_1_2"></li>
            <li id="questionStar_1_3" class="fill"></li>
        `;
    } else if (progressFlightQuest_1_1 === 1 &&
        progressFlightQuest_1_2 === 0 &&
        progressFlightQuest_1_3 === 1) {
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
                let progressFlightQuest_1 = JSON.parse(localStorage.getItem('progressFlightQuest_1'));
                let progressFlightQuestSum_1_2 = progressFlightQuest_1_2 + 1;
                let progressFlightQuestSum_1 = progressFlightQuestSum_1_2 + progressFlightQuest_1;

                localStorage.setItem('progressFlightQuest_1_2', JSON.stringify(progressFlightQuestSum_1_2));
                localStorage.setItem('progressFlightQuest_1', JSON.stringify(progressFlightQuestSum_1));
                if (progressFlightQuestSum_1_2 === 1) {
                    questionStar_1_2.className += 'fill';
                }
            });
        }
    }

    questFlightCatLoad.answerBlock(answerWrightNum, 'Снова угадали!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressFlightQuest_1_3'))
    ;
    arrowNextClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                if (progressFlightQuest_1_1 === 0 &&
                    progressFlightQuest_1_2 === 0 &&
                    progressFlightQuest_1_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressFlightQuest_1_1 === 1 &&
                    progressFlightQuest_1_2 === 0 &&
                    progressFlightQuest_1_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressFlightQuest_1_1 === 0 &&
                    progressFlightQuest_1_2 === 0 &&
                    progressFlightQuest_1_3 === 1) {
                    wrapper.removeChild(questionStars);
                }
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                if (questValue_1_3 === 1) {
                    flightCategory();
                    lockSubQuestFlight();
                } else if (questValue_1_3 === 0) {
                    questionFlightCat_1_3();
                }
            }
        });
        if (progressFlightQuest_1_1 === 1 &&
            progressFlightQuest_1_2 === 0 &&
            progressFlightQuest_1_3 === 1) {
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
                flightCategory();
                lockSubQuestFlight();
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

function questionFlightCat_1_3() {
    let questFlightCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 2;
    let progressFlightQuest_1_1 = JSON.parse(localStorage.getItem('progressFlightQuest_1_1'));
    let progressFlightQuest_1_2 = JSON.parse(localStorage.getItem('progressFlightQuest_1_2'));
    let progressFlightQuest_1_3 = JSON.parse(localStorage.getItem('progressFlightQuest_1_3'));

    if (localStorage.getItem('progressFlightQuest_1_3') === null) {
        localStorage.setItem('progressFlightQuest_1_3', JSON.stringify(progressFlightQuest_1_3));
    }

    questFlightCatLoad.questionImageBlock('Полет', 'Угадай созвездие', 'cp_voznichi', 'Волопас', 'Волосы Вероники', 'Возничего');

    let answerVar_1_3_1 = document.getElementById('answerVar_1'),
        answerVar_1_3_2 = document.getElementById('answerVar_2'),
        answerVar_1_3_3 = document.getElementById('answerVar_3'),
        answerVarRight_1_3 = [answerVar_1_3_1, answerVar_1_3_2, answerVar_1_3_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressFlightQuest_1_1 === 1 &&
        progressFlightQuest_1_2 === 1 &&
        progressFlightQuest_1_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_1_1" class="fill"></li>
            <li id="questionStar_1_2" class="fill"></li>
            <li id="questionStar_1_3"></li>
        `;
    } else if (progressFlightQuest_1_1 === 1 &&
        progressFlightQuest_1_2 === 0 &&
        progressFlightQuest_1_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_1_1" class="fill"></li>
            <li id="questionStar_1_2"></li>
            <li id="questionStar_1_3"></li>
        `;
    } else if (progressFlightQuest_1_1 === 0 &&
        progressFlightQuest_1_2 === 1 &&
        progressFlightQuest_1_3 === 0) {
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
                let progressFlightQuest_1 = JSON.parse(localStorage.getItem('progressFlightQuest_1'));
                let progressFlightQuestSum_1_3 = progressFlightQuest_1_3 + 1;
                let progressFlightQuestSum_1 = progressFlightQuestSum_1_3 + progressFlightQuest_1;

                localStorage.setItem('progressFlightQuest_1_3', JSON.stringify(progressFlightQuestSum_1_3));
                localStorage.setItem('progressFlightQuest_1', JSON.stringify(progressFlightQuestSum_1));
                localStorage.setItem('progressFlightAll', JSON.stringify(progressFlightQuestSum_1));
                if (progressFlightQuestSum_1_3 === 1) {
                    questionStar_1_3.className += 'fill';
                }
            });
        }
    }

    questFlightCatLoad.answerBlock(answerWrightNum, 'Правильно!');

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
                flightCategory();
                lockSubQuestFlight();
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
                flightCategory();
                lockSubQuestFlight();
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