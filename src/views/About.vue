<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <h3>Version 1.0.0</h3>
  <router-link to="/">Go Back</router-link>
</template>

<script>
export default {
  name: "About",
  inheritAttrs: false, //disable 'non-props' warning
};
</script>

<style scoped>
* {
  text-align: center;
}
</style>