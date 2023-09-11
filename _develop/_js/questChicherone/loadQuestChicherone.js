/* Переходим к неотвеченному вопросу */
function loadQuestPrepare_1() {
    let loadQuestPrepare_1_1 = JSON.parse(localStorage.getItem('progressPrepareQuest_1_1')),
        loadQuestPrepare_1_2 = JSON.parse(localStorage.getItem('progressPrepareQuest_1_2')),
        loadQuestPrepare_1 = JSON.parse(localStorage.getItem('progressPrepareQuest_1'))
    ;

    if (loadQuestPrepare_1_1 === 0) {
        questionPrepareCat_1_1();
    } else if (loadQuestPrepare_1_1 === 1 && loadQuestPrepare_1 === 1) {
        questionPrepareCat_1_2();
    } else if (loadQuestPrepare_1_2 === 1 && loadQuestPrepare_1 === 2) {
        questionPrepareCat_1_3();
    } else if (loadQuestPrepare_1_2 === 0 && loadQuestPrepare_1 === 2) {
        questionPrepareCat_1_2();
    }
}

function loadQuestPrepare_2() {
    let loadQuestPrepare_2_1 = JSON.parse(localStorage.getItem('progressPrepareQuest_2_1')),
        loadQuestPrepare_2_2 = JSON.parse(localStorage.getItem('progressPrepareQuest_2_2')),
        loadQuestPrepare_2 = JSON.parse(localStorage.getItem('progressPrepareQuest_2'))
    ;

    if (loadQuestPrepare_2_1 === 0) {
        questionPrepareCat_2_1();
    } else if (loadQuestPrepare_2_1 === 1 && loadQuestPrepare_2 === 1) {
        questionPrepareCat_2_2();
    } else if (loadQuestPrepare_2_2 === 1 && loadQuestPrepare_2 === 2) {
        questionPrepareCat_2_3();
    } else if (loadQuestPrepare_2_2 === 0 && loadQuestPrepare_2 === 2) {
        questionPrepareCat_2_2();
    }
}

function loadQuestPrepare_3() {
    let loadQuestPrepare_3_1 = JSON.parse(localStorage.getItem('progressPrepareQuest_3_1')),
        loadQuestPrepare_3_2 = JSON.parse(localStorage.getItem('progressPrepareQuest_3_2')),
        loadQuestPrepare_3 = JSON.parse(localStorage.getItem('progressPrepareQuest_3'))
    ;

    if (loadQuestPrepare_3_1 === 0) {
        questionPrepareCat_3_1();
    } else if (loadQuestPrepare_3_1 === 1 && loadQuestPrepare_3 === 1) {
        questionPrepareCat_3_2();
    } else if (loadQuestPrepare_3_2 === 1 && loadQuestPrepare_3 === 2) {
        questionPrepareCat_3_3();
    } else if (loadQuestPrepare_3_2 === 0 && loadQuestPrepare_3 === 2) {
        questionPrepareCat_3_2();
    }
}

function loadQuestPrepare_4() {
    let loadQuestPrepare_4_1 = JSON.parse(localStorage.getItem('progressPrepareQuest_4_1')),
        loadQuestPrepare_4_2 = JSON.parse(localStorage.getItem('progressPrepareQuest_4_2')),
        loadQuestPrepare_4 = JSON.parse(localStorage.getItem('progressPrepareQuest_4'))
    ;

    if (loadQuestPrepare_4_1 === 0) {
        questionPrepareCat_4_1();
    } else if (loadQuestPrepare_4_1 === 1 && loadQuestPrepare_4 === 1) {
        questionPrepareCat_4_2();
    } else if (loadQuestPrepare_4_2 === 1 && loadQuestPrepare_4 === 2) {
        questionPrepareCat_4_3();
    } else if (loadQuestPrepare_4_2 === 0 && loadQuestPrepare_4 === 2) {
        questionPrepareCat_4_2();
    }
}

function loadQuestPrepare_5() {
    let loadQuestPrepare_5_1 = JSON.parse(localStorage.getItem('progressPrepareQuest_5_1')),
        loadQuestPrepare_5_2 = JSON.parse(localStorage.getItem('progressPrepareQuest_5_2')),
        loadQuestPrepare_5 = JSON.parse(localStorage.getItem('progressPrepareQuest_5'))
    ;

    if (loadQuestPrepare_5_1 === 0) {
        questionPrepareCat_5_1();
    } else if (loadQuestPrepare_5_1 === 1 && loadQuestPrepare_5 === 1) {
        questionPrepareCat_5_2();
    } else if (loadQuestPrepare_5_2 === 1 && loadQuestPrepare_5 === 2) {
        questionPrepareCat_5_3();
    } else if (loadQuestPrepare_5_2 === 0 && loadQuestPrepare_5 === 2) {
        questionPrepareCat_5_2();
    }
}

function loadQuestPrepare_6() {
    let loadQuestPrepare_6_1 = JSON.parse(localStorage.getItem('progressPrepareQuest_6_1')),
        loadQuestPrepare_6_2 = JSON.parse(localStorage.getItem('progressPrepareQuest_6_2')),
        loadQuestPrepare_6 = JSON.parse(localStorage.getItem('progressPrepareQuest_6'))
    ;

    if (loadQuestPrepare_6_1 === 0) {
        questionPrepareCat_6_1();
    } else if (loadQuestPrepare_6_1 === 1 && loadQuestPrepare_6 === 1) {
        questionPrepareCat_6_2();
    } else if (loadQuestPrepare_6_2 === 1 && loadQuestPrepare_6 === 2) {
        questionPrepareCat_6_3();
    } else if (loadQuestPrepare_6_2 === 0 && loadQuestPrepare_6 === 2) {
        questionPrepareCat_6_2();
    }
}

function loadQuestPrepare_7() {
    let loadQuestPrepare_7_1 = JSON.parse(localStorage.getItem('progressPrepareQuest_7_1')),
        loadQuestPrepare_7_2 = JSON.parse(localStorage.getItem('progressPrepareQuest_7_2')),
        loadQuestPrepare_7 = JSON.parse(localStorage.getItem('progressPrepareQuest_7'))
    ;

    if (loadQuestPrepare_7_1 === 0) {
        questionPrepareCat_7_1();
    } else if (loadQuestPrepare_7_1 === 1 && loadQuestPrepare_7 === 1) {
        questionPrepareCat_7_2();
    } else if (loadQuestPrepare_7_2 === 1 && loadQuestPrepare_7 === 2) {
        questionPrepareCat_7_3();
    } else if (loadQuestPrepare_7_2 === 0 && loadQuestPrepare_7 === 2) {
        questionPrepareCat_7_2();
    }
}

function loadQuestPrepare_8() {
    let loadQuestPrepare_8_1 = JSON.parse(localStorage.getItem('progressPrepareQuest_8_1')),
        loadQuestPrepare_8_2 = JSON.parse(localStorage.getItem('progressPrepareQuest_8_2')),
        loadQuestPrepare_8 = JSON.parse(localStorage.getItem('progressPrepareQuest_8'))
    ;

    if (loadQuestPrepare_8_1 === 0) {
        questionPrepareCat_8_1();
    } else if (loadQuestPrepare_8_1 === 1 && loadQuestPrepare_8 === 1) {
        questionPrepareCat_8_2();
    } else if (loadQuestPrepare_8_2 === 1 && loadQuestPrepare_8 === 2) {
        questionPrepareCat_8_3();
    } else if (loadQuestPrepare_8_2 === 0 && loadQuestPrepare_8 === 2) {
        questionPrepareCat_8_2();
    }
}