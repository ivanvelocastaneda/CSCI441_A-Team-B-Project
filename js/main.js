// Import necessary modules
// Initialize models, views, and controllers
// Set up event listeners and manage application state

import * as API from '../services/menuItemService.js';


const BASE_URL = "https://csci441-teamb.onrender.com";

// Fetch menu items from the API
async function fetchMenuItems() {
    try {
        const response = await fetch(`${BASE_URL}/menu_item`);
        const menuItems = await response.json();
        return menuItems;
    } catch (error) {
        console.error("Error fetching menu items:", error);
        return [];
    }
}

// Render menu items to the HTML page
async function renderMenuItems() {
    const menuItems = await fetchMenuItems();
    const menuItemsList = document.getElementById('menu-items-list');

    menuItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.itemName} - ${item.description} - $${item.price}`;
        menuItemsList.appendChild(listItem);
    });
}

// Call the render function when the page loads
window.onload = renderMenuItems;

