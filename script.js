
const display = document.getElementById("display");

//Display the input
appendToDisplay= (input) => {
    display.value += input;
}

//calculate
calculate= () => {
//   display.value=eval(display.value); error code
    try {
        display.value=eval(display.value);
    }catch(error){
        display.value="Error";
    }
}

//clearDisplay
clearDisplay= () => {
  //access value
  display.value = "";
}