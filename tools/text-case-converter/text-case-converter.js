
const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");
const message = document.getElementById("message");

function convertText(type) {
    const text = inputText.value;

    if (text.trim() === "") {
        message.textContent = "Please enter some text first.";
        outputText.value = "";
        return;
    }

    if (type === "upper") {
        outputText.value = text.toUpperCase();
    }

    else if (type === "lower") {
        outputText.value = text.toLowerCase();
    }

    else if (type === "title") {
        outputText.value = text.toLowerCase().replace(
            /\b\w/g,
            function (letter) {
                return letter.toUpperCase();
            }
        );
    }

    else if (type === "sentence") {
        outputText.value = text.toLowerCase().replace(
            /(^\s*\w|[.!?]\s+\w)/g,
            function (match) {
                return match.toUpperCase();
            }
        );
    }

    message.textContent = "Text converted successfully!";
}

document.getElementById("upperBtn").addEventListener("click", function () {
    convertText("upper");
});

document.getElementById("lowerBtn").addEventListener("click", function () {
    convertText("lower");
});

document.getElementById("titleBtn").addEventListener("click", function () {
    convertText("title");
});

document.getElementById("sentenceBtn").addEventListener("click", function () {
    convertText("sentence");
});

document.getElementById("copyBtn").addEventListener("click", async function () {
    if (outputText.value.trim() === "") {
        message.textContent = "There is no converted text to copy.";
        return;
    }

    try {
        await navigator.clipboard.writeText(outputText.value);
        message.textContent = "Text copied successfully!";
    } catch (error) {
        outputText.select();
        document.execCommand("copy");
        message.textContent = "Text copied!";
    }
});

document.getElementById("clearBtn").addEventListener("click", function () {
    inputText.value = "";
    outputText.value = "";
    message.textContent = "Text cleared.";
});