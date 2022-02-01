const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, world!");
    await greeter.deployed();

    expect(await greeter.greet()).to.equal("Hello, world!");

    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });

  it("Should compare what GreeterMock and Greeter has same behaviour", async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    const GreeterMock = await ethers.getContractFactory("GreeterMock");
    const greeter = await Greeter.deploy("Hello, world!");
    await greeter.deployed();
    const greeterMock = await GreeterMock.deploy("Hello, world!");
    await greeterMock.deployed();

    expect(await greeter.greet()).to.equal(await greeterMock.greet());
  });

});
