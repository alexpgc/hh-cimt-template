//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "../interfaces/IGreeter.sol";

contract GreeterMock is IGreeter{
    string private greeting;

    constructor(string memory _greeting) {
        console.log("Deploying a PWPeggerMock with greeting:", _greeting);
        greeting = _greeting;
    }

    function greet() external override view returns (string memory) {
        return greeting;
    }

    function setGreeting(string memory _greeting) external override {
        console.log("GreeterMock Changing greeting from '%s' to '%s'", greeting, _greeting);
        greeting = _greeting;
    }
}
