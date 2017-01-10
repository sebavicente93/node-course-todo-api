// const MongoClient= require('mongodb').MongoClient;
const {MongoClient, ObjectId}= require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
  if (err){
    return console.log('Unnable to connect to mongodb server');
  }
  console.log('Connected to db');

  // db.collection('Todos').deleteMany({"text" : "Eat lunch"}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').deleteOne({"text" : "Eat lunch"}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // db.close();
});
