pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ProofOfAchievement is ERC721URIStorage, Ownable {
    uint256 public tokenCounter;

    event AchievementMinted(uint256 tokenId, address recipient, string tokenURI);

    constructor() ERC721("ProofOfAchievement", "PoA") {
        tokenCounter = 0;
    }

    function mintAchievement(address recipient, string memory tokenURI) public onlyOwner {
        uint256 newTokenId = tokenCounter;
        _safeMint(recipient, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        emit AchievementMinted(newTokenId, recipient, tokenURI);
        tokenCounter++;
    }
}