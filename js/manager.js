
const menuTable = document.querySelector('table');

// Add an event listener to the menu table
menuTable.addEventListener('click', (event) => {
  if (event.target.classList.contains('edit-button')) {
    const row = event.target.parentElement.parentElement;
    const cells = row.querySelectorAll('td');
    for (let i = 0; i < cells.length - 1; i++) {
      const cell = cells[i];
      if (i === 2) {
        const input = document.createElement('input');
        input.type = 'number';
        input.value = cell.textContent;
        cell.textContent = '';
        cell.appendChild(input);
      } else {
        cell.setAttribute('contenteditable', 'true');
      }
    }
    event.target.classList.remove('edit-button');
    event.target.classList.add('save-button');
    event.target.textContent = 'Save';
  } else if (event.target.classList.contains('save-button')) {
    const row = event.target.parentElement.parentElement;
    const cells = row.querySelectorAll('td');
    for (let i = 0; i < cells.length - 1; i++) {
      const cell = cells[i];
      if (i === 2) {
        const input = cell.querySelector('input');
        cell.textContent = input.value;
      } else {
        cell.setAttribute('contenteditable', 'false');
      }
    }
    event.target.classList.remove('save-button');
    event.target.classList.add('edit-button');
    event.target.textContent = 'Edit';
  } else if (event.target.classList.contains('remove-button')) {
    if (confirm('Are you sure you want to remove this item?')) {
      menuTable.deleteRow(event.target.parentElement.parentElement.rowIndex);
    }
  }
});document.addEventListener("DOMContentLoaded", function () {
    const editButtons = document.querySelectorAll(".edit-button");
    const nameFields = document.querySelectorAll(".name");
    const descriptionFields = document.querySelectorAll(".description");
    const priceFields = document.querySelectorAll(".price");

    // Initialize an array to keep track of the edited fields
    const editedFields = new Set();

    // Function to toggle between text and input for a field
    function toggleEditField(field) {
        const inputField = document.createElement("input");
        inputField.value = field.innerText;
        field.innerText = '';
        field.appendChild(inputField);
        inputField.focus();
        editedFields.add(inputField);
        inputField.addEventListener("blur", () => {
            field.innerText = inputField.value;
            editedFields.delete(inputField);
        });
    }

    // Add click event listener to each "Edit" button
    editButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            if (!editedFields.has(nameFields[index])) {
                toggleEditField(nameFields[index]);
            }
            if (!editedFields.has(descriptionFields[index])) {
                toggleEditField(descriptionFields[index]);
            }
            if (!editedFields.has(priceFields[index])) {
                toggleEditField(priceFields[index]);
            }
        });
    });

    // Implement the code for removing items when the "Remove" button is clicked.
});



document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");
    const menuItems = document.querySelectorAll("table tbody tr");

    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase();

        menuItems.forEach(function (item) {
            const itemName = item.querySelector("td:first-child").textContent.toLowerCase();
            if (itemName.includes(searchTerm)) {
                item.style.display = "table-row";
            } else {
                item.style.display = "none";
            }
        });
    });
});