const ethereum = require('./contract-map/ethereum.json');
const polygon = require('./contract-map/polygon.json');

const supportedChains = require('./supportedChains.json');
module.exports={
    ethereum, supportedChains, polygon,
}