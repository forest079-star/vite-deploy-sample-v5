<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{ data }}
    <img :src="data" alt="" srcset="">
  </div>
</template>

<script>
export default {
  data() {
    return {
      data:{}
    }
  },
  mounted() {
    console.log(import.meta.env.VITE_TEXT);
    const url = import.meta.env.VITE_PATH;
    this.axios.get(url)
      .then(response => {
        this.data = response.data.results[0].picture.large
      })
  },
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
