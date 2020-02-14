var express = require('express');
var router = express.Router();
var calculService = require('../services/calculService');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('calcul/calculForm', { title: 'calcul' });
});

router.post('/result', function(request, res, response ) {
    var result = calculService.calcul(request.body.var1, request.body.var2)
    result.then(([result, var1, var2]) => {
        res.render('calcul/result', { var1: var1, var2: var2, result: result, title: "io" })
      }).catch(function(e) {
        res.render('calcul/notPair', { title: "C'est pas pair" })
      });
});

module.exports = router;
