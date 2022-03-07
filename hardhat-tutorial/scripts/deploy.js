const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env"});
const { ALIEN_NFT_CONTRACT_ADDRESS } = require("../constants");

async function main() {
    const alienNftContract = ALIEN_NFT_CONTRACT_ADDRESS;
    const alienTokenContract = await ethers.getContractFactory("AlienToken");

    const deployedAlienTokenContract = await alienTokenContract.deploy(alienNftContract);
    console.log("Alien Token Contract Address", deployedAlienTokenContract.address);

}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });