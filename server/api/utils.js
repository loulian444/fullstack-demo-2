const requireUser  = (req, res, next) =>{
  //if user is logged is pass them through
  if(req.userId){
    next();
  }
  else{
    res.status(401).send({message: "User unauthorized"});
  }
}

module.exports = {
  requireUser
}