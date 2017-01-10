// const MongoClient= require('mongodb').MongoClient;
const {MongoClient, ObjectId}= require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
  if (err){
    return console.log('Unnable to connect to mongodb server');
  }
  console.log('Connected to db');

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectId("587534897e63fd478cd85615")
  },{
    $set:{
      completed: true
    }
  },{
      returnOriginal: false

  }).then((result) => {
    console.log(result);
  });

  // db.close();
});
