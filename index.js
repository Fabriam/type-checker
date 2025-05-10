function checkType() {
    const input = document.getElementById("typeInput").value.trim();
    const result = document.getElementById("result");

    let value;

    if (input === "true" || input === "false") {
        value = input === "true";
    } else if (!isNaN(Number(input))) {
        value = Number(input);
    } else {
        value = input;
    }

    result.innerText = `That’s a ${typeof value}! 🧠`;
}