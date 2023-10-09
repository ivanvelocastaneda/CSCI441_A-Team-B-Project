// Import necessary modules
// Initialize models, views, and controllers
// Set up event listeners and manage application state

import * as API from '../models/api.js';
import * as APIs from '../controllers/menuItemController.js';


// const BASE_URL = "https://csci441-teamb.onrender.com";

// Fetch menu items from the API
// async function fetchMenuItems() {
//     try {
//         const response = await fetch(`${BASE_URL}/menu_item`);
//         const menuItems = await response.json();
//         return menuItems;
//     } catch (error) {
//         console.error("Error fetching menu items:", error);
//         return [];
//     }
// }





// // Render menu items to the HTML page
// async function renderMenuItems() {
//     const menuItems = await API.getMenuItems();
//     const menuItemsList = document.getElementById('menu-items-list');
//     console.log(menuItems);

//     menuItems.forEach(item => {
//         const listItem = document.createElement('li');
//         listItem.textContent = `${item.itemName} - ${item.description} - $${item.price}`;
//         menuItemsList.appendChild(listItem);
//     });
// }

// async function renderMenuItemss() {
//     const menuItems = await APIs.getMenuItems();
// }

// // Call the render function when the page loads
// window.onload = renderMenuItems;




import { MenuItemController } from '../controllers/menuItemController.js';
import { MenuItem } from '../models/menuItem.js';

class View {
    addMenuItem(menuItem) {
        const ul = document.getElementById('menu-items-list');
        const li = document.createElement('li');
        li.textContent = `${menuItem.itemName} - ${menuItem.description} - $${menuItem.price}`;
        ul.appendChild(li);
    }
}

const view = new View();
const controller = new MenuItemController(view, MenuItem);


