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
GenericResponse turns http responses into 200-successful ones so that the caller-client decides the next step.

For example, upon receiving 400's or 500's responses codes, some frameworks will re send the request automatically again.

Including the original requests upon failure helps debugging in dev mode.

#### Prerequisites
- To return a copy of the original request:
````
process.env.DEBUG_RESPONSE='true'
```` 
