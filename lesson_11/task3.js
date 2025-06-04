

async function getTodo() {
   try{
     const response = await fetch ('https://jsonplaceholder.typicode.com/todos/1');
  const toDo = await response.json();
 return toDo;
}
catch(error){
  console.error("Error", error)
  throw error;
}

}

async function getUsers() {
  try{
    const response = await fetch ('https://jsonplaceholder.typicode.com/users/1');
 const users = await response.json();
return users;
}
catch(error){
 console.error("Error", error);
 throw error;
}

}


Promise.all([getTodo(), getUsers()])
.then (response => {console.log(response)})
.catch(error =>  {console.error("Error",error)})