const util = require('../index');

describe('NoU tests', ()=>{
  it('null is empty', ()=>{
    expect(util.NoU(null)).toBe(true);
  });
  it('null is empty', ()=>{
    expect(util.NoU(null)).toBe(true);
  });
  it('0 is not is empty', ()=>{
    expect(util.NoU(0)).toBe(false);
  });
  it(`'' is not is empty`, ()=>{
    expect(util.NoU('')).toBe(false);
  });
});

let date; let nestedEmpty, nestedNotEmpty;

describe('isEmpty Tests', ()=>{
  beforeAll(() => {
    date = new Date();
    nestedEmpty = {
      one: null,
      two: undefined,
      three: {
        ab: null,
        bc: undefined,
        a1: '    ',
        cd: {
          a1: null,
          b1: '',
          k1: {
            k11: [],
          },
        },
        de: [],
      },
    };
    nestedNotEmpty = Object.assign({},nestedEmpty, { active: false});
  });
  it(`' ' is empty`, ()=>{
    expect(util.isEmpty(' ')).toBe(true);
  });
    it(`[] is empty`, ()=>{
        expect(util.isEmpty([])).toBe(true);
    });
  it(`0 is not empty`, ()=>{
    expect(util.isEmpty(0)).toBe(false);
  });
  it(`{hello: 'world', country : null} is not empty`, ()=>{
    expect(util.isEmpty({hello: 'world', country: null})).toBe(false);
  });
  it(`{hello: 'world', country : null} is not empty`, ()=>{
    expect(util.isEmpty({hello: 'world', country: null})).toBe(false);
  });
  it(`{hello: 'world', country : undefined} is not empty`, ()=>{
    expect(util.isEmpty({hello: 'world', country: undefined})).toBe(false);
  });
  it(`any set is empty`, ()=>{
    expect(util.isEmpty(new Set([1, 2]))).toBe(true);
  });
  it(`any date is not empty`, ()=>{
    expect(util.isEmpty(date)).toBe(true);
  });
    it(`nestedEmpty is empty`, ()=>{
        expect(util.isEmpty(nestedEmpty)).toBe(true);
    });
    it(`nestedNotEmpty is not empty`, ()=>{
        expect(util.isEmpty(nestedNotEmpty)).toBe(false);
    });
});

