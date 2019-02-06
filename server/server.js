var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

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



// var new2Todo = new Todo({
//     text: 'Edit this Video'
// });

// new2Todo.save().then((doc)=>{
//     console.log('Saved new2Todo', doc);
// }, (e)=>{
//     console.log('Unable to save todo', e);
// });

var User = mongoose.model('User', {
    email:{
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
})

var newUser = new User({
    email: 'stevejobs@gmail.com'
});

newUser.save().then((doc)=>{
    console.log('Saved User', doc);
}, (e)=>{
    console.log('Unable to save User', e);

});