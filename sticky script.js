// Select elements
const noteInput = document.getElementById('noteInput');
const colorPicker = document.getElementById('colorPicker');
const addNoteButton = document.getElementById('addNoteButton');
const notesList = document.getElementById('notesList');

// Function to create a new note
function createNote() {
    const noteText = noteInput.value.trim();
    const noteColor = colorPicker.value;

    if (noteText === "") {
        alert("Please enter a note!");
        return;
    }

    // Create a new note element
    const noteDiv = document.createElement('div');
    noteDiv.classList.add('note');
    noteDiv.style.backgroundColor = noteColor;

    // Create the note text
    const notePara = document.createElement('p');
    notePara.classList.add('note-text');
    notePara.textContent = noteText;

    // Create the delete button
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.textContent = "x";

    // Append elements to the note div
    noteDiv.appendChild(notePara);
    noteDiv.appendChild(deleteButton);

    // Append note to the notes list
    notesList.appendChild(noteDiv);

    // Add event listener for deleting the note
    deleteButton.addEventListener('click', () => {
        notesList.removeChild(noteDiv);
    });

    // Clear the input after adding the note
    noteInput.value = "";
}

// Add event listener for the "Add note" button
addNoteButton.addEventListener('click', createNote);
