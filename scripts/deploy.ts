import { ethers } from "hardhat";
import { input } from "./functools/input";

async function main() {
  const owner = await input(
    "Enter the address of the owner of the collection: "
  );
  const name = await input("Enter the name of the collection: ");
  const symbol = await input("Enter the symbol of the collection: ");

  const Collection = await ethers.getContractFactory("Collection");
  const collection = await Collection.deploy(owner, name, symbol);

  console.log("Collection deployed to:", collection.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
