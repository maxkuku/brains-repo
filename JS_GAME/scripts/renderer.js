let renderer = {
    //метод рисует игровое поле и игрока
    renderBoard() {
        let result = this.generateBoard();
        document.body.insertAdjacentHTML('afterbegin', result);
        this.renderUserPosition(player);
    },

    /**
     * Метод генерирует игровое поле на основании конфига
     * @returns {string} сгенерированный html-код таблицы
     */
    generateBoard() {
        let board = '';
        for (let y = 0; y < config.rowsCount; y++) {
            board += '<tr>';
            for (let x = 0; x < config.colsCount; x++) {
                board += `<td data-x="${x}" data-y="${y}"></td>`;
            }
            board += '</tr>';
        }
        return `<table><tbody>${board}</tbody></table>`;
    },

    /**
     * если ячейка с переданными координатами есть, то возвращается объект
     * @param {{x: number, y: number}} position
     * @returns {HTMLTableCellElement|null} объект ячейки если есть, иначе null
     */
    getSquare(position) {
        return document.querySelector(`[data-x="${position.x}"][data-y="${position.y}"]`);
    },

    /**
     * Метод рисует раположение пользователя для указанной координаты
     * для этого он добавляет тегу класс user
     * @param {{x: number, y: number}} position
     */
    renderUserPosition(position) {
        let square = this.getSquare(position);
        square.classList.add('user');
    },

    clearUserPosition() {
        document.querySelector(".user").classList.remove("user");
    }
};