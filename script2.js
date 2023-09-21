let displayValue = "0";

function appendToDisplay(value) {
    if (displayValue === "0" && value !== "+" && value !== "-" && value !== "*" && value !== "/") {
        displayValue = value;
    } else {
        displayValue += value;
    }
    document.getElementById("display").value = displayValue;
}

function clearDisplay() {
    displayValue = "0";
    document.getElementById("display").value = displayValue;
}

function calculateResult() {
    try {
        displayValue = eval(displayValue).toString();
        document.getElementById("display").value = displayValue;
    } catch (error) {
        displayValue = "Error";
        document.getElementById("display").value = displayValue;
    }
}