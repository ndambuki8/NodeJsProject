require('@nomiclabs/hardhat-ethers');

const { alchemyApiKey, mnemonic } = require('./hashFile.json');

  module.exports = {
    networks: {
     rinkeby: {
       url: `https://eth-rinkeby.alchemyapi.io/v2/${alchemyApiKey}`,
       accounts: { mnemonic: mnemonic },
     },
   },
   solidity: "0.8.4",

};