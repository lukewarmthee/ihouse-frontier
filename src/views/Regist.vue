<template>
  <div class="container">
    <div class="regist">
      <header>Regist</header>
      <container-body>
        <div @keyup13="Regist" class="login">
          <form class="add-form">
            <el-row>
              <el-col :span="8" :offset="1">
                <div class="grid-content bg-purple">
                  <div class="form-control">
                    <label for="email">Email</label>
                    <input
                      type="text"
                      v-model="userInfo.email"
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
                      v-model="userInfo.username"
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
                        type="pwd"
                        v-model="userInfo.pwd"
                        name="pwd"
                        id="pwd"
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
                      <input type="apwd" v-model="apwd" name="apwd" id="apwd" />
                    </el-tooltip>
                  </div>
                </div>
              </el-col>
            </el-row>

            <button @click="Regist" class="btn btn-block">Sign up</button>
          </form>
        </div>
      </container-body>
    </div>
  </div>
</template>

<script>
export default {
  name: "Regist",
  data() {
    return {
      userInfo: {
        username: "",
        email: "",
        pwd: "",
      },
      apwd: "",
    };
  },
};
</script>

<style scoped>
.container {
  background: #f4f6f9;
}

.regist {
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
  min-height: 55px;
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
  bottom: 5px;
  left: 25%;
  width: 50%;
  padding: 10px 15px;
}
</style>