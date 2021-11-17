renderer.renderBoard();
//обрабатываем событие если пользователь нажимает на клавишу
window.addEventListener('keydown', function(event){
    mover.makeStep(event);
});