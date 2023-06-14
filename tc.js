function convertTemperature() {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");
    const kelvinInput = document.getElementById("kelvin");
    const resultDiv = document.getElementById("result");
  
    if (celsiusInput.value !== "") {
      const celsius = parseFloat(celsiusInput.value);
      const fahrenheit = (celsius * 9/5) + 32;
      const kelvin = celsius + 273.15;
      fahrenheitInput.value = fahrenheit.toFixed(2);
      kelvinInput.value = kelvin.toFixed(2);
    } else if (fahrenheitInput.value !== "") {
      const fahrenheit = parseFloat(fahrenheitInput.value);
      const celsius = (fahrenheit - 32) * 5/9;
      const kelvin = (fahrenheit + 459.67) * 5/9;
      celsiusInput.value = celsius.toFixed(2);
      kelvinInput.value = kelvin.toFixed(2);
    } else if (kelvinInput.value !== "") {
      const kelvin = parseFloat(kelvinInput.value);
      const celsius = kelvin - 273.15;
      const fahrenheit = (kelvin * 9/5) - 459.67;
      celsiusInput.value = celsius.toFixed(2);
      fahrenheitInput.value = fahrenheit.toFixed(2);
    } else {
      resultDiv.innerText = "Please enter a temperature value";
    }
  }