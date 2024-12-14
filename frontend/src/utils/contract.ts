import { ethers } from "ethers";
import TokenArtifact from "../../../artifacts/contracts/Token.sol/SMToken.json";

const CONTRACT_ADDRESS = "0xAffBC7BC58Dd5AeAfdA4242917d963Fbb3d6da79";

export const getTokenContract = (signer: ethers.Signer | null) => {
  if (!signer) return null;
  return new ethers.Contract(CONTRACT_ADDRESS, TokenArtifact.abi, signer);
};
