const hre = require("hardhat");

async function main() {
  // Get the contract factory
  const TokenFactory = await hre.ethers.getContractFactory("TokenFactory");

  console.log("Deploying TokenFactory...");
  
  // Deploy without gas parameters first
  const tokenFactory = await TokenFactory.deploy();

  // Wait for deployment
  await tokenFactory.waitForDeployment();

  const address = await tokenFactory.getAddress();
  console.log("TokenFactory deployed to:", address);

  // Wait for a few block confirmations
  await tokenFactory.deploymentTransaction().wait(5);
  console.log("Deployment confirmed");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });