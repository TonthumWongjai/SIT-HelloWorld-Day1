// const  fruit = ["Apple", "Banana", "Orange"]
// for(let i = 0;i < fruit.length;i++){
//    console.log("ลำดับที่"+i,"ผลไม้"+fruit[i])
// }
// console.log(fruit.length)


// let dice = 0;
// let count = 0;
// while (dice != 6){
//     dice = Math.floor(Math.random() * 6)+ 1;
//     count++;
//     console.log("ทอยได้:",count,"ได้เลข:",dice)
// }
// console.log("จบเกม ทอยไป",count,"ครั้ง ถึงจะได้เลข 6")

// function multiplytable(number){
//     for(let i = 1; i <= 12;i++){
//         result = number * i
//         console.log(number,"x",i,"=",result)
//     }
// }
// multiplytable(5)


// function greet(name){
//     return "สวัสดีคุณ " + name 
// }

// console.log(greet("Teecha"))


// const calcualtetotal = (price) =>{
//     const vat = price * 0.07
//     return price + vat
// }
// let item1 = calcualtetotal(700)
// console.log(item1)


// const prices = [100,200,300]
// const newPricesOld = prices.map(function(p){
//     return p * 1.1
// })

// const

// const student = [
//     {id:1 , name:"Teecha", age: 20},
//     {id:2 , name:"Pheet" , age: 19},
//     {id:3 , name:"Error303" ,age:"Unknow"}
// ]
// student.forEach((i) => {
//     console.log("ครั้งที่" , i.name)
// })

// const color = ["red" , "green"]
// const newcolor = ["yellow", ...color , "blue"]
// console.log(newcolor)

// const color = ["Red","Green"]
// color.push("Yellow")
// console.log(color)

// color.pop()//ประมาณลบมันออกไปจากข้างหลัง
// color.unshift("Orange")//เพิ่มเข้าไปข้างหน้าของ array
// color.shift()//ประมาณลบมันออกไปจากข้างหน้า
// console.log(color)


// let number = [1,2,3,4]
// let result = number.map(function(n){
//     return n * 2
// })
// let numbers = [10,20,30,40]
// let result = numbers.filter(function(n){
//     return n < 40
// })
// console.log(result)


const user = [
    {name:"Alice", age:15},
    {name:"Bob", age:22},
    {name:"Charlie", age:18},
    {name:"David", age:12}
]
// let result = user.filter(function (u){
//     return u.age >= 18
// })
// console.log(result)

let alray = []
for(let a of user){
    switch(true){
        case (a.age >= 18):
            alray.push(a)
    }
}
console.log(alray)


// function aryu(){
// let alray = []
// switch(true){
//     case (user.age >= 18):
//         let results  = alray.push(user)
//         return results
// }}
// console.log(aryu())