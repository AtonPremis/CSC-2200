"use strict";

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("movieFrom");
    const description = document.getElementById("description");
    const characterCount = document.getElementById("charCount");
    const maxInput = 15;
    description.addEventListener("input", function() {
        const descriptionLength = description.value.length;
        let remaining = maxInput - descriptionLength;
        if (remaining > 0) {
            characterCount.textContent = remaining + " characters left";
            characterCount.style.color = "black";
        } else {
            characterCount.textContent = "0 characters left!";
            characterCount.style.color = "red";
            description.value = description.value.slice(0, -2);
        }
    })
    document.addEventListener("submit", function(event) {
        event.preventDefault();
        const descr = description.value.trim();
        const title = document.getElementById("title").value.trim();
        const genre = document.getElementById("genre").value;
        const haveSeen = document.getElementById("seen").checked;
        const titleError = document.getElementById("titleError");
        titleError.style.display = "none";

        if (title.length < 10) {
            let titleError = document.getElementById("titleError");
            titleError.style.display = "block";
            return;
        }

    })
})