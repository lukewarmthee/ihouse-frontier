<template>
  <div class="searchBox">
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
        @keyup13="search"
      />
    </el-tooltip>
    <button class="btn"><i class="el-icon-search"></i> Search</button>
    <div class="separate">
      <div class="autoComplete" :key="cpt.id" v-for="cpt in autoCompleteNames">
        <p>{{ cpt.name }}</p>
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
      const res = await fetch(`/api/houses`);
      // const res = await fetch(`/api/houses/keywords?${this.keywords}`);
      const data = await res.json();
      return data;
    },
    search() {},
    async autocomplete() {
      this.autoCompleteNames = await this.fetchAutoCompleteNames();
      console.log(this.autoCompleteNames);
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
.separate{
  position: absolute;
  z-index: 1000;
}
.autoComplete {
  position: relative;
  left: 6px;
  background: rgb(228, 224, 224);
  width: 40px;
  cursor: pointer;
}
.autoComplete p {
  background: rgb(196, 231, 255);
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
  position: relative;
  bottom: 2px;
  right: 2px;
  text-align: center;
  color: #242629;
  border-color: #3ea6ff;
  border-width: 2px;
  width: 250px;
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
  position: relative;
  left: 3px;
}
</style>