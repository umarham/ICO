//SPDX-Licence-Identifier: MIT
pragma solidity ^0.8.10;

interface IAlien {

    function tokenOfOwnerByIndex(address owner, uint256 index) external view returns (uint256 tokenId);

    function balanceOf(address owner) external view returns (uint256 balance);

}