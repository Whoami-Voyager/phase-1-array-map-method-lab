const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


const titleCased = () => {
    const myArray = tutorials.map(function (tutorial) {
    // console.log("This is just plain old tutorial: ", tutorial)
    const arrayOfWords = tutorial.split(" ")
    // console.log("This is the result of tutorial.split: ", tutorial.split(" "))
    const capitolizedArray = arrayOfWords.map(function (word) {
      // console.log("Uppercase Ong ong fr fr:", word.slice(0, 1).toUpperCase()+ word.slice(1))
      return word.slice(0, 1).toUpperCase()+ word.slice(1)
      // console.log("Word is the bird:", )
    })
    // console.log(capitolizedArray.join(" "))
    return capitolizedArray.join(" ")
  })
  // console.log(myArray)
  return myArray
}
