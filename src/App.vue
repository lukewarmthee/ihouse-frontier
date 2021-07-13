<template>
  <TheHeader @show-login-form="drawer = !drawer" />
  <router-view :drawer="drawer"></router-view>
  <Footer />
</template>

<script>
//first import it in
import Footer from "./components/Footer.vue";
import TheHeader from "./components/TheHeader.vue";

export default {
  name: "App",
  data() {
    return {
      drawer: false,
    };
  },
  components: {
    TheHeader,
    Footer,
  },
  methods: {},
};
</script>


<style>
body {
  font-family: "Comic Sans MS", "Poppins", sans-serif;
  background: #f4f6f9;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 75%;
}
</style>
