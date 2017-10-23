/*
* Require necessary dependencies
* require functional app file
*/

const expect = require('chai').expect;
const myApp = require('../apps/raindrop');

describe('It should return Pling, Plang or Plong if 3,5,7 is a prime factor', () => {
  it('returns Pling when passed number has 3 as primefactor', () => {
  	expect(myApp(3)).to.equal('Pling');
  	expect(myApp(9)).to.equal('Pling');
  });

  it('returns Plang when passed number has 5 as prime factor', () => {
  	expect(myApp(5)).to.equal('Plang');
  	expect(myApp(25)).to.equal('Plang');
  });

  it('returns Plong when passed number has 7 as prime factor', () => {
  	expect(myApp(7)).to.equal('Plong');
  	expect(myApp(49)).to.equal('Plong');
  });

  it('returns PlingPlang when passed number has 3 and 5 as prime factors', () => {
  	expect(myApp(15)).to.equal('PlingPlang');
  });

  it('returns PlangPlong when passed number has 5 and 7 as prime factors', () => {
  	expect(myApp(35)).to.equal('PlangPlong');
  	expect(myApp(70)).to.equal('PlangPlong')
  });

  it('return PlingPlangPlong when passed a number that has 3,5 and 7 as prime factors', () => {
  	expect(myApp(105)).to.equal('PlingPlangPlong');
  	expect(myApp(210)).to.equal('PlingPlangPlong')
  });

  it('returns back the number when the passed number does not have 3,5 or 7 as prime factors', () => {
  	expect(myApp(34)).to.equal(34);
  	expect(myApp(13)).to.equal(13);
  });

  it('returns Plong when passed 28', () => {
  	expect(myApp(28)).to.equal('Plong');
  });
  
  it('returns Plang when passed 50', () => {
  	expect(myApp(50)).to.equal('Plang');
  });

  it('returns PlangPlong when passed 70', () => {
  	expect(myApp(70)).to.equal('PlangPlong');
  });

  it('returns Plong when passed 77', () => {
  	expect(myApp(77)).to.equal('Plong');
  });

  it('returns Pling when passed 6', () => {
  	expect(myApp(6)).to.equal('Pling');
  });

});
