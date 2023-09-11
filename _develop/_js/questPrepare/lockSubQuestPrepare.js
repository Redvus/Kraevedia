/* Блокируем подкатегории при всех ответах */
function lockSubQuestPrepare() {
    let progressPrepareQuest_1 = JSON.parse(localStorage.getItem('progressPrepareQuest_1')),
        categorySubPrepare_1 = document.getElementById('categorySubPrepare_1'),
        progressPrepareQuest_2 = JSON.parse(localStorage.getItem('progressPrepareQuest_2')),
        categorySubPrepare_2 = document.getElementById('categorySubPrepare_2'),
        progressPrepareQuest_3 = JSON.parse(localStorage.getItem('progressPrepareQuest_3')),
        categorySubPrepare_3 = document.getElementById('categorySubPrepare_3'),
        progressPrepareQuest_4 = JSON.parse(localStorage.getItem('progressPrepareQuest_4')),
        categorySubPrepare_4 = document.getElementById('categorySubPrepare_4'),
        progressPrepareQuest_5 = JSON.parse(localStorage.getItem('progressPrepareQuest_5')),
        categorySubPrepare_5 = document.getElementById('categorySubPrepare_5'),
        progressPrepareQuest_6 = JSON.parse(localStorage.getItem('progressPrepareQuest_6')),
        categorySubPrepare_6 = document.getElementById('categorySubPrepare_6'),
        progressPrepareQuest_7 = JSON.parse(localStorage.getItem('progressPrepareQuest_7')),
        categorySubPrepare_7 = document.getElementById('categorySubPrepare_7'),
        progressPrepareQuest_8 = JSON.parse(localStorage.getItem('progressPrepareQuest_8')),
        categorySubPrepare_8 = document.getElementById('categorySubPrepare_8')
    ;

    if (progressPrepareQuest_1 === 3) {
        categorySubPrepare_1.className = 'category__element category__element_1 category__element--lock';
    }

    if (progressPrepareQuest_2 === 3) {
        categorySubPrepare_2.className = 'category__element category__element_2 category__element--lock';
    }

    if (progressPrepareQuest_3 === 3) {
        categorySubPrepare_3.className = 'category__element category__element_3 category__element--lock';
    }

    if (progressPrepareQuest_4 === 3) {
        categorySubPrepare_4.className = 'category__element category__element_4 category__element--lock';
    }

    if (progressPrepareQuest_5 === 3) {
        categorySubPrepare_5.className = 'category__element category__element_5 category__element--lock';
    }

    if (progressPrepareQuest_6 === 3) {
        categorySubPrepare_6.className = 'category__element category__element_6 category__element--lock';
    }

    if (progressPrepareQuest_7 === 3) {
        categorySubPrepare_7.className = 'category__element category__element_7 category__element--lock';
    }

    if (progressPrepareQuest_8 === 3) {
        categorySubPrepare_8.className = 'category__element category__element_8 category__element--lock';
    }
}