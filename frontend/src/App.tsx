import React, { useContext, useEffect, useState } from "react";
import { EthContext } from "./context/EthContext";
import { getTokenContract } from "./utils/contract";
import { ethers } from "ethers";

const App: React.FC = () => {
  const { provider, signer, account, connectWallet } = useContext(EthContext);
  const [balance, setBalance] = useState<string>("0");

  const fetchBalance = async () => {
    if (signer) {
      const contract = getTokenContract(signer);
      if (contract) {
        const bal: ethers.BigNumberish = await contract.balanceOf(account);
        setBalance(ethers.formatUnits(bal, 18));
      }
    }
  };

  useEffect(() => {
    if (signer && account) {
      fetchBalance();
    }
  }, [signer, account]);

  return (
    <div className="min-h-screen bg-gray-100 mx-auto flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">
          SMENSAH Token (SMNSH)
        </h1>
        {!account ? (
          <button
            onClick={connectWallet}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Connect Wallet
          </button>
        ) : (
          <div>
            <p className="mb-2">Connected Account:</p>
            <p className="text-sm text-gray-600 break-all mb-4">{account}</p>
            <p className="mb-4">Token Balance: {balance} MHT</p>
            <TransferForm fetchBalance={fetchBalance} />
          </div>
        )}
      </div>
    </div>
  );
};

interface TransferFormProps {
  fetchBalance: () => void;
}

const TransferForm: React.FC<TransferFormProps> = ({ fetchBalance }) => {
  const { signer } = useContext(EthContext);
  const [to, setTo] = useState<string>("");
  const [amount, setAmount] = useState<string>("");

  const handleTransfer = async (e: React.FormEvent) => {
    e.preventDefault();
    if (signer) {
      const contract = getTokenContract(signer);
      if (contract) {
        try {
          const tx = await contract.transfer(to, ethers.parseUnits(amount, 18));
          await tx.wait();
          alert("Transfer successful!");
          setTo("");
          setAmount("");
          fetchBalance();
        } catch (error: any) {
          console.error(error);
          alert(error.message || "Transaction failed");
        }
      }
    }
  };

  return (
    <form onSubmit={handleTransfer}>
      <div className="mb-4">
        <label className="block text-gray-700">Recipient Address</label>
        <input
          type="text"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="w-full mt-1 p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Amount</label>
        <input
          type="number"
          step="any"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full mt-1 p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
      >
        Transfer
      </button>
    </form>
  );
};

export default App;
