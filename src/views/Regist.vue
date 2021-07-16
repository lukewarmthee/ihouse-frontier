<template>
  <div class="container">
    <div class="regist">
      <header>Regist</header>
      <container-body>
        <div @keyup13="regist" class="login">
          <form class="add-form">
            <el-row>
              <el-col :span="8" :offset="1">
                <div class="grid-content bg-purple">
                  <div class="form-control">
                    <label for="email">cell</label>
                    <input
                      type="text"
                      v-model="account.uPhoneNumber"
                      id="email"
                      name="email"
                    />
                  </div>
                </div>
              </el-col>

              <el-col :span="8" :offset="3">
                <div class="grid-content bg-purple">
                  <div class="form-control">
                    <label for="username">Username</label>
                    <input
                      type="text"
                      v-model="account.uName"
                      id="username"
                      name="username"
                    />
                  </div>
                </div>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="8" :offset="1">
                <div class="grid-content bg-purple">
                  <div class="form-control">
                    <label for="pwd">Password</label>
                    <el-tooltip
                      class="item"
                      effect="dark"
                      content="最短8个字符"
                      placement="left-end"
                    >
                      <input
                        type="password"
                        v-model="account.uPassword"
                        name="pwd"
                        id="pwd"
                        @blur="avarified"
                      />
                    </el-tooltip>
                  </div>
                </div>
              </el-col>

              <el-col :span="8" :offset="3">
                <div class="grid-content bg-purple">
                  <div class="form-control">
                    <label for="apwd">Password Again</label>
                    <el-tooltip
                      class="item"
                      effect="dark"
                      content="请注意保持一致"
                      placement="top-end"
                    >
                      <input
                        type="password"
                        v-model="apwd"
                        name="apwd"
                        id="apwd"
                        @blur="varified"
                      />
                    </el-tooltip>
                  </div>
                </div>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="8" :offset="7" class="nickname">
                <div class="grid-content bg-purple">
                  <div class="form-control">
                    <label for="apwd">Nickname</label>
                    <el-tooltip
                      class="item"
                      effect="dark"
                      content="Please gimme a fucking nickname"
                      placement="top-end"
                    >
                      <input
                        type="text"
                        v-model="account.uNickName"
                        name="nickname"
                        id="nickname"
                      />
                    </el-tooltip>
                  </div>
                </div>
              </el-col>
            </el-row>

            <button @click="regist" class="btn btn-block">Sign up</button>
          </form>
        </div>
      </container-body>
    </div>
  </div>
</template>

<script>
import { ElMessage } from "element-plus";
export default {
  name: "Regist",
  data() {
    return {
      account: {
        uName: "",
        uPassword: "",
        uPhoneNumber: "",
        uNickName: "",
      },
      apwd: "",
      showAlert: false,
    };
  },
  methods: {
    async regist(e) {
      e.preventDefault();
      // make sure everything is not null or blank
      if (this.account.email == "") {
        ElMessage.warning({
          message: "邮箱不能为空",
          type: "warning",
          duration: 1000,
        });
        return false;
      } else if (this.account.username == "") {
        ElMessage.warning({
          message: "用户名不能为空",
          type: "warning",
          duration: 1000,
        });
        return false;
      } else if (this.account.uPassword == "") {
        ElMessage.warning({
          message: "密码不能为空",
          type: "warning",
          duration: 1000,
        });
        return false;
      } else if (this.apwd == "") {
        ElMessage.warning({
          message: "请再次输入密码",
          type: "warning",
          duration: 1000,
        });
        return false;
      } else {
        // first, let's just post this information up
        const res = await fetch("api/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.account),
        });
        console.log(this.account);
        const data = await res.json();
        // make sure you've done it right
        if (data.status === 1) {
          this.$notify({
            title: "提示信息",
            message: "成功注册,前往登录",
            type: "success",
            position: "top-right",
            duration: 1000,
          });
          this.$router.push({
            path: "/",
          });
        } else {
          ElMessage.warning({
            message: "创建账号失败",
            type: "error",
          });
          return false;
        }
      }
    },
    varified() {
      if (this.account.uPassword !== "" && this.apwd !== "") {
        if (this.apwd !== this.account.uPassword) {
          ElMessage.warning({
            message: "两次密码不一致",
            type: "warning",
          });
        } else return;
      } else return;
    },
    avarified() {
      if (this.account.uPassword.length < 8) {
        ElMessage.warning({
          message: "密码长度小于八",
          type: "info",
        });
      }
    },
  },
};
</script>

<style scoped>
.container {
  background: #f4f6f9;
  position: relative;
  top: 50px;
}

.nickname {
  position: relative;
  bottom: 20px;
}

.regist {
  position: relative;
  top: 40px;
  border: none;
  width: 60%;
  position: relative;
  left: 20%;
  margin-top: 20px;
  margin-bottom: 50px;
}
.regist header {
  border-top: 2px solid #d75455;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  background-color: #fff;
  border-radius: 3px;
  border-bottom-color: #f9f9f9;
  line-height: 30px;
  -ms-grid-row-align: center;
  align-self: center;
  width: 100%;
  min-height: 35px;
  padding: 0px 25px;
  display: flex;
  align-items: center;
}
.regist container-body {
  padding-top: 10px;
  padding-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  background-color: #fff;
  border-radius: 3px;
  border-bottom-color: #f9f9f9;
  line-height: 30px;
  -ms-grid-row-align: center;
  align-self: center;
  width: 100%;
  padding: 0px 25px;
  display: flex;
  align-items: center;
}
form {
  width: 729.5px;
}
.form-control {
  position: relative;
  left: 12.5%;
  margin: 20px 0;
  line-height: 1.5;
}

.remember {
  align-items: center;
  margin: 1px;
}

.form-control label {
  display: block;
}

.form-control input {
  background-color: #fdfdff;
  border: 1px solid #ced4da;
  margin: 5px;
  font-size: 17px;
  border-radius: 5px;
  font-size: 14px;
  padding: 2px 5px;
  height: 35px;
  width: 250px;
  outline: none;
}
.btn-block {
  background: #d75455;
  box-shadow: 0 2px 6px #acb5f6;
  border: 1px solid #d75455;
  color: white;
  position: relative;
  bottom: 20px;
  left: 25%;
  width: 50%;
  padding: 10px 15px;
  font-size: 16px;
}
</style>