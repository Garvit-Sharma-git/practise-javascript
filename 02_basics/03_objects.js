//singletone ----constructor se banega to single tone banega pr literals se nahi

const mySym=Symbol("key1")

//object literals
const user={
    name:"garvit",
    email:"garvit@google",
    age:19,
    Gender:"male",
    "full name":"garvit sharma",
    location:"alwar",
    [mySym]:"newkey1"

}

// console.log(user.name);
// console.log(user.email);
// console.log(user["full name"]);
// console.log(user[mySym]);


//we can change our email address again with this
user.email="garvit@yahoo.com"
// console.log(user.email);
// we can freeze the object with this method and after that we cannot access it again for changing
// Object.freeze(user)
user.email="garvit@microsoft.com"
// console.log(user.email);

// console.log(user);

user.greeting=function(){
    console.log("hello there ");
}
console.log(user.greeting());
console.log(user.greeting);

user.greetingtwo=function(){
    console.log(`hello there gentlemen,${this.name}`);
}
console.log(user.greetingtwo());