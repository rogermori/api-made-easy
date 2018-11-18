const {inspect} = require('util');
const {coalesce} = require('objects-made-easy');

const _errorResponse = ({data, status, headers}) => {
  return (
    `
Status: ${inspect(coalesce(status, ''))}
Headers: ${inspect(coalesce(headers, ''))}
Data: ${inspect(coalesce(data, ''))} 
`);
};

const messageErrorHandler = (error, logger) => {
  if (!logger) logger = console.log;
  let response = '';
  if (error.response) {
    response = _errorResponse(error.response);
  } else if (error.request) {
    response= inspect(error.request);
  } else {
    response = error.message;
  }
  logger(response);
  return response;
};

module.exports = {
  messageErrorHandler,
};
