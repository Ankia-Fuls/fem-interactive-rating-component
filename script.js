const submitButton = document.getElementById("submit");

let chosenValue = 0;

const selectButton = (id) => {
    chosenValue = id.slice(-1);
    document.getElementById(`${id}`).focus();

    for (let i = 1; i < 6; i++) {
        if (i != chosenValue) {
            document.getElementById(`button-${i}`).ariaPressed = "false";
        }
        else {
            document.getElementById(`${id}`).ariaPressed = "true";
        }
    }
}

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (chosenValue != 0) {
        document.getElementById("default").classList.add('hidden');
        document.getElementById("thank-you").classList.remove('hidden');
        document.getElementById("rating-chosen").innerText = chosenValue;
    }
    else {
        alert("Please select a value first!");
    }

})