<script setup>
  import { ref, onMounted } from 'vue'
  import { supabase } from './lib/supabaseClient'

  const countries = ref([])

  async function getCountries() {
    const { data } = await supabase.from('countries').select()
    countries.value = data
  }

  onMounted(() => {
    getCountries()
  })
</script>



<template>
<ul>
    <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
  </ul>
  
<h1>Hello WEBPROG SS231</h1>
<CommentForm></CommentForm>
<Comments>
</Comments>
<FoodItem></FoodItem>
<FoodItem2></FoodItem2>

<PersonalProfile></PersonalProfile>
</template>


<style>

 #app >  div {
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: lightgreen;
  }
</style>

