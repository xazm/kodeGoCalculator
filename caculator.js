// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Calculator</title>
// </head>
// <body>

//     <label for="input1">Input 1:</label>
//     <input type="text" id="input1" />

//     <label for="input2">Input 2:</label>
//     <input type="text" id="input2" />

//     <button onclick="calculate()">Calculate</button>

//     <p id="resultAddition"></p>
//     <p id="resultSubtraction"></p>
//     <p id="resultMultiplication"></p>
//     <p id="resultDivision"></p>

//     <script>
const calculate = () => {
  // Get input values and parse them as numbers
  const input1 = parseFloat(document.getElementById("input1").value);
  const input2 = parseFloat(document.getElementById("input2").value);

  // Arrow functions for addition, subtraction, multiplication, and division
  const addition = (a, b) => a + b;
  const subtraction = (a, b) => a - b;
  const multiplication = (a, b) => a * b;
  const division = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");

  // Display results in corresponding paragraphs
  document.getElementById("resultAddition").innerText = `Addition: ${addition(
    input1,
    input2
  )}`;
  document.getElementById(
    "resultSubtraction"
  ).innerText = `Subtraction: ${subtraction(input1, input2)}`;
  document.getElementById(
    "resultMultiplication"
  ).innerText = `Multiplication: ${multiplication(input1, input2)}`;
  document.getElementById("resultDivision").innerText = `Division: ${division(
    input1,
    input2
  )}`;
};
//     </script>

// </body>
// </html>
