# @getsafle/contract-map-data

A mapping of checksummed contract addresses to metadata, like names, and images of their logos.

## Usage

You can install from npm with `npm install @getsafle/contract-map-data` and use it in your code like this:

```javascript
const tokenContracts = require('../token-contract-map/src/index');

const getChainDetails = async (chain) => {
   
    const contracts = tokenContracts[chain].CONTRACT_MAP;

    const SINGLE_CALL_BALANCES_ADDRESS =  tokenContracts[chain].SINGLE_CALL_BALANCES_ADDRESS

    return { contracts, SINGLE_CALL_BALANCES_ADDRESS };
}
```

* CONTRACT_MAP - Details of token contracts on the chain
* SINGLE_CALL_BALANCES_ADDRESS - Contract address for asset discovery on a wallet

## Submission Process

Maintaining this list is a considerable chore, and it is not our highest priority. We do not guarantee inclusion in this list on any urgent timeline. We are actively looking for fair and safe ways to maintain a list like this in a decentralized way, because maintaining it is a large and security-delicate task.

1. Raise an issue on this repository with the chain name and token details.
2. Add an entry to the `/src/contract-map/[chain].json` file with the specified address as the key, and the name, logo, tokenStandard, symbol and decimals as the value.
3. Raise a pull request and link the issue on the PR and put it up for review. 

Criteria:

- Do not add your entry to the end of the JSON map, messing with the trailing comma. Your pull request should only be an addition of lines, and any line removals should be deliberate deprecations of those logos.
- PR should include link to official project website referencing the suggested address.
- Project website should include explanation of project.
- Project should have clear signs of activity, either traffic on the network, activity on GitHub, or community buzz.
- Nice to have a verified source code on a block explorer like Etherscan.
- Must have a ['NEUTRAL' reputation or 'OK' reputation](https://info.etherscan.com/etherscan-token-reputation) on Etherscan.

A sample submission:

```json
"0x7ceb23fd6bc0add59e62ac25578270cff1b9f619": {
        "name": "Wrapped Ether",
        "logo": "https://wallet-asset.matic.network/img/tokens/eth.svg",
        "erc20": true,
        "symbol": "WETH",
        "decimals": 18
    },
```

Tokens should include a field `"erc20": true`, or `"erc721": true` and can include additional fields:
