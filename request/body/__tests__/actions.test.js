const K = require('../constants');
const intersection = require('../actions').intersection;
const difference = require('../actions').difference;

let body;
describe('Actions', () => {
  beforeAll(() => {
    body = {hello: 'world'};
  });

  it('Intersection has the correct type', () => {
    expect(intersection(null).type).toEqual(K.Intersection);
  });
  it('Intersection has the correct payload', ()=>{
    expect(intersection(body).payload).toEqual(body);
  });
  it('Difference has the correct type', () => {
    expect(difference(null).type).toEqual(K.Difference);
  });
  it('Difference has the correct payload', ()=>{
    expect(difference(body).payload).toEqual(body);
  });
});
