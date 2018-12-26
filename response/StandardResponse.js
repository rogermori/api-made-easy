const util = require('util');

class StandardResponse {
  constructor(success, message, request={}, data={}, debug=false) {
    this.response = {
      success: success || false,
      message: message || '',
      request: request || {},
      data: data || {},
    };
    this.debug = debug;
  }
  getResponse() {
    const myResponse = Object.assign({}, this.response);
    if (this.debug) {
      myResponse.request = util.inspect(this.response.request, {depth: 5, breakLength: Infinity});
    } else {
      myResponse.request = '';
    }
    return myResponse;
  }
}

module.exports = StandardResponse;

