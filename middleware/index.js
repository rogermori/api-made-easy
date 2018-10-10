const logBody = require('./logBody');

const ping = ()=>(req, res, next)=> {
  res.json({hi: 'I am alive'});
  next();
};

const echo = ()=>(req, res, next)=>{
  res.json(req.body);
  next();
};


module.exports = {
  logBody,
  ping,
  echo,
};
