// const MongoClient= require('mongodb').MongoClient;
const {MongoClient, ObjectId}= require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
  if (err){
    return console.log('Unnable to connect to mongodb server');
  }
  console.log('Connected to db');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // },(err,result) => {
  //   if (err){
  //     return console.log('Unnable to insert todo',err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

  db.collection('Users').insertOne({
    name: 'Seba',
    age: 23,
    location: 'Bahia Blanca'
  },(err,result) => {
    if (err){
     return console.log('Unnable to insert todo',err);
    }
    console.log(JSON.stringify(result.ops,undefined,2));
  });

  db.close();
});
