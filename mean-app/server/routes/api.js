const express = require('express');
const router = express.Router();

//declare axios for access http request
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

//declare mongo for db access
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mean-dev');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("were connected!");
});

router.get('/',(req, res) =>{
  res.send('api works');
});

router.get('/posts',(req, res) =>{
  axios.get(`${API}/posts`)
  .then(posts => {
      res.status(200).json(posts.data);
  })
  .catch(error => {
      res.status(500).send(error);
  })
});

router.get('/todos',(req, res) =>{
var todo_collection = db.collection('todos');
todo_collection.find().toArray(function(err,todos){
  if(err){
    console.log(err);
    res.status(500).send(err);
  } else{
    console.log(todos);
    res.status(200).json(todos);
  }
})
});

router.post('/addtodo',(req, res) =>{
var todo_collection = db.collection('todos');

todo_collection.insert({"name":req.body.todotext},function(err,todo){
  if(err){
    console.log(err);
    res.status(500).send(err);
  } else{
    console.log(todo.ops);
    res.status(200).json(todo.ops);
  }
})

});

router.post('/edittodo',(req, res) =>{
var todo_collection = db.collection('todos');
console.log("request params",req.body);
console.log("request params",req.params);

todo_collection.update({"name":req.body.todooldtext},{"name":req.body.todonewtext},function(err,todo){
  if(err){
    console.log(err);
    res.status(500).send(err);
  } else{
    res.status(200).json(todo);
  }
})

});

router.post('/deletetodo',(req, res) =>{
var todo_collection = db.collection('todos');
console.log("request params",req.body);
console.log("request params",req.params);

todo_collection.remove({"name":req.body.todotext},function(err,todo){
  if(err){
    console.log(err);
    res.status(500).send(err);
  } else{
    console.log(todo);
    res.status(200).json(todo);
  }
})

});

module.exports = router;
