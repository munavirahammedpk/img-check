var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/check', function(req, res, next) {
  res.render('add_img');
});

router.post('/add-products', (req, res)=> {
  //console.log(req.body);
  let image = req.files.image
  //console.log(image.name);
    image.mv('./public/images/'+image.name+'.jpg', (err, done) => {
      if (!err) {
        res.render('view_img',{imageName:image.name})
      } else {
        console.log(err);
      }
    })
});


module.exports = router;
