// let sumEven=0
// let sumOdd=0
// let number=[5,6,7,8]
// for(let i=0;i<number.length;i++){
//     if(number[i]%2==0){
//         sumEven=sumEven + number[i]
//     }
//     else{
//         sumOdd=sumOdd+number[i]
//     }
// }
// console.log('sum of even number',sumEven)
// console.log('sum of odd numbers', sumOdd)


// let countEven=0
// let countOdd=0
// let number=[5,6,7,8]
// for(let i=0;i<=number.length;i++){
    // if(number[i]%2==0){
    //     countEven+=1
    // }
    // else{
    //     countOdd+=1
    // }
//     console.log(number[i])
// }
// console.log('Count of even numbers = ',countEven)
// console.log('Count of odd numbers = ', countOdd)


//Input & Display: Accept 5 numbers from the user and print them using a loop
// let arr = [10,-5,7,3,0]; // predefined array
// console.log("Array elements are:");
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


// let sum=0
// let number=[5,6,7,8]
// for(let i=0;i<number.length;i++){
//     sum=sum+number[i]
//     }

// console.log('sum of numbers',sum)



// let sum=0
// let number=[5,6,7,8]
// for(let i=0;i<number.length;i++){
//     sum=sum+number[i]
//     }
//     let avg=sum/number.length

// console.log('sum of numbers',sum)
// console.log('average of numbers',avg)


// let countPositive=0
// let number=[-5,6,7,8]
// for(let i=0;i<=number.length;i++){
//     if(number[i]>0){
//         countPositive+=1
//     }
// }
// console.log('Count of positive numbers=' ,countPositive)


// let arr=[-5,-3,-1]
// let max=-Infinity
// for(let i=0;i<arr.length;i++){
//     if (arr[i]>max){
//         max=arr[i]
// }
//     }
// console.log('maximum number is',max)


// let arr=[14,52,48,3,49]
// let min=arr[0]
// for(let i=0;i<arr.length;i++){
//     if (arr[i]<min){
//         min=arr[i]
// }
//     }
// console.log('minimum number is',min)


// let arr = [14, 52, 48, 3];
// let num = parseInt(prompt("Enter a number to search:"));

// if (arr.includes(num)) {
//     console.log("Number found in array");
// } else {
//     console.log("Number not found");
// }


// let num=[1,2,3,4]
// for(i=num.length-1;i>=0;i--){
//     console.log(num[i])
// }


// let num=[1,2,3,4]
// for(i=0;i<num.length;i++){
//     console.log(num[i]*num[i])
// }


// let num=[1,-2,3,-4]
// for(i=0;i<num.length;i++){
//     if(num[i]<0){
//         num[i]=0
//     }
// }
// console.log(num)


// let product=1
// let num=[1,2,3,4]
// for(i=0;i<num.length;i++){
//     product*=num[i]
// }
// console.log('Product of number in the array',product)


// let num=[1,2,3,4,5]
// for(i=0;i<num.length;i++){
// }
// console.log('First element:', num[0])
//     console.log('Last element:',num[num.length-1])


// let double=[]
// let num=[1,2,3,4,5]
// for(i=0;i<num.length;i++){
// double[i]=num[i]*2
// }
// console.log(double)



// let num=[1,2,3,4,5]
// for(i=0;i<num.length;i++){
// if(num[i]%2==1){
// console.log(num[i])
// }
// }


// let arr = [5, 2, 9, 1, 7];
// let first = Math.max(...arr);
// let second = Math.max(...arr.filter(n => n < first));

// console.log("Second Largest:", second);


// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length / 2; i++) {
//     [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
// }

// console.log("Reversed:", arr);


// let arr = [1, 2, 3, 2, 1];
// let isPalindrome = true;

// for (let i = 0; i < arr.length / 2; i++) {
//     if (arr[i] !== arr[arr.length - 1 - i]) {
//         isPalindrome = false;
//         break;
//     }
// }

// console.log("Is Palindrome:", isPalindrome);


// let arr1=[1,2,3]
// let arr2=[4,5,6]

// let merged=[]
// let index=0
// for(i=0;i<arr1.length;i++){
//     merged[index]=arr1[i]
//     index++
// }
// for(i=0;i<arr2.length;i++){
//     merged[index]=arr2[i]
//     index++
// }
// console.log(merged)



// let arr=[2,0,3,0,4,0,5]
// let count=0
// for(let i=0;i<arr.length;i++){
//     if(arr[i]!=0){
//         arr[count]=arr[i]
//         count++
//     }
// }
// for(let i=count;i<arr.length;i++){
//     arr[i]=0
// }
// console.log(arr)

/*
anakha
*/


// let arr=[1,3,4,5]
// let n=arr.length+1
// let sum=(n*(n+1))/2
// let actualSum=0
// let missingNumber=0
// for(let i=0;i<arr.length;i++){
//     actualSum+=arr[i]
// }
// console.log(sum-actualSum)


// let arr=[5,3,1]
// let largest=-Infinity
// let secondLargest=-Infinity
// for(let i=0;i<arr.length;i++){
//     if (arr[i]>largest){
//         secondLargest=largest
//         largest=arr[i]
        
// }
//     }
// console.log('second largest number is',secondLargest)



// let sum=0
// let number=[5,6,7,8,2,5,8,3,7]
// for(let i=0;i<number.length;i+=2){
//     sum=sum+number[i]
//     }

// console.log('sum of numbers',sum)


// let arr = [1, 2, 2, 3, 4, 4, 5]; 
// let arr1 = []; 
// let arr1Index = 0;
// for (let i = 0; i < arr.length; i++) { 
//     let isDuplicate = false; 

//     for (let j = 0; j < arr1Index; j++) { 
//         if (arr[i] === arr1[j]) { 
//             isDuplicate = true;
//             break;
//         }
//     }
//     if (!isDuplicate) {
//         arr1[arr1Index] = arr[i]; 
//         arr1Index++; 
//     }
// }

// console.log("Array without duplicates:", arr1);


// let arr=[5,6,4,8,2]
// for(let i=0;i<arr.length-1;i++){
// for(let j=i+1;j<arr.length;j++){
//     if(arr[i]>arr[j]){
//         let temp= arr[i]
//         arr[i] = arr[j];   
//             arr[j] = temp;  
//         }
//     }
// }
// console.log("Sorted array:", arr);



// let arr = [2, 3, 4, 5, 6, 7, 8, 11];
// let primes = [];
// let primeIndex = 0; 
// for (let i = 0; i < arr.length; i++) { 
//     let num = arr[i];
//     if (num >= 2) { 
//         let isPrime = true; 
//         for (let j = 2; j <=num/2; j++) {
//             if (num % j === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime==true) {
//             primes[primeIndex] = num; 
//             primeIndex++;
//         }
//     }
// }
// console.log("Prime numbers:", primes);


// let arr = [1, 2, 3, 4, 5]; 
// let k = 2; 
// for (let i = 0; i < k; i++) {
//     let first = arr[0];
//     for (let j = 0; j < arr.length - 1; j++) {
//         arr[j] = arr[j + 1];
//     }
//     arr[arr.length - 1] = first; 
// }
// console.log("Left rotated:", arr);



// let arr = [1, 2, 3, 4, 5]; 
// let k = 2; 
// for (let i = 0; i < k; i++) {
//     let final = arr[arr.length-1];
//     for (let j =arr.length-1; j >0; j--) {
//         arr[j] = arr[j-1];
//     }
//     arr[0] = final; 
// }
// console.log("Right rotated:", arr);


// let arr = [-2, 2, 3, 4, 5]; 
// let isSorted = true; 

// for (let i = 0; i < arr.length - 1; i++) { 
//     if (arr[i] > arr[i + 1]) { 
//         isSorted = false; 
//         break; 
//     }
// }

// console.log("Is the array sorted in ascending?", isSorted);


// let arr = [5, 2, 9, 1, 7]; 

// let largest = arr[0]; 
// let smallest = arr[0]; 
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//         largest = arr[i]; 
//     }
//     if (arr[i] < smallest) {
//         smallest = arr[i]; 
//     }
// }

// let sum = largest + smallest; 
// console.log("Largest element:", largest);
// console.log("Smallest element:", smallest);
// console.log("Sum of largest and smallest:", sum);



// let num=12312434896321754
// let count=0
// while(num>0){
    
// num=Math.floor(num/10)
// count++
// }

// console.log(count)


// const fruits=["banana", "apple","orange","grapes"];
// fruits.length=2;
// console.log(fruits)


// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// let myList = fruits.toString();
// console.log(myList)


// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit=fruits.at(3)
// console.log(fruit)


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.join(" * "));


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.pop();
// console.log(fruits)



// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let length=fruits.push("grapes");
// console.log(length)


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.shift();
// console.log(fruits)


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit=fruits.shift();
// console.log(fruit)


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.unshift("grapes");
// console.log(fruits)


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit=fruits.unshift("grapes");
// console.log(fruit)


// let fruits=['banana','grapes','mango']
// fruits[0]='apple'
// console.log(fruits)


// let fruits=['banana','grapes','mango']
// fruits[fruits.length]='apple'
// console.log(fruits)

// let fruits=['banana','grapes','mango']
// delete fruits[2]
// console.log(fruits)


// let fruits=['banana','grapes','mango']
// let numbers=[1,2,3]
// let total=fruits.concat(numbers)
// console.log(total)


// let fruits=['banana','grapes','mango']
// let numbers=[1,2,3]
// let amount=[100,200,300]
// let total=fruits.concat(numbers,amount)
// console.log(total)


// let fruits=['banana','grapes','mango']
// let total=fruits.concat('apple')
// console.log(total)


// let fruits=['banana','grapes','mango','apple']
// let total=fruits.copyWithin(2,0)
// console.log(total)


// let arr1=[[1,2],[3,4],[5,6]]
// let arr2=arr1.flat()
// console.log(arr2)


let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = arr1.flatMap(x => [x, x * 10]);
console.log(arr2)