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
    ...mapActions("contract", ["setWeb3", "initContarct"])
  },
  async mounted() {
    await this.setWeb3();
    await this.initContarct();
  }
};
</script>
