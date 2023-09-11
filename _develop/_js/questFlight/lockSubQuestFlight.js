/* Блокируем подкатегории при всех ответах */
function lockSubQuestFlight() {
    let progressFlightQuest_1 = JSON.parse(localStorage.getItem('progressFlightQuest_1')),
        categorySubFlight_1 = document.getElementById('categorySubFlight_1'),
        progressFlightQuest_2 = JSON.parse(localStorage.getItem('progressFlightQuest_2')),
        categorySubFlight_2 = document.getElementById('categorySubFlight_2'),
        progressFlightQuest_3 = JSON.parse(localStorage.getItem('progressFlightQuest_3')),
        categorySubFlight_3 = document.getElementById('categorySubFlight_3'),
        progressFlightQuest_4 = JSON.parse(localStorage.getItem('progressFlightQuest_4')),
        categorySubFlight_4 = document.getElementById('categorySubFlight_4'),
        progressFlightQuest_5 = JSON.parse(localStorage.getItem('progressFlightQuest_5')),
        categorySubFlight_5 = document.getElementById('categorySubFlight_5'),
        progressFlightQuest_6 = JSON.parse(localStorage.getItem('progressFlightQuest_6')),
        categorySubFlight_6 = document.getElementById('categorySubFlight_6'),
        progressFlightQuest_7 = JSON.parse(localStorage.getItem('progressFlightQuest_7')),
        categorySubFlight_7 = document.getElementById('categorySubFlight_7'),
        progressFlightQuest_8 = JSON.parse(localStorage.getItem('progressFlightQuest_8')),
        categorySubFlight_8 = document.getElementById('categorySubFlight_8')
    ;

    if (progressFlightQuest_1 === 3) {
        categorySubFlight_1.className = 'category__element category__element_1 category__element--lock';
    }

    if (progressFlightQuest_2 === 3) {
        categorySubFlight_2.className = 'category__element category__element_2 category__element--lock';
    }

    if (progressFlightQuest_3 === 3) {
        categorySubFlight_3.className = 'category__element category__element_3 category__element--lock';
    }

    if (progressFlightQuest_4 === 3) {
        categorySubFlight_4.className = 'category__element category__element_4 category__element--lock';
    }

    if (progressFlightQuest_5 === 3) {
        categorySubFlight_5.className = 'category__element category__element_5 category__element--lock';
    }

    if (progressFlightQuest_6 === 3) {
        categorySubFlight_6.className = 'category__element category__element_6 category__element--lock';
    }

    if (progressFlightQuest_7 === 3) {
        categorySubFlight_7.className = 'category__element category__element_7 category__element--lock';
    }

    if (progressFlightQuest_8 === 3) {
        categorySubFlight_8.className = 'category__element category__element_8 category__element--lock';
    }
}