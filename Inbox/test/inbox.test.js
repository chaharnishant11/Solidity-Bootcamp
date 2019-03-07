const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
//whenever we use constructors the first letter of the variable is capitalised
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile');

let accounts;
let inbox;

beforeEach(async () => {
  //Get a list of all accounts
  //Promices example
  // web3.eth.getAccounts()
  //   .then(fetchAccounts => {
  //     console.log(fetchAccounts);
  //   });
  //async await(much more cleaner)
  accounts = await web3.eth.getAccounts();
  //use one of those accounts to deploy the contracts
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data: bytecode, arguments: ['Hi there!'] })
    .send({ from: accounts[0], gas: '1000000'});

});

describe('Inbox',() => {
  it('deploy a contract',() => {
    console.log(inbox);
  });
});
