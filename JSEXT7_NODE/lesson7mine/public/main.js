const API_URL = 'http://127.0.0.1:3000'

Vue.component('good-cart', {
    template: `
        <div class="good-card" @click="onClick">
        <h2>{{ data.price }}</h2>
        <p>{{ data.price }}</p>
        </div>
    `,
    props: ['data'],
    methods: {
        onClick() {
            fetch(`${API_URL}addToCart`, {
                method: "POST",
                headers: {
                    'Contant-Type': 'application/JSON'
                },
                body: JSON.stringify(this.data)
            })
        }
    }
});


Vue.component('goods-list', {
    template: `
    <div class="goods-list">
    <good-cart
      v-for="good of list"
      v-bind:key=""
      v-bind:data="good"
      </good-cart>
    </div>`,
    props: ['list']
})