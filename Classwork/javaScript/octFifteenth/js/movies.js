"use strict";

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("movieFrom");
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
    form.addEventListener("submit", function() {

    })
})