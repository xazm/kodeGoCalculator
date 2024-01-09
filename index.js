const calculate = () => {
  const num1 = parseInt(document.getElementById("num1").value);
  const num2 = parseInt(document.getElementById("num2").value);

  addition = (a, b) => {
    return a + b;
  };
  subtraction = (a, b) => {
    return a - b;
  };
  multiplication = (a, b) => {
    return a * b;
  };
  divition = (a, b) => {
    return a / b;
  };

  result = [
    `<p> Addition:  ${addition(num1, num2)} </p>
    <p> Subtraction:  ${subtraction(num1, num2)} </p>
    <p> Subtraction:  ${multiplication(num1, num2)} </p>
    <p> Subtraction:  ${divition(num1, num2)} </p>`,
  ];

  // const result1 = addition(num1, num2);
  // console.log(result1);
  document.getElementById("result").innerHTML = result;
};
