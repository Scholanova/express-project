var express = require('express');
var router = express.Router();


var myLogger = function (req, res, next) {
  console.log(req.query.nb);
  if (req.query.nb > 100) {
    var err = {};
  }
  next(err);
};

router.use(myLogger);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('user/index', { title: 'userTitle', nbUsers: req.query.nb, nom: 'Michel1', poids: "12"  });
});

function errorNotification (err, req, res, next) {
  res.status(500).send('trop de people');
}

router.use(errorNotification)


module.exports = router;
