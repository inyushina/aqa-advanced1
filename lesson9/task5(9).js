const users = [
    {
        name: "Anna Pleain",
        email: "anna.plein@gmail.com",
        age: 32,
        isActive: true

},
{
    name: "Robert Patisson",
    email: "rp@gmail.com",
    age: 37,
    isActive: true

},
{
    name: "Wu Kong",
    email: "wu.kong@gmail.com",
    age: 70,
    isActive: false
},
{
    name: "Bert Krasinski",
    email: "bert134@gmail.com",
    age: 45,
    isActive: true
}
];
//console.log(users)
for (const {name, email, age, isActive} of users){
    console.log (`Requested user: ${name} , email: ${email}, age: ${age},  and Active status: ${isActive}.`)
}