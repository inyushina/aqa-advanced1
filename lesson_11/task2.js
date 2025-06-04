// import { error } from "console";
// import { resolve } from "path";

// let promise = new Promise((resolve, reject) =>{
//     let success = true;
//     if(success){ resolve('Good!')}
//     else{reject('Something gone wrong!')}
// })


// promise
//   .then(result => {
//     console.log("Успіх:", result);
//   })
//   .catch(error => {
//     console.log("Помилка:", error);
//   });

// function promise1(){
//     const url = `https://jsonplaceholder.typicode.com/todos/1`
// }

function getToDo(){
return fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
}
getToDo()
   .then(todo => {console.log('Result todo:', todo)})
   .catch (error => {console.error('Error:', error)});

  

function getUser(){
 return fetch('https://jsonplaceholder.typicode.com/users/1')
.then(response => response.json())
 }
 getUser()
 .then(user => {console.log('Result user:', user)})
 .catch (error1 => {console.error('Error:', error1)})


 Promise.all([getToDo(), getUser()])
 .then(function(response){
    console.log(response)
 })
 .catch (function(error){
    console.error("Error for ALL:", error)
 });

 Promise.race([getToDo(),getUser()])
 .then(response =>{ console.log(response)})
 .catch(error => {console.error('Error for RACE:', error)})
 