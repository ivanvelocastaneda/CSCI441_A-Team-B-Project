import { MenuItemController } from '../controllers/menuItemController.js';
import { MenuItem } from '../models/menuItem.js';

class View {

    addMenuItem(menuItem) {
        const ul = document.getElementById('menu-items-list');
        const li = document.createElement('li');
        li.id = `item-${menuItem.itemID}`;
        // li.textContent = `${menuItem.itemID}: ${menuItem.itemName} - ${menuItem.description} - $${menuItem.price}`;
        li.dataset.menuItem = JSON.stringify(menuItem);

        const itemDetails = document.createElement('span');
        itemDetails.textContent = `${menuItem.itemID}: ${menuItem.itemName}`;
        itemDetails.style.cursor = 'pointer';
        itemDetails.addEventListener('click', () => this.toggleItemDetails(menuItem, li));

        li.appendChild(itemDetails);
        ul.appendChild(li);

        // Add to dropdown
        const dropdown = document.getElementById('menu-item-dropdown');
        const option = document.createElement('option');
        option.value = menuItem.itemID;
        option.textContent = menuItem.itemName;
        dropdown.appendChild(option);
    }

    toggleItemDetails(menuItem, listItem) {
        let detailsDiv = listItem.querySelector('.details');
        if (!detailsDiv) {
            // Create details div if it doesn't exist
            detailsDiv = document.createElement('div');
            detailsDiv.className = 'details';
    
            // Create a table element
            const detailsTable = document.createElement('table');
            
            // Helper function to insert rows in the table
            const insertDetailRow = (table, key, value) => {
                let row = table.insertRow();
                let cellKey = row.insertCell(0);
                let cellValue = row.insertCell(1);
                cellKey.textContent = key;
                cellValue.textContent = value;
                cellKey.className = 'list-detail-key';
                cellValue.className = 'list-detail-value';
            };
    
            // Insert rows into the table
            insertDetailRow(detailsTable, 'Description', menuItem.description);
            insertDetailRow(detailsTable, 'Category', menuItem.category);
            insertDetailRow(detailsTable, 'Price', menuItem.price);
    
            detailsDiv.appendChild(detailsTable);
            detailsDiv.style.display = 'none';
            listItem.appendChild(detailsDiv);
        }
        
        // Toggle the visibility of the details div
        detailsDiv.style.display = detailsDiv.style.display === 'none' ? 'block' : 'none';
    }

    updateMenuItem(id, updatedItem) {
        try {
            const li = document.getElementById(`item-${id}`);
            if (li) {
                li.textContent = `${updatedItem.itemID}: ${updatedItem.itemName} - ${updatedItem.description} - $${updatedItem.price}`;
            }

            // Update dropdown option text if needed
            const option = document.querySelector(`#menu-item-dropdown option[value="${id}"]`);
            if (option) {
                option.textContent = updatedItem.itemName;
            }
        } catch(error) {
            console.log('Updating item error: ' + error);
        }
    }

    removeMenuItem(id) {
        const li = document.getElementById(`item-${id}`);
        if (li) {
            li.remove();
        }

        // Remove from dropdown
        const option = document.querySelector(`#menu-item-dropdown option[value="${id}"]`);
        if (option) {
            option.remove();
        }
    }

    populateInputs(menuItem) {
        document.getElementById('item-name-input').value = menuItem.itemName;
        document.getElementById('description-input').value = menuItem.description;
        document.getElementById('price-input').value = menuItem.price;
        document.getElementById('image-input').value = menuItem.itemImage;
        document.getElementById('category-input').value = menuItem.category;
        document.getElementById('calories-input').value = menuItem.calories;
    }
}

const view = new View();
const controller = new MenuItemController(view, MenuItem);
let selectedItem = new MenuItem();

document.getElementById('menu-item-dropdown').addEventListener('change', (event) => {
    const selectedItemID = event.target.value;
    const li = document.getElementById(`item-${selectedItemID}`);
    if (li) {
        selectedItem = JSON.parse(li.dataset.menuItem);
        view.populateInputs(selectedItem);
    }
});

document.getElementById('create-button').addEventListener('click', async () => {
    const data = {
        itemName: document.getElementById('item-name-input').value,
        description: document.getElementById('description-input').value,
        price: parseFloat(document.getElementById('price-input').value),
        itemImage: document.getElementById('image-input').value,
        category: document.getElementById('category-input').value,
        isDeleted: 0,
        calories: parseInt(document.getElementById('calories-input').value)
    };
    await controller.addMenuItem(data);
    window.location.reload();
});


document.getElementById('update-button').addEventListener('click', async () => {
    const id = document.getElementById('menu-item-dropdown').value;
    const data = {
        itemName: document.getElementById('item-name-input').value,
        description: document.getElementById('description-input').value,
        price: parseFloat(document.getElementById('price-input').value),
        itemImage: document.getElementById('image-input').value,
        category: document.getElementById('category-input').value,
        isDeleted: 0,
        calories: document.getElementById('calories-input').value
    };
    await controller.editMenuItem(id, data);
    window.location.reload();
});


document.getElementById('delete-button').addEventListener('click', async () => {
    const id = document.getElementById('menu-item-dropdown').value;
    const data = {
        itemName: document.getElementById('item-name-input').value,
        description: document.getElementById('description-input').value,
        price: parseFloat(document.getElementById('price-input').value),
        itemImage: document.getElementById('image-input').value,
        category: document.getElementById('category-input').value,
        isDeleted: 1,
        calories: document.getElementById('calories-input').value
    };
    console.log(selectedItem);
    await controller.editMenuItem(id, data);
    window.location.reload();
});