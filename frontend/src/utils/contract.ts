import { ethers } from "ethers";
import TokenArtifact from "../../../artifacts/contracts/Token.sol/SMToken.json";

const CONTRACT_ADDRESS = "0xa5Ec0406db3169C70e558b473E9A100e4aC0AC52";

export const getTokenContract = (signer: ethers.Signer | null) => {
  if (!signer) return null;
  return new ethers.Contract(CONTRACT_ADDRESS, TokenArtifact.abi, signer);
};
