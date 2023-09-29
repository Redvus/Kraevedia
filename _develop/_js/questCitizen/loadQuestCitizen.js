function loadQuestReady_1() {
    let loadQuestReady_1_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_1_1')),
        loadQuestReady_1_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_1_2')),
        loadQuestReady_1_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_1_3')),
        loadQuestReady_1_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_1_4')),
        loadQuestReady_1_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_1_5')),
        loadQuestReady_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_1'))
    ;

    if (loadQuestReady_1_1 === 0) {
        questionCitizenCat_1_1();
    } else if (loadQuestReady_1_2 === 0 &&
                loadQuestReady_1_1 === 1) {
        questionCitizenCat_1_2();
    } else if (loadQuestReady_1_3 === 0 &&
                loadQuestReady_1_1 === 1 &&
                loadQuestReady_1_2 === 1) {
        questionCitizenCat_1_3();
    } else if (loadQuestReady_1_4 === 0 &&
                loadQuestReady_1_1 === 1 &&
                loadQuestReady_1_2 === 1 &&
                loadQuestReady_1_3 === 1) {
        questionCitizenCat_1_4();
    } else if (loadQuestReady_1_5 === 0 &&
                loadQuestReady_1_1 === 1 &&
                loadQuestReady_1_2 === 1 &&
                loadQuestReady_1_3 === 1 &&
                loadQuestReady_1_4 === 1) {
        questionCitizenCat_1_5();
    }
}

function loadQuestReady_2() {
    let loadQuestReady_2_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_1')),
        loadQuestReady_2_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_2')),
        loadQuestReady_2_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_3')),
        loadQuestReady_2_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_4')),
        loadQuestReady_2_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_2_5')),
        loadQuestReady_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_2'))
    ;

    if (loadQuestReady_2_1 === 0) {
        questionCitizenCat_2_1();
    } else if (loadQuestReady_2_2 === 0 &&
        loadQuestReady_2_1 === 1) {
        questionCitizenCat_2_2();
    } else if (loadQuestReady_2_3 === 0 &&
        loadQuestReady_2_1 === 1 &&
        loadQuestReady_2_2 === 1) {
        questionCitizenCat_2_3();
    } else if (loadQuestReady_2_4 === 0 &&
        loadQuestReady_2_1 === 1 &&
        loadQuestReady_2_2 === 1 &&
        loadQuestReady_2_3 === 1) {
        questionCitizenCat_2_4();
    } else if (loadQuestReady_2_5 === 0 &&
        loadQuestReady_2_1 === 1 &&
        loadQuestReady_2_2 === 1 &&
        loadQuestReady_2_3 === 1 &&
        loadQuestReady_2_4 === 1) {
        questionCitizenCat_2_5();
    }
}

function loadQuestReady_3() {
    let loadQuestReady_3_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_1')),
        loadQuestReady_3_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_2')),
        loadQuestReady_3_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_3')),
        loadQuestReady_3_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_4')),
        loadQuestReady_3_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_3_5')),
        loadQuestReady_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_3'))
    ;

    if (loadQuestReady_3_1 === 0) {
        questionCitizenCat_3_1();
    } else if (loadQuestReady_3_2 === 0 &&
        loadQuestReady_3_1 === 1) {
        questionCitizenCat_3_2();
    } else if (loadQuestReady_3_3 === 0 &&
        loadQuestReady_3_1 === 1 &&
        loadQuestReady_3_2 === 1) {
        questionCitizenCat_3_3();
    } else if (loadQuestReady_3_4 === 0 &&
        loadQuestReady_3_1 === 1 &&
        loadQuestReady_3_2 === 1 &&
        loadQuestReady_3_3 === 1) {
        questionCitizenCat_3_4();
    } else if (loadQuestReady_3_5 === 0 &&
        loadQuestReady_3_1 === 1 &&
        loadQuestReady_3_2 === 1 &&
        loadQuestReady_3_3 === 1 &&
        loadQuestReady_3_4 === 1) {
        questionCitizenCat_3_5();
    }
}

function loadQuestReady_4() {
    let loadQuestReady_4_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_1')),
        loadQuestReady_4_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_2')),
        loadQuestReady_4_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_3')),
        loadQuestReady_4_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_4')),
        loadQuestReady_4_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_4_5')),
        loadQuestReady_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_4'))
    ;

    if (loadQuestReady_4_1 === 0) {
        questionCitizenCat_4_1();
    } else if (loadQuestReady_4_2 === 0 &&
        loadQuestReady_4_1 === 1) {
        questionCitizenCat_4_2();
    } else if (loadQuestReady_4_3 === 0 &&
        loadQuestReady_4_1 === 1 &&
        loadQuestReady_4_2 === 1) {
        questionCitizenCat_4_3();
    } else if (loadQuestReady_4_4 === 0 &&
        loadQuestReady_4_1 === 1 &&
        loadQuestReady_4_2 === 1 &&
        loadQuestReady_4_3 === 1) {
        questionCitizenCat_4_4();
    } else if (loadQuestReady_4_5 === 0 &&
        loadQuestReady_4_1 === 1 &&
        loadQuestReady_4_2 === 1 &&
        loadQuestReady_4_3 === 1 &&
        loadQuestReady_4_4 === 1) {
        questionCitizenCat_4_5();
    }
}

function loadQuestReady_5() {
    let loadQuestReady_5_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_1')),
        loadQuestReady_5_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_2')),
        loadQuestReady_5_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_3')),
        loadQuestReady_5_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_4')),
        loadQuestReady_5_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_5_5')),
        loadQuestReady_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_5'))
    ;

    if (loadQuestReady_5_1 === 0) {
        questionCitizenCat_5_1();
    } else if (loadQuestReady_5_2 === 0 &&
        loadQuestReady_5_1 === 1) {
        questionCitizenCat_5_2();
    } else if (loadQuestReady_5_3 === 0 &&
        loadQuestReady_5_1 === 1 &&
        loadQuestReady_5_2 === 1) {
        questionCitizenCat_5_3();
    } else if (loadQuestReady_5_4 === 0 &&
        loadQuestReady_5_1 === 1 &&
        loadQuestReady_5_2 === 1 &&
        loadQuestReady_5_3 === 1) {
        questionCitizenCat_5_4();
    } else if (loadQuestReady_5_5 === 0 &&
        loadQuestReady_5_1 === 1 &&
        loadQuestReady_5_2 === 1 &&
        loadQuestReady_5_3 === 1 &&
        loadQuestReady_5_4 === 1) {
        questionCitizenCat_5_5();
    }
}

function loadQuestReady_6() {
    let loadQuestReady_6_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_1')),
        loadQuestReady_6_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_2')),
        loadQuestReady_6_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_3')),
        loadQuestReady_6_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_4')),
        loadQuestReady_6_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_6_5')),
        loadQuestReady_6 = JSON.parse(localStorage.getItem('progressCitizenQuest_6'))
    ;

    if (loadQuestReady_6_1 === 0) {
        questionCitizenCat_6_1();
    } else if (loadQuestReady_6_2 === 0 &&
        loadQuestReady_6_1 === 1) {
        questionCitizenCat_6_2();
    } else if (loadQuestReady_6_3 === 0 &&
        loadQuestReady_6_1 === 1 &&
        loadQuestReady_6_2 === 1) {
        questionCitizenCat_6_3();
    } else if (loadQuestReady_6_4 === 0 &&
        loadQuestReady_6_1 === 1 &&
        loadQuestReady_6_2 === 1 &&
        loadQuestReady_6_3 === 1) {
        questionCitizenCat_6_4();
    } else if (loadQuestReady_6_5 === 0 &&
        loadQuestReady_6_1 === 1 &&
        loadQuestReady_6_2 === 1 &&
        loadQuestReady_6_3 === 1 &&
        loadQuestReady_6_4 === 1) {
        questionCitizenCat_6_5();
    }
}

function loadQuestReady_7() {
    let loadQuestReady_7_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_1')),
        loadQuestReady_7_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_2')),
        loadQuestReady_7_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_3')),
        loadQuestReady_7_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_4')),
        loadQuestReady_7_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_7_5')),
        loadQuestReady_7 = JSON.parse(localStorage.getItem('progressCitizenQuest_7'))
    ;

    if (loadQuestReady_7_1 === 0) {
        questionCitizenCat_7_1();
    } else if (loadQuestReady_7_2 === 0 &&
        loadQuestReady_7_1 === 1) {
        questionCitizenCat_7_2();
    } else if (loadQuestReady_7_3 === 0 &&
        loadQuestReady_7_1 === 1 &&
        loadQuestReady_7_2 === 1) {
        questionCitizenCat_7_3();
    } else if (loadQuestReady_7_4 === 0 &&
        loadQuestReady_7_1 === 1 &&
        loadQuestReady_7_2 === 1 &&
        loadQuestReady_7_3 === 1) {
        questionCitizenCat_7_4();
    } else if (loadQuestReady_7_5 === 0 &&
        loadQuestReady_7_1 === 1 &&
        loadQuestReady_7_2 === 1 &&
        loadQuestReady_7_3 === 1 &&
        loadQuestReady_7_4 === 1) {
        questionCitizenCat_7_5();
    }
}

function loadQuestReady_8() {
    let loadQuestReady_8_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_1')),
        loadQuestReady_8_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_2')),
        loadQuestReady_8_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_3')),
        loadQuestReady_8_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_4')),
        loadQuestReady_8_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_8_5')),
        loadQuestReady_8 = JSON.parse(localStorage.getItem('progressCitizenQuest_8'))
    ;

    if (loadQuestReady_8_1 === 0) {
        questionCitizenCat_8_1();
    } else if (loadQuestReady_8_2 === 0 &&
        loadQuestReady_8_1 === 1) {
        questionCitizenCat_8_2();
    } else if (loadQuestReady_8_3 === 0 &&
        loadQuestReady_8_1 === 1 &&
        loadQuestReady_8_2 === 1) {
        questionCitizenCat_8_3();
    } else if (loadQuestReady_8_4 === 0 &&
        loadQuestReady_8_1 === 1 &&
        loadQuestReady_8_2 === 1 &&
        loadQuestReady_8_3 === 1) {
        questionCitizenCat_8_4();
    } else if (loadQuestReady_8_5 === 0 &&
        loadQuestReady_8_1 === 1 &&
        loadQuestReady_8_2 === 1 &&
        loadQuestReady_8_3 === 1 &&
        loadQuestReady_8_4 === 1) {
        questionCitizenCat_8_5();
    }
}

function loadQuestReady_9() {
    let loadQuestReady_9_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_1')),
        loadQuestReady_9_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_2')),
        loadQuestReady_9_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_3')),
        loadQuestReady_9_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_4')),
        loadQuestReady_9_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_9_5')),
        loadQuestReady_9 = JSON.parse(localStorage.getItem('progressCitizenQuest_9'))
    ;

    if (loadQuestReady_9_1 === 0) {
        questionCitizenCat_9_1();
    } else if (loadQuestReady_9_2 === 0 &&
        loadQuestReady_9_1 === 1) {
        questionCitizenCat_9_2();
    } else if (loadQuestReady_9_3 === 0 &&
        loadQuestReady_9_1 === 1 &&
        loadQuestReady_9_2 === 1) {
        questionCitizenCat_9_3();
    } else if (loadQuestReady_9_4 === 0 &&
        loadQuestReady_9_1 === 1 &&
        loadQuestReady_9_2 === 1 &&
        loadQuestReady_9_3 === 1) {
        questionCitizenCat_9_4();
    } else if (loadQuestReady_9_5 === 0 &&
        loadQuestReady_9_1 === 1 &&
        loadQuestReady_9_2 === 1 &&
        loadQuestReady_9_3 === 1 &&
        loadQuestReady_9_4 === 1) {
        questionCitizenCat_9_5();
    }
}

function loadQuestReady_10() {
    let loadQuestReady_10_1 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_1')),
        loadQuestReady_10_2 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_2')),
        loadQuestReady_10_3 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_3')),
        loadQuestReady_10_4 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_4')),
        loadQuestReady_10_5 = JSON.parse(localStorage.getItem('progressCitizenQuest_10_5')),
        loadQuestReady_10 = JSON.parse(localStorage.getItem('progressCitizenQuest_10'))
    ;

    if (loadQuestReady_10_1 === 0) {
        questionCitizenCat_10_1();
    } else if (loadQuestReady_10_2 === 0 &&
        loadQuestReady_10_1 === 1) {
        questionCitizenCat_10_2();
    } else if (loadQuestReady_10_3 === 0 &&
        loadQuestReady_10_1 === 1 &&
        loadQuestReady_10_2 === 1) {
        questionCitizenCat_10_3();
    } else if (loadQuestReady_10_4 === 0 &&
        loadQuestReady_10_1 === 1 &&
        loadQuestReady_10_2 === 1 &&
        loadQuestReady_10_3 === 1) {
        questionCitizenCat_10_4();
    } else if (loadQuestReady_10_5 === 0 &&
        loadQuestReady_10_1 === 1 &&
        loadQuestReady_10_2 === 1 &&
        loadQuestReady_10_3 === 1 &&
        loadQuestReady_10_4 === 1) {
        questionCitizenCat_10_5();
    }
}