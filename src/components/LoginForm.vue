<template>
  <el-drawer
    title="我是标题"
    v-model="drawer"
    :with-header="false"
    size="35%"
    :before-close="handleClose"
  >
    <div class="container">
      <div @keyup13="doSignin" class="login">
        <form class="add-form">
          <div class="form-control">
            <label for="username">username</label>
            <el-tooltip
              class="item"
              effect="dark"
              content="输入用户名或邮箱"
              placement="top-end"
            >
              <input
                type="username"
                v-model="userInfo.username"
                id="username"
                name="username"
              />
            </el-tooltip>
          </div>

          <div class="form-control">
            <label for="pwd">Password</label>
            <el-tooltip
              class="item"
              effect="dark"
              content="输入用户名或邮箱"
              placement="top-end"
            >
              <input type="pwd" v-model="userInfo.pwd" name="pwd" id="pwd" />
            </el-tooltip>
          </div>

          <div class="form-control form-control-check">
            <label for="remember">Remember Me</label>
            <input
              type="checkbox"
              class="remember"
              v-model="remember"
              name="remember"
              id="remember"
            />
            <a href="/regist">没有账号?请随我来</a>
          </div>
          <button @click="doSignin" class="btn btn-block">Sign In</button>
        </form>
      </div>
    </div>
  </el-drawer>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      userInfo: {
        username: "",
        pwd: "",
      },
      remember: false,
    };
  },
  props: {
    drawer: Boolean,
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    async doSignin(e) {
      e.preventDefault();
      if (this.userInfo.username == "") {
        this.$notify({
          title: "警告",
          message: "用户名不能为空",
          position: "top-right",
          offset: 350,
          type: "warning",
          duration: 1000,
        });
        // this meaning this function does no change anything
        return false;
      }
      if (this.userInfo.pwd == "") {
        this.$notify({
          title: "警告",
          message: "密码不能为空",
          position: "top-right",
          offset: 350,
          type: "warning",
          duration: 1000,
        });
        return false;
      }
      // first just fetch the url
      // just make sure you await all of it
      const res = await fetch("api/login/1", {
        method: "GET",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(this.userInfo),
      });
      // never forget the (),json is a function
      const data = await res.json();
      // if it's 200, then give it to me
      if ((await res).status === 200) {
        console.log(data.expire);
        // 把用户信息放到本地存储中去
        localStorage.username = this.userInfo.username;
        localStorage.expire = data.expire;
        this.$notify({
          title: "提示信息",
          message: "登录成功",
          type: "success",
          position: "top-right",
          duration: 1000,
        });
        this.$router.push({
          path: "/Home",
        });
      } else {
        // 登录失败提示
        this.$notify({
          title: "提示信息",
          message: "账号或密码错误",
          type: "error",
          position: "top-right",
          offset: 350,
          duration: 1000,
        });
        return false;
      }
    },
  },
  watch: {},
};
</script>

<style scoped >
a {
  position: relative;
  right: 100px;
  color: bisque;
}

el-drawer {
  background-color: #f4f6f9;
}

.container {
  position: relative;
  top: 5%;
}

.form-control {
  position: relative;
  left: 14%;
  margin: 20px 0;
}

.remember {
  align-items: center;
  margin: 1px;
}

.form-control label {
  display: block;
}

.form-control input {
  width: 70%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
  border-radius: 5px;
  border: 1px solid #ced4da;
  outline: none;
}

.form-control-check {
  position: relative;
  left: 15%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-control-check label {
  flex: 1;
  align-items: flex-end;
}

.form-control-check input {
  position: relative;
  right: 75px;
  flex: 1;
  height: 20px;
  width: 50%;
  padding: 3px 3px;
  border-radius: 8px;
}
.btn-block {
  position: relative;
  left: 14%;
  padding: 10px 15px;
  background: #d75455;
  box-shadow: 0 2px 6px #acb5f6;
  border: 1px solid #d75455;
}
</style>