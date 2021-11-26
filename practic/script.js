// const goods = [
//     { title: 'Shirt', price: 150 },
//     { title: 'Socks', price: 50 },
//     { title: 'Jacket', price: 350 },
//     { title: 'Shoes', price: 250 },
// ];

// const $goodsList = document.querySelector('.goods-list');
  
// const renderGoodsItem = ({ title, price }) => {
//     return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
// };
  
// const renderGoodsList = (list = goods) => {
//     let goodsList = list.map(
//             (item) =>  {
//                 return renderGoodsItem(item)
//             }
//         ).join('');

//     $goodsList.insertAdjacentHTML('beforeend', goodsList);
// }
  
// renderGoodsList();

document.addEventListener('DOMContentLoaded', function(){
  document.querySelector('.fa-shopping-cart').addEventListener('click', function(){
    document.querySelector('.basket').style.display = 'block';
    document.querySelector('.basket .close').addEventListener('click', function(){
      document.querySelector('.basket').style.display = 'none';
    });
  });
});



/* const goods = [
  { title: 'Shirt', price: 150, src:'img/shirts.jpg' },
  { title: 'Socks', price: 50, src:'img/socks.jpg' },
  { title: 'Jacket', price: 350, src:'img/jackets.jpg' },
  { title: 'Shoes', price: 250, src:'img/shoes.jpg' },
]; */

class GoodsItem {
    constructor(title, price, src) {
      this.title = title;
      this.price = price;
      this.src = src;
    }

    render() {
      return `<div class="goods-item"><img src="${this.src}"><h3>${this.title}</h3><p>${this.price}</p><button data-price>В корзину</button></div>`;
    }
}


class BasketItem {
  
  constructor(title, price, src) {
    this.title = title;
    this.price = price;
    this.src = src.replace(/\.jpg/, '1.jpg');
  }

  render() {
    return `<div class="basket-goods-item"><div class="basket-image-wrap"><img src="${this.src}"></div><div class="basket-item-wrap"><div class="baket-item-title">${this.title}</div><span class="price">${this.price}</span></div><div><span class="delete-from-basket">&times;</span></div></div>`;
  }
}



class GoodsList {
    constructor() {
      this.goods = [];
    }

    fetchGoods() {
      this.goods = [
        { title: 'Shirt', price: 150, src:'img/shirts.jpg' },
        { title: 'Socks', price: 50, src:'img/socks.jpg' },
        { title: 'Jacket', price: 350, src:'img/jackets.jpg' },
        { title: 'Shoes', price: 250, src:'img/shoes.jpg' },
      ];
    }

    render() {
        let listHtml = '';
        this.goods.forEach(good => {
          const goodItem = new GoodsItem(good.title, good.price, good.src);
          listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }

    countSum() {
      goods.forEach(good => {
        const goodSum = goodSum + good.price;
      });
      document.querySelector('.mini-basket .summ span').textContent = goodSum;
    }
    
}  


class BasketList {
  

  fetchGoods() {
    this.goods = [
      { title: 'Shirt', price: 150, src:'img/shirts.jpg' },
      { title: 'Socks', price: 50, src:'img/socks.jpg' },
      { title: 'Jacket', price: 350, src:'img/jackets.jpg' },
      { title: 'Shoes', price: 250, src:'img/shoes.jpg' },
    ];
  }
  

  render() {
    let listHtml = '<div class="mini-basket"><div class="close-wrap"><span class="close">&times;</span></div>';
    this.goods.forEach(good => {
      const basketItem = new BasketItem(good.title, good.price, good.src);
      listHtml += basketItem.render();

    });
    document.querySelector('.basket').innerHTML = listHtml + '<div class="summ">ИТОГО: <span>0</span></div></div>';
  }
  
}  


function sumBasket() {
  let elt = document.querySelectorAll('.basket-item-wrap .price');
  let sum = 0;
  elt.forEach(function(elem){
    sum = sum + parseInt(elem.textContent);
  });
  document.querySelector('.mini-basket .summ span').textContent = sum;
}


const list = new GoodsList();
list.fetchGoods();
list.render();

const basketList = new BasketList();
basketList.fetchGoods();
basketList.render();
sumBasket();


let removeButtons = document.querySelectorAll('.delete-from-basket');
removeButtons.forEach(function(button){
  button.addEventListener('click', function(event){
    event.target.closest('.basket-goods-item').remove();
    sumBasket();
  });
});