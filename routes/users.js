var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');

  if(req.query.number > 100){
    var err = "Out of range !"
  }
  next(err)
});

/* GET a number of users. */
router.get('/', function(req, res, next) {

  let users = []
  for (let index = 0; index < req.query.number; index++) {
    users.push({name: 'Big Jhoe', poids: "65"});
  }

  res.render('users',
  { 
    title: 'All Peoples',
    users
  });
});

router.use((req, res, next) => {
  next({
      status: 404,
      message: 'Not Found',
  });
});

router.use(function(err, req, res, next) {
  if (err.status === 404) {
    return res.status(404).render('404');
  }
  if (err.status === 500) {
    res.status(500).send(err);
  }
  // console.error(err.stack);
  // res.status(500).send(err);
});

module.exports = router;
