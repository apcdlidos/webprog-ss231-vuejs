
  const app = Vue.createApp({
   data() {
    return {
     message: "Hello World!",
     vueClass: "pinkBG"
    }
   }
  })
  app.mount('#app')
 

  const app2 = Vue.createApp({
   data() {
    return {
      manyFoods: [
        {name: 'Burrito', url: 'https://www.w3schools.com/vue/img_burrito.svg'},
        {name: 'Salad', url: 'https://www.w3schools.com/vue/img_salad.svg'},
        {name: 'Cake', url: 'https://www.w3schools.com/vue/img_cake.svg'},
        {name: 'Soup', url: 'https://www.w3schools.com/vue/img_soup.svg'},
        {name: 'Fish', url: 'https://www.w3schools.com/vue/img_fish.svg'},
        {name: 'Pizza', url: 'https://www.w3schools.com/vue/img_pizza.svg'},
        {name: 'Rice', url: 'https://www.w3schools.com/vue/img_rice.svg'}
      ]
    }
   }
  })
  app2.mount('#app2')


    const app3 = Vue.createApp({
    data() {
      return {
        itemName: null,
        itemNumber: null,
        itemImportant: false,
        shoppingList: [
          { name: 'Tomatoes', number: 5, important: false, found: false },
          { name: 'Bread', number: 1, important: false, found: false },
          { name: 'Soap', number: 1, important: true, found: true }
        ]
      }
    },
    methods: {
      addItem(){
        let item = {
          name: this.itemName,
          number: this.itemNumber,
          important: this.itemImportant,
          found: false
        }
        this.shoppingList.push(item)
        this.itemName = null
        this.itemNumber = null  
        this.itemImportant = false
      }
    }
  })
app3.mount('#app3')