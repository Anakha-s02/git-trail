let sumEven=0
let number=[5,6,7,8]
for(let i=0;i<number.length;i++){
    if(number[i]%2==0){
        sumEven=sumEven + number[i]
    }
    else{
        sumOdd=sumOdd+number[i]
    }
}
console.log('sum of even number',sumEven)
console.log('sum of odd numbers', sumOdd)


// let countEven=0
// let countOdd=0
// let number=[5,6,7,8]
// for(let i=0;i<=number.length;i++){
//     if(number[i]%2==0){
//         countEven+=1
//     }
//     else{
//         countOdd+=1
//     }
//     console.log(number[i])
// }
// console.log('Count of even numbers = ',countEven)
// console.log('Count of odd numbers = ', countOdd)


