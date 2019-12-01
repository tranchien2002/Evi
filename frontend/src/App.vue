<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <h1>{{}}</h1>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import getWeb3 from "./utils/getWeb3";
import Factory from "./contracts/Factory.json";
export default {
  name: "app",
  components: {
    HelloWorld
  },
  // data() {
  //   myDoors: [];
  // },
  async mounted() {
    const web3 = await getWeb3();
    let factoryAddress = Factory.networks[89].address;
    let factory = new web3.eth.Contract(Factory.abi, factoryAddress, {
      transactionConfirmationBlocks: 1
    });
    let myDoors = await factory.methods
      .getAllSesameOf("0x9291cc04c8E1de9D6edD28a068D58ce738baefFF")
      .call({ from: "0x118957579A3F50FA644342e248C298bE7E116b0D" });
    alert(myDoors);
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
