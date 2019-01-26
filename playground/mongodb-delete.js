// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB server');


    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) =>{
    //     console.log(result);
    // });

    // deleteMany
    // db.collection('Users').deleteMany({name: 'Andrew'}).then((result) =>{
    //     console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) =>{
    //     console.log(result);
    // });

    //deleteOne USERS - ID
    // db.collection('Users').deleteOne({_id: new ObjectID("5c4ca4c544f375d417b51861")}).then((result) =>{
    //     console.log(result);
    // });

    //findOneAndDelete - returns the one record it is deleting
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) =>{
    //     console.log(result);
    // });


    // db.collection('Users').findOneAndDelete({name: 'Jen'}).then((result) =>{
    //     console.log(result);
    // });

    // db.collection('Users').findOneAndDelete({_id: new ObjectID('5c3ae4bc5eefc5dc7a5faa93')}).then((result) =>{
    //     console.log(result);
    // });


    //db.close();
 
});