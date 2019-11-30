<template>
  <div id="app">
    <router-view></router-view>
    <!-- {{ this.setWeb3() }} -->
  </div>
</template>

<script>
/* eslint-disable no-console */
import getWeb3 from "./utils/getWeb3";
import Factory from "./contracts/Factory.json";
import { mapState, mapActions } from "vuex";
export default {
  name: "app",
  components: {},
  computed: { ...mapState("contract", ["web3"]) },
  methods: {
    ...mapActions("contract", ["setWeb3"])
  },
  async created() {
    const web3 = await getWeb3();
    let factoryAddress = Factory.networks[89].address;
    let factory = new web3.eth.Contract(Factory.abi, factoryAddress, {
      transactionConfirmationBlocks: 1
    });
    this.setWeb3(factory);
  }
};
</script>
