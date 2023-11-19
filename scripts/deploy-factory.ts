import { ethers } from "hardhat";

async function main() {
  const Factory = await ethers.getContractFactory("CollectionFactory");
  const factory = await Factory.deploy();

  console.log("Factory deployed to:", factory.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
