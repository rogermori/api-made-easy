const k = require('./constants');

const intersection = (body) => (
  {
    type: k.Intersection,
    payload: body,
  }
);

const difference = (body) => (
  {
    type: k.Difference,
    payload: body,
  }
);

module.exports.intersection = intersection;
module.exports.difference = difference;
