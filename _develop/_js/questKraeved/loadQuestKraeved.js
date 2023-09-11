/* Переходим к неотвеченному вопросу */
function loadQuestFlight_1() {
    let loadQuestFlight_1_1 = JSON.parse(localStorage.getItem('progressFlightQuest_1_1')),
        loadQuestFlight_1_2 = JSON.parse(localStorage.getItem('progressFlightQuest_1_2')),
        loadQuestFlight_1 = JSON.parse(localStorage.getItem('progressFlightQuest_1'))
    ;

    if (loadQuestFlight_1_1 === 0) {
        questionFlightCat_1_1();
    } else if (loadQuestFlight_1_1 === 1 && loadQuestFlight_1 === 1) {
        questionFlightCat_1_2();
    } else if (loadQuestFlight_1_2 === 1 && loadQuestFlight_1 === 2) {
        questionFlightCat_1_3();
    } else if (loadQuestFlight_1_2 === 0 && loadQuestFlight_1 === 2) {
        questionFlightCat_1_2();
    }
}

function loadQuestFlight_2() {
    let loadQuestFlight_2_1 = JSON.parse(localStorage.getItem('progressFlightQuest_2_1')),
        loadQuestFlight_2_2 = JSON.parse(localStorage.getItem('progressFlightQuest_2_2')),
        loadQuestFlight_2 = JSON.parse(localStorage.getItem('progressFlightQuest_2'))
    ;

    if (loadQuestFlight_2_1 === 0) {
        questionFlightCat_2_1();
    } else if (loadQuestFlight_2_1 === 1 && loadQuestFlight_2 === 1) {
        questionFlightCat_2_2();
    } else if (loadQuestFlight_2_2 === 1 && loadQuestFlight_2 === 2) {
        questionFlightCat_2_3();
    } else if (loadQuestFlight_2_2 === 0 && loadQuestFlight_2 === 2) {
        questionFlightCat_2_2();
    }
}

function loadQuestFlight_3() {
    let loadQuestFlight_3_1 = JSON.parse(localStorage.getItem('progressFlightQuest_3_1')),
        loadQuestFlight_3_2 = JSON.parse(localStorage.getItem('progressFlightQuest_3_2')),
        loadQuestFlight_3 = JSON.parse(localStorage.getItem('progressFlightQuest_3'))
    ;

    if (loadQuestFlight_3_1 === 0) {
        questionFlightCat_3_1();
    } else if (loadQuestFlight_3_1 === 1 && loadQuestFlight_3 === 1) {
        questionFlightCat_3_2();
    } else if (loadQuestFlight_3_2 === 1 && loadQuestFlight_3 === 2) {
        questionFlightCat_3_3();
    } else if (loadQuestFlight_3_2 === 0 && loadQuestFlight_3 === 2) {
        questionFlightCat_3_2();
    }
}

function loadQuestFlight_4() {
    let loadQuestFlight_4_1 = JSON.parse(localStorage.getItem('progressFlightQuest_4_1')),
        loadQuestFlight_4_2 = JSON.parse(localStorage.getItem('progressFlightQuest_4_2')),
        loadQuestFlight_4 = JSON.parse(localStorage.getItem('progressFlightQuest_4'))
    ;

    if (loadQuestFlight_4_1 === 0) {
        questionFlightCat_4_1();
    } else if (loadQuestFlight_4_1 === 1 && loadQuestFlight_4 === 1) {
        questionFlightCat_4_2();
    } else if (loadQuestFlight_4_2 === 1 && loadQuestFlight_4 === 2) {
        questionFlightCat_4_3();
    } else if (loadQuestFlight_4_2 === 0 && loadQuestFlight_4 === 2) {
        questionFlightCat_4_2();
    }
}

function loadQuestFlight_5() {
    let loadQuestFlight_5_1 = JSON.parse(localStorage.getItem('progressFlightQuest_5_1')),
        loadQuestFlight_5_2 = JSON.parse(localStorage.getItem('progressFlightQuest_5_2')),
        loadQuestFlight_5 = JSON.parse(localStorage.getItem('progressFlightQuest_5'))
    ;

    if (loadQuestFlight_5_1 === 0) {
        questionFlightCat_5_1();
    } else if (loadQuestFlight_5_1 === 1 && loadQuestFlight_5 === 1) {
        questionFlightCat_5_2();
    } else if (loadQuestFlight_5_2 === 1 && loadQuestFlight_5 === 2) {
        questionFlightCat_5_3();
    } else if (loadQuestFlight_5_2 === 0 && loadQuestFlight_5 === 2) {
        questionFlightCat_5_2();
    }
}

function loadQuestFlight_6() {
    let loadQuestFlight_6_1 = JSON.parse(localStorage.getItem('progressFlightQuest_6_1')),
        loadQuestFlight_6_2 = JSON.parse(localStorage.getItem('progressFlightQuest_6_2')),
        loadQuestFlight_6 = JSON.parse(localStorage.getItem('progressFlightQuest_6'))
    ;

    if (loadQuestFlight_6_1 === 0) {
        questionFlightCat_6_1();
    } else if (loadQuestFlight_6_1 === 1 && loadQuestFlight_6 === 1) {
        questionFlightCat_6_2();
    } else if (loadQuestFlight_6_2 === 1 && loadQuestFlight_6 === 2) {
        questionFlightCat_6_3();
    } else if (loadQuestFlight_6_2 === 0 && loadQuestFlight_6 === 2) {
        questionFlightCat_6_2();
    }
}

function loadQuestFlight_7() {
    let loadQuestFlight_7_1 = JSON.parse(localStorage.getItem('progressFlightQuest_7_1')),
        loadQuestFlight_7_2 = JSON.parse(localStorage.getItem('progressFlightQuest_7_2')),
        loadQuestFlight_7 = JSON.parse(localStorage.getItem('progressFlightQuest_7'))
    ;

    if (loadQuestFlight_7_1 === 0) {
        questionFlightCat_7_1();
    } else if (loadQuestFlight_7_1 === 1 && loadQuestFlight_7 === 1) {
        questionFlightCat_7_2();
    } else if (loadQuestFlight_7_2 === 1 && loadQuestFlight_7 === 2) {
        questionFlightCat_7_3();
    } else if (loadQuestFlight_7_2 === 0 && loadQuestFlight_7 === 2) {
        questionFlightCat_7_2();
    }
}

function loadQuestFlight_8() {
    let loadQuestFlight_8_1 = JSON.parse(localStorage.getItem('progressFlightQuest_8_1')),
        loadQuestFlight_8_2 = JSON.parse(localStorage.getItem('progressFlightQuest_8_2')),
        loadQuestFlight_8 = JSON.parse(localStorage.getItem('progressFlightQuest_8'))
    ;

    if (loadQuestFlight_8_1 === 0) {
        questionFlightCat_8_1();
    } else if (loadQuestFlight_8_1 === 1 && loadQuestFlight_8 === 1) {
        questionFlightCat_8_2();
    } else if (loadQuestFlight_8_2 === 1 && loadQuestFlight_8 === 2) {
        questionFlightCat_8_3();
    } else if (loadQuestFlight_8_2 === 0 && loadQuestFlight_8 === 2) {
        questionFlightCat_8_2();
    }
}