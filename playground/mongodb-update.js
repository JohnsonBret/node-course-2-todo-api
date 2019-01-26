// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB server');

    // FIND ONE AND UPDATE
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5c3ae2715eefc5dc7a5fa997')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result)=>{
    //     console.log(result);
    // });

    // Example of updating multiple properties on the object e.g. name from Jen to Jen Howtoo and Age is incremented by one
    // To find all the operators for Mongodb look here
    // https://docs.mongodb.com/manual/reference/operator/update/inc/#up._S_inc
    db.collection('Users').findOneAndUpdate({
        name: "Jen"
    }, {
        $set: {
            name: "Jen Howtoo"
        },
        $inc:{
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result)=>{
        console.log(result);
    });


    //db.close();
 
});