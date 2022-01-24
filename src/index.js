module.exports = function reverse (n) {
  let result = '';
  let nString = String(n);

  for (let i = nString.length - 1; i >= 0; i -= 1) {
      if (nString[i] !== '-') {
        result = `${result}${nString[i]}`;
      }     
  }

  return Number(result);
}
