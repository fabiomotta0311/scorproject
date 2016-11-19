var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist','actionlist','kpilist']);
var bodyParser = require('body-parser');


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

// OBJETO CONTACT ----------------------
app.get('/contactlist', function (req, res) {
  console.log('I received a GET request');

  db.contactlist.find(function (err, docs) {
    console.log(docs);
    res.json(docs);
  });
});

app.post('/contactlist', function (req, res) {
  console.log(req.body);
  db.contactlist.insert(req.body, function(err, doc) {
    res.json(doc);
  });
});

app.delete('/contactlist/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  db.contactlist.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

app.get('/contactlist/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  db.contactlist.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

app.put('/contactlist/:id', function (req, res) {
  var id = req.params.id;
  console.log(req.body.name);
  db.contactlist.findAndModify({
    query: {_id: mongojs.ObjectId(id)},
    update: {$set: {name: req.body.name, email: req.body.email, number: req.body.number}},
    new: true}, function (err, doc) {
      res.json(doc);
    }
  );
});

// OBJETO ACTION------------------------

app.get('/actionlist', function (req, res) {
  console.log('I received a GET request');

  db.actionlist.find(function (err, docs) {
    console.log(docs);
    res.json(docs);
  });
});

app.post('/actionlist', function (req, res) {
  console.log(req.body);
  db.actionlist.insert(req.body, function(err, doc) {
    res.json(doc);
  });
});

app.delete('/actionlist/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  db.actionlist.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

app.get('/actionlist/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  db.actionlist.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

app.put('/actionlist/:id', function (req, res) {
  var id = req.params.id;
  console.log(req.body.name);
  db.actionlist.findAndModify({
    query: {_id: mongojs.ObjectId(id)},
    update: {$set: {name: req.body.name, email: req.body.email, number: req.body.number}},
    new: true}, function (err, doc) {
      res.json(doc);
    }
  );
});

// OBJETO KPI ----------------------
app.get('/kpilist', function (req, res) {
  console.log('I received a GET request');

  db.kpilist.find(function (err, docs) {
    console.log(docs);
    res.json(docs);
  });
});

app.post('/kpilist', function (req, res) {
  console.log(req.body);
  db.kpilist.insert(req.body, function(err, doc) {
    res.json(doc);
  });
});
// inserindo tarefa
app.post('/kpilist/additem', function (req, res) {
  console.log(req.body);
  db.kpilist.insert(req.body, function(err, doc) {
    res.json(doc);
  });
});

app.delete('/kpilist/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  db.kpilist.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

app.get('/kpilist/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  db.kpilist.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

app.put('/kpilist/:id', function (req, res) {
  var id = req.params.id;
  console.log(req.body.name);
  db.kpilist.findAndModify({
    query: { _id: mongojs.ObjectId(id)},
    update: {$set: {
      
      name: req.body.name, 
      owner: req.body.owner, 
      code: req.body.code, 

      g1_titulo: req.body.g1_titulo, 
      g1_subtitulo: req.body.g1_subtitulo, 
      g1_rotulo_x: req.body.g1_rotulo_x,
      g1_rotulo_y: req.body.g1_rotulo_y,

      g2_titulo: req.body.g2_titulo, 
      g2_subtitulo: req.body.g2_subtitulo, 
      g2_rotulo_x: req.body.g2_rotulo_x,
      g2_rotulo_y: req.body.g2_rotulo_y,
    
      g3_titulo: req.body.g3_titulo, 
      g3_subtitulo: req.body.g3_subtitulo, 
      g3_rotulo_x: req.body.g3_rotulo_x,
      g3_rotulo_y: req.body.g3_rotulo_y,
     
    }},
    new: true}, function (err, doc) {
      res.json(doc);
    }
  );
});

db.kpilist.findAndModify(
    { _id: data.id }, "photos.name": "photo2" } }, 
    { $set: { "photos.$.data": "yourdata" } }
)

app.listen(3000);
console.log("Server running on port 3000");

//      Person.update({'items.id': 2}, {'$set': {
//          'items.$.name': 'updated item2',
//          'items.$.value': 'two updated'
//      }}, function(err) { ...