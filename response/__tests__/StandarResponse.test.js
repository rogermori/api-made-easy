const StandardResponse = require('../../index').StandardResponse;

let happyResponse; let debugResponse;

describe('StandardResponse', ()=>{
  beforeEach(()=>{
    happyResponse = new StandardResponse(
        true,
        'All good',
        {id: 1},
        {id: 1, name: 'Peter Parker'}
    ).getResponse();
    debugResponse = new StandardResponse(
        true,
        'All good',
        {id: 1},
        {id: 1, name: 'Peter Parker'},
        true
    ).getResponse();
    debugResponse = new StandardResponse(
        true,
        'All good',
        null,
        null,
        true
    ).getResponse();
  });
  it('instance contains 4 keys', ()=>{
    expect(Object.keys(happyResponse).length).toBe(4);
  });
  it('request must be blank in non debug mode', ()=>{
    expect(happyResponse.request.length).toBe(0);
  });
  it('request must not be blank in debug mode', ()=>{
    expect(debugResponse.request.length).not.toBe(0);
  });
});

