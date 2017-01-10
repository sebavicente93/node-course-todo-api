// const MongoClient= require('mongodb').MongoClient;
const {MongoClient, ObjectId}= require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
  if (err){
    return console.log('Unnable to connect to mongodb server');
  }
  console.log('Connected to db');

  // db.collection('Todos').find({_id: new ObjectId('587528207e63fd478cd854be')}).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log((JSON.stringify(docs,undefined,2)));
  // }, (err) => {
  //   console.log('Unnable to fetch docs',err);
  // });

  db.collection('Todos').find().count().then((count) => {
    console.log('Todos count',count);
  }, (err) => {
    console.log('Unnable to fetch docs',err);
  });

  // db.close();
});
