let EviFactory = artifacts.require('EviFactory')

module.exports = async function(deployer) {
  deployer.deploy(EviFactory).then(async () => {
    // var factory = await EviFactory.deployed()
    // await factory.createEvi()
  })
}
