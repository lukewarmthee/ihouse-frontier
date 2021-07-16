<template>
  <div></div>
  <el-carousel indicator-position="outside" type="card" height="440px">
    <el-carousel-item v-for="item in items" :key="item">
      <el-image :src="item" fit="fill"></el-image>
    </el-carousel-item>
  </el-carousel>
  <!-- need a button for all the houses -->
  <a href="/houses"><button class="enter-btn">进入系统</button></a>
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
        "https://user-images.githubusercontent.com/74102866/125414352-4de72c37-976f-47e5-a850-19f1877038ff.jpg",
        "https://user-images.githubusercontent.com/74102866/125414375-477bea85-2c91-4ff7-99ef-a4c97e8c34f6.jpg",
        "https://user-images.githubusercontent.com/74102866/125106935-cb376c00-e112-11eb-9bd8-6165f28cf259.jpg",
        "https://user-images.githubusercontent.com/74102866/125414362-2ba88d03-a43f-453a-920b-e1b15c4a630e.jpg",
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
body {
  font-family: "Microsoft Yahei";
}
div {
  margin-bottom: 160px;
}
.enter-btn {
  position: absolute;
  top: 12%;
  left: 42%;
  z-index: 1000;
  font-size: 22px;
  line-height: 1;
  border-radius: 500px;
  padding: 18px 50px 20px;
  color: #fff;
  background-color: #3ea6ff;
  transition-duration: 0.3s;
  border-width: 0;
  white-space: normal;
}
.enter-btn:focus {
  outline: none;
  color: #fff;
  background-color: rgb(0, 68, 255);
}
.enter-btn:active {
  transform: scale(0.98);
}
</style>
