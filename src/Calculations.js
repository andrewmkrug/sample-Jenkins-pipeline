class TemperatureCalculations {
 toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  
 toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }
  
 tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }
   
}

class FizzBuzzCalculations {

  getValue(input) {
    if (input % 3 && input % 5 ) {
      return "FizzBuzz";
    }
    else if (input % 5) {
      return "Buzz";
    }
    else if (input % 3) {
      return "Fizz"
    }
    else {
      return 'Invalid input';
    }
  }

}

export default FizzBuzzCalculations;