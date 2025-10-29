const people = [
    { name: "Alice", age: 20, favorite: "🎨" },
    { name: "Ben", age: 21, favorite: "⚽" },
    { name: "Clara", age: 19, favorite: "🎸" },
    { name: "David", age: 22, favorite: "💻" }
];

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("showButton").addEventListener("click", showPeople);
    document.getElementById("addButton").addEventListener("click", addPeople);

    function showPeople() {
        let output = document.getElementById("output");
        output.innerHTML = "";
        people.forEach(person => {
            
        })
    }

    function addPeople() {
        let name = prompt("Enter a name");
        if (name.length === 0) {
            return;
        }
        let age = prompt("Enter a age");
        if (age.length === 0) {
            return;
        }
        const emoji = prompt("Enter their favorite emoji (e.g. 😀 🎸 🚀):") || "🙂";
        if (emoji.length === 0) {
            return;
        }

        const newPerson = {
            name: name,
            age: parseInt(age),
            favorite: emoji
        }

        people.push(newPerson);
    }
});