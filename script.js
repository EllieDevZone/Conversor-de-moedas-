const USD = 4.87;
const EUR = 5.32;
const GBP = 6.08;

const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const resultElement = document.getElementById("result"); 


amount.addEventListener("input", () => {
  const numericValue = amount.value.replace(/\D+/g, "");
  amount.value = numericValue;
});

form.onsubmit = function (event) {
  event.preventDefault();

 
  if (!amount.value.trim()) {
    alert("Por favor, insira um valor válido.");
    return;
  }

  const numericAmount = parseFloat(amount.value); 

  switch (currency.value) {
    case "USD":
      convertCurrency(numericAmount, USD, "US$");
      break;
    case "EUR":
      convertCurrency(numericAmount, EUR, "€");
      break;
    case "GBP":
      convertCurrency(numericAmount, GBP, "£");
      break;
    default:
      alert("Moeda inválida.");
  }
};

function convertCurrency(amount, exchangeRate, symbol) {
  const convertedValue = (amount / exchangeRate).toFixed(2); 
  const resultText = `${symbol} ${convertedValue}`;
  
  console.log(resultText);  
  resultElement.textContent = resultText; 
}