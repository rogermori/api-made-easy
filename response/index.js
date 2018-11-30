const {coalesce} = require('objects-made-easy');
const StandardResponse = require('./StandardResponse');

const createErrorResponse = (errorMessage, contextInfo) => {
  return new StandardResponse(false, errorMessage, contextInfo, {}, true).getResponse();
};

const createSuccessResponse = (responseInfo, contextInfo, successMessage) =>{
  return new StandardResponse(true, coalesce(successMessage, 'All good.'), contextInfo, responseInfo, true).getResponse();
};

module.exports= {
  StandardResponse,
  createSuccessResponse,
  createErrorResponse,
};
