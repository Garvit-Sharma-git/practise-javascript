const tinderUser={}

tinderUser.name="Garvit Sharma"
tinderUser.id="123abc"
tinderUser.isLoggedIn="false"

// console.log(tinderUser);

const regularUser={
    email:"garvit@mail.com",
    fullname:{
        UserFullName:{
            firstName:"garvit",
            lastName:"Sharma"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.UserFullName.firstName);




//to concatinate 2 objects
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

//this way of doing it is not effevicient 
// const obj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2)

//effective way of doing it
const obj3={...obj1,...obj2}
// console.log(obj3);


// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));




const course={
    courseName:"js_prac",
    price:"999",
    courseInstructor:"garvit"
}
// console.log(course.courseInstructor);

// const {courseInstructor}=course
// console.log(courseInstructor);

// const {courseInstructor:instructor}=course
// console.log(instructor);


