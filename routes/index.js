var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  global.db.findAll((e, docs) => {
    if (e) { return console.log(e); }
    res.render('index', { docs });
  })
});

router.post('/new', function (req, res, next) {
  const nome = req.body.nome;
  const idade = parseInt(req.body.idade);
  const uf = req.body.uf;
  global.db.insert({ nome, idade, uf }, (err, result) => {
    if (err) { return console.log(err); }
    res.redirect('/');
  })
});

router.get('/delete/:id', function (req, res) {
  var id = req.params.id;
  global.db.deleteOne(id, (e, r) => {
    if (e) { return console.log(e); }
    res.redirect('/');
  });
});

module.exports = router;