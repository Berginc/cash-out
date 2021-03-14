// Cash Out Calculator js
// Split into Cash Out Function, Hedging Function, Input Managament

// Cash Out Function
function cashOutValue(currentOdds, originalOdds, stake) {
  const cashOut = (originalOdds * stake) / currentOdds;
  const cashOutSummary = `Your cash out is €${cashOut}, from your stake of €${stake}. If you lay €${cashOut} on a Betting Exchange, you'll lock in €${
    cashOut - stake
  } profit. Note: You'll need a balance of €${
    currentOdds * cashOut
  } to lay this bet`;
  return cashOutSummary;
}

// console.log(HedgingCalculator(10, 20, 30));

//Hedge
// function hedgeAmount(cashOut, stake) {
//   const hedge = cashOut - stake;
//   return hedge;
// }

// console.log(hedgeAmount(10, 109));

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
