var db = require('./database')
var cors = require('cors')

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(cors())

app.get('/', function(req, res) {
  db.query('select * from utm', function(error, results, fields) {
    if (error) throw error;
    console.log(results);
  });

  res.send('Hello World!')
});


app.get('/utm', function(req, res) {
  db.query('select * from utm', function(error, results, fields) {
    if (error)
      throw error;

    res.json(results);
  });
});

app.get('/utm/edit/:id', function(req, res) {
  db.query('select * from utm where id =' + req.params.id, function(error, results, fields) {
    if (error) throw error;

    res.json(results);
  });
});

app.post('/utm/edit/:id', function(req, res) {

   console.log("node js");
    console.log("req ", req);
    console.log("res ", res);

  db.query(

   'UPDATE utm SET name = "' + req.body.name + '" WHERE id = "' + req.body.id + '"',

    function(error, results, fields) {
      if (error) throw error;
      res.json(results);
    });
});

// app.post('/utm/edit/:id', function(req, res) {

//    console.log("node js");
//     console.log("req ", req);
//     console.log("res ", res);
    
//   db.query(

//       'INSERT INTO utm (name, source, medium, term, content) VALUES(' +
//       '"' + req.body.campaignName + '",' +
//       '"' + req.body.campaignSource + '",' +
//       '"' + req.body.campaignMedium + '",' +
//       '"' + req.body.campaignTerm + '",' +
//       '"' + req.body.campaignContent + '"' +
//     ');',
//     function(error, results, fields) {
//       if (error) throw error;
//       res.json(results);
//     });
// });



app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
})




// POST /utm -> INSERT
// GET /utm -> SELECT ALL
// GET /utm/id -> SELECT

// REST
