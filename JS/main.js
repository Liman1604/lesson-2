// let mas= ['Sam','Luck','James'];
// let result=mas.map((item)=>{
//     return item[0].toUpperCase()+item.slice(1)
// })
// console.log(result)

// function checkTask(arr){
//     let result=0
//     arr.forEach((item)=>{
//         if (item>result){
//          result=item
//         }
//     })
// return result
// }
// console.log(checkTask([4, 15, -4, 27, 12, 8]))

// Напишите функцию, которая принимает массив и
// возвращает новый массив из длин элементов исходного массива.
// Пример вывода: [4,5,2,5]
//

// let arr = ["Есть", "жизнь", "на", "Марсе?"];
// let result=arr.map((item)=>{
//     return item.length
// })
// console.log(result)

// function num(arr){
//    let reverse=arr.toString().split('').reverse().join('')
//     return +reverse
// }
// console.log(num(1234567))

// Напишите функцию, которая будет принимать строку и проверять является ли
// она палиндромом. Пробелы и регистр учитывать не нужно.
// > Палиндро́м, пе́ревертень — число, буквосочетание, слово или текст, одинаково
// читающееся в обоих направлениях. Например, число 101; слова "кок", "топот",
// "комок" и т.д.

// function str(arr){
//     if (arr.toLowerCase().split('').reverse().join('')===arr.toLowerCase()){
//         console.log(true)
//     }else {
//         console.log(false)
//     }
// }
// str('Lol')

// let num=[5, 6, 7, 8, 9]
//     let sum=0
//   num.forEach((item)=>{
//       sum+=item
//   })
//     console.log(sum)
//
//    let num=[5, 6, 7, 8, 9]
//    let sum=0
//     num.map((item)=>{
//         sum+=item
//     })
// console.log(sum)

//    let num=[5, 6, 7, 8, 9]
//    let sum=num.reduce((prevValue,item)=>{
//      return item+prevValue
//    })
// console.log(sum)

// let nums=[10,2,3];
// let sum=nums.reduce((prevValue,item)=>{
//     return prevValue+item
// })
// console.log(sum)

// let mas=[1, 2, [3, 4], 5,[6, 7]];
// let sum=[]
// mas.filter((item)=>{
//     if (item.length===2){
//         sum.push(item)
//     }
// })
// console.log(sum)

// function arr(mas,str){
//     let sum=[]
// mas.map((item)=>{
//     if (item!==str){
//         sum.push(item)
//     }
// })
//     console.log(sum)
// }
// arr([2, 5, 9, 6],5)

// let mas=[1, 2, 3, 0, 4, 5, 6];
// let sum=mas.reduce((prev,item,index)=>{
//     if(item===0) mas.splice(index)
//     return prev+item
// });
// console.log(sum)


