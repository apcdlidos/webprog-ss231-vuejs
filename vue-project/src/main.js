
import { createApp } from 'vue'
import App from './App.vue'
import FoodItem from "./components/FoodItem.vue"
import FoodItem2 from "./components/FoodItem2.vue"
import RestApi from "./components/RestApi.vue"
import PersonalProfile from "./components/PersonalProfile.vue"


const app = createApp(App)

app.component("FoodItem", FoodItem)
app.component("FoodItem2", FoodItem2)
app.component("PersonalProfile", PersonalProfile)
app.component("RestApi", RestApi)
app.mount('#app')
