<template>
  <div>
    <h2>{{ fruit }}</h2>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fruit: 'Orange',
      description: 'sweet and sour'
    }
  }
};
</script>
