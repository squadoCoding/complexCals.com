const cals = Array.from(document.getElementsByClassName("cal"));
cals.forEach((cal) => {
  Array.from(cal.getElementsByClassName("btnCal")).forEach((btn) => {
    btn.addEventListener("click", () => {
      let command = btn.innerText;
      const inp = cal.querySelector("input");
      if (command == "<=") {
        let tempTxt = inp.value;
        inp.value = "";
        for (let i = 0; i <= tempTxt.length - 2; i++) {
          inp.value += tempTxt[i];
        }
      } else if (command == "C") {
        inp.value = "";
      } else if (command == "=") {
        let ans = eval(inp.value.replace("x", "*"));
        if (ans == undefined) {
          inp.value = "invalid expression..";
        } else {
          inp.value = ans;
        }
      } else {
        inp.value += command;
      }
    });
  });
});
