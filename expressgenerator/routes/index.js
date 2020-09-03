var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const values=["abin","ameer","shah","hoi"]
  const person={name:"abin",comments:{comment:"kollam pwoli",date:"07-08-2020"}}
  const per={name:"abinsh",admin:false}
  res.render('index', { title: 'Express',values,person ,per});
});

module.exports = router;
