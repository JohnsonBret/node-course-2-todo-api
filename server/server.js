var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt:{
        type: Number
    }
});

// Create a Todo set only one field
// var newTodo = new Todo({
//     text: 'Cook Dinner'
// });

// newTodo.save().then((doc)=>{
//     console.log('Saved todo', doc)
// }, (e)=> {
//     console.log('Unable to save todo', e);
// });


// Create a Todo set all fields -> Notice none of these fields are 
// required in the mongoose model
// var new2Todo = new Todo({
//     text: "Clean Room",
//     completed: true,
//     completedAt: Date.now()
// });

// new2Todo.save().then((doc)=>{
//     console.log('Saved new2Todo', doc);
// }, (e)=>{
//     console.log('Unable to save todo', e);
// });