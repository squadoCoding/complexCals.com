const mainInput = document.getElementById("inputMain");
const pPercentOfX = document.getElementById("px");
const xWhatPercentOfY = document.getElementById("xy");
const result = document.getElementById("result");
const calStatements = result.querySelector(".resTxt");
const calculations = result.querySelector(".resCal");

// console.log(percentage("xy", 10, null, 5));
// console.log(percentage("px", 10, 50, null));
const saperateWords = (string) => {
  let returnArr = string.split(" ");
  return returnArr;
};

const putPPercentOfX = () => {
  let nums = saperateWords(mainInput.value);
  nums.forEach((num) => {
    num = Number.parseFloat(num);
  });
  calStatements.innerHTML = `<p>The formula to find the p% of x = x/100 X p</p>
                             <p>So, fitting ${nums[0]} and ${nums[1]} (p = ${
    nums[0]
  }, x = ${nums[1]}) we get ${nums[0]}% of ${nums[1]} = ${nums[1]} / 100 X ${
    nums[0]
  }
                             <p>= ${percentage("px", nums[1], nums[0], null)}`;
};
const putXWhatPercentOfY = () => {
  let nums = saperateWords(mainInput.value);
  nums.forEach((num) => {
    num = Number.parseFloat(num);
  });
  calStatements.innerHTML = `<p>The formula to find that x is what percent of y = x / y X 100</p>
                             <p>So, fitting ${nums[0]} and ${nums[1]} (x = ${
    nums[0]
  }, y = ${nums[1]}) we get ${nums[0]} is what percent of ${nums[1]} = ${
    nums[0]
  } / 100 X ${nums[1]}
                             <p>= ${percentage("xy", nums[1], null, nums[0])}%`;
};

pPercentOfX.addEventListener("click", putPPercentOfX);
xWhatPercentOfY.addEventListener("click", putXWhatPercentOfY);
