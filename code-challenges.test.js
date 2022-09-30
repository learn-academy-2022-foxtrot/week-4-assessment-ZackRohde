// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. 
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("shuffleArray", () => {
  it("takes in an array, removes the first item from the array and shuffles the remaining content.", () => {
    expect(shuffleArray(colors1)).toEqual(expect.arrayContaining["yellow", "blue", "pink", "green"])
    expect(shuffleArray(colors2)).toEqual(expect.arrayContaining["saffron", "aquamarine", "periwinkle", "indigo", "ochre"])
  })
})

// Good Fail!
// ReferenceError: shuffleArray is not defined

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// b) Create the function that makes the test pass.

// PSUEDO CODE:
// Create a function named shuffleArray
// .shift(1,5) to remove the first item from the array
// I need to figure out how to shuffle the array after I slice purple from 
// console log to check if it's working through node 
// yarn jest to test my pass or fail

const shuffleArray = () => {
  let shuffledArray = colors1.sort(() => Math.random() - 0.5)
  return colors1.slice(1, 5)
}
console.log(shuffleArray(colors1))

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the net total of votes.

// a) Create a test with expect statements for each of the variables provided.

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31


// b) Create the function that makes the test pass.


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]


// b) Create the function that makes the test pass.