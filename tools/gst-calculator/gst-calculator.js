
const amountInput = document.getElementById("amount");
const gstRateInput = document.getElementById("gstRate");
const gstTypeInput = document.getElementById("gstType");

const baseAmount = document.getElementById("baseAmount");
const gstAmount = document.getElementById("gstAmount");
const totalAmount = document.getElementById("totalAmount");
const message = document.getElementById("message");

document.getElementById("calculateBtn").addEventListener("click", function () {

    if (amountInput.value.trim() === "") {
        message.textContent = "Please enter an amount.";
        return;
    }

    const amount = Number(amountInput.value);
    const rate = Number(gstRateInput.value);

    if (!Number.isFinite(amount) || amount < 0) {
        message.textContent = "Please enter a valid non-negative amount.";
        return;
    }

    let base;
    let gst;
    let total;

    if (gstTypeInput.value === "exclusive") {
        base = amount;
        gst = base * rate / 100;
        total = base + gst;
    } else {
        total = amount;
        base = total / (1 + rate / 100);
        gst = total - base;
    }

    baseAmount.textContent = "Base Amount: ₹" + base.toFixed(2);
    gstAmount.textContent = "GST Amount: ₹" + gst.toFixed(2);
    totalAmount.textContent = "Total Amount: ₹" + total.toFixed(2);

    message.textContent = "GST calculated successfully!";
});

document.getElementById("clearBtn").addEventListener("click", function () {
    amountInput.value = "";
    gstRateInput.value = "18";
    gstTypeInput.value = "exclusive";

    baseAmount.textContent = "Base Amount: ₹0.00";
    gstAmount.textContent = "GST Amount: ₹0.00";
    totalAmount.textContent = "Total Amount: ₹0.00";

    message.textContent = "Values cleared.";
});
