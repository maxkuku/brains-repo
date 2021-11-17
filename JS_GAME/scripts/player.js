let player = {
    x: 0,
    y: 0,

    /**
     * Метод задает пользователю новое положение
     * @param {{x: int, y: int}} nexPoint координаты куда ставим пользователя
     */
    changePosition(nexPoint) {
        this.x = nexPoint.x;
        this.y = nexPoint.y;
    },
};