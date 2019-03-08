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
    //console.log(inbox);
    assert.ok(inbox.options.address);// tests whether the given variable is not null
  });

  it('has a default message ', async () =>{
    const message = await inbox.methods.message().call();// just calling the method
    assert.equal(message,'Hi there!');
  });

  it('can change the message', async () => {
    await inbox.methods.setMessage('bye').send({ from: accounts[0] });// making a transiction
    const message = await inbox.methods.message().call();
    assert.equal(message,'bye');
  });
});
