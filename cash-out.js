// Cash Out Function
function cashOutValue(currentOdds, originalOdds, stake) {
  const cashOut = `Your true cash out from €${stake} is €${
    (originalOdds * stake) / currentOdds
  }`;
  return cashOut;
}

// Input
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  let oddsNow = document.getElementById("oddsNow").value;
  let oddsPlaced = document.getElementById("oddsPlaced").value;
  let stake = document.getElementById("stake").value;

  let result = (document.getElementById("result").value = cashOutValue(
    oddsNow,
    oddsPlaced,
    stake
  ));
});

console.log("Wow");
console.log("Fuck Yeah");
