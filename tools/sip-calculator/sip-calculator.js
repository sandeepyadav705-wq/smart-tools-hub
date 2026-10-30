
const monthlyInvestmentInput = document.getElementById("monthlyInvestment");
const expectedReturnInput = document.getElementById("expectedReturn");
const investmentYearsInput = document.getElementById("investmentYears");

const investedAmount = document.getElementById("investedAmount");
const estimatedReturns = document.getElementById("estimatedReturns");
const totalValue = document.getElementById("totalValue");
const message = document.getElementById("message");

function formatCurrency(value) {
    return "₹" + value.toLocaleString("en-IN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

document.getElementById("calculateBtn").addEventListener("click", function () {

    const monthly = Number(monthlyInvestmentInput.value);
    const annualReturn = Number(expectedReturnInput.value);
    const years = Number(investmentYearsInput.value);

    if (
        monthlyInvestmentInput.value.trim() === "" ||
        expectedReturnInput.value.trim() === "" ||
        investmentYearsInput.value.trim() === ""
    ) {
        message.textContent = "Please fill in all three fields.";
        return;
    }

    if (
        !Number.isFinite(monthly) ||
        !Number.isFinite(annualReturn) ||
        !Number.isFinite(years) ||
        monthly <= 0 ||
        annualReturn < 0 ||
        years <= 0
    ) {
        message.textContent = "Please enter valid values.";
        return;
    }

    const months = Math.round(years * 12);
    const monthlyRate = annualReturn / 100 / 12;

    let futureValue;

    if (monthlyRate === 0) {
        futureValue = monthly * months;
    } else {
        futureValue = monthly *
            ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
            (1 + monthlyRate);
    }

    const invested = monthly * months;
    const returns = futureValue - invested;

    investedAmount.textContent = "Total Invested: " + formatCurrency(invested);
    estimatedReturns.textContent = "Estimated Returns: " + formatCurrency(returns);
    totalValue.textContent = "Total Value: " + formatCurrency(futureValue);

    message.textContent = "SIP estimate calculated successfully!";
});

document.getElementById("clearBtn").addEventListener("click", function () {
    monthlyInvestmentInput.value = "";
    expectedReturnInput.value = "";
    investmentYearsInput.value = "";

    investedAmount.textContent = "Total Invested: ₹0.00";
    estimatedReturns.textContent = "Estimated Returns: ₹0.00";
    totalValue.textContent = "Total Value: ₹0.00";

    message.textContent = "Values cleared.";
});
