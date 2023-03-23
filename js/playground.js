//const a = 10

/*
2 บรรทัดขึ้นไป
*/

var temp = "Hello world"
temp ="Google"

let temp2 = 100
temp2 = 50

const temp3 = true
//temp3 = false

// temp4 ="Dog"
// temp4 ="Cat"

//var temp4 

const a = 10
const b = 5
let c = 5
c = "ABC"
const sum = a+b
//console.log(sum)
//console.log(a+b+c)

const temp5 = [1,2,3,4,5,"A"]
//console.log(temp5[0])

temp5.forEach (item=>{
    //console.log(item)
})

const filtertemp = temp5.filter(item => item >= 3)
//console.log("filter number more than 3 is:", filtertemp)


temp5.push(6)
//console.log("Insert 6 to array",temp5)

// const car1 = {
//     color:'red',
//     Brand:'Honda',
//     model:{a1:'ASD#R',a2:'F#48FEF'
//     }
// }

//car1.color = "blue"
//console.log(car1.model.a1);
// function sayHello() {
//     console.log('Hi')
//}                                  //แบบ1 

const sayHello = (number,name) => {
    console.log(`Number is:,${number} by ${name}`);
}                                   //แบบ2   ใช้แบบไหนก็ได้
const nickname = "pat"
//sayHello(100,nickname)             //การเรียกใช้


const firstname = 'pat'
const lastname = "wilai"

const mergeName = (firstname,lastname) => {
    //return firstname + " " + lastname

    
    return`${firstname} ${lastname}`
}

// const fullName = mergeName(firstname,lastname)
// 
 
// Conditions (if else)
// const number1 = 40
// if (number1 < 30) {
//     console.log("number1 is more 30")
// }

//
// if(number1 < 30) {
//     console.log("number1 is more 30")
// }
// else{
//     console.log("number1 is more 30")
// }


//
// if(number1 < 20) {
//     console.log("number1 is less 20")
// }
// else if(number1 < 30) {
//     console.log("number1 is more 30")
// }
// else if(number1 < 40) {
//     console.log("number1 is less 40")
// }
// else{
//     console.log("number1 is less 40")
// }


// switch-case
// switch (number1) {
//     case 20:
//         console.log("number1 is equal 20")
//         break;
//     case 30:
//         console.log("number1 is equal 30")
//         break;
//     case 40:
//         console.log("number1 is equal 40")
//         break;
//     default:
//         console.log("number1 is more 40")
//         break;
// }


//loops & 
// const myCars = [
//     "Ford Repter",
//     "Honda CRV",
//     "ToYota Fortuner",
//     "Lambogini"
// ]
// const car1 = {
//     color:'red',
//     Brand:'Honda',
//     model:{a1:'ASD#R',a2:'F#48FEF'
//     }
// }
//  for (let index = 0; index < myCars,length; index++){
//     const car = myCars[index];
//     console.log(car)
//  }
//  for(const key in car1) {
//     if (Object.hasOwnProperty.call(car1,key)){
//         const element = car1[key];
//         console.log(element)
//     }
//  }
//  for (const item of myCars){

//  }

 let i = 0
 while(i < 10) {
    console.log("the nember is:",i); i++
 }
