import React, { createContext, useEffect, useState } from "react";
import { ethers, Provider, Signer } from "ethers";

const SEPOLIA_CHAIN_ID = 11155111;
const SEPOLIA_CONFIG = {
  chainId: `0x${SEPOLIA_CHAIN_ID.toString(16)}`,
  chainName: "Sepolia Test Network",
  nativeCurrency: {
    name: "Sepolia ETH",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: ["https://rpc.sepolia.org"],
  blockExplorerUrls: ["https://sepolia.etherscan.io"],
};

declare global {
  interface Window {
    ethereum: any;
  }
}

interface EthContextType {
  provider: Provider | null;
  signer: ethers.Signer | null;
  account: string;
  chainId: number;
  connectWallet: () => any;
  isConnected: boolean;
}

export const EthContext = createContext<EthContextType>({
  provider: null,
  signer: null,
  account: "",
  connectWallet: () => {},
  chainId: 0,
  isConnected: false,
});

interface EthProviderProps {
  children: React.ReactNode;
}

export const EthProvider: React.FC<EthProviderProps> = ({ children }) => {
  const [provider, setProvider] = useState<Provider | null>(null);
  const [signer, setSigner] = useState<Signer | null>(null);
  const [account, setAccount] = useState<string>("");
  const [chainId, setChainId] = useState<number>(0);
  const [isCorrectNetwork, setIsCorrectNetwork] = useState<boolean>(false);

  const switchToSepolia = async () => {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: SEPOLIA_CONFIG.chainId }],
      });
    } catch (switchError: any) {
      // Network not added, let's add it
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [SEPOLIA_CONFIG],
          });
        } catch (addError) {
          console.error("Failed to add Sepolia:", addError);
        }
      }
    }
  };

  const connectWallet = async () => {
    console.log("Connecting wallet...");
    if (window.ethereum) {
      try {
        const newProvider = new ethers.BrowserProvider(window.ethereum);

        // Request account access
        await window.ethereum.request({ method: "eth_requestAccounts" });

        // Get current chain
        const network = await newProvider.getNetwork();
        const currentChainId = Number(network.chainId);

        // Switch to Sepolia if needed
        if (currentChainId !== SEPOLIA_CHAIN_ID) {
          await switchToSepolia();
        }

        const newSigner = await newProvider.getSigner();
        const address = await newSigner.getAddress();

        setProvider(newProvider);
        setSigner(newSigner);
        setAccount(address);
        setChainId(SEPOLIA_CHAIN_ID);
        setIsCorrectNetwork(true);
      } catch (error) {
        console.error("Connection failed:", error);
      }
    } else {
      alert("Please install MetaMask!");
      return;
    }
  };

  // Monitor network changes
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("chainChanged", (newChainId: string) => {
        const networkId = parseInt(newChainId, 16);
        setChainId(networkId);
        setIsCorrectNetwork(networkId === SEPOLIA_CHAIN_ID);
        window.location.reload();
      });

      window.ethereum.on("accountsChanged", (accounts: string[]) => {
        if (accounts.length > 0) {
          setAccount(accounts[0]);
        } else {
          setAccount("");
          setSigner(null);
        }
      });
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener("chainChanged", () => {});
        window.ethereum.removeListener("accountsChanged", () => {});
      }
    };
  }, []);

  return (
    <EthContext.Provider
      value={{
        provider,
        signer,
        account,
        connectWallet,
        chainId,
        isConnected: !!account,
      }}
    >
      {children}
    </EthContext.Provider>
  );
};
