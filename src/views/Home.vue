<template>
  <el-carousel indicator-position="outside" type="card" height="380px">
    <el-carousel-item v-for="item in items" :key="item">
      <el-image :src="item" :fit="contain"></el-image>
    </el-carousel-item>
  </el-carousel>
  <LoginForm :drawer="drawer" />
</template>

<script>
import LoginForm from "../components/LoginForm.vue";
export default {
  name: "Home",
  data() {
    return {
      items: [
        "https://user-images.githubusercontent.com/74102866/125106865-b9ee5f80-e112-11eb-9c9f-c78cc97de1a3.jpg",
        "https://user-images.githubusercontent.com/74102866/125106923-c70b4e80-e112-11eb-9d7a-b10e1d3b391b.jpg",
        "https://user-images.githubusercontent.com/74102866/125106935-cb376c00-e112-11eb-9bd8-6165f28cf259.jpg",
        "https://user-images.githubusercontent.com/74102866/125106950-cf638980-e112-11eb-8f2d-71580fa3b840.jpg",
      ],
    };
  },
  components: {
    LoginForm,
  },
  props: {
    drawer: Boolean,
  },
};
</script>

<style scoped>
</style>
