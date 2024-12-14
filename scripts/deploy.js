import { ethers } from "hardhat";

async function main() {
  const BookToken = await ethers.getContractFactory("BookToken");
  const bookToken = await BookToken.deploy();
  await bookToken.deployed();
  console.log("BookToken deployed to:", bookToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
