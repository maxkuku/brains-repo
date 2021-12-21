const API_URL = 'http://locahost:3001/'

function conlog(a) {
  console.log(a);
}



Vue.component('search', {
  template: `
  <div>
    <input v-model="searchString" type="search" name="s" placeholder="Поиск"><button id="searchButton"
      v-on:click="onClick"><i class="fas fa-search"></i></button>
  </div>
  `,
  data: () => {
    return {
      searchString: ''
    }
  },
  methods: {
    onClick() {
      conlog(this)
      this.$emit('search', this.searchString);
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
      <div class="baket-item-title">{{ data.title }}</div>
      <!--span class="quantity"></span-->
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
      fetch(`/removeFromCart`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/JSON'
          },
          body: JSON.stringify(this.data)
        })
        .then(() => {
          this.$emit('delete', this.data)
        })
    }
  }
});



Vue.component('cart-list', {
  template: `
  <div class="in-cart-item">
    <cart-item v-for="good of basketgoods" 
      v-bind:key="good.id" 
      v-bind:data="good" 
      v-on:delete="onDelete"
      class="basket-goods-item"
    >
    </cart-item>
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
    <h3>{{ data.title }}</h3>
    <p>{{ data.price }}</p><button v-on:click="onClick">В корзину</button>
  </div>`,
  props: ['data'],
  methods: {
    onClick() {
      fetch(`/addToCart`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/JSON'
          },
          body: JSON.stringify(this.data)
        })
        .then(() => {
          this.$emit('add', this.data)
        })
    }
  }
});



Vue.component('good-list', {
  template: `<div class="goods-list-wrap">
      <div class="goods-list">
        <good-item 
          v-for="good of filteredgoods" 
          v-bind:key="good.id"
          v-bind:data="good"
          v-on:add="onAdd"
          ></good-item>
      </div>
    </div>`,
  props: ['filteredgoods'],
  methods: {
    onAdd(good) {
      this.$emit('add', good)
    },
  }
});





const app = new Vue({
  el: '#app',
  data: {
    goods: [],
    cart: [],
    basketgoods: [],
    filteredgoods: [],
    isVisibleCart: false
  },
  methods: {
    loadGoods() {
      fetch(`/catalogData`)
        .then((request) => request.json())
        .then((data) => {
          this.goods = data;
          this.filteredgoods = data;
        })
        .catch((err) => console.log(`Catched error in goods list ${err}`))
    },
    loadBasket() {
      fetch(`/cart`)
        .then((request) => request.json())
        .then((data) => {
          this.basketgoods = data;
        })
        .catch((err) => console.log(`Catched error in basket list ${err}`))
    },
    onAdd(good) {
      this.cart.push(good)
    },
    onDelete(good){
      const idx = this.cart.findIndex((item) => item.id === good.id)
      if(idx >= 0) {
        this.cart = [...this.cart.slice(0, idx), ...this.cart.slice(idx + 1)]
      }
    },
    onSearch(searchString) {
      const regex = new RegExp(searchString, 'i');
      this.filteredgoods = this.goods.filter((good) => regex.test(good.title))
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