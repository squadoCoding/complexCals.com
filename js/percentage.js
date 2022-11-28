const mainInput = document.getElementById("inputMain");
const pPercentOfX = document.getElementById("px");
const xWhatPercentOfY = documant.getElementById("xy");
const result = document.getElementById("result");
const calStatements = result.querySelector(".resTxt");
const calculations = result.querySelector(".resCal");

// console.log(percentage("xy", 10, null, 5));
// console.log(percentage("px", 10 50, null));
const putPPercentOfX = () => {
  let p = mainInput.value;

  calStatements.innerHTML = `<p>The formula to find the p% of x = x/100 X p</p>
                             <p>So, fitting `;
};

pPercentOfX.addEventListener("click", putPPercentOfX);
