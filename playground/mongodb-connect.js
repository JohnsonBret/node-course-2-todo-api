
// MongoDB - local server running info - get into below directory
// D:\Program Files\MongoDB\Server\4.0\bin
// Run mongod command with the path below - port optional
// mongod --dbpath /data/<path> --port <port no> 
// D:\mongo-data

// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false

    // }, (err, result)=>{
    //     if(err){
    //         return console.log('Unable to insert TODO', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Daryl',
    //     age: '25',
    //     location: 'Your Moms House'
    // }, (err, result)=>{
    //     if(err){
    //         return console.log('Unable to insert User', err);
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    db.close();
});