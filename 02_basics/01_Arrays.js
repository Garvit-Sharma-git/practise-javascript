
const arr=[1,2,3,4,5,6]
// arr.unshift(0)
// console.log(arr)
// arr.shift(arr)
// console.log(arr)

//splice
console.log(arr);

const myarr1=arr.slice(1,3)

console.log("slice from 1 to 3 ...but it will not change the original array");

console.log(myarr1);
console.log("A",arr);

console.log("gap...............");


//slice
console.log(arr);

const myarr2=arr.splice(1,3)

console.log("splice from 1 to 3 ...but it will change the original array");

console.log(myarr2);
console.log("B",arr);


