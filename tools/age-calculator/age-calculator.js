
const birthDateInput = document.getElementById("birthDate");
const result = document.getElementById("result");
const message = document.getElementById("message");

document.getElementById("calculateBtn").addEventListener("click", function () {

    const birthDateValue = birthDateInput.value;

    if (birthDateValue === "") {
        message.textContent = "Please select your date of birth.";
        result.textContent = "Your age will appear here.";
        return;
    }

    const birthDate = new Date(birthDateValue + "T00:00:00");
    const today = new Date();

    if (birthDate > today) {
        message.textContent = "Date of birth cannot be in the future.";
        result.textContent = "Invalid date.";
        return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        const previousMonthDays = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        ).getDate();

        days += previousMonthDays;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    result.textContent =
        years + " Years, " +
        months + " Months, " +
        days + " Days";

    message.textContent = "Age calculated successfully!";
});

document.getElementById("clearBtn").addEventListener("click", function () {
    birthDateInput.value = "";
    result.textContent = "Your age will appear here.";
    message.textContent = "Date cleared.";
});
