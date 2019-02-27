var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt:{
        type: Number,
        default: null
    },
    _creator:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});

module.exports = {
    Todo: Todo
}

//  CONTAINS CODE SHOWING HOW TO SAVE DIFFERENT MODELS TO MONGODB

// Create a Todo set only one field
// var newTodo = new Todo({
//     text: 'Cook Dinner'
// });

// newTodo.save().then((doc)=>{
//     console.log('Saved todo', doc)
// }, (e)=> {
//     console.log('Unable to save todo', e);
// });



// var new2Todo = new Todo({
//     text: 'Edit this Video'
// });

// new2Todo.save().then((doc)=>{
//     console.log('Saved new2Todo', doc);
// }, (e)=>{
//     console.log('Unable to save todo', e);
// });