/* hardhat.configs */
require('@nomiclabs/hardhat-waffle');
require('hardhat-contract-sizer');
const fs = require('fs');
const privateKey =
  '03ddc38c78394e0c436837a0b89ef2d15ad4a264a33cb2bc6f345560c595b37a';
const projectId = 'xxx';


module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainId: 1337,
      allowUnlimitedContractSize: true,
    },

    mumbai: {
      url: 'https://rpc-mumbai.maticvigil.com',
      allowUnlimitedContractSize: true,
      accounts: [privateKey],
    },
    matic: {
      url:
        'https://polygon-mumbai.g.alchemy.com/v2/2bGIFu-iEnl9RvAOTe1ddZI2gBnuYQGS',
      accounts: [privateKey],
    },
    mainet: {
      url: `https://palm-mainnet.infura.io/v3/${projectId}`,
    },
    kovan: {
      url: 'https://kovan.infura.io/v3/745fcbe1f649402c9063fa946fdbb84c',
      accounts: [privateKey],
      gas: 2100000,
      gasPrice: 8000000000,
      // network_id: 42,
    },
  },
  solidity: {
    version: '0.8.4',
    settings: {
      optimizer: {
        enabled: true,
        runs: 1,
      },
    },
  },
};
