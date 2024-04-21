const marvel=["spiderman","ironman","thor"]
const dc=["batman","superman","flash"]

// console.log("line 4");
//To conacatinate the above 2 arrays
// const new_heroes=marvel.concat(dc);
// console.log(new_heroes);

// console.log("line 9");
//another effective way for cancatination
// const all_new_heroes=[...marvel,...dc];
// console.log(all_new_heroes);


// console.log("line 15");
//to simplify the array we use flat
// const new_arr=[1,2,3,[4,5,6],4,5,[3,[67,75],4],8]
// const allNewarray=new_arr.flat(Infinity)
// console.log(allNewarray);


// console.log("line 22");
// console.log(Array.isArray("Garvit"));
// console.log(Array.from("Garvit"));
// console.log(Array.from({name:"Garvit"}));  //interesting


let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));