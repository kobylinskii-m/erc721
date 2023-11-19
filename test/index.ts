import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { Contract } from "ethers";
import { ethers } from "hardhat";
import { Collection, CollectionFactory } from "../typechain-types";
import { constants } from "./const";

describe("Collection Contract", () => {
  let owner: SignerWithAddress;
  let addr1: SignerWithAddress;
  let addr2: SignerWithAddress;
  let addrs: SignerWithAddress[];
  let collectionContract: Contract & Collection;

  beforeEach(async () => {
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

    const Collection = await ethers.getContractFactory("Collection");
    collectionContract = (await Collection.deploy(
      owner.address,
      constants.COLLECTION_NAME_1,
      constants.COLLECTION_SYMBOL_1
    )) as any;
    await collectionContract.deployed();
  });

  describe("Mint token", () => {
    it("We can mint a new token", async function () {
      const tokenURI = constants.TOKEN_URI_1;
      await collectionContract.mint(addr1.address, tokenURI);

      const tokenOwner = await collectionContract.ownerOf(0);
      expect(tokenOwner).to.equal(addr1.address);

      const storedTokenURI = await collectionContract.tokenURI(0);
      expect(storedTokenURI).to.equal(tokenURI);
    });

    it("Only the owner can mint tokens", async function () {
      const tokenURI = constants.TOKEN_URI_1;

      await expect(
        collectionContract.connect(addr1).mint(addr1.address, tokenURI)
      ).to.be.revertedWith("Ownable: caller is not the owner");
    });
  });

  describe("Change token uri", () => {
    it("The token owner can change the token urI", async function () {
      const tokenURI = constants.TOKEN_URI_1;
      await collectionContract.mint(addr1.address, tokenURI);

      const newTokenURI = constants.TOKEN_CHANGE_URI_1;
      await collectionContract.connect(addr1).setTokenURI(0, newTokenURI);

      const storedTokenURI = await collectionContract.tokenURI(0);
      expect(storedTokenURI).to.equal(newTokenURI);
    });

    it("Only the token owner can change the address", async function () {
      const tokenURI = constants.TOKEN_URI_1;
      await collectionContract.mint(addr1.address, tokenURI);

      const newTokenURI = constants.TOKEN_CHANGE_URI_1;

      await expect(
        collectionContract.connect(addr2).setTokenURI(0, newTokenURI)
      ).to.be.revertedWith("Ownable: caller is not the token owner");

      const storedTokenURI = await collectionContract.tokenURI(0);
      expect(storedTokenURI).to.equal(tokenURI);
    });
  });
});

describe("CollectionFactory Contract", function () {
  let owner: SignerWithAddress;
  let addr1: SignerWithAddress;
  let addr2: SignerWithAddress;
  let addrs: SignerWithAddress[];
  let collectionFactory: Contract & CollectionFactory;

  beforeEach(async function () {
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

    const CollectionFactory = await ethers.getContractFactory(
      "CollectionFactory"
    );

    collectionFactory = (await CollectionFactory.deploy()) as any;
    await collectionFactory.deployed();
  });

  it("We can create a collection using a factory", async function () {
    const name = constants.COLLECTION_NAME_1;
    const symbol = constants.COLLECTION_SYMBOL_1;

    await collectionFactory.createCollection(name, symbol);
  });
});
