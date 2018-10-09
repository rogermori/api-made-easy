const applicationJson = require('../constants/HeaderValues').applicationJson;
const JWt = require('../../index').Headers.JWt;

let jwtHeaderOne; let jwtHeaderTwo;
describe('JWt', ()=>{
  beforeEach(()=>{
    jwtHeaderOne = {
      'Content-Type': applicationJson(),
      'Accept': applicationJson(),
      'Authorization': 'Bearer tk12345',
    };
    jwtHeaderTwo = {
      'Content-Type': applicationJson(),
      'Accept': applicationJson(),
      'Authorization': 'tk12345',
    };
  });
  it('returns header with bearer parameter missing null or undefined', ()=> {
    expect(JWt('tk12345')).toEqual(jwtHeaderOne);
    expect(JWt('tk12345', null)).toEqual(jwtHeaderOne);
    expect(JWt('tk12345', undefined)).toEqual(jwtHeaderOne);
  });
  it('returns header with not Bearer prefix', ()=> {
    expect(JWt('tk12345',false)).toEqual(jwtHeaderTwo);
  });
});
