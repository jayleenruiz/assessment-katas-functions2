//1. Add (1 point)
//Write a function named "add" which takes two arguments 
//(as input variables) and returns their sum.
//You may use built-in operators in order to finish this kata.
//For example, calling add(2, 4) should return a result of 6.

function add(v, f) {
    return v + f
}

let j = add(5, 3)
let r = add(2, 9)

console.log(j, r)


//2. Multiply (2 points)
//Write a function named "multiply" which takes two arguments 
//(as input variables) and returns their product.
//You may not use built-in math operators or functions 
//(such as the * multiplication operator). Instead, you will 
//use a FOR loop which calls your add function from the first kata.
//For example, calling multiply(6, 4) should return a result
// of 24, which could be expressed by adding 6 to itself 4 times:
//6 + 6 + 6 + 6 = 24


// count = add(count, 1) is the same as count++
// i = add(i. a) is the same as i += a
function multiply(a, b) {
   let i = 0;
   for(let count = 0; count < b; count = add(count, 1)) {
       i = add(i, a)
   }
   return i
}
console.log(multiply(5, 3))



//3. Power/Exponentiation (2 points)
//Write a function named "power" which takes two arguments
//( x and n) and returns the the result of raising x to the nth power.
//You may not use built-in math operators or functions
//(such as the * multiplication operator), or the ** operator
//for power/exponentiation). Instead, you will re-use functions 
//you wrote in earlier katas to write this function.
//For example, if we called power(2, 8), we should return 256
//by multiplying 2 by itself 8 times:
//2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 = 256
//And to achieve the correct result for power(3, 4), we would
//want to multiply 3 by itself 4 times:
//3 * 3 * 3 * 3 = 81

function power(x, n) {
    let i = 1;
    for(let count = 0; count < n; count++) {
        i = multiply(i, x)
    }
    return i 
}
console.log(power(7, 4))

     

//4. Factorial (2 points)
//Write a function named "factorial" which takes a single
//argument and returns the factorial of that value.
//You may not use built-in math operators or functions 
//(such as the * multiplication operator). Instead, you will 
//re-use functions you wrote in earlier katas to write this function.
//A factorial multiplies a given number by every number below it. For
//example, "5 factorial" (usually symbolized by 5! in Mathematics) would be:
//5 * 4 * 3 * 2 * 1 = 120
//For example, calling factorial(4) should return a result of 24.

function factorial(r) {
    let total = 1
    for(i = 1; i <= r; i++){
    total = multiply(total,i)
  }
  return total
        
    }
console.log(factorial(3))