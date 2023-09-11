/* Блокируем подкатегории при всех ответах */
function lockSubQuestChoice() {
    let progressChoiceQuest_1 = JSON.parse(localStorage.getItem('progressChoiceQuest_1')),
        categorySubChoice_1 = document.getElementById('categorySubChoice_1'),
        progressChoiceQuest_2 = JSON.parse(localStorage.getItem('progressChoiceQuest_2')),
        categorySubChoice_2 = document.getElementById('categorySubChoice_2'),
        progressChoiceQuest_3 = JSON.parse(localStorage.getItem('progressChoiceQuest_3')),
        categorySubChoice_3 = document.getElementById('categorySubChoice_3'),
        progressChoiceQuest_4 = JSON.parse(localStorage.getItem('progressChoiceQuest_4')),
        categorySubChoice_4 = document.getElementById('categorySubChoice_4'),
        progressChoiceQuest_5 = JSON.parse(localStorage.getItem('progressChoiceQuest_5')),
        categorySubChoice_5 = document.getElementById('categorySubChoice_5'),
        progressChoiceQuest_6 = JSON.parse(localStorage.getItem('progressChoiceQuest_6')),
        categorySubChoice_6 = document.getElementById('categorySubChoice_6'),
        progressChoiceQuest_7 = JSON.parse(localStorage.getItem('progressChoiceQuest_7')),
        categorySubChoice_7 = document.getElementById('categorySubChoice_7'),
        progressChoiceQuest_8 = JSON.parse(localStorage.getItem('progressChoiceQuest_8')),
        categorySubChoice_8 = document.getElementById('categorySubChoice_8')
    ;

    if (progressChoiceQuest_1 === 3) {
        categorySubChoice_1.className = 'category__element category__element_1 category__element--lock';
    }

    if (progressChoiceQuest_2 === 3) {
        categorySubChoice_2.className = 'category__element category__element_2 category__element--lock';
    }

    if (progressChoiceQuest_3 === 3) {
        categorySubChoice_3.className = 'category__element category__element_3 category__element--lock';
    }

    if (progressChoiceQuest_4 === 3) {
        categorySubChoice_4.className = 'category__element category__element_4 category__element--lock';
    }

    if (progressChoiceQuest_5 === 3) {
        categorySubChoice_5.className = 'category__element category__element_5 category__element--lock';
    }

    if (progressChoiceQuest_6 === 3) {
        categorySubChoice_6.className = 'category__element category__element_6 category__element--lock';
    }

    if (progressChoiceQuest_7 === 3) {
        categorySubChoice_7.className = 'category__element category__element_7 category__element--lock';
    }

    if (progressChoiceQuest_8 === 3) {
        categorySubChoice_8.className = 'category__element category__element_8 category__element--lock';
    }
}