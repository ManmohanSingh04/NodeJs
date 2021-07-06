// Q-1 What is REPL? What purpose it is used for?
//Ans The REPL feature of NodeJs is very usefull in experimenting with Node.js code and to debug javascript codes.(NodeJs ke code ke sath experimnt karne ke liye and javscript code ko debug karne ke liye) .(writ node in terminal REPL is open).

// REPL (READ, EVAL, PRINT, LOOP) is a computer environment similar to Shell (Unix/Linux) and command prompt. Node comes with the REPL environment when it is installed. System interacts with the user through outputs of commands/expressions used. It is useful in writing and debugging the codes. The work of REPL can be understood from its full form:

// Read: It reads the inputs from users and parses it into JavaScript data structure. It is then stored to memory.
// Eval: The parsed JavaScript data structure is evaluated for the results.
// Print: The result is printed after the evaluatiofs n.
// Loop: Loops the input command. To come out of NODE REPL, press ctrl+c twice

//==== # What we can do with REPL.
// 1: Js Expression.
// 2: Use varible.
// 3: Multiline code.
// 4: use _(underscore) to get the last result.
// 5: we can use editior mode.

// NOTE:- double tap on TAB key, it return all properties and method in Nodejs.
//       fs:- it return all method in nodeJs

// Q-2 What is core Module?
//Ans Module nodeJs main javascript LIBRARY hoti hai, or set of function hote hai jo ham apane application main use kar sakte hain.(Module is just a file or folder that contains code).

// Example:- const http=require("http"); // In this we create http module through require methor and pass the http varible.

// A module is a javascript LIBRARY in nodeJs and a set of function which we can use in our application.
//Node.js has a set of built-in modules which you can use without any further installation.

// ====#File System Module.
// The Node.js file system module allows you to work with the file system on your computer.(File System hame folder main file ko create, update, read, delete and rename karne deta hai ya ham kar sakte hain)
// To include the File System module, use the require() method:( require() method ki help se ham file system ko use kar sate hain. or usaki functionality ko use kar sate hain)

//1. Create file
// 1.1:- writeFileSync("filename","User define data");
// const fs=require("fs");
// fs.writeFileSync("AMitSingh.txt"," My name is manohan Rathod and i am creating file");// agar ye file exist karti hai to data add karwa do angar nahi to file ko create karo or usame data ko add kar do. 

// 1.2:- appendFileSync("filename","User define data"); // jiss file main ham data ko add karna cahate hai ussme  

// const fs=require("fs");
// fs.appendFileSync("text.txt","How are you guys");

// 1.3:- readFileSync(); 
//   const fs=require("fs");
//  const buffer_data= fs.readFileSync("text.txt");
//  org_data=buffer_data.toString(); //org_data() original data.
//  console.log(org_data);

 // # buffer_data
//   buffer_data is an additional data type in NodeJ  and it is mainly use to store binary data

// 2. Rename file
   // fs.rename("old file name","new file name")// It is used to change the file name

//   const fs=require("fs");
//   fs.renameSync("AMitSingh.txt","UTK.txt");   

// ===============#Create Server

// Web Server:- To access web pages of any web application, you need a web server. The web server will handel all the http requests for the web application.(Kisis bhi website ke pages ko access karne ke liye hame web server chahiye and jitani bhi web appliatin ki http request ham karte hai usko handel karta hai).

// Example:-if we use ASP.NET then we have IIS web server, Apache is a web server for PHP or java web application. 

// NodeJs provides capabilities  to create youe own web server which will handel HTTP requests asynchronously. you can also use IIS or Apache  to run NodeJs web application it's your choice.

// This is code for create Web server
// const http=require("http"); 

// http.createServer(function(req,res){

//    res.writeHead(200,{"content-Type":"text/plain"});
//    res.write("My name is Mannu, Hello NodeJs "); // it will write the content.
//    res.end();// it will end the response.(The res.end() function is used to end the response process.)

// }).listen(9000);

// NOTE:- 1:- http.createServer() method includes request and response parameters which is supplied by Node.Js.
//        2:- req:- Client browser ke through server ko request send karta hai.(The request object can be used to get information about the current HTTP request. Eg:- url)
//        3:- res:- Jo bhi request client ke through kari jati hai wo data ko server se fetch karke user ko ya browser ko responce karta hai.(The response object can be used to send a response for a current HTTP request.)
//        4:-writeHead():-  The first argument of the res.writeHead() method is the status code, 200 means that all is OK, the second argument is an object containing the response headers.() 
//        5:- status code means 200(200 mean successful response):- Jab request kuch status ke sath return hogi either successful or fail tab wo status ke sath response karegi  
      //  6:- object:- Content-type:-text/plain:- content-type hame bata hai kiss type ka data ham return or response kar rahe hai after request. upar wale example main ham plain type ka data return kar rahe hain. like html.
      //  7:- HTTP Header(res.writeHead(200,{"content-Type":"text/html"})):- Agar ham chahte hai server hame response main kuch dena cahata hai to hame HTML format main dede to hame HTTP header ke content-Type main HTML format likh denge.(Example:- res.writeHead(200,{"content-Type":"text/html"});). If the response from the HTTP server is supposed to be displayed as HTML, you should include an HTTP header with the correct content type. 

// How to add JSON format while creating server?

// const http=require("http");
// http.createServer(function(req,res){

//    res.writeHead(200,{'content-Type':'application/json'});
//    res.write(JSON.stringify({
//       name:'Manmohan',
//       lname:'Singh'
//    }));
//    res.end();

// }).listen(8000);

//======# Create and Export our own module
// With the help of export we can access another module.

// NOTE:- 1:- Jiss module ko export karwa rahe hain ussmain syntax:- module.exports=functionName; like:- module.exports=operator;
//        2:- Jiss main import karwa rahe hain usame require() method ka use kar karke variavle main pass kar denge or call kar denge example:- const variableName=require("./modulename") like:-const hello=require("./operator");


// Example:- In this example i print Date using export module, code is written in operator.js module.

// const http=require("http");
// var hello=require('./operator');

// http.createServer(function(req,res){

//    res.writeHead(200,{"content-Type":"text/plain"});
//    res.write(`Today is date ${hello.helloD()}`); 
//    res.end();

// }).listen(4000);


// 2nd class start here.

// #CRUD(Create,Read,Update,Delete)

// Create folder
// Syntax:-  fs.mkdirSync("FolderName")

// const fs=require('fs');
// fs.mkdirSync("Interview-1");

// Create File
// const fs=require('fs');
// fs.writeFileSync("./Hello.txt","Hello I am hello text");

// Read file
// const fs=require('fs');
// const red=fs.readFileSync('./Hello.txt',"utf8");
// console.log(red);

// utf8:- 


// 1. Delete File
// var fs=require('fs');
// fs.unlinkSync('UTK.txt');

// File System using Asynchronous
// Asynchronous:- In this it take multiple request and run one by one.
// NOTE:- In Asynchronous File System module we need to pass call back function.

// Create File // In this we need call back function otherwise it throw error of Callback must be a function
//  const fs=require('fs');
//  fs.writeFile('AsyncFile.txt','Hello i am Asynchronous file',(err)=>{
//        console.log("File is created");
//  })
 
// #update
// fs.appendFile("AsyncFlie.txt"," and in this i am updating data",(err)=>{
//       console.log("Data is updated");
// })

// How to access one module into another module

// const http=require('http');
// const fs=require('fs');
// http.createServer(function(req,res){

//       fs.readFile("./index.html",(err,data)=>{
//             if(err){
//                   res.writeHead(500);
//                   res.write("Not able to read file");
//                   res.end();
//             }
//             res.writeHead(200);
//             res.write(data);
//             res.end();

//       })

// }).listen(4003);

// ====== #OS module:- The OS module provides information about the computer's operating system.

// const os=require('os');
// // console.log(os.cpus());
// // const free=os.freemem();
// // console.log(`${free / 1024 / 1024 / 1024}`);
// console.log(os.hostname());
// console.log(os.platform());


// ========# Path module
//The path module provides utilities for working with file and directory paths. It can be accessed using:


// const path=require('path');
// console.log(path.dirname('C:/Users/Manmohan Rathore/Desktop/Node/Interview/Hello.txt')); // The path.dirname() method returns the directory name of a path

// console.log(path.extname('C:/Users/Manmohan Rathore/Desktop/Node/Interview/Hello.txt'));// it return extention of file.
// console.log(path.basename('C:/Users/Manmohan Rathore/Desktop/Node/Interview/Hello.txt'));// it provide file name


// ========Host your react application in thre build format

// function getPath(url){
//       var finalPath='/build';
//       var path=url.split('/')[1] || '';
//       switch(path){
//             case 'css':
//             case 'js':
//             case 'static':
//             case 'font':
//             case 'image':{
//                   finalPath+=path;
//                   break;
//             }
//             default:{
//                   finalPath+='/index.html';
//                   break;
//             }
//             return finalPath;
            
//       }
// }

// const http=require('http');
// const fs=require('fs')
// http.createServer(function(req,res){
//       fs.write(getPath(req.url),function(req,res){
//             if(err){
//                   res.writeHead(404);
//                   res.end(JSON.stringify(err));
//                   return;
//             }
//             res.writeHead(200);
//             res.end(data);

//       })

// }).listen(4000);

// NPM Module:- It is a package manager for the javascript programming language. it is default pacakage manager for javascript runtime environment NodeJs.

// 1. Chalk:- it is used to change the colore, background color and text style.
// To install chalk type command (npm install chalk)
// const chalk=require('chalk');
// console.log(chalk.green.inverse("Hello Wolrd!"));// inverse is used to change the background color

//.2 Validator:- 
// to install validator command is (npm install validator).
// const chalk=require('chalk');
// const validator=require('validator');
// const data=validator.isEmail('ManmohanSingh23@gmail.com');
// console.log(data?chalk.green.inverse(data):chalk.red.inverse(data));

// ====== #Nodemon
// nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.(Nodemon ek tool hai jo nodeJs based applcation ko restart karne main help karta hai, hame bar bar terminal main file to run karwane ke liye node index,js likhane ki jarurat nahi hai.)
// To use nodemon, replace the word node on the command line when executing your script.(nodemon filename.extension). nodemon index.js

// NOTE:- In build mode we neet to create our own server.
// In Dev mode react script gives server.

// 3rd class start from 36:00



