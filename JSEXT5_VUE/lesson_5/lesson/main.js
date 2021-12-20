const vue = new Vue({
  el: "#app",
  data: {
    name: "Maks",
    lastname: "",
    isActive: false,
    person: [
      {
        name: 'John',
        lastname: 'Doe'
      },
      {
        name: 'Jane',
        lastname: 'Doe'
      },
      {
        name: 'Kate',
        lastname: 'Black'
      }
    ]
  },
  methods: {
    onClick() {
      this.isActive = !this.isActive
    },
    onSave() {
      this.person.push({name: this.name, lastname: this.lastname})
      this.name = '';
      this.lastname = '';
    }
  }
})