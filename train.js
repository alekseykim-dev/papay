// K-TASK: Footbool jamoasini ochkosini hisoblash
// Argumentlar: wins, draws, losses

const { group } = require("mongodb/lib/operations/collection_ops");

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

//////////////////////////////////////////////////////////////




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

// const str = ['apple, mango, orange']
// // const words = str.split(' ')
// // console.log(words)

// // const spl = words.slice(1, 2)
// // console.log(spl)

// console.log(str)
// str.splice(1, 0, 'banana')
// console.log(str)

//////////////////////////////////////////////////////////////




// ...M-Task: shunday Member class tuzing, uning bir private counts nomli state bolsin, hamda bu classni 3ta methodlari bolsin, ular addMember, removeMember, inform.

// 📩 New message from group :

// 📌  Masalan: member.addMember(5) hech qanday log chiqmasin, member.removeMember(2) bunda ham log kerakmas va member.inform() bizga memberlar soni 3ta chiqarsin.

class Member {
  // state  == public class field || private class field
  private_counts = 0;

  addMember(num) {
    this.private_counts += num;
  }
  removeMember(num) {
    this.private_counts -= num;
  }
  inform() {
    console.log(`Current member count: ${this.private_counts}`);
  }
}

const member = new Member();
member.addMember(5);
member.inform();
member.removeMember(2);
member.inform();
member.addMember(10);
member.inform();
member.removeMember(1);
member.inform();












let num = [4,1,2,3,1,0,5];

function solution(num) {
  let jumps = 0;
  let maxReach = 0;
  let steps = 0;
  for (let i = 0; i < num.length; i++) {
    if (maxReach < i) {
      return -1;
    }
    if (i + num[i] > maxReach) {
      maxReach = i + num[i];  //i = current position
      jumps = steps + 1; 
      steps = jumps;
    }
    if (i >= num.length - 1) {
      return jumps; //returns the number of steps on the last stone
    }
  }
  return -1;    //in none of the above works
}
console.log(solution(num));
// console.log(result); // Output: 3


// function solution(num) {
//   let jumps = 0;
//   let step = 0;
//   for (let i = 0; i < num.length - 1; i++) {
//     step = Math.max(step, i + num[i]);
//     jumps++;
//     if (i === step) {
//       return -1;
//     }
//     if (i === step - num[i]) {
//       step = i + num[i];
//       jumps = 1;
//     }
//   }
//   return jumps;
// }





let nums = [4,1,2,3,1,0,5];

function can(nums) {
  // Keep track of max distance traveled so far
  let max = 0;
  let maxR = 0
  let jump = 0
  for(let i=0;i<nums.length;i++){
      if(maxR < i){
        return -1
      }
      if(i + nums[i] > maxR) {
        maxR = i + nums[i]
        jump = max + 1
        max = jump
      }
      if(i === nums.length - 1){
        return jump
      }
  }
  return -1;
};

console.log(can(nums))









// let nums = [4,1,2,3,1,0,5];

// function can(nums) {
//   // Keep track of max distance traveled so far
//   let max = 0;
//   for(let i=0;i<nums.length;i++){
//       // The only time that max < i is when we are at 0 and we cannot move forward
//       if(i>max) return false;
//       // Move the max pointer the maximum 
//       max = Math.max(nums[i]+i,max);
//   }
//   // If we did not get stuck at a 0 then return true
//   return true;
// };

// console.log(can(nums))




// // Set up the scene, camera, renderer, and lighting
// var scene = new THREE.Scene();
// var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
// var renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);
// var light = new THREE.PointLight(0xffffff, 1, 100);
// light.position.set(0, 0, 50);
// scene.add(light);

// // Create a sphere geometry
// var sphereGeometry = new THREE.SphereGeometry(5, 32, 32);
// var sphereMaterial = new THREE.MeshLambertMaterial({color: 0x00ff00});
// var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
// sphere.position.set(0, 0, 0);
// scene.add(sphere);

// // Animate the sphere using the requestAnimationFrame function
// var animate = function () {
//   requestAnimationFrame(animate);

//   sphere.rotation.x += 0.01;
//   sphere.rotation.y += 0.01;

//   renderer.render(scene, camera);
// };

// animate();
