const {ObjectId}= require('mongodb');

const {mongoose}= require('./../server/db/mongoose');
const {Todo}= require('./../server/models/todo');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findByIdAndRemove('587ab7043e065aa1ce62c8a5').then((todo) => {
  console.log(todo);
});
