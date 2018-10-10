const logBody = require('./logBody');

const ping = (msg)=>(req, res, next)=> {
  res.json(msg);
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
