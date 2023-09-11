class ArrowsAll {

    arrowBack() {
        const containerArrowBack = document.createElement('a');
        containerArrowBack.className = 'wrapper__game_arrow';
        containerArrowBack.id = 'arrowBack';
        containerArrowBack.innerHTML = `
            <img src="assets/games/cosmicpuzzles/images/cp_arrowBack.png" alt="Стрелка назад">
        `;
        container.appendChild(containerArrowBack);
    }

    clearStorage() {
        const containerClear = document.createElement('a');
        containerClear.className = 'wrapper__game_clear';
        containerClear.id = 'settingsClick';
        containerClear.innerHTML = `
            <img src="assets/games/cosmicpuzzles/images/cp_clearButton.png" alt="Настройки">
        `;
        container.appendChild(containerClear);
    }

    arrowNext() {
        const containerClear = document.createElement('a');
        containerClear.className = 'wrapper__game_next';
        containerClear.id = 'answerNext';
        containerClear.innerHTML = `
            <img src="assets/games/cosmicpuzzles/images/cp_arrowNext.png" alt="Следующий вопрос">
        `;
        container.appendChild(containerClear);
    }
}