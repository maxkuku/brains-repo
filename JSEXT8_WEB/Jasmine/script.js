const pow = (a, n) => {
  // a – число
  // n – основание степени

  if (a == null || n == null) {
    return null;
  }



  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= a;
  }

  return result;
  }

  module.exports = {
    pow: pow
  }