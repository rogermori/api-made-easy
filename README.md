# Api Utilities
A set of http code utilities commonly used in real life API development.
## Supported Language Features
This project uses JavaScript [ES6](https://github.com/lukehoban/es6features)

#### Run the tests
```
> npm run test 
```
### Util
This module provides the following functions:
- NoU: Check if a variable is null or undefined.
- isObject: Check if a variable is an object.
- isEmpty: Check if an object is logically empty. 
````
const isEmpty = require('./index').isEmpty;
const array = [
  {},
  {first: null, last: undefined},
  {retail: {}, wholesale: {}},
  ' ',
  [],
  1,
  false,
  new Set(),
  new Date(),
  {a: 1},
];

const nonEmptyArray = array.filter((obj)=>!isEmpty(obj));
console.log(nonEmptyArray); // [ 1, false, { a: 1 } ]
```` 
- emptyKeys: returns the key names of the logically empty values of an object.
````
const instance = {
  hello: 'world',
  address: {},
  phone: null,
  fax: undefined,
  role: '',
  rights: [],
};
console.log(emptyKeys(instance));
/*
    { success: true,
      keys: [ 'address', 'phone', 'fax', 'role', 'rights' ],
      hasEmptyKeys: true
    }
 */
````

### Body
#### Body intersection
Creates an new object with keys specified as an array of strings, and with values coming from a target object.
````
const Body = require('./index');
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
```` 
### Body Difference
Creates a new instance from an object with keys not included in a provided array of keys.
````
const Body = require('./index');
const difference = require('./actions').difference;

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
````  

## Response
### StandardResponse
StandardResponse wraps all http-responses into successful 200-http-responses. 
So, the caller-client decides the next step. Also, StandardResponse could be set for returning the original request. 

For example, upon receiving 400's or 500's http-response-codes, some frameworks will re send the request automatically again and again 
. With the StandardResponse the caller-client can change this behaviour.    

#### Usage
````
const StandardResponse = require('pathTo/StandardResponse');
.....
const happyResponse = new StandardResponse(
    true,
    'All good',
    {id: 1},
    {id:1, name: 'Peter Parker'}
).getResponse();
````
