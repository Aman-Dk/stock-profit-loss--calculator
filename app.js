var output = document.querySelector('#output');
var costPrice = document.querySelector('#initialPrice');
var quantity = document.querySelector('#quantity');
var sellingPrice = document.querySelector('#currentPrice');

var calculate = document.querySelector('#calculate');

function inputHandler() {
  var cp = Number(costPrice.value);
  var quantities = Number(quantity.value);
  var sp = Number(sellingPrice.value);
  profitAndLossCalculate(cp, quantities, sp);
}

function profitAndLossCalculate(costPrice, quantity, sellingPrice) {
  if(costPrice > sellingPrice) {
    var loss = (costPrice - sellingPrice)* quantity;
    var lossPercentage = (loss/costPrice)*100;
    output.classList.remove('profit');
    output.classList.add('loss');
    showOutput(`You're in a loss of -${loss}, with a percentage of -${lossPercentage} `);

  } else if(sellingPrice > costPrice) {
    var profit = (sellingPrice - costPrice)* quantity;
    var profitPercentage = (profit/costPrice)*100;
    output.classList.remove('loss');
    output.classList.add('profit');
    showOutput(`You're in a profit of +${profit}, with a percentage of +${profitPercentage} `);
  } else {
    showOutput('try again');
  }
}

function showOutput(message) {
  output.innerHTML = message;
}

calculate.addEventListener('click', inputHandler);
