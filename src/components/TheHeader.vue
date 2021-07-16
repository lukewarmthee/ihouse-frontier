<template>
  <div @keyup13="focusSearch" class="header">
    <a href="/"
      ><img
        class="logo"
        src="../assets/logo.png"
        alt="shit"
        v-if="
          $route.path !== '/admin' &&
          $route.path !== '/admin/users' &&
          $route.path !== '/admin/publish' &&
          $route.path !== '/admin/orders' &&
          $route.path !== '/admin/houses'
        "
      />
      <span
        v-if="
          $route.path == '/admin' ||
          $route.path == '/admin/users' ||
          $route.path == '/admin/publish' ||
          $route.path == '/admin/orders' ||
          $route.path == '/admin/houses'
        "
        >后台管理系统</span
      >
    </a>
    <!-- searchBox -->
    <SearchBox />
    <!-- let's first give some btn -->
    <button
      @click="$emit('show-login-form')"
      v-show="username ? false : true"
      class="btn"
      v-if="
        $route.path !== '/admin' &&
        $route.path !== '/admin/users' &&
        $route.path !== '/admin/publish' &&
        $route.path !== '/admin/orders' &&
        $route.path !== '/admin/houses'
      "
    >
      <i class="el-icon-user"></i> SIGN IN
    </button>
    <button
      @click="toUserCenter"
      v-show="username ? true : false"
      class="center-btn"
      v-if="
        $route.path !== '/admin' &&
        $route.path !== '/admin/users' &&
        $route.path !== '/admin/publish' &&
        $route.path !== '/admin/orders' &&
        $route.path !== '/admin/houses'
      "
    >
      <i class="el-icon-user-solid"></i> User Center
    </button>
    <DragDown
      v-show="visibility"
      @close-drag-down="visibility = !visibility"
      v-if="
        $route.path !== '/admin' &&
        $route.path !== '/admin/users' &&
        $route.path !== '/admin/publish' &&
        $route.path !== '/admin/orders' &&
        $route.path !== '/admin/houses'
      "
    />
    <button
      class="avatar avatar-btn"
      v-show="username ? true : false"
      @click="dragDown"
      v-if="
        $route.path !== '/admin' &&
        $route.path !== '/admin/users' &&
        $route.path !== '/admin/publish' &&
        $route.path !== '/admin/orders' &&
        $route.path !== '/admin/houses'
      "
    >
      <el-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      ></el-avatar>
    </button>
  </div>
</template>

<script>
import DragDown from "./DragDown.vue";
import SearchBox from "./SearchBox";
import { ElMessage } from "element-plus";
export default {
  name: "TheHeader",
  components: {
    SearchBox,
    DragDown,
  },
  data() {
    return {
      username: "",
      visibility: false,
    };
  },
  methods: {
    open() {
      ElMessage("只是一条消息提示");
    },
    toUserCenter() {
      this.$router.push({
        path: "/userInfo",
      });
    },
    dragDown() {
      this.visibility = !this.visibility;
    },
  },
  mounted() {
    if (localStorage.username) {
      this.username = localStorage.username;
    }
  },
};
</script>

<style scoped>
.header {
  /* I don't know what does it mean but this is actually good */
  position: fixed;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0px;
  background: #202020;
  top: 0;
  width: 99%;
  z-index: 2000;
}
span {
  color: #3ea6ff;
  font-family: "SimHei";
  font-size: 25px;
  line-height: 2;
  font-weight: 900;
  position: relative;
  left: 4px;
}
a {
  text-decoration: none;
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
  top: 1.5%;
  right: 1%;
}
.center-btn {
  background: #202020;
  border-radius: 20px;
  color: #3ea6ff;
  border-color: #3ea6ff;
  padding: 6px 13px;
  position: absolute;
  top: 10px;
  font-size: small;
  right: 7%;
  outline: none;
}
.avatar {
  background: #202020;
  border: #202020;
  position: absolute;
  top: 5px;
  right: 17px;
}
.avatar-btn:hover {
  opacity: 0.8;
  border: #3ea6ff;
}
.btn:focus {
  outline: #3ea6ff;
}
</style>