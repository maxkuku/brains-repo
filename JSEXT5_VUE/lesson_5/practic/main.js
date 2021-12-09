const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/'


new Vue({
  el: "#app",
  data: {
    goods: [],
    filteredGoods: [],
    searchLine: ''
  },
  methods: {
    loadGoods(){
      fetch(`${API_URL}catalogData.json`)
        .then((request) => request.json())
        .then((data) => {
          this.goods = data;
          this.filteredGoods = data;
        })
    }
  },
  mounted() {
    this.loadGoods();
  }
})