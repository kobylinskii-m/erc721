//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Collection is ERC721URIStorage, Ownable {
  ///LIBRARIES
  using Counters for Counters.Counter;

  ///EVENTS
  event MintToken(address to, uint256 tokenId);
  event SetTokenURI(uint256 tokenId, string tokenURI);

  ///INIT VAR
  Counters.Counter private _tokenId;

  constructor(
    address owner_,
    string memory name_,
    string memory symbol_
  ) ERC721(name_, symbol_) Ownable() {
    transferOwnership(owner_);
  }

  function mint(address to, string calldata tokenURI) external onlyOwner {
    _mint(to, _tokenId._value);
    _setTokenURI(_tokenId._value, tokenURI);
    emit MintToken(to, _tokenId._value);
    _tokenId.increment();
  }

  function setTokenURI(uint256 tokenId, string calldata tokenURI) external onlyOwnerToken(tokenId) {
    _setTokenURI(tokenId, tokenURI);
    emit SetTokenURI(tokenId, tokenURI);
  }

  /**
   * @dev Throws if called by any account other than the token owner.
   */
  modifier onlyOwnerToken(uint256 tokenId) {
    require(ownerOf(tokenId) == _msgSender(), "Ownable: caller is not the token owner");
    _;
  }
}
