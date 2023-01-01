/* hardhat.configs */
require('@nomiclabs/hardhat-waffle');
require('hardhat-contract-sizer');
const fs = require('fs');
const privateKey =
  '2b2602c128a951a07c50bfc30a46f8c08d4bd95574d8dd2d06c0a8e115d4cfde';
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
      url: 'https://polygon-mumbai.g.alchemy.com/v2/2bGIFu-iEnl9RvAOTe1ddZI2gBnuYQGS',
      accounts: [privateKey],
    },
    mainnet: {
      url: `https://eth-mainnet.g.alchemy.com/v2/ht3EwBZKTsFIetiICm5Oxirlph5DmshC`,
      accounts: [privateKey],
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
