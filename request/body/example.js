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
const nameNGrades = bodyIntersection(['name', {grades: 'scores'}]);
const ageNdob = bodyIntersection(['age', 'dob']);
const address = bodyIntersection(['address']);
console.log(nameNGrades); // { name: 'Peter Parker', scores: [ 'a', 'c' ] }
console.log(ageNdob); // { age: null, dob: undefined }
console.log(address); // { address: undefined }

const bodyDifference = Body(difference(bodyRequest));
const bodyWithNoRoles = bodyDifference(['roles']);
console.log(bodyWithNoRoles);
/*
{   name: 'Peter Parker',
    grades: [ 'a', 'c' ],
    age: null,
    dob: undefined
}
*/
