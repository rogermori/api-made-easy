const Body = require('../index');
const intersection = require('../actions').intersection;
const difference = require('../actions').difference;

let bodyRequest;
describe('body tests', ()=>{
  beforeAll(()=>{
    bodyRequest = {
      name: 'Peter Parker',
      grades: ['a', 'c'],
      age: null,
      dob: undefined,
      roles: [],
    };
  });
  it('Body(intersection(1)) throws an error', ()=>{
    expect(()=>Body(intersection(1))).toThrow();
  });
  it(`Body(intersection('1')) throws an error`, ()=>{
    expect(()=>Body(intersection('1'))).toThrow();
  });
  it(`Body(intersection([])) throws an error`, ()=>{
    expect(()=>Body(intersection([]))).not.toThrow();
  });
  it(`Body(intersection({})) do not throw an error`, ()=>{
    expect(()=>Body(intersection({}))).not.toThrow();
  });
  it(`Body(intersection({})(1)) do not throw an error`, ()=>{
    expect(()=>Body(intersection({}))(1)).toThrow();
  });
  it(`Body(difference({})(1)) do not throw an error`, ()=>{
    expect(()=>Body(difference({}))(1)).toThrow();
  });

  it(`Body(intersection(bodyRequest))(['name',{grades : "scores" }, 'address']) 
      to be { name: 'Peter Parker', scores: ['a','c'], address: undefined}`, ()=>{
    expect(Body(intersection(bodyRequest))(['name', {grades: 'scores'}, 'address'])).toEqual(
        {name: 'Peter Parker',
          scores: ['a', 'c'],
          address: undefined});
  });
  it(`Body(difference(bodyRequest))(['dob', 'age', 'grades','roles']) to be { name: 'Peter Parker', address: null}`, ()=>{
    expect(Body(difference(bodyRequest))(['dob', 'age', 'grades', 'roles'])).toEqual({name: 'Peter Parker'});
  });
});

/*


const bodyIntersection = Body(intersection(bodyRequest));
const nameNGrades = bodyIntersection(['name', 'grades']);
const ageNdob = bodyIntersection(['age', 'dob']);
const address = bodyIntersection(['address']);
console.log(nameNGrades); // { name: 'Peter Parker', grades: [ 'a', 'c' ] }
console.log(ageNdob); // { age: null, dob: undefined }
console.log(address); // { address: undefined }
*/
