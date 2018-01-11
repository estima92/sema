var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/services', function(req, res, next) {
    res.render('services', { title: 'Услуги по консалтингу' });
});
router.get('/certificate', function(req, res, next) {
    res.render('certificate', { title: 'Сертификат' });
});
router.get('/history', function(req, res, next) {
    res.render('history', { title: 'История ХАССП' });
});

module.exports = router;
