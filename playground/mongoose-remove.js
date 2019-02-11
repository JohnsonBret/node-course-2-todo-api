const {ObjectID} = require('mongodb');


const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Remove all the records from the database
// Todo.remove({}).then((result) => {
//     console.log(result);
// });


//Todo.findByIdAndRemove - Returns the object you delete
// Todo.findByIdAndRemove('5c61ac23afce3db2b8ab4731').then((todo) =>{
//     console.log(todo);
// });

//Todo.findOneAndRemove
// Todo.findOneAndRemove({_id: '5c61ac23afce3db2b8ab4731'}).then((todo) => {
//     console.log(todo);
// });
