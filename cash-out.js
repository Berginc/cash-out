// Cash Out Calculator js
// Split into Cash Out Function, Hedging Function, Input Managament

function getDecimalPrice(fraction) {
  const fields = fraction.split("/");
  const num = fields[0];
  const denom = fields[1];
  return num / denom + 1;
}

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

// Cash Out Function
function cashOutValue(currentOdds, originalOdds, stake) {
  if (currentOdds.includes("/") || originalOdds.includes("/")) {
    currentOdds = getDecimalPrice(currentOdds);
    originalOdds = getDecimalPrice(originalOdds);
  }

  const cashOut = (originalOdds * stake) / currentOdds;
  const hedge = cashOut - stake;
  const liability = currentOdds * cashOut;
  const cashOutSummary = `Your cash out is €${cashOut}, from your stake of €${stake}. If you lay €${cashOut} on a Betting Exchange, you'll lock in €${hedge} profit. Note: You'll need a balance of €${liability} to lay this bet`;
  return cashOutSummary;
}
