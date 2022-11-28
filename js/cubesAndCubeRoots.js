const result = document.getElementById("result");
const calStatements = result.querySelector(".resTxt");
const calculations = result.querySelector(".resCal");
const mainInput = document.getElementById("inputMain");

const putCube = () => {
  if (mainInput.value != "") {
    calStatements.innerText = cube(Number(mainInput.value));
    calculations.innerHTML = "";
  } else {
    calculations.innerHTML = "";
    calStatements.innerHTML =
      "You have not enterde your question, so please enter it to see the calculated result.";
  }
};

const putIsPerfectCube = () => {
  const primeFacts = getPrimeFactors(mainInput.value);
  const numsToCalRoot = [];

  calStatements.innerText = `Writing ${mainInput.value} as its prime factors we get`;
  calculations.innerHTML = getPrimeFactorsTable(primeFacts[0], primeFacts[1]);
  calStatements.innerText += `\n${mainInput.value} = ${primeFacts[0].join(
    "x"
  )}`;

  var unGrouped = primeFacts[0].map((value, index, arr) => {
    let occuredNumOfTimes = 1;

    for (let i = index + 1; i < arr.length; i++) {
      if (value == arr[i]) {
        occuredNumOfTimes++;
        delete arr[i];

        if (occuredNumOfTimes % 3 == 0) {
          numsToCalRoot.push(Number(value));
        }
      }
    }

    if (occuredNumOfTimes % 3 != 0) {
      return Number(value);
    }
  });
  unGrouped = unGrouped.filter((value) => {
    return typeof value == "number";
  });
  console.log(numsToCalRoot);
  if (unGrouped.length == 0) {
    let cubeRoot = numsToCalRoot.reduce((a, b) => {
      return a * b;
    });
    calStatements.innerText += `\n\nAs we can see grouping prime factors of ${mainInput.value}`;
    calStatements.innerText += `\nin groups of three, no number remains unpaired.`;
    calStatements.innerText += `\n\nSo, ${mainInput.value} is a perfect cube`;
    calStatements.innerText += `\n\n${numsToCalRoot.join("x")} = ${cubeRoot}`;
    calStatements.innerText += `\nAnd hence, ${mainInput.value} is the cube of ${cubeRoot}`;
  } else {
    calStatements.innerText += `\n\nAs we can see grouping prime factors of ${mainInput.value}`;
    calStatements.innerText += `\nin groups of three, ${unGrouped} remain unpaired.`;
    calStatements.innerText += `\n\nSo, ${mainInput.value} is not a perfect cube`;
  }
};
