
const textInput = document.getElementById("textInput");

const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");
const sentenceCount = document.getElementById("sentenceCount");
const paragraphCount = document.getElementById("paragraphCount");

const message = document.getElementById("message");

function updateCounts() {
    const text = textInput.value;

    const words = text.trim() === ""
        ? []
        : text.trim().split(/\s+/);

    const sentences = text.trim() === ""
        ? []
        : text.split(/[.!?]+/).filter(sentence => sentence.trim() !== "");

    const paragraphs = text.trim() === ""
        ? []
        : text.split(/\n+/).filter(paragraph => paragraph.trim() !== "");

    wordCount.textContent = words.length;
    charCount.textContent = text.length;
    sentenceCount.textContent = sentences.length;
    paragraphCount.textContent = paragraphs.length;
}

textInput.addEventListener("input", updateCounts);

document.getElementById("clearText").addEventListener("click", function () {
    textInput.value = "";
    updateCounts();
    message.textContent = "Text cleared.";
});

document.getElementById("copyText").addEventListener("click", async function () {
    if (textInput.value.trim() === "") {
        message.textContent = "There is no text to copy.";
        return;
    }

    try {
        await navigator.clipboard.writeText(textInput.value);
        message.textContent = "Text copied successfully!";
    } catch (error) {
        textInput.select();
        document.execCommand("copy");
        message.textContent = "Text copied!";
    }
});

updateCounts();
