import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    ZircuitTestnet: {
      url: "https://Zircuit-rpc-testnet.appchain.base.org",
      chainId: 48898,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
      gasPrice: 1000000000, // 1 gwei
      gas: 2100000,
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      chainId: 31337,
    },
  },
  etherscan: {
    apiKey: {
      ZircuitTestnet: "not-needed", // Zircuit doesn't have Etherscan
    },
    customChains: [
      {
        network: "ZircuitTestnet",
        chainId: 48898,
        urls: {
          apiURL: "https://Zircuit-explorer-testnet.appchain.base.org/api",
          browserURL: "https://Zircuit-explorer-testnet.appchain.base.org"
        }
      }
    ]
  }
};

export default config;



