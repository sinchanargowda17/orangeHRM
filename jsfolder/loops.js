// let arr = [1,2,3,4,5]
// let i = 0
// while(i<arr.length){
//     console.log(arr[i])
//     i++
// }


// // even number

// x = 0
// while(x<=10){
//     if(x%2==0){
//         console.log(x)
//     }
//     x++
// }

// x=0
// while(x<=10){
//     if(x%2 !== 0){
//         console.log(x)
//     }
//     x++
    
// }

// let fruits = ["Apple", "Banana", "Mango", "Orange"];
// x=0
// while(x<fruits.length){
//     console.log(fruits[x])
//     x++
// }

// let numbers = [10, 20, 30, 40, 50];

// let sum = 0;
// let index = 0;
// while (index < numbers.length) {
//     sum += numbers[index];

//     index++;

    
// }
//  console.log(sum);


//  let x=0
//  while(x<=10){
//     console.log(10-x)
//     x++
//  }

//  let y = 10
//  while(y>=0){
//     console.log(y)
//     y--
//  }

//  let numbers = [2, 5, 8, 11, 14, 17, 20];
//  let x = 0;
//  while (x < numbers.length) {
//     if (numbers[x] % 2 !== 0) {
//         console.log(numbers[x]);
//     }
//     x++;
//     }  
// let numbers = [25, 10, 45, 5, 80, 30];
// let largest = numbers[0];
// let i = 1;
// while (i < numbers.length) {
//     if (numbers[i] > largest) {
//         largest = numbers[i];
//     }
//     i++;
// }
// console.log(largest);


// let fruits = ["Apple", "Mango", "Orange", "Banana", "Grapes"];

// let count = 0;
// let index = 0;
// while (index < fruits.length) {
//     if (fruits[index].length > 5) {
//         count++;
//     }
//     index++;
// }
// console.log("Number of fruits with more than 5 characters:", count);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

let i = 0;
while (i < numbers.length) {
    if(numbers[i] ==5) {
        i++;
        continue; // Skip the current iteration when the number is 5
    }
    console.log(numbers[i]);
    i++;

    
}

