const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/'

function conlog(a) {
  console.log(a);
}

const catalog = 'catalogData.json';


const app = new Vue({
  el: '#app',
  data: {
    goods: [],
    searchLine: '',
    basketGoods: [],
    basketCount: 0,
    basketAmount: 0,
    isVisibleCart: false
  },
  methods: {
    loadGoods() {
      fetch(`${API_URL}catalogData.json`)
        .then((request) => request.json())
        .then((data) => {
          this.goods = data;
          this.filteredGoods = data;
        });
      
    },
    loadBasket() {
      fetch(`${API_URL}getBasket.json`)
        .then((requestb) => requestb.json())
        .then((datab) => {
          this.basketAmount = datab.amount;
          this.basketCount = datab.countGoods;
          this.basketGoods = datab.contents;
          //conlog(datab.contents);
        })
    }
  },
  mounted() {
    this.loadGoods();
    this.loadBasket();
  },
  computed: {
    filteredGoods() {
      return this.goods.filter(good => {
        return good.product_name.toLowerCase().includes(this.searchLine.toLowerCase())
      })
    }
  }
});





/*document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.fa-shopping-cart').addEventListener('click', function () {
    document.querySelector('.basket').style.display = 'block';
    document.querySelector('.basket .close').addEventListener('click', function () {
      document.querySelector('.basket').style.display = 'none';
    });
  });
});*/


/*
function removeItemClickApply() {
  let removeButtons = document.querySelectorAll('.delete-from-basket');
  removeButtons.forEach(function (button) {
    button.addEventListener('click', function (event) {
      //conlog(button.index());
      event.target.closest('.basket-goods-item').remove();
      let del = new deleteItemFromBasket;
      del.itemRemoveFromBasket();
      //sumBasket();
      let bl = new BasketList;
      bl.fetchBasket();
    });
  });
}

*/

/* 
function addItemClickApply() {
  // conlog('addItemClickApply');


  let addButtons = document.querySelectorAll('.goods-item button');
  addButtons.forEach((button, ind) => {
    // conlog(ind);
    button.addEventListener('click', (event) => {

      // получить параметры от кнопки
      let parent = event.target.parentElement;
      let product_name = parent.querySelector('h3').textContent;
      let price = parent.querySelector('p').textContent;
      let id_product = parent.querySelector('button').dataset.id;

      // conlog(`${product_name}, ${price}, 1, ${id_product}`);

      // выполнить запрос на сервер
      let ajaxRequest = new addItemToBasket;
      ajaxRequest.itemAddToBasket();


      let bl = new BasketList;
      bl.fetchBasket();
    });
  });
}



/*
class GoodsItem {
  constructor(title, price, id_product, src) {
    this.title = title;
    this.price = price;
    this.id_product = id_product;
    this.src = '#';
  }

  render() {
    return `<div class="goods-item"><img src="${this.src}"><h3>${this.title}</h3><p>${this.price}</p><button data-id="${this.id_product}">В корзину</button></div>`;
    //app.data.goods.push = { title: this.title, price: this.price, id_product: this.id_product }
  }
}





class GoodsList {
  constructor() {
    this.goods = [];
  }

  fetchGoods() {
    fetch(`${API_URL}catalogData.json`)
      .then((response) => {
        return response.json();
      })
      .then((request) => {
        this.goods = request.map(good => ({
          title: good.product_name,
          price: good.price,
          id_product: good.id_product
        }))
        this.render();

        // применить щелчок по кнопке В корзину
        addItemClickApply();
      })
      .catch((err) => {
        if (err.text)
          console.log(err.text)
      })
  }


  render() {
    let listHtml = '';

    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.title, good.price, good.id_product);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
  }

}

*/

/*
class BasketItem {
  constructor(product_name, price, quantity, id_product) {
    this.id_product = id_product;
    this.product_name = product_name;
    this.price = price;
    this.quantity = quantity;
  }

  renderBasketItem() {
    return `<div id="${this.id_product}" class="basket-goods-item"><div class="basket-image-wrap"><img src="#"></div><div class="basket-item-wrap"><div class="baket-item-title">${this.product_name}</div><span class="quantity">${this.quantity}</span><span class="price">${this.price}</span></div><div><span class="delete-from-basket" onclick="">&times;</span></div></div>`;
  }
}





class BasketList {
  constructor() {
    this.goods = [];
    this.basket = {};
  }

  fetchBasket() {
    fetch(`${API_URL}getBasket.json`)
      .then((response) => {
        return response.json();
      })
      .then((request) => {



        

        this.goods = request.contents.map(good => ({
          id_product: good.id_product,
          title: good.product_name,
          price: good.price,
          quantity: good.quantity,
        }))
        this.renderBasket();

        // по-другому не работало, а так работает
        // не знаю как сделать правильно

        document.querySelector('.mini-basket .summ span').textContent = request.amount;
        document.querySelector('.fa-shopping-cart span').textContent = request.countGoods;

        // применить удаление товара по щелчку в корзине
        removeItemClickApply();
      })
      .catch((err) => {
        if (err.text)
          console.log(err.text)
      })

  }


  renderBasket() {
    let listHtml = '<div class="mini-basket"><div class="close-wrap"><span class="close">&times;</span></div>';

    this.goods.forEach(good => {
      const goodItem = new BasketItem(good.title, good.price, good.quantity, good.id_product);
      listHtml += goodItem.renderBasketItem();
    });
    document.querySelector('.basket').innerHTML = listHtml + '<div class="summ">ИТОГО: <span>0</span></div></div>';
  }

}





class deleteItemFromBasket {
  constructor() {

  }

  itemRemoveFromBasket() {
    fetch(`${API_URL}deleteFromBasket.json`)
      .then((response) => {
        return response.json();
      })
      .then(() => {
        conlog(response.json());
      })
      .catch((err) => {
        if (err.text)
          console.log(err.text)
      })

  }
}





class addItemToBasket {
  constructor(id_product) {
    this.id_product = id_product;
  }

  itemAddToBasket() {
    fetch(`${API_URL}addToBasket.json`)
      .then((response) => {
        return response.json();
      })
      .then(() => {
        // basketList.renderBasket();
        // обработать и добавить в корзину
        let basketItem = new BasketItem;
        basketItem.renderBasketItem();
      })
      .catch((err) => {
        if (err.text)
          console.log(err.text)
      })

  }
}



const list = new GoodsList();
list.fetchGoods();
list.render();

const basketList = new BasketList();
basketList.fetchBasket();
basketList.renderBasket();

*/