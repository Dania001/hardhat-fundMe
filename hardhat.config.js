//
require("@nomiclabs/hardhat-waffle")
require("hardhat-gas-reporter")
require("@nomiclabs/hardhat-etherscan")
require("dotenv").config()
//require("solidity-coverage")
require("hardhat-deploy")


//const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || ""
//const KOVAN_RPC_URL = "https://eth-mainnet.alchemyapi.io/v2/your-api-key"

const RINKEBY_RPC_URL = "https://eth-rinkeby.alchemyapi.io/v2/4HBeV5vdETv5cGGu9o4QOfgbAruHsH9V"

const PRIVATE_KEY = "32ef2268837ff23e761dbc31d644ea530360b999ea4ac80074b4070de0cc1416"

const ETHERSCAN_API_KEY = "JX48E9CTPT2ZD2Q755F5FSJ7AYG4H9VNPM"

module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            chainId: 31337,
            // gasPrice: 130000000000,
        },
//        kovan: {
//            url: KOVAN_RPC_URL,
//            accounts: [PRIVATE_KEY],
//            chainId: 42,
//            blockConfirmations: 6,
//            gas: 6000000,
//        },
        rinkeby: {
            url: RINKEBY_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 4,
            blockConfirmations: 6,
        },
    },
    solidity: {
        compilers: [
            {
                version: "0.8.8",
            },
            {
                version: "0.6.6",
            },
        ],
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
    gasReporter: {
        enabled: true,
        currency: "USD",
        outputFile: "gas-report.txt",
        noColors: true,
        // coinmarketcap: COINMARKETCAP_API_KEY,
    },
    namedAccounts: {
        deployer: {
            default: 0, // here this will by default take the first account as deployer
            1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
        },
    },

}