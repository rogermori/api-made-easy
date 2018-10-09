const applicationJson = require('./constants/HeaderValues').applicationJson;
const NoU = require('objects-made-easy').NoU;
module.exports = (token, bearer=true) => {
  if (NoU(bearer)) bearer=true;
  let authorization;
  if (bearer) {
    authorization = `Bearer ${token}`;
  } else {
    authorization = token;
  }
  return (
    {
      'Content-Type': applicationJson(),
      'Accept': applicationJson(),
      'Authorization': `${authorization}`,
    }
  );
}
