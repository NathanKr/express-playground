let incomes;
let incomesDivObj = document.getElementById("id_incomes");

function getIncomes() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      incomes = JSON.parse(this.responseText);
      incomesDivObj.innerHTML = "";
      for (let index = 0; index < incomes.length; index++) {
        const element = incomes[index];
        incomesDivObj.innerHTML += `<p>${element.description} , ${element.amount}</p>`;
      }
    }
  };
  xhttp.open("GET", "/incomes");
  xhttp.send();
}
