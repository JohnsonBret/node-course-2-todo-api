const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

//================================
// bcrypt
//================================

// var password = '123abc!';

// Salt generation and password hash

// bcrypt.genSalt(10, (err, salt)=>{
//     bcrypt.hash(password, salt, (err, hash)=>{
//         console.log(hash);
//     })
// });

// Compare hashed and salted password with plain text

// var hashedPassword = '$2a$10$/aS4tPjy7g2JIi66Eqgmm.Pt3qmTM7YM2AOtcflZ6RAqVT.F2xLT6';

// bcrypt.compare(password, hashedPassword, (err, res)=>{
//     console.log(res);
// });

//================================
// Json Web Token - JWT
//================================

// var data = {
//     id: 10
// };

// var token = jwt.sign(data, '123abc');
// console.log(token);

// var decoded = jwt.verify(token, '123abc');
// console.log('decoded', decoded);

//================================
//Hashing and Salt tutorial below
//================================

// var message = 'I am user number 3';
// var hash = SHA256(message).toString();

// console.log(`Message : ${message}`);
// console.log(`Hash : ${hash}`);

// 'somesecret' is our salt - the recepient never sees this unhashed

// var data = {
//     id: 4
// };
// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }


// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if(resultHash === token.hash){
//     console.log('Data was not changed');
// }
// else{
//     console.log('Data was changed do not trust');
// }