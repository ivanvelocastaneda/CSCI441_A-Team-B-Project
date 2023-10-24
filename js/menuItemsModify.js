import { MenuItemController } from '../controllers/menuItemController.js';
import { MenuItem } from '../models/menuItem.js';

class View {

    addMenuItem(menuItem) {
        const ul = document.getElementById('menu-items-list');
        const li = document.createElement('li');
        li.id = `item-${menuItem.itemID}`;
        li.textContent = `${menuItem.itemID}: ${menuItem.itemName} - ${menuItem.description} - $${menuItem.price}`;
        li.dataset.menuItem = JSON.stringify(menuItem);

        // Add delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            controller.removeMenuItem(menuItem.itemID);
        });
        li.appendChild(deleteButton);
        
        ul.appendChild(li);

        // Add to dropdown
        const dropdown = document.getElementById('menu-item-dropdown');
        const option = document.createElement('option');
        option.value = menuItem.itemID;
        option.textContent = menuItem.itemName;
        dropdown.appendChild(option);
    }

    updateMenuItem(id, updatedItem) {
        const li = document.getElementById(`item-${id}`);
        if (li) {
            li.textContent = `${updatedItem.itemID}: ${updatedItem.itemName} - ${updatedItem.description} - $${updatedItem.price}`;
        }

        // Update dropdown option text if needed
        const option = document.querySelector(`#menu-item-dropdown option[value="${id}"]`);
        if (option) {
            option.textContent = updatedItem.itemName;
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
    }
}

const view = new View();
const controller = new MenuItemController(view, MenuItem);
let selectedItem = new MenuItem;

document.getElementById('menu-item-dropdown').addEventListener('change', (event) => {
    const selectedItemID = event.target.value;
    const li = document.getElementById(`item-${selectedItemID}`);
    if (li) {
        selectedItem = JSON.parse(li.dataset.menuItem);
        console.log(JSON.stringify(selectedItem));
        // const parts = li.textContent.split(' - ');
        // const menuItem = new MenuItem(selectedItemID, parts[0], parts[1], parseFloat(parts[2].substring(1)));
        view.populateInputs(selectedItem);
    }
});

document.getElementById('create-button').addEventListener('click', () => {
    const data = {
        // itemName: selectedItem.itemName,
        // description: selectedItem.description,
        // price: parseFloat(selectedItem.price),
        // itemImage: selectedItem.itemImage
        itemName: document.getElementById('item-name-input').value,
        description: document.getElementById('description-input').value,
        price: parseFloat(document.getElementById('price-input').value),
        itemImage: document.getElementById('image-input').value
    };
    controller.addMenuItem(data);
    // selectedItem = new MenuItem(data.itemName, data.description, data.price, data.itemImage);
});

document.getElementById('update-button').addEventListener('click', async () => {
    const id = document.getElementById('menu-item-dropdown').value;
    const data = {
        itemName: document.getElementById('item-name-input').value,
        description: document.getElementById('description-input').value,
        price: parseFloat(document.getElementById('price-input').value),
        itemImage: document.getElementById('image-input').value
    };
    await controller.editMenuItem(id, data);  // Wait for the update to complete
    window.location.reload();
});

// document.getElementById('update-button').addEventListener('click', async () => {
//     const id = selectedItem.itemID;
//     const data = {
//         itemName: selectedItem.itemName,
//         description: selectedItem.description,
//         price: parseFloat(selectedItem.price),
//         itemImage: selectedItem.itemImage
//     };
//     await controller.editMenuItem(id, data);  // Wait for the update to complete
//     window.location.reload();
// });


// Assuming you still want the delete functionality
document.getElementById('delete-button').addEventListener('click', () => {
    const id = document.getElementById('menu-item-dropdown').value;
    controller.removeMenuItem(id);
    window.location.reload();
});
