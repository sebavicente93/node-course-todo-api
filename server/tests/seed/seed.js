const {ObjectId}= require('mongodb');
const jwt= require('jsonwebtoken');

const {Todo}= require('./../../models/todo');
const {User}= require('./../../models/user');

const userOneId= new ObjectId();
const userTwoId= new ObjectId();
const users= [{
  _id: userOneId,
  email: 'svicente_93@hotmail.com',
  password: 'userOnePass',
  tokens: [{
    access: 'auth',
    token: jwt.sign({_id: userOneId, access:'auth'},process.env.JWT_SECRET).toString()
  }]
},{
  _id: userTwoId,
  email: 'sebavicente93@gmail.com',
  password: 'userTwoPass',
  tokens: [{
    access: 'auth',
    token: jwt.sign({_id: userTwoId, access:'auth'},process.env.JWT_SECRET).toString()
  }]
}];

const todos= [{
  _id: new ObjectId(),
  text: 'First test todo',
  _creator: userOneId
},{
  _id: new ObjectId(),
  text: 'Second test todo',
  completed: true,
  completedAt: 7777,
  _creator: userTwoId
}];

const populateTodos= (done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
};

const populateUsers= (done) => {
  User.remove({}).then(() => {
    var userOne = new User(users[0]).save();
    var userTwo = new User(users[1]).save();

    //Wait for save actions to complete
    Promise.all([userOne,userTwo]).then(() => {
      done();
    })
  });
}

module.exports= {
  todos,
  populateTodos,
  users,
  populateUsers
}
