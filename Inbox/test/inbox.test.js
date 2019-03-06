const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
//whenever we use constructors the first letter of the variable is capitalised
const web3 = new Web3(ganache.provider());


class Car {
  park(){
    return 'stopped';
  }

  drive(){
    return 'vroom';
  }
}

describe('Car', () => {
  it('can park',()=> {
    const car = new Car();
    assert.equal(car.park(),'stopped');
  });
});
