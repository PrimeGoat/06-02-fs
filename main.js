/*
MAKE FOLDER
- So to make a folder we have 2 choices.
  `fs.mkdirSync('auth')` which needs no callback or
  `fs.mkdir('auth',()=>{console.log('folder created')})`


REMOVE FOLDER
- same for remove folder
  `fs.rmdirSync('auth')` no callback or
  `fs.rmdir('auth',()=>{console.log('folder deleted')})`


YOU TRY
I want you to erase or comment out your code.
Create a new node environment
- Using fs module:
- create a directory called content using fs and it should log 'content folder created'
- create a file using fs called randomText.txt that lives outside the content directory - randomText.txt should have just a short string of any data you want to put in it
- when you create this file you should also log 'randomtext.txt created'
- write the randomText.txt data to a new file called verbage.txt inside the content folder and log 'verbage.txt created'
- Now delete the content directory by adding a setTimeout of 10 seconds to the code and removing the directory as well as console logging 'content folder deleted'
*/

const fs = require('fs');

function randStr(length) {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

if(!fs.existsSync('./content')) fs.mkdirSync('content');
console.log('content folder created');

fs.writeFileSync('randomtext.txt', randStr(64));
console.log('randomtext.txt created');

fs.writeFileSync('content/verbage.txt', fs.readFileSync('randomtext.txt'));
console.log('verbage.txt created');

setTimeout(() => {
    fs.rmdirSync("./content", {
        recursive: true
    });
    console.log("content folder deleted");
}, 10000);
