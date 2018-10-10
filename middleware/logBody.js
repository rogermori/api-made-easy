const logBody = (logger) => {
  return (req, res, next)=>{
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString(); // convert Buffer to string
    });
    req.on('end', () => {
      logger('Begin Body Request:');
      logger(body);
      logger('End Body Request');
      // res.end('ok');
    });
    next();
  };
};

module.exports=logBody;
