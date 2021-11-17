'use strict';


// 1
// (это задание делайте по желанию) Написать функцию, преобразующую число в объект. Передавая на
// вход число в диапазоне [0, 999],
// мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
// - единицы (в свойстве units)
// - десятки (в свойстве tens)
// - сотни (в свойстве hundereds)
// Например, для числа 45 мы должны получить следующий объект:
// {
// units: 5, //это единицы
// tens: 4, //это десятки
// hundreds: 0, //это сотни
// }
// Если число было передано вне [0, 999] диапазона, не целое число или вообще не число,
// необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
// Вам может пригодиться:
// Number.isInteger(value) – функция проверяет, является ли переданное число целым, подробнее здесь
// https://mzl.la/2XCVSsx
// Math.floor(value) - метод возвращает целое число, которое меньше или равно данному числу (проще
// говоря округляет в меньшую сторону), подробнее здесь https://mzl.la/2Qx42SO .
// Используйте также остаток от деления на 10, например 123 % 10 будет 3
// Вам также может пригодится делить число на 100 и на 10

/**
 * Функция конвертит ввод: число от 0 до 999 вкл. в объект { сотни, десятки, единицы }
 * результат выводит в консоль
 * @param {*} num 
 * @returns 
 */
function convertNumberToObject( num ){
    let number = parseInt( num );
    if ( Number.isInteger( number ) ) {
        if( number >= 0 && number <= 999 ) {
            let hundreds = Math.floor( number / 100 );
            let tens = Math.floor( (number - hundreds * 100) / 10 );
            let units = (number - tens * 10) % 10;
            let obj = {
                hundreds: hundreds,
                tens: tens,
                units: units,
            }
            console.log( obj );
        }
        else {
            console.log( 'Число должно быть в диапазоне от 0 до 999 включительно' );
            return;
        }
    }
    else {
        console.log( 'Введено не число' );
        return;
    }
}

// convertNumberToObject( prompt( 'Введите число от 0 до 999 включительно' ) );





// 1.1
// (это обязательное задание) Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных
//     видео -> 3 примеры наследования -> типы на es5 и es6), конструктор Product, который принимает параметры name
//     и price, сохраните их как свойства объекта. Также объекты типа Product должны иметь метод
//     make25PercentDiscount, который будет уменьшать цену в объекте на 25%. Имейте в виду, что метод
//     make25PercentDiscount не должен быть внутри функции-конструктора, и также не нужно создавать отдельный
//     объект-прототип (как объект transport в уроке).


/**
 * ES5 make25PrecentDiscount() обновляет цену товара,
 * ставит скидку 25%
 * @param {*} name 
 * @param {*} price 
 */
function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function() {
    this.price = parseFloat( ( this.price * .75 ).toFixed(2) );
    console.log( this );
}

let productDiscounted = new Product ( 'tovar', 250 );

productDiscounted.make25PercentDiscount();




/**
 * ES6 класс Product
 * метод make25PrecentDiscount() обновляет цену товара,
 * ставит скидку 25%
 */
class ProductES6 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount() {
        this.price = parseFloat( ( this.price * .75 ).toFixed(2) );
        console.log( this );
    }
}

let productDiscountedES6 = new ProductES6 ( 'tovarES6', 459 );

productDiscountedES6.make25PercentDiscount();









// 1.2
// (это обязательное задание) Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных
// видео -> 3 примеры наследования -> механика наследования),
// а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты
// типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
// б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с
// помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться
// свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
// Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству
// highlighted значение true.

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function(textAdd) {
    // textAdd = prompt( `Введите текст за автора ${this.author}` );
    this.text = textAdd;
    console.log( this );
}

let d = new Date()
let date = d.getDate() + '.' + String(d.getMonth() + 1).padStart(2, '0') + '.' + d.getFullYear();
let post1 = new Post( 'Василий', '', date);
post1.edit('asymptota\'s symptomatically symptom');



function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function() {
    this.highlighted = true;
}

let hiPost = new AttachedPost('Асимптом', '', date);
hiPost.edit('asymptota\'s symptomatically symptom highlighted');
hiPost.makeTextHighlighted();

console.log( hiPost );








// 2 (это задание не является частью учебной программы, делайте его по желанию). Для игры бродилка (которая
// есть в дополнительных видео), добавить возможность ходить по диагонали цифрами 1, 3, 7, 9
// Также необходимо сделать так, чтобы пользователь не мог совершить шаг в стенку, т.е. при направлении в стенку
// и игрок оставался на том же месте где стоял.



// 3 это задание не является частью учебной программы





/* function User(id, name, rights, slogan) {
    this.id = id;
    this.name = name;
    this.rights = rights;
    this.slogan = slogan;
}

User.prototype.show = function() {
    console.log(`${this.id}. User\'s name is ${this.name} and slogan is "${this.slogan}". He is ${this.rights.is} and he is ${this.rights.does}.`);
}

let user1 = new User(1, 'John', { is: 'angry', does: 'shouting' }, 'Hey! They\'d never bite us!');

console.log(user1.show());


function Parent(id, name, rights, slogan, child) {
    User.call(this, id, name, rights, slogan);
    this.child = child;
}

Parent.prototype = Object.create(User.prototype);
Parent.prototype.constructor = Parent;

Parent.prototype.showParent = function() {
    console.log(`${this.id}. This User is a parent of ${this.child} user, His name is ${this.name} and slogan is "${this.slogan}". ${this.name} is ${this.rights.is} and he is ${this.rights.does}.`);
}

let parent1 = new Parent(2, 'Ivan', { is: 'kind', does: 'sewing' }, 'Don\'t touch me please!', 'John');

console.log(parent1.showParent()); */




/* class User {
    constructor(id, name, rights, slogan) {
        this.id = id;
        this.name = name;
        this.rights = rights;
        this.slogan = slogan;
    }
    show() {
        console.log(`${this.id}. User\'s name is ${this.name} and slogan is "${this.slogan}". He is ${this.rights.is} and he is ${this.rights.does}.`);
    }
}


let user1 = new User(1, 'John', { is: 'angry', does: 'shouting' }, 'Hey! They\'d never bite us!');

console.log(user1.show());


class Parent extends User {
    constructor(id, name, rights, slogan, child) {
        super(id, name, rights, slogan);
        this.child = child;
    }
    showParent() {
        console.log(`${this.id}. This User is a parent of ${this.child} user, His name is ${this.name} and slogan is "${this.slogan}". ${this.name} is ${this.rights.is} and he is ${this.rights.does}.`);
    }
}

let parent1 = new Parent(2, 'Ivan', { is: 'kind', does: 'sewing' }, 'Don\'t touch me please!', 'John');

console.log(parent1.showParent()); */