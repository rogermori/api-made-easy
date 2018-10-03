# Api Utilities
Node.js http-utility functions commonly used in  API development.
## Supported Language Features
This project uses JavaScript [ES6](https://github.com/lukehoban/es6features)

#### Install
```
> npm install --save api-made-easy 
```
#### Run tests
```
> npm run test 
```
#### Run example
```
> node request/body/example
```
### Usage

#### Body intersection
Creates a new object from a given object by inclusion.
````
const Body = require('api-made-easy');
const difference = require('api-made-easy').intersection;

const bodyRequest = {
  name: 'Peter Parker',
  grades: ['a', 'c'],
  age: null,
  dob: undefined,
  roles: [],
};

const bodyIntersection = Body(intersection(bodyRequest));
const nameNGrades = bodyIntersection(['name', {grades: 'scores']);
const ageNdob = bodyIntersection(['age', 'dob']);
const address = bodyIntersection(['address']);
console.log(nameNGrades); // { name: 'Peter Parker', scores: [ 'a', 'c' ] }
console.log(ageNdob); // { age: null, dob: undefined }
console.log(address); // { address: undefined }
```` 
### Body Difference
Creates a new object from a given object by exclusion.
````
const Body = require('api-made-easy').Body;
const difference = require('api-made-easy').difference;

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
### StandardResponse
StandardResponse wraps all http-responses into successful 200-http-responses. 
So, the caller-client decides the next step. Also, StandardResponse could return the original request. 

Upon receiving 400's or 500's http-response-codes, some frameworks will re send the request automatically again and again 
. With the StandardResponse the caller-client can modify this behaviour.    

````
const StandardResponse = require('api-made-easy').StandardResponse;

const happyResponse = new StandardResponse(
    true,
    'All good',
    {id: 1},
    {id:1, name: 'Peter Parker'}
).getResponse();
````
