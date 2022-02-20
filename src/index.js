module.exports = function check(str, bracketsConfig) {
  let bracketsArray = bracketsConfig.join(',').split(',')
  let stackArray = []
  let count = 0
  for (let bracket of str) {
      let next = bracketsArray[bracketsArray.indexOf(bracket) + 1]
      let tech = bracketsArray[bracketsArray.indexOf(bracket)]
      let pred = bracketsArray[bracketsArray.indexOf(bracket) - 1]
      if (bracketsArray.indexOf(bracket) % 2 === 0 && stackArray[stackArray.length-1] !== next){
          stackArray.push(bracket)
          count += 1
      } else 
      if (stackArray[stackArray.length-1] === pred || stackArray[stackArray.length-1] === next || stackArray.length === 0) {
          stackArray.pop()
          count -= 1
      }
  }
  console.log(stackArray.length)
  return stackArray.length === 0 && count === 0 ? true : false;
}
