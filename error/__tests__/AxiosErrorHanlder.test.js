const {messageErrorHandler} = require('../../index').AxiosErrorHandler;

let instanceOfError; let errorResponse; let errorRequest;

describe('Axios Message Error Handler', ()=>{
  beforeEach(()=>{
    instanceOfError = new Error('an error has ocurred');
    instanceOfError.config = 'locuas';
    errorResponse = {
      response: {
        status: 200,
        data: 'an error has ocurred',
      },
      config: "Loco",
    };
    errorRequest = {
      request: 'an error has ocurred',
    };
  });
  it(`instanceOfError is 'an error has ocurred'`, ()=>{
    expect(messageErrorHandler(instanceOfError)).toBe('an error has ocurred');
  });
  it(`errorResponse contains Status and Data`, ()=>{
    expect(messageErrorHandler(errorResponse)).toContain('Status:');
    expect(messageErrorHandler(errorResponse)).toContain('Data:');
  });
  it(`errorRequest is 'an error has ocurred'`, ()=>{
    expect(messageErrorHandler(errorRequest)).toBe(`'an error has ocurred'`);
  });
});
