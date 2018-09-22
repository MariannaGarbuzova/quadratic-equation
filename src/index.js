module.exports = solveEquation;

function solveEquation(equation) {
  const params = getParameters(equation);
  return solove(params[0], params[1], params[2]);
}

function getParameters(equation) {
  var r = /(-?\d+)\s\*\sx\^2\s([-,+]{1})\s(\d+)\s\*\sx\s([-,+]{1})\s(\d+)/.exec(equation);
  return [parseInt(r[1], 10), parseInt(r[2] + r[3], 10), parseInt(r[4] + r[5], 10)];
}

function solove(a, b, c) {
  const d = b * b - 4 * a * c;
  const ds = Math.sqrt(d);
  const x1 = (-b + ds)/(2 * a);
  const x2 = (-b - ds)/(2 * a);
  const s = [Math.round(x1), Math.round(x2)];
  s.sort((a,b) => a - b);
  return s;
}