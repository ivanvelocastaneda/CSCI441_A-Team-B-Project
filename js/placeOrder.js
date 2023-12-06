import { getMenuItemsByCategory, createNewOrder, addItemsToOrder } from '../controllers/placeOrderController.js';

let selectedItems = [];
let orderItems = [];

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('categories').addEventListener('click', event => {
        if (event.target.tagName === 'BUTTON') {
            updateMenu(event.target.id);
        }
    });

    document.getElementById('placeOrderButton').addEventListener('click', placeOrder);
});

async function updateMenu(category) {
    const menuItems = document.getElementById('menuItems');
    menuItems.textContent = 'Loading...';

    try {
        const items = await getMenuItemsByCategory(category);
        menuItems.textContent = '';
        items.forEach(item => {
            const div = document.createElement('div');
            div.textContent = item.itemName + ' - ' + item.itemID;
            div.addEventListener('click', () => addItem(item));
            menuItems.appendChild(div);
        });
    } catch (error) {
        menuItems.textContent = 'Failed to load items';
        console.error('Error updating menu:', error);
    }
}

function addItem(item) {
    selectedItems.push(item.itemName);
    orderItems.push(item.itemID);
    updateOrderView();
}

function updateOrderView() {
    const orderList = document.getElementById('selectedItems');
    orderList.textContent = '';
    selectedItems.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => removeItem(index));

        li.appendChild(deleteButton);
        orderList.appendChild(li);
    });
}

function removeItem(index) {
    selectedItems.splice(index, 1);
    orderItems.splice(index, 1);
    updateOrderView();
}

async function orderItemCleanup(orderID, orderItems) {
    const itemCounts = orderItems.reduce((acc, itemID) => {
        acc[itemID] = (acc[itemID] || 0) + 1;
        return acc;
    }, {});

    const jsonOutput = Object.entries(itemCounts).map(([itemID, itemQuantity]) => ({
        orderID,
        itemID: parseInt(itemID),
        itemQuantity
    }));

    return jsonOutput;
}

async function placeOrder() {
    const data = {
        orderStatus: "waitingForOrder",
        menuItems: orderItems,
        restaurantTable: 5
    }
    try {
        const orderResponse = await createNewOrder(data);
        const itemData = await orderItemCleanup(orderResponse.insertId, orderItems);

            await addItemsToOrder(itemData);
            console.log('Order placed successfully');

            selectedItems = [];
            orderItems = [];
            updateOrderView();
    } catch (error) {
        console.error('Error placing order:', error);
    }
}
