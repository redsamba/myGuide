var express = require('express');
var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3000);

app.get('/',function(req,res){

  res.render('guideMain.handlebars');

});

app.get('/Page1',function(req,res){

  res.render('guideGet.handlebars');

});

app.get('/Page2',function(req,res){

  res.render('guideMeta.handlebars');

});

app.get('/Page3',function(req,res){

  res.render('guideID.handlebars');

});

app.get('/Page4',function(req,res){

  res.render('guideSearch.handlebars');

});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
