// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BookToken is ERC721, Ownable {
    uint256 public nextTokenId;
    mapping(uint256 => string) public bookMetadata;

    constructor() ERC721("BookToken", "BOOK") {}

    function mint(address to, string memory metadataURI) public onlyOwner {
        uint256 tokenId = nextTokenId;
        nextTokenId++;
        _safeMint(to, tokenId);
        bookMetadata[tokenId] = metadataURI;
    }

    function getBookMetadata(uint256 tokenId) public view returns (string memory) {
        return bookMetadata[tokenId];
    }
}