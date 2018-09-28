const K = require('./constants');
const ErrorMessages = require('../../config').errorMessage;
const isObject = require('../../util').isObject;

module.exports = (action) => {
  if (!isObject(action.payload)) {
    throw new Error(ErrorMessages.body.invalidBodyRequest);
  }
  const body = Object.assign({}, action.payload);
  switch (action.type) {
    case K.Intersection:
      return ( (desiredKeys) => {
        if (!Array.isArray(desiredKeys)) {
          throw new Error(ErrorMessages.keys.invalidKeys);
        }
        return desiredKeys.reduce( (bag, key)=> {
          bag[key] = body[key];
          return bag;
        },
        {});
      });
    case K.Difference:
      return ( (desiredKeys) => {
        if (!Array.isArray(desiredKeys)) {
          throw new Error(ErrorMessages.keys.invalidKeys);
        }
        const desiredKeysSet = new Set(desiredKeys);
        return Object.keys(body).reduce( (bag, key)=> {
          if (!desiredKeysSet.has(key)) bag[key] = body[key];
          return bag;
        },
        {}
        );
      });
    default:
      return body;
  }
};

