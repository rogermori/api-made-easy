const Body = require('../index');
const ErrorMessages = require('../../../config').errorMessage;
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
  it('1 show throw an error', ()=>{
    expect(true);
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
