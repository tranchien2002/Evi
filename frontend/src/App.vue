<template>
  <div id="app">
    <router-view></router-view>
    <!-- {{ this.setWeb3() }} -->
  </div>
</template>

<script>
/* eslint-disable no-console */
import { mapState, mapActions } from "vuex";
export default {
  name: "app",
  components: {},
  computed: { ...mapState("contract", ["web3"]) },
  methods: {
    ...mapActions("contract", [
      "setWeb3",
      "initContarct"
      // "createEvi",
      // "getAllInsurancePackage",
      // "getAllContract",
      // "addInsurancePackage",
      // "getAllCustomers"
    ])
  },
  async mounted() {
    await this.setWeb3();
    await this.initContarct();
    // await this.createEvi({
    //   location: "Moscow",
    //   date: "2019-12-05",
    //   times: "001111111111111111111100",
    //   priceWei: 10000,
    //   packageName: "Silver",
    //   link: "0x0000000000000000000000000000000000000000"
    // });
    // await this.getAllContract();
    // await this.addInsurancePackage({
    //   name: "Ruby",
    //   priceUSD: 20000,
    //   rate: 200
    // });
    // this.getAllCustomers();
    // await this.getAllInsurancePackage();
  }
};
</script>
