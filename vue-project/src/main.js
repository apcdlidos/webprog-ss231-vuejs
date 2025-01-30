
import { createApp } from 'vue'
import App from './App.vue'
import FoodItem from "./components/FoodItem.vue"
import FoodItem2 from "./components/FoodItem2.vue"


const app = createApp(App)

app.component("FoodItem", FoodItem)
app.component("FoodItem2", FoodItem2)
app.mount('#app')
