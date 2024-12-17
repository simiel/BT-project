# SMNSH Token & dApp

Welcome to the **SMNSH Token & dApp** project! This repository encapsulates the journey of turning one year’s worth of blockchain learning into a hands-on, fully-deployed decentralized application (dApp). It’s designed to be approachable for beginners, while still showcasing the depth of knowledge and tools used.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation & Setup](#installation--setup)
  - [Environment Variables](#environment-variables)
  - [Deployment](#deployment)
- [Using the dApp](#using-the-dapp)
  - [Viewing Balances](#viewing-balances)
  - [Sending Tokens](#sending-tokens)
- [Testing](#testing)
- [Screenshots & Media](#screenshots--media)
- [Troubleshooting & Tips](#troubleshooting--tips)
- [Roadmap & Future Improvements](#roadmap--future-improvements)
- [Credits & Acknowledgements](#credits--acknowledgements)
- [License](#license)

---

## Project Overview

**SMNSH Token & dApp** is a basic but fully operational blockchain project that ties together core concepts of Web3, smart contracts, and front-end integration. It started as a weekend challenge to:

1. Reinforce theoretical knowledge from one year of blockchain studies.
2. Create an ERC-20 token with HardHat.
3. Test and deploy the token on a test network.
4. Build a simple dApp that allows users to view their token balances and send tokens to others.

---

## Tech Stack

**Smart Contract & Blockchain:**

- **HardHat:** Development, compilation, and testing of the ERC-20 token smart contract.
- **Solidity:** Programming language for the smart contracts.
- **Ethereum Test Network (Goerli or Sepolia):** Deployment target. (Initially considered Polygon, but faucet issues led to Ethereum test networks.)

**Front-End:**

- **React:** Building the user interface.
- **Tailwind CSS:** Rapid styling and responsive design.
- **TypeScript:** Strong typing and maintainable code.
- **Ethers.js:** Interacting with the Ethereum blockchain and the deployed smart contract.

**Additional Tooling & Resources:**

- **Node.js & npm:** For project dependency management.
- **VSCode:** Primary development environment.
- **Blockchain Courses:** University at Buffalo’s Blockchain Specialization on Coursera, a Web3 dev course on Udemy, and additional materials from a mentor.

---

## Features

1. **ERC-20 Token Creation:**

   - Deploy a custom token (`SMNSH`) to the Ethereum test network.
   - Verify and test contract functionality, including initial supply, transferability, and balance checks.

2. **Basic dApp Interface:**

   - **View Token Balance:** Connect your wallet and see how many `SMNSH` tokens you hold.
   - **Send Tokens:** Transfer tokens to another wallet address with real-time transaction feedback.

3. **Full Testing Coverage:**
   - Comprehensive tests in HardHat ensure the contract works as intended.
   - Front-end integration tested against deployed contracts.

---

## Architecture

The project is divided into two main parts:

1. **`/contracts` directory:** Houses the Solidity contract for the `SMNSH` token.
2. **`/frontend` directory:** Contains the React-based dApp, which interacts with the deployed contract via Ethers.js.

**High-Level Flow:**

1. **Smart Contract Development:**

   - Write the ERC-20 token contract in Solidity.
   - Use HardHat for development, testing, and deployment scripts.

2. **Deployment:**

   - Deploy the smart contract to an Ethereum test network (Goerli or Sepolia).
   - Verify the contract on the test network.

3. **Front-End Development:**

   - Set up a React application with Tailwind CSS for styling.
   - Integrate Ethers.js to interact with the deployed smart contract.

4. **User Interaction:**

   - Users connect their Ethereum wallet to the dApp.
   - Users can view their `SMNSH` token balance.
   - Users can send `SMNSH` tokens to other addresses.

5. **Testing:**

   - Write and run tests in HardHat to ensure smart contract functionality.
   - Test front-end components and their interaction with the smart contract.

   ## Getting Started

   To get started with the **SMNSH Token & dApp** project, follow the steps below.

   ### Prerequisites

   Ensure you have the following installed on your machine:

   - **Node.js** (v14 or higher)
   - **npm** (v6 or higher)
   - **Git**
   - **MetaMask** or any other Ethereum wallet browser extension

   ### Installation & Setup

   1. **Clone the repository:**

      ```bash
      git clone https://github.com/yourusername/SMNSH-token-dapp.git
      cd SMNSH-token-dapp
      ```

   2. **Install dependencies:**

      ```bash
      npm install
      ```

   ### Environment Variables

   Create a `.env` file in the root directory and add the following environment variables:

   ```plaintext
   REACT_APP_INFURA_PROJECT_ID=your_infura_project_id
   REACT_APP_CONTRACT_ADDRESS=your_deployed_contract_address
   ```

   ### Deployment

   To deploy the smart contract to an Ethereum test network, follow these steps:

   1. **Compile the contract:**

      ```bash
      npx hardhat compile
      ```

   2. **Deploy the contract:**

      ```bash
      npx hardhat run scripts/deploy.js --network goerli
      ```

   3. **Verify the contract:**

      ```bash
      npx hardhat verify --network goerli your_deployed_contract_address
      ```

   After deployment, update the `REACT_APP_CONTRACT_ADDRESS` in your `.env` file with the deployed contract address.

   ### Running the dApp

   1. **Start the development server:**

      ```bash
      npm start
      ```

   2. **Open your browser:**

      Navigate to `http://localhost:3000` to view and interact with the dApp.

   ***

   ## Using the dApp

   ### Viewing Balances

   1. Connect your Ethereum wallet (e.g., MetaMask) to the dApp.
   2. Your `SMNSH` token balance will be displayed on the dashboard.

   ### Sending Tokens

   1. Enter the recipient's wallet address.
   2. Specify the amount of `SMNSH` tokens to send.
   3. Confirm the transaction in your wallet.

   ***

   ## Testing

   To run tests for the smart contract and front-end components:

   1. **Smart Contract Tests:**

      ```bash
      npx hardhat test
      ```

   2. **Front-End Tests:**

      ```bash
      npm test
      ```

   ***

   ## Screenshots & Media

### Screenshots & Media

Here are some screenshots and media showcasing the **SMNSH Token & dApp**:

1. **Home Page:**
   ![Home Page](screenshots/home_page.png)

2. **View Balance:**
   ![View Balance](screenshots/view_balance.png)

3. **Send Tokens:**
   ![Send Tokens](screenshots/send_tokens.png)

4. **Transaction Confirmation:**
   ![Transaction Confirmation](screenshots/transaction_confirmation.png)

### Troubleshooting & Tips

- **MetaMask Connection Issues:**

  - Ensure MetaMask is installed and configured correctly.
  - Make sure you are connected to the correct Ethereum test network (Goerli or Sepolia).

- **Contract Deployment Errors:**

  - Double-check your environment variables in the `.env` file.
  - Verify that your Infura project ID is correct and has sufficient access.

- **Front-End Issues:**
  - Ensure all dependencies are installed by running `npm install`.
  - Check the browser console for any errors and address them accordingly.

### Roadmap & Future Improvements

- **Enhanced UI/UX:**

  - Improve the user interface for a more seamless experience.
  - Add more detailed transaction history and status updates.

- **Additional Features:**

  - Implement staking and rewards for `SMNSH` token holders.
  - Add support for multiple tokens and networks.

- **Security Enhancements:**
  - Conduct a thorough security audit of the smart contract.
  - Implement additional security measures for the dApp.

### Credits & Acknowledgements

- **Mentor:** Special thanks to my mentor for guidance and support throughout the project.
- **Courses:** University at Buffalo’s Blockchain Specialization on Coursera, Web3 dev course on Udemy.
- **Community:** Thanks to the blockchain developer community for their invaluable resources and support.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
