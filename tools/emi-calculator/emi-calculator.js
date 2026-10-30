
const loanAmountInput = document.getElementById("loanAmount");
const interestRateInput = document.getElementById("interestRate");
const loanYearsInput = document.getElementById("loanYears");

const monthlyEMI = document.getElementById("monthlyEMI");
const totalInterest = document.getElementById("totalInterest");
const totalPayment = document.getElementById("totalPayment");
const message = document.getElementById("message");

function formatCurrency(value) {
    return "₹" + value.toLocaleString("en-IN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

document.getElementById("calculateBtn").addEventListener("click", function () {

    const principal = Number(loanAmountInput.value);
    const annualRate = Number(interestRateInput.value);
    const years = Number(loanYearsInput.value);

    if (
        loanAmountInput.value.trim() === "" ||
        interestRateInput.value.trim() === "" ||
        loanYearsInput.value.trim() === ""
    ) {
        message.textContent = "Please fill in all three fields.";
        return;
    }

    if (
        !Number.isFinite(principal) ||
        !Number.isFinite(annualRate) ||
        !Number.isFinite(years) ||
        principal <= 0 ||
        annualRate < 0 ||
        years <= 0
    ) {
        message.textContent = "Enter a valid loan amount, interest rate and duration.";
        return;
    }

    const months = years * 12;
    const monthlyRate = annualRate / 12 / 100;

    let emi;

    if (monthlyRate === 0) {
        emi = principal / months;
    } else {
        const factor = Math.pow(1 + monthlyRate, months);
        emi = principal * monthlyRate * factor / (factor - 1);
    }

    const payment = emi * months;
    const interest = payment - principal;

    monthlyEMI.textContent = "Monthly EMI: " + formatCurrency(emi);
    totalInterest.textContent = "Total Interest: " + formatCurrency(interest);
    totalPayment.textContent = "Total Payment: " + formatCurrency(payment);

    message.textContent = "EMI calculated successfully!";
});

document.getElementById("clearBtn").addEventListener("click", function () {
    loanAmountInput.value = "";
    interestRateInput.value = "";
    loanYearsInput.value = "";

    monthlyEMI.textContent = "Monthly EMI: ₹0.00";
    totalInterest.textContent = "Total Interest: ₹0.00";
    totalPayment.textContent = "Total Payment: ₹0.00";

    message.textContent = "Values cleared.";
});
