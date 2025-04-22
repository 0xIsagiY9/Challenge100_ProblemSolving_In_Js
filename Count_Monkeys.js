function monkeyCount(n) {
  return Array.from(Array(n + 1).keys()).slice(1);
}

console.log(monkeyCount(10));
