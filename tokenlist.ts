import MAINNET from './mainnet.json'
import TESTNET from './testnet.json'

export default {
  "name": "TenX Default List",
  "timestamp": "2021-01-05T20:47:02.923Z",
  "version": {
    "major": 1,
    "minor": 0,
    "patch": 0
  },
  "tags": {},
  "logoURI": "ipfs://QmNa8mQkrNKp1WEEeGjFezDmDeodkWRevGFN8JCV7b4Xir",
  "keywords": ["default"],
  "tokens": [
    {
      "name": "Wrapped Tenet",
      "address": MAINNET.WTENET,
      "symbol": "WTENET",
      "decimals": 18,
      "chainId": 1559,
      "logoURI": "http://localhost:3000/"
    },
    {
      "name": "TenX",
      "address": MAINNET.TenX,
      "symbol": "TENX",
      "decimals": 18,
      "chainId": 1559,
      // "logoURI": "https://www.tenx.exchange/images/tenx.png"
      "logoURI": "https://i.ibb.co/sCm8TC1/tenx.png"
    },
    {
      "name": "Tenet Pepe",
      "address": MAINNET.PEPE,
      "symbol": "PEPE",
      "decimals": 9,
      "chainId": 1559,
      // "logoURI": "https://www.tenx.exchange/images/pepe.png"
      "logoURI": "https://i.ibb.co/9wxxX50/pepe.png"
    },
    {
      "name": "Liquid Staking Pepe",
      "address": MAINNET.LSPEPE,
      "symbol": "LSPEPE",
      "decimals": 18,
      "chainId": 1559,
      // "logoURI": "https://www.tenx.exchange/images/lspepe.png"
      "logoURI": "https://i.ibb.co/T43qg6p/Ls-PEPE-LOGO.png"
    },

    {
      "name": "Wrapped Tenet",
      "address": TESTNET.WTENET,
      "symbol": "WTENET",
      "decimals": 18,
      "chainId": 155,
      "logoURI": "http://localhost:3000/"
    },
    {
      "name": "TenX",
      "address": TESTNET.TenX,
      "symbol": "TENX",
      "decimals": 18,
      "chainId": 155,
      "logoURI": "https://i.ibb.co/R4Kvp0s/TENX.png"
    }
  ]
}
