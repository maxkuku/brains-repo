// const good = {
//   title: "Bag",
//   price: 100,

//   getHTML() {
//     return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
//   }
// }

// ============================================

// const emailSender = {
//   email: 'example@mail.ru',
//   subject: 'admin',

//   send(message) {
//     // отправка сообщения
//   }
// }

// const telegramSender = {
//   nikname: '@MaksDeev',

//   send(message) {
//     // отправка сообщения
//   }
// }

// telegramSender.send('Hello')

// ============================================

// const person = {
//   name: 'John',
//   lastname: 'Doe',

//   getFullName() {
//     return `${this.name} ${this.lastname}`;
//   }
// }


// const seller = {
//   name: 'Kate',
//   good: {
//     price: 20,
//     title: 'Bag'
//   },

//   sell() {
//     console.log(`${this.getFullName()} продал ${this.good.title} за ${this.good.price} $`)
//   },

//   getPrice() {
//     return this.good.price
//   }
// }

// const buyer = {
//   name: 'Boris',
//   cash: 100,

//   buy(seller) {
//     if(this.cash >= seller.getPrice()) {
//       seller.sell()
//       console.log(`${this.getFullName()} Купил у ${seller.getFullName()}`);
//       this.cash = this.cash - seller.getPrice();
//       return;
//     }
//     console.log('покупка не произошла')
//   }
// }

// seller.__proto__ = person;
// buyer.__proto__ = person;


// buyer.buy(seller)

// ============================================

// const senderPrototype = {
//   send(message) {
//     console.log(`subject: ${this.subject}, message: ${message}, email: ${this.email}`)
//   }
// }

// function EmailSender(email, subject = 'Admin') {
//   this.email = email;
//   this.subject = subject;
// }

// EmailSender.prototype = senderPrototype

// const exampleSender = new EmailSender('example@gmal.com')
// const secondSender = new EmailSender('second@gmal.com')

// exampleSender.send('hello')
// secondSender.send('bye')

// ===============================================

// class EmailSender {
//   constructor(email, subject = 'Admin') {
//     this.email = email;
//     this.subject = subject;
//   }

//   send(message) {
//     console.log(`subject: ${this.subject}, message: ${message}, email: ${this.email}`)
//   }
// }

// const exampleSender = new EmailSender('example@gmal.com')
// const secondSender = new EmailSender('second@gmal.com')

// exampleSender.send('hello')
// secondSender.send('bye')

// console.log(exampleSender)


// ======================================================

// class Sender {
//   constructor(subject) {
//     this.subject = subject;
//   }

//   send(message) {
//     return `отправлено сообщение "${message}"`;
//   }
// }

// class EmailSender extends Sender {
//   constructor(subject, email) {
//     super(subject)

//     this.email = email;
//   }

//   send(msg) {
//     console.log(`${super.send(msg)} по email: ${this.email}`)
//   }
// }

// class TelegramSender extends Sender {
//   constructor(subject, nickname) {
//     super(subject)

//     this.nickname = nickname;
//   }

//   send(msg) {
//     console.log(`${super.send(msg)} в телеграм: ${this.nickname}`)
//   }
// }

// const s = new Sender('Admin')
// const se = new EmailSender('SuperAdmin', 'super@mail.com')
// const st = new TelegramSender('User', '@MaksDeev')

// s.send('hello')
// se.send('salut')
// st.send('bonjoire')