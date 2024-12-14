require("@nomicfoundation/hardhat-toolbox");
const INFURA_API_KEY = vars.get("INFURA_API_KEY");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
    },
  },
};
