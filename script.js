const submitButton = document.getElementById("submit");

let chosenValue = 0;

const selectButton = (id) => {
    chosenValue = id.slice(-1);
    document.getElementById(`${id}`).focus();
}

submitButton.addEventListener("click", () => {
    if (chosenValue != 0) {
        document.getElementById("default").classList.add('hidden');
        document.getElementById("thank-you").classList.remove('hidden');
        document.getElementById("rating-chosen").innerText = chosenValue;
    }
    else {
        alert("Please select a value first!");
    }

})