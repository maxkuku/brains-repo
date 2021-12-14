const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/'
function conlog(a) {console.log(a);}



Vue.component('search', {
  template: `
  <div>
    <input v-model="searchString" type="search" name="s" placeholder="Поиск"><button id="searchButton"
      v-on:click="onClick"><i class="fas fa-search"></i></button>
  </div>
  `,
  data() {
    return {
      searchString: ''
    }
  },  
  methods: {
    onClick(){
      this.$emit('search', this.searchString)
    }
  }
});



Vue.component('cart-item', {
  template: `
  <div>
    <div class="basket-image-wrap">
      <img src="#">
    </div>

    <div class="basket-item-wrap">
      <div class="baket-item-title">{{ data.product_name }}</div>
      <span class="quantity">{{ data.quantity }}</span>
      <span class="price">{{ data.price }}</span>
    </div>
    <div>
      <span 
        class="delete-from-basket" 
        v-on:click="onClick">&times;</span>
    </div>
  </div>
  `,
  props: ['data'],
  methods: {
    onClick() {
      this.$emit('delete', this.data)
    }
  }
});



Vue.component('cart-list', {
  template: `
  <div class="in-cart-item">
    <cart-item v-for="good of basketgoods" 
    v-bind:key="good.id_product" 
    v-bind:data="good" 
    v-on:delete="onDelete"
    class="basket-goods-item"></cart-item>
  </div>`,
    props: ['basketgoods'],
    methods: {
      onDelete(good) {
        this.$emit('delete', good)
      },
    }
});



Vue.component('good-item', {
  template: `<div class="goods-item">
    <img src="#">
    <h3>{{ data.product_name }}</h3>
    <p>{{ data.price }}</p><button>В корзину</button>
  </div>`,
  props: ['data'],
  methods: {

  }
});



Vue.component('good-list', {
  template: `<div class="goods-list-wrap">
      <div class="goods-list">
        <good-item 
          v-for="good of filteredgoods" 
          v-bind:key="good.id_product"
          v-bind:data="good"
          v-on:add="onAdd"></good-item>
      </div>
    </div>`,
    props: ['filteredgoods'],
    methods: {
      onAdd(good) {
        this.$emit('add', good)
      }
    }
});







const app = new Vue({
  el: '#app',
  data: {
    goods: [],
    cart: [],
    filteredGoods: [],
    basketgoods: [],
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
        .then((request) => request.json())
        .then((data) => {
          this.cart = data;
          this.basketgoods = data.contents;
        })
    },
    onSearch(searchString){
      const regex = new RegExp(searchString, 'i');
      this.filteredGoods = this.goods.filter((good) => regex.test(good.title))
    },
    onAdd(good) {
      this.basketgoods.push(good)
    },
    onDelete(good){
      const idx = this.basketgoods.findIndex((item) => item.id === good.id)
      if(idx >= 0) {
        this.cart = [...this.basketgoods.slice(0, idx), ...this.basketgoods.slice(idx + 1)]
      }
    },
    onToggleCart() {
      this.isVisibleCart = !this.isVisibleCart
    }
  },
  mounted() {
    this.loadGoods();
    this.loadBasket();
  },
  
});