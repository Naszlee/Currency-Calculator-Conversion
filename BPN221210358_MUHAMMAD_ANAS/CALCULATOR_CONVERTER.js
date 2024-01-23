<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Currency Conversion Calculator</title>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      text-align: center;
      margin: 50px;
      background-color: #f4f4f4;
    }

    h1 {
      color: #333;
    }

    .calculator-container {
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      padding: 20px;
      max-width: 400px;
      margin: 0 auto;
    }

    label {
      display: block;
      margin-bottom: 10px;
    }

    input, select {
      width: 100%;
      padding: 8px;
      box-sizing: border-box;
      margin-bottom: 20px;
    }

    .currency-selector input[type="radio"] {
      display: none;
    }

    .currency-selector label {
      display: inline-block;
      padding: 10px 20px;
      border-radius: 4px;
      cursor: pointer;
      background-color: #4caf50;
      color: #fff;
    }

    .currency-selector input[type="radio"]:checked + label {
      background-color: #2196f3; /* Change this color to blue */
      color: #fff;
    }

    button {
      background-color: #4caf50;
      color: #fff;
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      width: 100%;
    }

    button:hover {
      background-color: #45a049;
    }

    #result {
      font-weight: bold;
      margin-top: 20px;
    }
  </style>
</head>
<body style="background-image: url('../../../Users/Nashou/Downloads/travel.jpg');background-repeat: no-repeat;background-size: cover;background-attachment: fixed">

  <h1 style="color: gold">Currency Conversion Calculator</h1>

  <div class="calculator-container">
    <label for="amount">Amount:</label>
    <input type="number" id="amount" step="0.01" placeholder="Enter amount" required>

    <div class="currency-selector">
      <input type="radio" id="fromCurrencyUSD" name="fromCurrency" value="USD" checked>
      <label for="fromCurrencyUSD">USD</label>

      <input type="radio" id="fromCurrencyEUR" name="fromCurrency" value="EUR">
      <label for="fromCurrencyEUR">EUR</label>

      <input type="radio" id="fromCurrencyGBP" name="fromCurrency" value="GBP">
      <label for="fromCurrencyGBP">GBP</label>

      <input type="radio" id="fromCurrencyMYR" name="fromCurrency" value="MYR">
      <label for="fromCurrencyMYR">MYR</label>

      <input type="radio" id="fromCurrencyJPY" name="fromCurrency" value="JPY">
      <label for="fromCurrencyJPY">JPY</label>

      <input type="radio" id="fromCurrencyTHB" name="fromCurrency" value="THB">
      <label for="fromCurrencyTHB">THB</label>

      <input type="radio" id="fromCurrencyIDR" name="fromCurrency" value="IDR">
      <label for="fromCurrencyIDR">IDR</label>
    </div>

    <div class="currency-selector">
      <input type="radio" id="toCurrencyUSD" name="toCurrency" value="USD">
      <label for="toCurrencyUSD">USD</label>

      <input type="radio" id="toCurrencyEUR" name="toCurrency" value="EUR" checked>
      <label for="toCurrencyEUR">EUR</label>

      <input type="radio" id="toCurrencyGBP" name="toCurrency" value="GBP">
      <label for="toCurrencyGBP">GBP</label>

      <input type="radio" id="toCurrencyMYR" name="toCurrency" value="MYR">
      <label for="toCurrencyMYR">MYR</label>

      <input type="radio" id="toCurrencyJPY" name="toCurrency" value="JPY">
      <label for="toCurrencyJPY">JPY</label>

      <input type="radio" id="toCurrencyTHB" name="toCurrency" value="THB">
      <label for="toCurrencyTHB">THB</label>

      <input type="radio" id="toCurrencyIDR" name="toCurrency" value="IDR">
      <label for="toCurrencyIDR">IDR</label>
    </div>

    <button onclick="convertCurrency()">Convert</button>

    <p id="result"></p>
  </div>
	<div class="legend-container" style="color: ivory">
      <h2>Currency</h2>
      <p>USD - United States Dollar</p>
      <p>EUR - Euro</p>
      <p>GBP - British Pound Sterling</p>
      <p>MYR - Malaysian Ringgit</p>
      <p>JPY - Japanese Yen</p>
		<p>THB - Thailand Bhat</p>
		<p>IDR - Indonesian Rupees</p>
    </div>

  <script>
    function convertCurrency() {
      // Get user inputs
      var amount = parseFloat(document.getElementById('amount').value);
      var fromCurrency = document.querySelector('input[name="fromCurrency"]:checked').value;
      var toCurrency = document.querySelector('input[name="toCurrency"]:checked').value;

      // You can replace these with live exchange rates from an API
      var exchangeRates = {
        USD: { EUR: 0.85, GBP: 0.73, MYR: 4.08, JPY: 114.32, THB: 32.93, IDR: 14270 },
        EUR: { USD: 1.18, GBP: 0.86, MYR: 4.85, JPY: 129.16, THB: 36.99, IDR: 16016 },
        GBP: { USD: 1.38, EUR: 1.16, MYR: 5.67, JPY: 150.99, THB: 43.26, IDR: 18717 },
        MYR: { USD: 0.25, EUR: 0.21, GBP: 0.18, JPY: 26.52, THB: 7.64, IDR: 3311 },
        JPY: { USD: 0.0088, EUR: 0.0077, GBP: 0.0066, MYR: 0.0377, THB: 0.0287, IDR: 1244 },
        THB: { USD: 0.0304, EUR: 0.027, GBP: 0.0231, MYR: 0.13, JPY: 34.76, IDR: 433 },
        IDR: { USD: 0.00007, EUR: 0.00006, GBP: 0.00005, MYR: 0.0003, JPY: 0.0008, THB: 0.0023 }
      };

      // Perform the conversion
      var convertedAmount = amount * exchangeRates[fromCurrency][toCurrency];

      // Display the result
      document.getElementById('result').innerHTML = amount + ' ' + fromCurrency + ' is equal to ' + convertedAmount.toFixed(2) + ' ' + toCurrency;
    }
  </script>

</body>
</html>
