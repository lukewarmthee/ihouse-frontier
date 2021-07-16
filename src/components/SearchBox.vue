<template>
  <div class="searchBox" @keyup.enter="search">
    <el-tooltip
      class="item"
      effect="dark"
      content="搜索任意房源信息"
      :auto-close="autoclose"
      placement="bottom-end"
    >
      <input
        class="searchInput"
        type="text"
        v-model="keywords"
        value-key="name"
      />
    </el-tooltip>
    <button class="btn" @click="search">
      <i class="el-icon-search"></i> Search
    </button>
    <div class="separate">
      <div class="autoComplete" :key="cpt.id" v-for="cpt in autoCompleteNames">
        <p>{{ cpt.houseDesc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBox",
  data() {
    return {
      keywords: "",
      autoclose: 1000,
      autoCompleteNames: [],
    };
  },
  methods: {
    // get those housees' name just use the keyowrds
    async fetchAutoCompleteNames() {
      const res = await fetch("/api/houses/index/" + this.keywords);
      const data = await res.json();
      return data.data;
    },
    search() {
      this.$router.push({
        name: "SearchHouses",
        params: {
          id: this.keywords,
        },
      });
    },
    async autocomplete() {
      this.autoCompleteNames = await this.fetchAutoCompleteNames();
    },
  },
  watch: {
    keywords(Newkeywords) {
      if (Newkeywords === "" || Newkeywords === null) {
        this.autoCompleteNames = [];
      } else {
        this.autocomplete();
      }
    },
  },
};
</script>

<style scoped >
.separate {
  position: absolute;
  z-index: 2001;
}
.autoComplete {
  position: relative;
  left: 8px;
  background: rgb(228, 224, 224);
  width: 40px;
  cursor: pointer;
}
.autoComplete p {
  background: #fff;
  width: 248px;
  text-align: center;
  margin: 0.5px;
}
.searchBox {
  position: relative;
  top: 6px;
  right: 25%;
  width: 40%;
  height: 100%;
  align-items: center;
}
.searchBox input {
  text-align: center;
  color: #242629;
  border-color: #3ea6ff;
  border-width: 2px;
  width: 50%;
  height: 25px;
  margin: 0px;
  padding: 3px 7px;
  font-size: 17px;
  border-radius: 20px;
  outline: none;
}
.searchBox .btn {
  color: #3ea6ff;
  border-color: #3ea6ff;
  height: 30px;
  margin: 5px;
  font-size: x-small;
}
</style>