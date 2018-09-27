const K = require('./constants');
const ErrorMessages = require('../../config').errorMessage;
const isEmptyArray = require('../../util').isEmptyArray;
const isEmptyObject = require('../../util').isEmptyObject;

module.exports = (action) => {
  const body = Object.assign({}, action.payload);
  if (isEmptyObject(body)) {
    throw new Error(ErrorMessages.body.invalidBodyRequest);
  }
  switch (action.type) {
    case K.Intersection:
      return ( (desiredKeys) => {
        if (isEmptyArray(desiredKeys)) {
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
        if (isEmptyArray(desiredKeys)) {
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

