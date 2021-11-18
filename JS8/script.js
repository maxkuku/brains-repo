'use strict';

function conlog(a){
    console.log(a);
}



let basketTotalTextHandler = document.querySelector('.mini-basket-total span:last-of-type');
let basketTotalText = basketTotalTextHandler.textContent.substring(1);
let basketTotalSum = parseInt(basketTotalText);
let redCircle = document.querySelector('.basket summary span');



/**
 * после добавления товара в корзину, если нажать на крестик –
 * удалить товар и уменьшить общую сумму
 * @param {*} price 
 */
function addListenAndDeleteFromBasket(item, price){
    let closeCross = item.querySelector('.basket-item-del');
    closeCross.addEventListener('click', function(event){
        let itemEl = item.querySelector('.quan');
        //let itemPrice = parseInt(parent.querySelector('.pr').textContent.substring(1));
        let itemsCount = parseInt(itemEl.textContent);
        if(itemsCount > 1) {
            itemEl.textContent = itemsCount - 1;
            decreaseMiniBasket( price );
        }
        else{
            item.remove();
            if(getBasketTotalSum() > 0){
                decreaseMiniBasket( price );
            }
        }
    });
    
}




function getBasketTotalSum(){
    let basketTotalSum = 0;
    let basketTotalTextHandler = document.querySelector('.mini-basket-total span:last-of-type');
    let basketTotalText = basketTotalTextHandler.textContent.substring(1);
    return basketTotalSum = parseInt(basketTotalText);
}




function getRedCircleTotal(){
    let redCircleTotal = 0;
    let redCircle = document.querySelector('.basket summary span');
    return redCircleTotal = +redCircle.textContent;
}





/**
 * 
 * @param {*} price 
 */
function increaseMiniBasket( price ) {
    let totalWillBe = getBasketTotalSum() + +price;
    basketTotalTextHandler.textContent = `$${totalWillBe}`;
    redCircle.textContent = getRedCircleTotal() + 1
}


/**
 * 
 * @param {*} price 
 */
function decreaseMiniBasket( price ) {
    let totalWillBe = getBasketTotalSum() - +price;
    basketTotalTextHandler.textContent = `$${totalWillBe}`;
    redCircle.textContent = getRedCircleTotal() - 1
}







let buttons = document.querySelectorAll('button.to_cart');
buttons.forEach( function(button, index) {
    button.addEventListener('click', function(event){

        let parent = event.target.parentElement;
        

        let itemToCart = {
            item: parent,
            name: parent.querySelector('.annotation .name').textContent,
            src: parent.querySelector('img').getAttribute('src'),
            price: parseInt(parent.querySelector('.price').textContent.substring(1)),
        };



        


        // from https://stackoverflow.com/questions/37098405/javascript-queryselector-find-div-by-innertext
        // находит элемент по текстовому содержанию
        let isThisItemInBasket = Array.prototype.slice.call(document.querySelectorAll('.basket-item-name')).filter(function (el) {
          return el.textContent === itemToCart.name;
        })[0];





        
        if(isThisItemInBasket){
            // ищем элемент с количеством
            let parent = isThisItemInBasket.parentElement;
            // кол. этого товара в корзине
            let basketItemsQuan = parent.querySelector('.quan').textContent;
            // плюсуем
            let basketItemsCount = +basketItemsQuan + 1;
            // и присваиваем в спан
            parent.querySelector('.quan').textContent = basketItemsCount;
            // назначаем div мини-корзины текущим элементом
            let miniBasketItem = parent.closest('.mini-basket-item');
        } 
        else {
            let basketItemHtml = `<div class="mini-basket-item">
            <img src="${itemToCart.src}" alt="${itemToCart.name}">
            <div class="mini-basket-item-defs">
                <div class="basket-item-annot">
                    <div class="basket-item-name">${itemToCart.name}</div>
                    <div class="basket-item-rate">
                        <i class="fas fa-star" aria-hidden="true"></i>
                        <i class="fas fa-star" aria-hidden="true"></i>
                        <i class="fas fa-star" aria-hidden="true"></i>
                        <i class="fas fa-star" aria-hidden="true"></i>
                        <i class="far fa-star" aria-hidden="true"></i>
                    </div>
                    <div class="basket-item-price pink">
                        <span class="quan">1</span>
                        <i class="fas fa-times" aria-hidden="true"></i>
                        <span class="pr">$${itemToCart.price}</span>
                    </div>
                </div>
                <div class="basket-item-del">
                    <i class="fas fa-times-circle" aria-hidden="true"></i>
                </div>
            </div>
            </div>`;

            // вставить элемент в миникорзину
            document.querySelector('.megabox').insertAdjacentHTML('afterbegin', basketItemHtml);

            // назначить ему закрытие по крестику с пересчетом корзины
            let miniBasketItem = document.querySelector('.megabox .mini-basket-item:first-of-type');
            setTimeout( addListenAndDeleteFromBasket(miniBasketItem, itemToCart.price),0 );
        }


        setTimeout( increaseMiniBasket( itemToCart.price ),0 );



        /**
         * добавить эффект клика на кнопку, а затем убрать
         */
        setTimeout( function() {
            event.target.style.animation = 'shad .3s ease';
            setTimeout( function(){
                event.target.style.animation = '';
            },300);
        }, 0);


        event.preventDefault();
    });
});



















/** slider */

var thumbsize = 14;

function draw(slider,splitvalue) {

   
    var min = slider.querySelector('.min');
    var max = slider.querySelector('.max');
    var lower = slider.querySelector('.lower');
    var upper = slider.querySelector('.upper');
    var legend = slider.querySelector('.legend');
    var thumbsize = parseInt(slider.getAttribute('data-thumbsize'));
    var rangewidth = parseInt(slider.getAttribute('data-rangewidth'));
    var rangemin = parseInt(slider.getAttribute('data-rangemin'));
    var rangemax = parseInt(slider.getAttribute('data-rangemax'));
    var pixelMin = 0;
    var pixelMinShow = '';
    var MinShow = '';
    var pixelMax = 0;
    var pixelMaxShow = '';
    var MaxShow = '';
    var Min = slider.querySelector('#min');
    var Max = slider.querySelector('#max');
    

   
    min.setAttribute('max',splitvalue);
    max.setAttribute('min',splitvalue);

    pixelMin = parseInt(thumbsize + ((splitvalue - rangemin)/(rangemax - rangemin))*(rangewidth - (2*thumbsize)));

    min.style.width = pixelMin+'px';
    pixelMinShow = ( parseInt(min.getAttribute('data-value')) - thumbsize / 2 ) / 2;
    

    MinShow = 'linear-gradient(to right, #eeeeee ' + pixelMinShow + 'px, #f16d7f 0%, #f16d7f 100%)';

    Min.style.backgroundImage = MinShow




    pixelMax = parseInt(thumbsize + ((rangemax - splitvalue)/(rangemax - rangemin))*(rangewidth - (2*thumbsize)))

    max.style.width = pixelMax+'px';
    /*pixelMaxShow = ( parseInt(max.getAttribute('data-value') / 2) - thumbsize / 2 );

    MaxShow = 'linear-gradient(to left, #eeeeee ' + pixelMaxShow + 'px, #f16d7f 0%, #f16d7f 100%)';

    Max.style.backgroundImage = MaxShow*/

    min.style.left = '0px';
    max.style.left = parseInt(min.style.width)+'px';
    min.style.top = lower.offsetHeight+'px';
    max.style.top = lower.offsetHeight+'px';
    legend.style.marginTop = min.offsetHeight+'px';
    slider.style.height = (lower.offsetHeight + min.offsetHeight + legend.offsetHeight)+'px';
    
    
    if(max.value>(rangemax - 1)) max.setAttribute('data-value',rangemax);

 
    max.value = max.getAttribute('data-value'); 
    min.value = min.getAttribute('data-value');
    lower.innerHTML = min.getAttribute('data-value');
    upper.innerHTML = max.getAttribute('data-value');

}

function init(slider) {
   
    var min = slider.querySelector('.min');
    var max = slider.querySelector('.max');
    var rangemin = parseInt(min.getAttribute('min'));
    var rangemax = parseInt(max.getAttribute('max'));
    var avgvalue = (rangemin + rangemax)/2;
    var legendnum = slider.getAttribute('data-legendnum');


    min.setAttribute('data-value',rangemin);
    max.setAttribute('data-value',rangemax);

    
    slider.setAttribute('data-rangemin',rangemin); 
    slider.setAttribute('data-rangemax',rangemax); 
    slider.setAttribute('data-thumbsize',thumbsize); 
    slider.setAttribute('data-rangewidth',slider.offsetWidth);


    var lower = document.createElement('span');
    var upper = document.createElement('span');
    lower.classList.add('lower','value');
    upper.classList.add('upper','value');
    lower.appendChild(document.createTextNode(rangemin));
    upper.appendChild(document.createTextNode(rangemax));
    slider.insertBefore(lower,min.previousElementSibling);
    slider.insertBefore(upper,min.previousElementSibling);
    

    var legend = document.createElement('div');
    legend.classList.add('legend');
    var legendvalues = [];
    for (var i = 0; i < legendnum; i++) {
        legendvalues[i] = document.createElement('div');
        var val = Math.round(rangemin+(i/(legendnum-1))*(rangemax - rangemin));
        legendvalues[i].appendChild(document.createTextNode(val));
        legend.appendChild(legendvalues[i]);

    } 
    slider.appendChild(legend);


    draw(slider,avgvalue);


    min.addEventListener("input", function() {update(min);});
    max.addEventListener("input", function() {update(max);});
}

function update(el){
    // set function vars 
    var slider = el.parentElement;
    var min = slider.querySelector('#min');
    var max = slider.querySelector('#max');
    var minvalue = Math.floor(min.value);
    var maxvalue = Math.floor(max.value);
    
    // set inactive values before draw 
    min.setAttribute('data-value',minvalue);
    max.setAttribute('data-value',maxvalue);

    // add colors
    // linear-gradient(to right, #eeeeee 0%, #f16d7f 0%, #f16d7f 100%)

    var avgvalue = (minvalue + maxvalue)/2;

    // draw 
    draw(slider,avgvalue);
}

var sliders = document.querySelectorAll('.min-max-slider');
sliders.forEach( function(slider) {
    init(slider);
});