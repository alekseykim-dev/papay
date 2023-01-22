
// K-TASK: Footbool jamoasini ochkosini hisoblash
// Argumentlar: wins, draws, losses

// 1 ta wins uchun 3 ochko.
// 1 ta draws uchun 1 ochko
// 1 ta losses uchun 0 ochko berilishi kerak.
// Shunday function tuzingki u football ochkolarini hisoblab bersin.

// Masalan: FootBallPoints(3,4,2) return qilish kerak 13

function point (wins, draws, losses) {
  let win = wins * 3;
  let draw = draws * 1;
  let loss = losses * 0;
  return win + draw + loss
}
console.log(point(3, 4, 2));