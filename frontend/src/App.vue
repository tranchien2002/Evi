<template>
  <div id="app">
    <router-view></router-view>
    <!-- {{ this.setWeb3() }} -->
  </div>
</template>

<script>
/* eslint-disable no-console */
// import getWeb3 from './utils/getWeb3';
// import Factory from "./contracts/Factory.json";
import { mapState, mapActions } from "vuex";
export default {
  name: "app",
  components: {},
  computed: { ...mapState("contract", ["web3"]) },
  methods: {
    ...mapActions("contract", ["setWeb3"])
  },
  created() {
    this.setWeb3();
  }
};
</script>
