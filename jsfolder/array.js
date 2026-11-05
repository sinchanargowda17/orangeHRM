let arr = [7,5,6,4,7,9,7,8,4,0,1,2,3]
let arrr2 = ["apple", "sinchana","vandana","ranjitha",]

arr5 =arr.sort()//it will sort in order
console.log(arr5)

arr2 =arrr2.sort()//it will sort in order
console.log(arr2)

// split - convert string to array

str = "this is javascript"

str1 = str.split("j")
//if we give space in side quote it will it will convert into one one element "this","is"
// if not give space it will make ever word int elemrnt - 'j', 'a', 'v', 'a',
//if ("j") it will make like this [ 'this is ', 'avascript' ]
console.log(str1)     

let arr7 = ["apple", "sinchana","vandana","ranjitha",]
str3 =arr7.join(" ")
console.log(str3)


//push will add the element at the end  
arr3 =[ 'apple', 'ranjitha', 'sinchana', 'vandana' ]

arr3.push("suma")
console.log(arr3)

//pop will remove the element at the end (last)
arr3.pop()
console.log(arr3)

//shift will move tyhe first element 
arr3.shift()
console.log(arr3)

//unshift will add the element at the first
arr3.unshift("suma")
console.log(arr3)

item = [1,2,3,4,5,6]
frome = item.slice(0,4) // its give starting from where to were
console.log(frome)


//map
sin = [1,2,3,4,5]
sin2 = sin.map(element => element+5)
console.log(sin2)
//op= [ 6, 7, 8, 9, 10 ]

let sin = [1, 2, 3, 4, 5];
sin[2] = sin[2] + 5;
console.log(sin);
//op= [ 1, 2, 8, 4, 5 ]

//filter
 sin3 =["apple", "sinchana","vandana","ranjitha",]
 sin4 = sin3.filter(element => element.includes("na"))
 console.log(sin4)
 //op=[ 'sinchana', 'vandana' ]

 //reduce
let sin5 = [1, 2, 3, 4, 5];
let sum = sin5.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);
//op=15 

