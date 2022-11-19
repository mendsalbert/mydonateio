const hre = require('hardhat');

async function main() {
  const [deployer, companyaddress] = await hre.ethers.getSigners();

  console.log('Deploying contracts with the account:', deployer.address);

  
  let txHash, txReceipt;

  const Schain = await hre.ethers.getContractFactory('Donation');
  const schain = await Schain.deploy(deployer.address);

  // console.log('company address', companyaddress.address)
  await schain.deployed();

  txHash = schain.deployTransaction.hash;
  txReceipt = await ethers.provider.waitForTransaction(txHash);
  let schainAddress = txReceipt.contractAddress;

  console.log('Mydonate contract address', schainAddress);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
