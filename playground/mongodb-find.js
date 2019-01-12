// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB server');

    // Find by Object ID

    // db.collection('Todos').find({
    //     _id: new ObjectID('5c3a3aceeca542c22f8dad0b')
    // }).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err)=>{
    //     console.log('Unable to fetch todos', err);
    // });

    // Find by Username in the Users collection!

    db.collection('Users').find({
        name: 'Daryl'
    }).toArray().then((docs)=>{
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err)=>{
        console.log('Unable to fetch todos', err);
    });

    // Find by Count of users with age 25 in the Users collection!
    db.collection('Users').find({
        age: '25'
    }).count().then((count)=>{
        console.log(`Todos count: ${count}`);
       
    }, (err)=>{
        console.log('Unable to fetch todos', err);
    });


    // db.collection('Todos').find().count().then((count)=>{
    //     console.log(`Todos count: ${count}`);
       
    // }, (err)=>{
    //     console.log('Unable to fetch todos', err);
    // });

    //db.close();
});