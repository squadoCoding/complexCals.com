const isPrime = (num) => {
  for (let i = 2; i <= num / 2; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
};

const getSmallestPrimeFactor = (num) => {
  for (let i = 2; i <= num / 2; i++) {
    if (num % i == 0 && isPrime(i)) {
      return i;
    }
  }
  return num;
};

const cube = (num) => {
  return `${num}x${num}x${num} = ${num ** 3}`;
};

const getPrimeFactors = (num) => {
  let primeFactors = [];
  let remainNums = [];
  let primeFactor = getSmallestPrimeFactor(num);
  while (num != 1) {
    primeFactors.push(primeFactor);
    remainNums.push(num);
    num = num / primeFactor;
    primeFactor = getSmallestPrimeFactor(num);
  }
  remainNums.push(1);
  return [primeFactors, remainNums];
};

const getPrimeFactorSTable = (primeFactors, remainNums) => {
  let returnValue = `<table class="lHTable">\n`;
  for (let i = 0; i < primeFactors.length; i++) {
    returnValue =
      returnValue +
      `<tr>\n<td>${primeFactors[i]}</td><td>${remainNums[i]}</td></tr>`;
  }
  returnValue =
    returnValue +
    `<tr>\n<td></td><td>${remainNums[remainNums.length - 1]}</td></tr>`;
  returnValue = returnValue + `</table>`;
  return returnValue;
};
