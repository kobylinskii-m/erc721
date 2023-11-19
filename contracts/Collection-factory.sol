//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Collection.sol";

contract CollectionFactory {
  event CollectionCreated(address owner, address indexed collection);

  // CREATOR FUNCTIONS

  function createCollection(string calldata name, string calldata symbol) external returns (address collection) {
    collection = address(new Collection(msg.sender, name, symbol));
    emit CollectionCreated(msg.sender, collection);
  }
}
