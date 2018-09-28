const Body = require('./index');
const intersection = require('./actions').intersection;
const difference = require('./actions').difference;

const bodyRequest = {
  name: 'Peter Parker',
  grades: ['a', 'c'],
  age: null,
  dob: undefined,
  roles: [],
};

const bodyIntersection = Body(intersection(bodyRequest));
const nameNGrades = bodyIntersection(['name', 'grades']);
const ageNdob = bodyIntersection(['age', 'dob']);
const address = bodyIntersection(['address']);
console.log(nameNGrades); // { name: 'Peter Parker', grades: [ 'a', 'c' ] }
console.log(ageNdob); // { age: null, dob: undefined }
console.log(address); // { address: undefined }


