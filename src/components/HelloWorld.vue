<template>
  <div class="hello">
    <input
      type="text"
      calss="inputbox"
      v-model="input"
      @change="inputwidth()"
    />
    <div class="showsquare" v-if="data.data.area != 0">
      {{ data.data.area }}
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import { set } from "vue/types/umd";
export default {
  name: "HelloWorld",
  data() {
    return {
      data: "",
      input: "",
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000")
      .then((response) => (this.data = response));
    // console.log(this.data);
  },
  methods: {
    inputwidth() {
      let number = this.input;
      axios
        .get("http://localhost:3000", {
          params: { width: number },
        })
        .then((response) => (this.data = response));
    },
  },
  // computed: {
  //   showData() {

  // },
};
</script>

<style></style>
