document.addEventListener("DOMContentLoaded", () => {
    const entriesList = document.getElementById("entries-list");
    const submitButton = document.getElementById("submit-entry");
    const newEntryText = document.getElementById("new-entry-text");

    // Load entries from localStorage
    const loadEntries = () => {
        const entries = JSON.parse(localStorage.getItem("entries")) || [];
        entriesList.innerHTML = "";
        entries.forEach(entry => {
            const entryDiv = document.createElement("div");
            entryDiv.classList.add("entry");
            entryDiv.innerHTML = `<p><strong>${entry.date}</strong></p><p>${entry.text}</p>`;
            entriesList.appendChild(entryDiv);
        });
    };

    loadEntries(); // Load entries when the page loads

    // Add a new journal entry
    submitButton.addEventListener("click", () => {
        const entryText = newEntryText.value.trim();
        
        // Log when the button is clicked
        console.log("Button clicked!");

        if (entryText) {
            console.log("Entry text:", entryText); // Log the entered text

            const newEntry = {
                date: new Date().toLocaleDateString(),
                text: entryText,
            };

            // Retrieve existing entries from localStorage
            const entries = JSON.parse(localStorage.getItem("entries")) || [];

            // Add new entry to entries
            entries.push(newEntry);

            // Save updated entries to localStorage
            localStorage.setItem("entries", JSON.stringify(entries));

            // Reload the entries after adding the new one
            loadEntries();
            newEntryText.value = ""; // Clear the textarea after submission
        } else {
            alert("Please write something before submitting!");
        }
    });
});
