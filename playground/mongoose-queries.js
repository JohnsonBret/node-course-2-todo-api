const {ObjectID} = require('mongodb');


const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5c608f56d6f8f1e005e3f6a811'; 

// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo by Id', todo);
// }).catch((e) =>{
//     console.log(e);
// });

var userId = '5c5a8d1f1c5eee2017ed8e08';

User.findById(userId).then((user)=>{
    if(!user){
        return console.log(`User with id ${userId} not found`);
    }
    console.log('User by Id', userId);
}).catch((e) =>{
    console.log(e);
});