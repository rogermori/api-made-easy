# Api Utilities
A set of http request-and-response utilities commonly used in real life API development.
## Supported Language Features
This project uses JavaScript [ES6](https://github.com/lukehoban/es6features)

#### Run the tests
```
> npm run test 
```


## Http Response

### Util
The utility Util module provides the following functionallities:
- Check if a variable is null or undefined.
- Check if an object is logically empty. The following objects are considered logically empty. 
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
- Obtain the key names of the logically empty values of an object. For example:
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

### StandardResponse
StandardResponse wraps all http-responses into successful 200-http-responses. 
So, the caller-client decides the next step. 

For example, upon receiving 400's or 500's http-response-codes, some frameworks will re send the request automatically again and again 
. With the StandardResponse the caller-client can change this behaviour.    

StandardResponse would return the original requests, which is very useful in debug mode. 

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
