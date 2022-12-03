const lcmBtn = document.getElementById("lcm");
const hcfBtn = document.getElementById("hcf");
const resultCal = document.getElementsByClassName("resCal")[0];
const resultTxt = document.getElementsByClassName("resTxt")[0];
const mainInput = document.getElementById("inputMain");

const saperateByQuoma = (string) => {
  let returnArr;
  if (string.includes(",")) {
    returnArr = string.split(",");
  } else if (string.includes(" ")) {
    returnArr = string.split(" ");
  }
  returnArr.forEach((num) => {
    num = Number.parseFloat(num);
  });
  return returnArr;
};
const genTable = (factors, numsArray) => {
  let returnValue = `<table class="lHTable">\n`;
  for (let i = 0; i < factors.length; i++) {
    returnValue =
      returnValue +
      `<tr>\n<td>${factors[i]}</td><td>${numsArray[i].join(", ")}</td></tr>`;
  }
  returnValue =
    returnValue +
    `<tr>\n<td></td><td>${numsArray[numsArray.length - 1].join(
      ", "
    )}</td></tr>`;
  returnValue = returnValue + `</table>`;
  return returnValue;
};

const lcm = () => {
  if (mainInput.value == "") {
    resultCal.innerHTML = `<p>Please, enter numbers to get their LCM or HCF.</p>`;
  } else {
    // Main logic
    let numsArr = saperateByQuoma(mainInput.value);
    let numsStepsArr = [[...numsArr]];
    let factorsArr = [];

    let isCalculationOver = false;
    while (!isCalculationOver) {
      let dividingNum;
      let finalAnswer;

      for (let i = 0; i < numsArr.length; i++) {
        if (dividingNum == undefined && numsArr[i] != 1) {
          for (let j = 2; j <= numsArr[i]; j++) {
            if (numsArr[i] % j == 0) {
              dividingNum = j;
              break;
            }
          }
          break;
        }
      }

      factorsArr.push(dividingNum);
      numsArr.forEach((num, index) => {
        if (num != 1 && num % dividingNum == 0) {
          numsArr[index] = num / dividingNum;
        }
      });

      let areTillNowOne = true;
      for (let i = 0; i < numsArr.length; i++) {
        if (numsArr[i] != 1) {
          areTillNowOne = false;
          break;
        }
      }
      if (areTillNowOne) {
        isCalculationOver = true;
      }
      numsStepsArr.push([...numsArr]);
    }
    finalAnswer = factorsArr.reduce((preValue, curValue) => {
      return preValue * curValue;
    });

    // Displaying the answer
    resultCal.innerHTML = genTable(factorsArr, numsStepsArr);
    resultTxt.innerHTML = `<div>So, LCM of ${numsStepsArr[0].join(", ")}</div>
                            <div>= ${factorsArr.join(
                              " X "
                            )} = ${finalAnswer}</div>`;
  }
};

lcmBtn.addEventListener("click", lcm);
