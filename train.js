// K-TASK: Footbool jamoasini ochkosini hisoblash
// Argumentlar: wins, draws, losses

// 1 ta wins uchun 3 ochko.
// 1 ta draws uchun 1 ochko
// 1 ta losses uchun 0 ochko berilishi kerak.
// Shunday function tuzingki u football ochkolarini hisoblab bersin.

// Masalan: FootBallPoints(3,4,2) return qilish kerak 13

// function point(wins, draws, losses) {
//   const win = wins * 3;
//   const draw = draws * 1;
//   const loss = losses * 0;
//   return win + draw + loss;
// }
// console.log(point(3, 4, 2));









// 📌  L-Task: String bolib kelgan argumentni ichidagi sonni hisoblab javobini butun qilib return qilsin. Masalan: Calculate("1+1") return qilsin 2, calculate("4*5") return qilsin 20.

// function calculate(str) {
//   let action = [];
//   let operators = [];
//   let currentValue = "";

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (char === "+" || char === "-" || char === "*" || char === "/") {
//       action.push(parseInt(currentValue));
//       currentValue = "";
//       operators.push(char);
//     } else {
//       currentValue += char;
//     }
//   }
//   action.push(parseInt(currentValue));

//   while (operators.length > 0) {
//     let operator = operators.pop();
//     let b = action.pop();
//     let a = action.pop();

//     if (operator === "+") {
//       action.push(a + b);
//     } else if (operator === "-") {
//       action.push(a - b);
//     } else if (operator === "*") {
//       action.push(a * b);
//     } else if (operator === "/") {
//       action.push(a / b);
//     }
//   }
//   return action[0];
// }

// console.log(calculate("1+1"));
// console.log(calculate("4*5"));
// console.log(calculate("10-1"));
// console.log(calculate("20/2"));







// function calculateExpression(expression) {
//   // Split the expression into an array of numbers and operators
//   let parts = expression.split(/\+|\-|\*|\//);
//   let operators = expression.match(/\+|\-|\*|\//g);
  
//   // Initialize the result with the first number in the expression
//   let result = parseInt(parts[0]);
  
//   // Loop through the rest of the numbers and perform the calculation based on the corresponding operator
//   for (let i = 1; i < parts.length; i++) {
//     switch (operators[i - 1]) {
//       case '+':
//         result += parseInt(parts[i]);
//         break;
//       case '-':
//         result -= parseInt(parts[i]);
//         break;
//       case '*':
//         result *= parseInt(parts[i]);
//         break;
//       case '/':
//         result /= parseInt(parts[i]);
//         break;
//     }
//   }

//   return result;
// }
// console.log(calculateExpression('1+1')); 



function calculate(expression) {
  let num1 = "";
  let num2 = "";
  let operator = "";
  let result = "";

  for (let i = 0; i < expression.length; i++) {
      let char = expression.charAt(i);
      if (!isNaN(char)) {
          if (operator === "") {
              num1 += char;
          } else {
              num2 += char;
          }
      } else {
          operator = char;
      }
  }
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  switch (operator) {
      case "+":
          result = num1 + num2;
          break;
      case "-":
          result = num1 - num2;
          break;
      case "*":
          result = num1 * num2;
          break;
      case "/":
          result = num1 / num2;
          break;
      default:
          throw new Error("Invalid operator: " + operator);
  }

  return result;
}


console.log(calculate('1+1'));
console.log(calculate('4*5'));
console.log(calculate("10/2"));
console.log(calculate("10-1"));
