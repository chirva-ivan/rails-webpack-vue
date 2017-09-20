<template>
  <div id='app'>
    <p>{{ message }}</p>
    <p>{{ message }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: "Welcome1!"
      }
    }
  }
</script>

<style scoped>
  p {
    font-size: 2em;
    text-align: center;
  }
</style>
