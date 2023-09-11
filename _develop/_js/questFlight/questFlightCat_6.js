if (localStorage.getItem('progressFlightQuest_6') === null) {
    localStorage.setItem('progressFlightQuest_6', JSON.stringify(0));
}

function questionFlightCat_6_1() {
    let questPrepareCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressFlightQuest_6_1 = JSON.parse(localStorage.getItem('progressFlightQuest_6_1'));
    let progressFlightQuest_6_2 = JSON.parse(localStorage.getItem('progressFlightQuest_6_2'));
    let progressFlightQuest_6_3 = JSON.parse(localStorage.getItem('progressFlightQuest_6_3'));

    if (localStorage.getItem('progressFlightQuest_6_1') === null) {
        localStorage.setItem('progressFlightQuest_6_1', JSON.stringify(progressFlightQuest_6_1));
    }

    questPrepareCatLoad.questionBlock('Полет', 'Космические рекорды', 'Самый продолжительно обитаемый космический аппарат?', 'МИР', 'МКС', '«Салют»');

    let answerVar_6_1_1 = document.getElementById('answerVar_1'),
        answerVar_6_1_2 = document.getElementById('answerVar_2'),
        answerVar_6_1_3 = document.getElementById('answerVar_3'),
        answerVarRight_6_1 = [answerVar_6_1_1, answerVar_6_1_2, answerVar_6_1_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressFlightQuest_6_1 === 0 &&
        progressFlightQuest_6_2 === 1 &&
        progressFlightQuest_6_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_6_1"></li>
            <li id="questionStar_6_2" class="fill"></li>
            <li id="questionStar_6_3"></li>
        `;
    } else if (progressFlightQuest_6_1 === 0 &&
        progressFlightQuest_6_2 === 0 &&
        progressFlightQuest_6_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_6_1"></li>
            <li id="questionStar_6_2"></li>
            <li id="questionStar_6_3" class="fill"></li>
        `;
    } else if (progressFlightQuest_6_1 === 0 &&
        progressFlightQuest_6_2 === 1 &&
        progressFlightQuest_6_3 === 1) {
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
                let progressFlightQuest_6 = JSON.parse(localStorage.getItem('progressFlightQuest_6'));
                let progressFlightQuestSum_6_1 = progressFlightQuest_6_1 + 1;
                let progressFlightQuestSum_6 = progressFlightQuestSum_6_1 + progressFlightQuest_6;

                localStorage.setItem('progressFlightQuest_6_1', JSON.stringify(progressFlightQuestSum_6_1));
                localStorage.setItem('progressFlightQuest_6', JSON.stringify(progressFlightQuestSum_6));
                if (progressFlightQuestSum_6_1 === 1) {
                    questionStar_6_1.className += 'fill';
                }
            });
        }
    }

    questPrepareCatLoad.answerBlock(answerWrightNum, 'Этот рекорд принадлежит Международной космической станции, и с каждым днем он увеличивается. На борту этой орбитальной лаборатории непрерывно находятся люди с 2 ноября 2000 года.');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_6_2 = JSON.parse(localStorage.getItem('progressFlightQuest_6_2')),
        questValue_6_3 = JSON.parse(localStorage.getItem('progressFlightQuest_6_3'))
    ;
    arrowNextClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                if (progressFlightQuest_6_1 === 0 &&
                    progressFlightQuest_6_2 === 0 &&
                    progressFlightQuest_6_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressFlightQuest_6_1 === 0 &&
                    progressFlightQuest_6_2 === 1 &&
                    progressFlightQuest_6_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressFlightQuest_6_1 === 0 &&
                    progressFlightQuest_6_2 === 0 &&
                    progressFlightQuest_6_3 === 1) {
                    wrapper.removeChild(questionStars);
                }
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                if (questValue_6_2 === 1 && questValue_6_3 === 1) {
                    flightCategory();
                    lockSubQuestFlight();
                } else if (questValue_6_2 === 0) {
                    questionFlightCat_6_2();
                } else if (questValue_6_2 === 1 && questValue_6_3 === 0) {
                    questionFlightCat_6_3();
                }
            }
        });
        if (progressFlightQuest_6_1 === 0 &&
            progressFlightQuest_6_2 === 1 &&
            progressFlightQuest_6_3 === 1) {
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

function questionFlightCat_6_2() {
    let questPrepareCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressFlightQuest_6_1 = JSON.parse(localStorage.getItem('progressFlightQuest_6_1'));
    let progressFlightQuest_6_2 = JSON.parse(localStorage.getItem('progressFlightQuest_6_2'));
    let progressFlightQuest_6_3 = JSON.parse(localStorage.getItem('progressFlightQuest_6_3'));

    if (localStorage.getItem('progressFlightQuest_6_2') === null) {
        localStorage.setItem('progressFlightQuest_6_2', JSON.stringify(progressFlightQuest_6_2));
    }

    questPrepareCatLoad.questionBlock('Полет', 'Космодромы', 'Самый пожилой человек в космосе?', 'Барбара Морган', 'Джон Гленн', 'Федор Юрчихин');

    let answerVar_6_2_1 = document.getElementById('answerVar_1'),
        answerVar_6_2_2 = document.getElementById('answerVar_2'),
        answerVar_6_2_3 = document.getElementById('answerVar_3'),
        answerVarRight_6_2 = [answerVar_6_2_1, answerVar_6_2_2, answerVar_6_2_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressFlightQuest_6_1 === 1 &&
        progressFlightQuest_6_2 === 0 &&
        progressFlightQuest_6_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_6_1" class="fill"></li>
            <li id="questionStar_6_2"></li>
            <li id="questionStar_6_3"></li>
        `;
    } else if (progressFlightQuest_6_1 === 0 &&
        progressFlightQuest_6_2 === 0 &&
        progressFlightQuest_6_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_6_1"></li>
            <li id="questionStar_6_2"></li>
            <li id="questionStar_6_3" class="fill"></li>
        `;
    } else if (progressFlightQuest_6_1 === 1 &&
        progressFlightQuest_6_2 === 0 &&
        progressFlightQuest_6_3 === 1) {
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
                let progressFlightQuest_6 = JSON.parse(localStorage.getItem('progressFlightQuest_6'));
                let progressFlightQuestSum_6_2 = progressFlightQuest_6_2 + 1;
                let progressFlightQuestSum_6 = progressFlightQuestSum_6_2 + progressFlightQuest_6;

                localStorage.setItem('progressFlightQuest_6_2', JSON.stringify(progressFlightQuestSum_6_2));
                localStorage.setItem('progressFlightQuest_6', JSON.stringify(progressFlightQuestSum_6));
                if (progressFlightQuestSum_6_2 === 1) {
                    questionStar_6_2.className += 'fill';
                }
            });
        }
    }

    questPrepareCatLoad.answerBlock(answerWrightNum, 'Американец является самым пожилым человеком, летавшим в космос. На момент второго полета на космическом корабле «Дискавери» в октябре 1998&nbsp;года Гленну уже исполнилось 77&nbsp;лет.');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_6_3 = JSON.parse(localStorage.getItem('progressFlightQuest_6_3'))
    ;
    arrowNextClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                if (progressFlightQuest_6_1 === 0 &&
                    progressFlightQuest_6_2 === 0 &&
                    progressFlightQuest_6_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressFlightQuest_6_1 === 1 &&
                    progressFlightQuest_6_2 === 0 &&
                    progressFlightQuest_6_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressFlightQuest_6_1 === 0 &&
                    progressFlightQuest_6_2 === 0 &&
                    progressFlightQuest_6_3 === 1) {
                    wrapper.removeChild(questionStars);
                }
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                if (questValue_6_3 === 1) {
                    flightCategory();
                    lockSubQuestFlight();
                } else if (questValue_6_3 === 0) {
                    questionFlightCat_6_3();
                }
            }
        });
        if (progressFlightQuest_6_1 === 1 &&
            progressFlightQuest_6_2 === 0 &&
            progressFlightQuest_6_3 === 1) {
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

function questionFlightCat_6_3() {
    let questPrepareCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressFlightQuest_6_1 = JSON.parse(localStorage.getItem('progressFlightQuest_6_1'));
    let progressFlightQuest_6_2 = JSON.parse(localStorage.getItem('progressFlightQuest_6_2'));
    let progressFlightQuest_6_3 = JSON.parse(localStorage.getItem('progressFlightQuest_6_3'));

    if (localStorage.getItem('progressFlightQuest_6_3') === null) {
        localStorage.setItem('progressFlightQuest_6_3', JSON.stringify(progressFlightQuest_6_3));
    }

    questPrepareCatLoad.questionBlock('Полет', 'Космодромы', 'Наибольшее количество выходов в открытый космос?', 'Олег Кононенко', 'Анатолий Соловьев', 'Алексей Леонов');

    let answerVar_6_3_1 = document.getElementById('answerVar_1'),
        answerVar_6_3_2 = document.getElementById('answerVar_2'),
        answerVar_6_3_3 = document.getElementById('answerVar_3'),
        answerVarRight_6_3 = [answerVar_6_3_1, answerVar_6_3_2, answerVar_6_3_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressFlightQuest_6_1 === 1 &&
        progressFlightQuest_6_2 === 1 &&
        progressFlightQuest_6_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_6_1" class="fill"></li>
            <li id="questionStar_6_2" class="fill"></li>
            <li id="questionStar_6_3"></li>
        `;
    } else if (progressFlightQuest_6_1 === 1 &&
        progressFlightQuest_6_2 === 0 &&
        progressFlightQuest_6_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_6_1" class="fill"></li>
            <li id="questionStar_6_2"></li>
            <li id="questionStar_6_3"></li>
        `;
    } else if (progressFlightQuest_6_1 === 0 &&
        progressFlightQuest_6_2 === 1 &&
        progressFlightQuest_6_3 === 0) {
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
                let progressFlightQuest_6 = JSON.parse(localStorage.getItem('progressFlightQuest_6'));
                let progressFlightQuestSum_6_3 = progressFlightQuest_6_3 + 1;
                let progressFlightQuestSum_6 = progressFlightQuestSum_6_3 + progressFlightQuest_6;

                localStorage.setItem('progressFlightQuest_6_3', JSON.stringify(progressFlightQuestSum_6_3));
                localStorage.setItem('progressFlightQuest_6', JSON.stringify(progressFlightQuestSum_6));
                localStorage.setItem('progressPrepareAll', JSON.stringify(progressFlightQuestSum_6));
                if (progressFlightQuestSum_6_3 === 1) {
                    questionStar_6_3.className += 'fill';
                }
            });
        }
    }

    questPrepareCatLoad.answerBlock(answerWrightNum, 'Российский космонавт, пять раз летавший в космос в&nbsp;1980–х и&nbsp;1990–х&nbsp;годах, совершил 16 выходов в открытый космос. В общий сложности он провел за пределами космического корабля 82&nbsp;часа 21&nbsp;минуту.');

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