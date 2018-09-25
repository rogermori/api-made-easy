# Api Utilities
A set of http request-and-response utilities commonly used in real life API development.
## Supported Language Features
This project uses JavaScript [ES6](https://github.com/lukehoban/es6features)

#### Run the tests
```
> npm run test 
```


## Http Response

### StandardResponse
StandardResponse wraps all http-responses into successful http-responses. 
So, the caller-client decides the next step.

For example, upon receiving 400's or 500's http-response-codes, some frameworks will re send the request automatically again, 
or would timeout. StandardResponse would change this behavior.    

Including the original requests is help full in debug mode.

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
