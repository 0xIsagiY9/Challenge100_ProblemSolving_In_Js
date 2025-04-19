function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) z.push(x * i);
  return z;
}

function countByV2(x, n) {
  return Array.from(Array(n + 1).keys())
    .slice(1)
    .map((el) => el * x);
}

console.log(countByV2(2, 5));
