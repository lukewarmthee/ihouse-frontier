<template>
  <div @keyup13="focusSearch" class="header">
    <a href="/"><img class="logo" src="../assets/logo.png" alt="shit" /></a>
    <!-- searchBox -->
    <SearchBox />
    <!-- let's first give some btn -->
    <button
      @click="$emit('show-login-form')"
      v-show="username ? false : true"
      class="btn"
    >
      <i class="el-icon-user"></i> SIGN IN
    </button>
  </div>
</template>

<script>
import SearchBox from "./SearchBox";
import { ElMessage } from "element-plus";
export default {
  name: "TheHeader",
  components: {
    SearchBox,
  },
  data() {
    return {
      username: "",
    };
  },
  methods: {
    open() {
      ElMessage("只是一条消息提示");
    },
  },
  created() {
    if (localStorage.username) {
      this.username = localStorage.username;
    }
  },
};
</script>

<style scoped>
.header {
  /* I don't know what does it mean but this is actually good */
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  background: #202020;
}
.logo {
  color: #3ea6ff;
  height: 50px;
}
.btn {
  background: #202020;
  border-radius: 5px;
  color: #3ea6ff;
  border-color: #3ea6ff;
  padding: 8px 13px;
  position: absolute;
  top: 8px;
  right: 6px;
}
</style>