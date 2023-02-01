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

function calculate(str) {
  let action = [];
  let operators = [];
  let currentValue = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === "+" || char === "-" || char === "*" || char === "/") {
      action.push(parseInt(currentValue));
      currentValue = "";
      operators.push(char);
    } else {
      currentValue += char;
    }
  }
  action.push(parseInt(currentValue));

  while (operators.length > 0) {
    let operator = operators.pop();
    let b = action.pop();
    let a = action.pop();

    if (operator === "+") {
      action.push(a + b);
    } else if (operator === "-") {
      action.push(a - b);
    } else if (operator === "*") {
      action.push(a * b);
    } else if (operator === "/") {
      action.push(a / b);
    }
  }
  return action[0];
}

console.log(calculate("1+1"));
console.log(calculate("4*5"));
console.log(calculate("10-1"));
console.log(calculate("20/2"));










// const str = ['apple, mango, orange']
// // const words = str.split(' ')
// // console.log(words)

// // const spl = words.slice(1, 2)
// // console.log(spl)

// console.log(str)
// str.splice(1, 0, 'banana')
// console.log(str)


