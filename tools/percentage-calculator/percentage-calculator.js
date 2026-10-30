
const percentageInput = document.getElementById("percentage");
const numberInput = document.getElementById("number");
const result = document.getElementById("result");
const message = document.getElementById("message");

document.getElementById("calculateBtn").addEventListener("click", function () {
    const percentage = Number(percentageInput.value);
    const number = Number(numberInput.value);

    if (percentageInput.value.trim() === "" || numberInput.value.trim() === "") {
        message.textContent = "Please enter both values.";
        result.textContent = "Your result will appear here.";
        return;
    }

    const answer = (percentage / 100) * number;

    result.textContent = percentage + "% of " + number + " = " + answer;
    message.textContent = "Calculation completed!";
});

document.getElementById("clearBtn").addEventListener("click", function () {
    percentageInput.value = "";
    numberInput.value = "";
    result.textContent = "Your result will appear here.";
    message.textContent = "Values cleared.";
});
