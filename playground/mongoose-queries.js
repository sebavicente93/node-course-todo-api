const {ObjectId}= require('mongodb');

const {mongoose}= require('./../server/db/mongoose');
const {Todo}= require('./../server/models/todo');

var id= '58765388261bec2975a41db';

if (!ObjectId.isValid(id)){
  console.log('ID not valid');
}

// Todo.find({
//   _id: id //mongoose convert to an object
// }).then((todos) => {
//   console.log('Todos',todos);
// });
//
// Todo.findOne({
//   _id: id //mongoose convert to an object
// }).then((todo) => {
//   if (!todo){
//     return console.log('ID not found');
//   }
//   console.log('Todo',todo);
// });

Todo.findById(id).then((todo) => {
  if (!todo){
    return console.log('ID not found');
  }
  console.log('Todo By ID',todo);
}).catch((err) => console.log(err));
