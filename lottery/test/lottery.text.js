 const assert = require('assert');
 const ganache = require('ganache-cli');
 const Web3 = require('web3');
 const web3 = new Web3(ganache.provider());

const {interface, bytecode} = require('../compile');

let lottery;
let accounts;

beforeEach(aysnc () => {
  accounts = await web3.eth.getAccounts();

  lottery = await new web3.eth.Contract;
});
