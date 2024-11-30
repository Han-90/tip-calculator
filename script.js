function calculateTip() {
  const bill = parseFloat(document.getElementById("bill").value);
  const tip = parseInt(document.getElementById("tip").value);
  const people = parseInt(document.getElementById("people").value);

  if (!bill || !tip || !people || people <= 0) {
    document.getElementById("result").innerText =
      "Bitte trage gültige Werte ein!";
    return;
  }

  const calculatedPercentage = 1 + tip / 100;
  const totalPerPerson = (bill / people) * calculatedPercentage;

  document.getElementById(
    "result"
  ).innerText = `Pro Person sind: €${totalPerPerson.toFixed(2)} zu bezahlen`;
  document
    .getElementById("reload-button")
    .addEventListener("click", function () {
      location.reload();
    });
}
