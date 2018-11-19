const logBody = (logger) => {
  return (req, res, next)=>{
    let body = ''; let {protocol, originalUrl} = req;
    logger(`${protocol}://${req.get('host')}${originalUrl}`);
    if (!(req.method === 'POST' || req.method === 'PUT')) next();
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
