const util = require('util');

class StandardResponse {
    constructor(success, message, request={}, data={}, debug=false) {
        this.response = {};
        this.response.success = success;
        this.response.httpcode = success ? 200 : success;
        this.response.message = message;
        this.response.request = request;
        this.response.data = data;
        this.response.debug = debug;
    }
    getResponse() {
        const myResponse = Object.assign({},this.response);
        if (this.response.debug) {
            myResponse.request = util.inspect(this.response.request, {depth: 20, breakLength: Infinity});
        } else {
            myResponse.request = '';
        }
        return myResponse;
    }
}

module.exports = StandardResponse;

