const studentDatabase = [ 'Amanda', 'ada', 'oluchi', 'chidera', 'kaima' ]


const findStudent = function ( allStudents, studentName) {

 for ( let i = 0; i < allStudents.length;  i++) {

    if (allStudents[i] === studentName) {

  console.log(`found ${studentName}`)
}
  }  

}

findStudent( studentDatabase, 'ada')



const numbers = [1, 2, 3, 4, 5, 6 ]

const getElement = (arr, index) => {
  return arr[index]
}

console.log(getElement(numbers, 3))


// convert  number to string (toString method)

// 2. convert String to array (split method)

// 3. Reverse the string (reverse method)

// 4. convert array back to string (join method)

// 5. Convert string to number (parseint method)

// 6. Return the number



let myNumbers = "1 2 3 4 5"

let reverseNumbers =  (n) => {

  const reversed = n.toString().split("").reverse().join("");

  return parseInt(reversed) * Math.sign(n)
}

console.log(reverseNumbers(123789))




// Custom Arrays

class myArr {

  constructor() {
    this.length = 0;

    this.data = {}
  }

 push(item) {
  
  this.data[this.length] = item;

  this.length++;

  return this.length

  console.log(this.data[ths.length])
 }

 get(index) {
  return this.data[index]
 }

 pop () {

  const lastItem = this.data[this.length - 1];

  delete this.data[this.length - 1];

  this.length--;

  return lastItem;
 }

 shift () {

  const firstElement = this.data[0] 

   for (let i = 0; i < this.length; i ++) {

    this.data[i] = this.data[i + 1]

   }


   delete this.data[this.length - 1]
   this.length--;
   return firstElement
 
 }

 delete(index) {

  const item = this.data[index];

  for (let i = index; i < this.length - 1; i++ ) {

    this.data[i] = this.data[i + 1];

  }


  delete this.data[this.length - 1];

  this.length--;
  return item
 }

}


const myArray = new myArr(); 

myArray.push("apple")

myArray.push("orange")

myArray.push("mango")
//myArray.pop()
/*
console.log(myArray.delete(1))

console.log(myArray)
 */
//console.log(myArray.shift())
//console.log(myArray)


const arr = (n) => n.split("").reverse().join("")

  



console.log(arr("apple"))
console.log(arr("EBUKA"))

/*
//Palindrome
const team = (str) => str.split("").reverse().join("") === str

console.log(team("Rate"))

console.log(team("cddc"))
console.log(team("abba"))


const sent = (no) => { return no.toLowerCase().split("").map( (word) => word[0].toUpperCase() + word.slice(1)).join(" ")
}
console.log(sent("ToWn people"))



const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 , 14, 15, 16, 17, 18, 19, 20, 21, 22,]

const numArr = function(nums) {

  for (let i = 0;0 i <= nums.length; i++) {
    if (i % 3 == 0 && i % 5 == 0 ) {
     
      console.log("FizzBuzz")
    } else if (i % 3 == 0) {
      console.log("fizz")
    } else if (i % 5 == 0) {
      console.log("buzz")
    } else {
      console.log(i)
    }
  }


}

numArr(nums)


*/



//MAX PROFiT
const  maxProfit = (prices) => {

  let minPrice = prices[0];

  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    const currentPrice = prices[i];


    //update min price if last price is found


    minPrice = Math.min(minPrice, currentPrice);

    const potentialProfit = currentPrice - minPrice;

    maxProfit = Math.max(maxProfit, potentialProfit);



    console.log(maxProfit); 


   
  }

   return maxProfit
 
}

const prices = [7, 1, 5, 3, 6, 4];

const profit = maxProfit(prices);

console.log(" Maximum profit: ", profit );


//Array Chunk


const myList = []



myList.push("mango", 'apple')

console.log(myList)




const favSingers = ["Rihanna", "Drake", "Kendrick"]


console.log(favSingers[0])


const numberss = [3, 5, 2, 4, 1]

console.log(numberss.reverse())
console.log(numberss.join('-'))



//Object

const car = {
  type: "SUV",
  model: "corolla",
  color: "Black",

}

console.log(car)

car.type = "Toyota"
car.wheels = "Monster 4-wheels"
console.log( car)


//function


const myFunction = function ( a, b) {

  return a * b 
}



const res1 = myFunction(10, 3)
const res2 = myFunction(8, 5)
const res3 = myFunction(4, 9 )



console.log(res1)
console.log(res2)
console.log(res3)



//Callbacks

function showCallFunc(fn) {

  const value = "something similar"

  fn(value)
}


showCallFunc( function (value) {
  console.log(value)
})







const currentDate = new Date()

console.log(currentDate)

const dated = new Date()

/*const hisYear = dated.getFullYear()
console.log(`Year: ${hisYear}`) */

console.log(dated.toDateString())
console.log(dated.toISOString())
console.log(dated.toUTCString())


dated.setDate(dated.getDate() + 10)

console.log(dated)



//Array Chunk

const chunk = (array, size) => {

  const chunked = []

  let index = 0;

  while (index < array.length) {

    const chunk = array.slice(index, index + size)

    console.log("-------", chunk)

    index += size;


  }

  return chunked;
}


console.log(chunk([1,2,3,4,5,6,7,8,9,10], 3))



const test = `
  The quick 
   brown fox
   jumps Over 
   the lazy dog

`

console.log(`${test}`)


const firstName = "Micheal"

const lastName = "Dev"


console.log(`${firstName}  ${lastName}`)


// SetTimeout/arrow function
/*setTimeout(() => {
  console.log("hello"),
  setTimeout(() => {
    console.log("hey")
  }, 2000)
}, 4000)
*/

const alp = (a, b, c) => {

 return {
  a: a,
  b: b,
  c: c,
}
}




console.log(alp(1, 2, 3))

console.log(alp("you", 2, "me"))




//object literal

const lib =  {
 
    sum: (a,b) => {return a + b},
    mult: (a,b) => {return a * b} 
  
}


console.log(lib.mult(5,6))

console.log(lib.sum(5, 6))


//Spread Operator

function giveMe(a, b, c, d) {

  console.log("a", a);
  console.log("b", b);
  console.log("c", c);
  console.log("d", d);
}

const colors = ["red", "green", "yellow", "purple"]
giveMe(...colors)





const cars  = ["bmw", "toyota", "motorola"]

const allCars = ["Benz",...cars, "Lexus"]

console.log(allCars)



const arr1 = [1, 2, 3]
const arr2 = [4, 5]

const cloneArr = [...arr1, ...arr2, 6, 7, 8]

console.log(cloneArr)


const user = {
  name: "David",
  age: 22
}

const clone = {...user, work: "Developer", State: "active"}

console.log(clone)



//Rest operator

const Rest = (...userData) => {
  console.log(userData);

}


Rest("David", "micheal", 19, 2022, "player", "Top G")


//Array Destructuring  

const foo = ["one", "two"]

const [huxn, yellow, green, blue] = foo

console.log(yellow)



const colorss = ["red", "green", "blue","yellow", "orange"]

const [color1, color2, color3, ...color4] = colorss
console.log(color1, color2)
console.log(color3, color4)



//Object DEstructuring

const person = {
  name: "david",
  age: 30,
  gender: "Male"
}

const {name, age} = person

console.log(name, age)




//Two Sum


function twoSum(nums, target) {

  //loop through each number on the list
  for (let i = 0; i < nums.length; i++) {
//for each number; check the rest of the list 
for (let j = i * 1; j < nums.length; j++) {
  
  //if the current number and the one we're checking add up to the target, return their indexes
  if (nums[i] + nums[j] == target)  {

    return [i, j];
  }
}
  }


  return [];

}


const res = twoSum([2, 7, 11, 15], 9);
 
const rest2 = twoSum([1, 3, 7, 9, 2], 11);

console.log(res);

console.log(rest2)
 
//Node
class Node {

  constructor(value) {

    this.head = value;

    this.next = null;


  }

}

//Linked List

class LinkedList {

  constructor(value) {
    this.head =  new Node(value);

    this.tail = this.head;

    this.length = 1
  }

  push(value) {

    let newNode = new Node(value);


    if (!this.head) {
      this.head = newNode;

      this.tail = newNode;
    }


    this.tail.next = newNode;

    this.tail = newNode;

    this.length++;
  }

  pop() {


    if (!this.head) {

      return undefined
    }





    let temp = this.head

    let prev = this.head



    while (temp.next) {

      prev = temp
      temp = prev.next
    }


    this.tail = prev
    this.tail.next = null
    this.length--;


    if (this.length == 0) {

      this.head = null;

      this.tail = null;
    }



    return temp
  }

  unshift(value) {

    const newNode = new Node(value)

    if (!this.head) {

      this.head = newNode

      this.tail = newNode

    }

    newNode.next = this.head;

    this.head = newNode;

    this.length++
    return this;


  }

}




const myLinkedList = new LinkedList(1);

myLinkedList.push(10);
//myLinkedList.pop();

myLinkedList.unshift(0);

console.log(myLinkedList)



function ratings(rate = 5) {

  if ( rate == 5) {
    console.log("High rating :)")
  } else if (rate == 0 ) {
    console.log("low rating :(")
  }

}



ratings()




function multiple(a , b = 1 ) {

  return a * b

}


console.log(multiple(3, ))

let money = true


const payment = money == true ? "buy products" : "They should bring money"

console.log(payment)


const object = { a: 1, b: 2, c: 3};

for (let keys in object) {
  console.log(keys, object[keys])
}

const array1 = ["a", "b", "e"]

for (let lett of array1) {
  console.log(lett)
}


const words = [ "table", "football", "pipe", "stool"];


const fullWords = words.forEach((word, index, arr) => {
  arr[index] = word[0].toUpperCase() + word.substring(1);
});

console.log(words)



let somNums = [ 2, 7, 5, 4]

let sum = 0

function adder(somNums) {
  sum += somNums
}

somNums.forEach(adder)
console.log(sum)


const numbers2 = [3, 6, 9, 12]

const triple = numbers2.map(nums => nums*3)


console.log(triple)




let random = [10, 20, 30, 40, ]

let randMultiple = random.map(nums => nums * 10)



console.log(randMultiple)

/*
const ages3 = [3, 32, 65, 15, 88, 16]




function checkAges(ages3) {
 if (ages3 >=32) {
  return resultAges
 }else if (ages3 <=33) {
  return resultAges
 }
}


const resultAges =  ages3.filter(checkAges)


console.log(resultAges)*/



const wordss = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
  
];


function getWorddss(wordss) {

  return wordss.length > 6
}

const longWordss = wordss.filter(getWorddss)

console.log(longWordss)


//find Helper

const posts = [
  {id: 1, content: "Good Post"},
  {id: 2, content: "Funny Post"},
  {id: 3, content: "sad Post"},
  {id: 4, content: "sad Post"},
  {id: 5, content: "sad Post"},

]


const postRes = posts.find( (posts) => posts.content=="sad Post")

console.log(postRes)


const ages7 = [3, 10, 18, 20]


function getAges(ages) {
  return ages > 7
}

const resAges = ages7.filter(getAges);

console.log(resAges)


//Bonus Challenge
 
let products = [
  { name: "checkers", category: "Toys"},
  { name: "Harry Potter", category: "Books"},
  { name: "iPhone", category: "Electornics"},
  { name: "Learn Js", category: "Books"},
]
/*
let product;

for ( let i = 0; i < products.length; i++) {
  if (products[i].category === "Books") {
    product = products[i];
    break

  }
}

console.log(product) */

const productsRes = products.filter( products => products.category =="Books")

console.log(productsRes)



const wordsss = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
  
];


let words2 = [];


for ( let i = 0; i < wordsss.length; i++) {
   if (wordsss[i].length > 6) {

    words2.push(wordsss[i]);

    
   }
  }



  console.log(words2) 

// Every and some Array helpers

  const peoples = ["huxn", "jordan", "alex"]

  const ress1 = peoples.every((people) => people.length === 4 )
  const ress2 = peoples.some(people => people.length < 5)


  console.log(ress1);
  console.log(ress2)


   
let products0 = [
  { name: "checkers", category: "Toys"},
  { name: "Harry Potter", category: "Books"},
  { name: "iPhone", category: "Electornics"},
  { name: "Learn Js", category: "Books"},
]


const resProducts = products0.every(product => product.category == "Books")
const resProducts2 = products0.some(product => product.category == "Books" )

console.log(resProducts)
console.log(resProducts2)


const words3 = [
  "apple",
  "banana",
  "orange",
  "banana",
  "apple",
  "orange",
  "apple",
  "grape",

]


 const wordFrequency = words3.reduce((frequencyMap, word) => {
  frequencyMap[word] = frequencyMap[word] || 0 + 1;
  return frequencyMap;
 }, {})

 console.log(wordFrequency)



 function calculateProducts(arr) {
  return arr.reduce((accumulator, currentValue) => accumulator * currentValue);
 }


 const numbers11 = [2, 3, 4, 5];
 
 const products11 = calculateProducts(numbers11);
 console.log(products11)  



 const map = new Map();


 const keyOne = "a"
 const keyTwo = "b"
 const keyThree = "c"

 map.set(keyOne, "1")
 map.set(keyTwo, "2")
 map.set(keyThree, "3")


 console.log(map)
 console.log(map.keys())
 
 console.log(map.values())
 console.log(map.size)
console.log(map.get(keyOne))
console.log(map.delete("b"))
console.log(map.size)


//Set
const letters = new Set()

letters.add("a")
letters.add("b")
letters.add("c")

for (let item of letters) {
  console.log(item)
}

console.log(letters)


//Symbol()
const mySymbol = Symbol("foo")

console.log(mySymbol)

const symObj  = {}
symObj.first = "a"
symObj[mySymbol] = "value of"

console.log(symObj)

for (let item in symObj ) {
  console.log(item)
}

console.log(symObj)


//Dom section

console.log(document)


const h4 = document.getElementsByTagName("h4");

console.log(h4)

/*
const green1 = document.getElementsByClassName("green")

const yellow1 = document.querySelector(".yellow")


console.log(green1)

console.log(yellow) 
console.log(yellow1.textContent) */

const lorem = document.querySelector(".para")
console.log(lorem.textContent);


const h1 = document.querySelector("h1");

h1.classList.add("Styles")
h1.classList.remove("Styles")
console.log(h1.style.color = "teal");
console.log(h1.style.height = "400px")
h1.style.backgroundColor = "Red"


const a = document.querySelector("a") 
console.log(a.getAttribute("href"))
console.log(a)


const a2 = document.querySelector(".a-two")
a2.setAttribute("href", "www.facebook.com")
console.log(a2.style)


const paragraph = document.createElement("p")
paragraph.innerText = "Hi, I'm mikel"
paragraph.classList.add("intro")
paragraph.style.fontSize= "50px"
paragraph.style.color = "purple"
console.log(paragraph)
document.body.appendChild(paragraph)



//THIS KEYWORD 
function printThis(prper) {
  return this
}



const pri = printThis()
console.log(pri)

console.log(this === window)


const obj = {
  firstName: "Micheal",
  lastName: "David",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`
  }
}


const priw = obj.fullName()
console.log(priw)


const person2 = {
  firstName: "Halleujah",
  lastName: "Somebody",
  age: 22,
  greetRegular: function() {
    return `Hello, my name is ${this.firstName} ${this.lastName} & I'm ${this.age} years old`
  },
  greetArrow: () => {
    return `Hello, my name is ${this.firstName} ${this.lastName} & I 'm ${this.age} years old`
  }

}

const approach = person2.greetRegular()
console.log(approach)


const approach2 = 
console.log(person2.greetArrow()  )




//Factory Funtion
 /* function name(params) {
  return {}
 } */


 const createPerson = function(firstName, lastName, pl) {

  return {
  firstName : firstName,
  lastName: lastName,
  pl: pl,
  fullName: function() {
    console.log(
      `Hello my name is ${this.firstName} ${this.lastName} & i love ${this.pl}`
    )
  }
 }}


 const Amaka = createPerson( "Amaka", "Ezeonye", "Python")
 const Yusuf = createPerson("Yusuf", "Amhed", "Golang")
 const Bola = createPerson("Bola", "Tolarin", "Javascript")
 
 console.log(Amaka, Bola, Yusuf)
 


 const allVehicles = function (type, model, brand, year) {
  return {
    type: type,
    model: model,
    brand: brand,
    year: year,

    toVehicles: function() {
      return `i have a car with the ${this.type} from ${this.brand} with ${this.model} made in ${this.year}`

    }
  
  }
 }


 const ahmed = allVehicles("Suv", "Groundhog", "Toyota", 2016);
 const oge = allVehicles("Speed", "Camry", "Benz", 2022 )
 
 console.log(ahmed, oge  )


 //constructor function

 function book2(title, author, year) {
  this.title = title
  this.author = author
  this.year = year
 
 this.getInfo = function() {
  return `${this.title} by ${this.author} is a great ${this.year} book`
  }
 }

 const favBook = new book2("Art of war", "Sunzi", 2016)
 const favBook2 = new book2("Everything Good", "Rita ora", 2014)
 const myFav = favBook.getInfo()
 const myFav2 = favBook2.getInfo()


 console.log(favBook)
 console.log(favBook2)
console.log(myFav)
console.log(myFav2)
 

function ind(firstName, lastName, pl) {
  this.firstName = firstName
  this.lastName = lastName
  this.pl = pl

  this.getind = function() {
    return `${this.firstName} ${this.lastName} loves ${this.pl}`
  }
}


const person1 = new ind("John", "Uno", "js")
const person3 = new ind("guy", "lee", "JAva")

console.log(person1)
console.log(person1.getind( ))
console.log(person3.getind())





function People(name, age, gender) {
  this.name = name
  this.age = age
  this.gender = gender

  this.getPep = function() {
    return `${this.name} is ${this.age} yrs old ${this.gender}`
  }
}


const myPep = new People("Sophia bot", 27, "girl")

console.log(myPep.getPep())



function Car(model, year, color) {
  this.model = model
  this.year = year
  this.color = color

  this.start = function() {
    return `Starting the ${this.color} ${this.model}`
  }

  this.stop = function() {
    return `Stopping the ${this.color} ${this.model}`
  }

}


const myCar = new Car("Benz", 2024, "Black")
const myCar2 = new Car("Lamborghini",2018, "Teal"  )


console.log(myCar)
console.log(myCar.start() )
console.log(myCar.stop() )
console.log(myCar2.start() )
console.log( myCar2.stop())



//Object.create

let person4 = {

  greet: function( ) {
    console.log(`Hello my name is ${this.firstName} ${this.lastName}`)
  },
}

const Mikel = Object.create(person4);
Mikel.firstName = "Mikel"
Mikel.lastName = "Obi"
Mikel.greet();


let micheal = Object.create(person4, {
  firstName: {value: "Micheal" },
  lastName: {value : "Jordan"}
})

micheal.greet()

console.log(Mikel)



const obj1 = {}
console.log(obj1)






Array.prototype.pop = function () {
  return "Pop it up baby"
};

const myArr1 = ["one", "two", "three"]
console.log(myArr1.pop())
console.log(myArr1)




//Class Declaration 



class Hero{
  constructor (name, level) {
    this.name = name
    this.level = level

    this.greet = function () {
      return `Hello, I'm ${this.name} from level ${this.level}`
    }

  }
}


const superH = new Hero("SuperMan", "50")
const BatM = new Hero("BatMan", "34")

console.log(superH)
console.log(BatM.greet())



class Mega extends Hero{
  constructor(name, level, spell) {
    super(name, level) 
    this.spell = spell

    
  }
}

const Ben = new Mega("Ben 10", 68, "Omintrix")
console.log(Ben)
console.log(Ben.greet())










//Abstrction class
class Animal {
  constructor(name) {
    this.name = name
  }


  //Abstract method (to be implemented by subclasses)
  makeSound() {
    throw new Error("Method (makeSound) must be implemented")
  }
}


class Dog extends Animal{
  constructor (name) {
    super(name)
  }

  //implementing the abstract method
  makeSound() {
    return "Woff !"
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name)
  }

  makeSound() {
    return "Meow"
  }
}

const dog = new Dog("Buddy")
console.log(dog)
console.log(dog.makeSound())

const cat = new Cat("Whiskers")
console.log(cat)
console.log(cat.makeSound())






function checkNumber(number) {
  return new Promise((resolve, reject) => {
    if (number % 2 == 0) {
      resolve(` ${number} is an even number`)
    } else {
        reject(`Error: ${number} is an odd number`)
      }

  })
}

 
const toCheckNumber = 10


checkNumber(toCheckNumber) 
.then((message) => {
  console.log(`Sucess: ${message}`)
})
.catch((error) => {
  console.log(`${error}`)
}  )


//WRONG EXERCISE SYntax
/*
console.log('Start')

function getUserDataFromDB(name ) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Valid Name')
      resolve(`${name}`)
    }, 2000)
  })
}

function getUserHobbies(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('valid Hobbies')
      resolve('name')
    }, 2000)
    
  })
}


const nameDB = "Micheal"
const userHobbies = ['football','singing']

getUserDataFromDB(nameDB)
.then((message) => {
   console.log(`${nameDB}`)
})

getUserHobbies(userHobbies)
.then((message) => {
  console.log(`${userHobbies}`)
})

console.log('end')

*/



//RIGHT EXERCISE SYNTAX
/*
console.log('START')

function getUserDataFromDB(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Valid Name')
      resolve(name)
    }, 2000)
  })
} 

function getUserHobbies() {
   return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Getting user Hobbies")
      resolve(["Football", "Singing", "Solving Math" ])
    }, 2000)
   })
}


getUserDataFromDB("Micheal")
.then((name) => getUserHobbies(name))
.then((hobby) => console.log(hobby))
.catch(err => console.log(err))


console.log('END')
*/



//ASYNC AND AWAIT REFacor

console.log('START')

function getUserDataFromDB(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Valid Name')
      resolve(name)
    }, 2000)
  })
} 

function getUserHobbies() {
   return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Getting user Hobbies")
      resolve(["Football", "Singing", "Solving Math" ])
    }, 2000)
   })
}


async function getEveryInfo() {
  try{
    const data = await getUserDataFromDB('Micheal')
    const hobby = await getUserHobbies(name)
     console.log(hobby)

  } catch(error) {
    console.log('Error: ${error')
  }
}


getEveryInfo()


const result = document.querySelector(".results")


async function renderData() {
  try{
    const response = await fetch("data.json")
    if (!response.ok) throw Error(response.statusText)
      const data = await response.json()
    
     result.textContent = data.name
     result.textContent = data.age
  } catch (error) {
    console.log(error)
  }
}

renderData()





