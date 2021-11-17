let mover = {
    /**
     *
     * @param nextPoint
     * @returns {boolean}
     */
    canPlayerMakeStep(nextPoint) {
        return renderer.getSquare(nextPoint) !== null;
    },

    /**
     *
     * @param event
     */
    makeStep(event) {
        let newPosition = this.getNewPosition(event);
        if(this.arePositionsEqual(player, newPosition)) {
            return;
        }
        if(!this.canPlayerMakeStep(newPosition)) {
            return;
        }
        renderer.clearUserPosition();
        player.changePosition(newPosition);
        renderer.renderUserPosition(newPosition);
    },

    /**
     * передает объект в зависимости от того, какая стрелка нажата
     * @param event
     * @returns {{x: number, y: number}}
     */
    getNewPosition(event){
        switch (event.key){
            case "ArrowUp":
                return {x: player.x, y: player.y - 1};
            case "ArrowDown":
                return {x: player.x, y: player.y + 1};
            case "ArrowLeft":
                return {x: player.x - 1, y: player.y};
            case "ArrowRight":
                return {x: player.x + 1, y: player.y};
            default:
                return {x: player.x, y: player.y};
        }
    },

    /**
     *
     * @param curPos
     * @param newPos
     * @returns {boolean}
     */
    arePositionsEqual(curPos, newPos) {
        return curPos.x == newPos.x && curPos.y == newPos.y;
    }
};