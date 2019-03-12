const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface,bytecode} = require('./compile');

const provider = new HDWalletProvider(
  'vibrant fly dove rebuild castle trade imitate torch tray trial first option',
  'https://rinkeby.infura.io/v3/15a4a56923b14777a2437b58f1c59484'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account',accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data: bytecode, arguments: ['Hi there']})
    .send({gas:'10000000',from: accounts[0]});

  console.log('contract deploy to',result.options.address);
};

deploy();
