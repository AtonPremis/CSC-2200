"use strict";

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("movieFrom");
    const descriptionElement = document.getElementById("description");
    const characterCount = document.getElementById("charCount");
    let moviesList = document.getElementById("movieList");
    const maxInput = 15;
    let titlesList = [];
    let genresList = [];
    let seenList = [];
    let descriptionsList = [];

    descriptionElement.addEventListener("input", function() {
        const descriptionLength = descriptionElement.value.length;
        let remaining = maxInput - descriptionLength;
        if (remaining > 0) {
            characterCount.textContent = remaining + " characters left";
            characterCount.style.color = "black";
        } else {
            characterCount.textContent = "0 characters left!";
            characterCount.style.color = "red";
            descriptionElement.value = descriptionElement.value.slice(0, -2);
        }
    })
    document.addEventListener("submit", function(event) {
        event.preventDefault();
        const descriptionText = descriptionElement.value.trim();
        const title = document.getElementById("title").value.trim();
        const genre = document.getElementById("genre").value;
        const haveSeen = document.getElementById("seen").checked;
        const titleError = document.getElementById("titleError");
        const descriptionError = document.getElementById("descriptionError");
        titleError.style.display = "none";
        descriptionError.style.display = "none";
        let gotError = false;

        if (title.length < 10) {
            titleError.style.display = "block";
            gotError = true;
        }
        if (descriptionText.length < 10) {
            descriptionError.style.display = "inline";
            gotError = true;
        }
        if (gotError) {
            return;
        }

        titlesList.push(title);
        genresList.push(genre);
        seenList.push(haveSeen);
        descriptionsList.push(descriptionText);

        displayMovies();
        form.reset();
    })

    function displayMovies() {
        moviesList.innerHTML = "";
        for (let i = 0; i < titlesList.length; i++) {
            let divMovieItem = document.createElement("div");
            divMovieItem.className = "movie-item"
            divMovieItem.innerHTML = `
                <strong>${titlesList[i]}</strong>
                <br/> <p>${genresList[i]}</p>
                <p>${seenList[i]}</p>
                <p>${descriptionsList[i]}</p>
                <button data-index="${i}">Delete ${i}</button>
            `;
            moviesList.appendChild(divMovieItem);

        }
    }
    moviesList.addEventListener("click", (event) => {
        if (event.target.tagName === "BUTTON") {
            const index = event.target.getAttribute("data-index");
            titlesList.splice(index, 1);
            genresList.splice(index, 1);
            seenList.splice(index, 1);
            descriptionsList.splice(index, 1);
            displayMovies();
        }
    })
})