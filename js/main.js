// // const colors = ["red", "green", "blue"];
// // const tmp = `${colors.at(-2)} and the second one is ${colors.at(-1)}`
// // console.log(tmp);



// // const arrayLike = {
// //   length: 3,
// //   unrelated: "foo",
// //   2: 4,
// // };

// // const bb = Array.prototype.pop.call(arrayLike)
// // console.log(bb);



// // let scores = [1, 2, 3, 4, 5];
// // let scores1 = scores.slice(-3,4)
// // console.log(scores1);



// // let scores = [1, 2, 3, 4, 5];

// // scores.splice(1,1,7)

// // console.log(scores);




// // let scores = [1, 2, 3, 4, 2, 5];

// // let scr1 = scores.indexOf(2, -4);

// // console.log(scr1);


// let scores = [1, 2, 3, 4, 2, 5];
// let scr2 = scores.find((ele )=> ele > 3)
// console.log(scr2);

// let scores1 = [1, 2, 3, 4, 2, 5];
// let scr3 = scores.findIndex((ele )=> ele > 3)
// console.log(scr3);

// let scoresI = [1, 2, 3, 4, 2, 5];
// let scr5 = scoresI.includes(4)
// console.log(scr5);

// const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// function fn(ele){
//     console.log(ele);
// }
// arr.forEach(ele => fn(ele))






// push 
// const num1= [1,2,3,4,5,6,7,8,9,10];
// const num2= [11,12,13,14,15,16,17,18,19,20];

// for(color of num2){
//  num1.push(color)
// }
// console.log(num1);


// num1.push(...num2)
// console.log(num1)





// const a = [1,2,3,4,5,6,7,8,9,10];
// function fn(ele){
//     console.log(ele);
// }
// a.forEach(ele => fn(ele))


// const redu = [1,2,3,4,5,6,7,8,9,10];
// const aa = redu.reduce((ele1, ele2) => ele1 + ele2)
// console.log(aa);



// const aaa =[1,2,3,4,5,6,7,8,9,10];

// const bb =aaa.entries()
// console.log(bb.next().value);
// console.log(bb.next().value);
// console.log(bb.next().value);


// const a= [1,2,3,4,5,6,7,8,9,10];
// const b = a.some((ele)=> ele < 2)
// console.log(b);

// const a = ['Danish',"chouhan","fayyaz","moein","ustadJi"]

// console.log(a.filter((ele => ele.length < 7)));

// const arr = ["Danish","fayyaz","saleah","Shanawaz"];

// function fn(ele){
//  console.log(ele);
// }
// arr.forEach((ele)=> fn(ele))

// const arr2 = arr.map((ele) => ele.toUpperCase())
// console.log(arr2)

const num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

// const atting = num.at()

// const srt = num.sort((ele)=> ele.filter())
// console.log(srt);

const evn = num.filter((ele)=> ele % 2 == 0)
const odd = num.filter((ele)=> ele % 2 != 0)

const conc = evn.concat(odd)
console.log(conc);

const conc1 = [1,2,3,4,5,6,7,8,9,10]

const srt = conc1.sort((a,b) => a < b)
console.log(srt);
// const isEven = evn.every((ele) => ele % 2 == 0)
// console.log(isEven);

// console.log(evn);
// console.log(odd);
// const sumE = evn.reduce((ele1,ele2)=>ele1 + ele2)
// const sumO = odd.reduce((ele1,ele2)=>ele1 + ele2)
// console.log(sumE);
// console.log(sumO);

// const hund1 = new Array(100).fill(1,0,100)
// const mapp = hund1.map((ele,indexx) => ele + indexx)
// console.log(mapp);


// include = gives us bollean t/f if existing then it will give t otherwise f

// const inc = [1,2,3,4,5,6];

// console.log(inc.includes(2))
// console.log(inc.includes(20))


// indexof = t

// const indO = [1,2,3,4,5,6,7,8,9,10];
// const indOO = indO.indexOf(4)
// console.log(indOO);
// find = this will giveus us jo pehle value usko mil rahi hai

const fnd1 = [1,2,3,4,5,6,7,8,9,10]
const fnd2 = fnd1.find((ele) =>ele < 9);
console.log(fnd2);

const pushing = fnd1.push(11);
console.log(pushing);

// flat

// sort , indexOf , find , include , push ,pop,shift,unshift,splice,slice


// const remo = [1,2,3,4,5];
// remo.pop()
// const remoL = remo.length
// console.log(remoL);