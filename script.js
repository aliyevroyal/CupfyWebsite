document.getElementById("monthly").onclick = subscribeMonthly;
function subscribeMonthly() {
  document.getElementById("monthly").style.backgroundColor = "#14cc60";
  document.getElementById("monthly").style.color = "#f5f5f5";
  document.getElementById("yearly").style.backgroundColor = "#f5f5f5";
  document.getElementById("yearly").style.color = "#0a2e36";

  $("#YearlySubscription").css({ display: "none" });
  $("#MonthlySubscription").css({ display: "flex" });
}

document.getElementById("yearly").onclick = subscribeYearly;
function subscribeYearly() {
  document.getElementById("yearly").style.backgroundColor = "#14cc60";
  document.getElementById("yearly").style.color = "#f5f5f5";
  document.getElementById("monthly").style.backgroundColor = "#f5f5f5";
  document.getElementById("monthly").style.color = "#0a2e36";

  $("#MonthlySubscription").css({ display: "none" });
  $("#YearlySubscription").css({ display: "flex" });
}
