import { OrdersController } from "../controllers/orderChecksController.js";
import { Orders } from "../models/orders.js";

class View {
    createListItem(order) {
        const ordersContainer = document.getElementById('orders');
        const orderElement = document.createElement('div');
        orderElement.id = `order-${order.orderID}`;
        orderElement.className = 'order';
        // orderElement.classList.add('order');
        // orderElement.setAttribute('data-order-id', order.orderID); 

        const orderTitle = document.createElement('h2');
        orderTitle.className = 'order-title';
        orderTitle.textContent = `Table #${order.restaurantTable}`;
        orderElement.appendChild(orderTitle);

        const orderStatus = document.createElement('p');
        orderStatus.className = 'order-status';
        orderStatus.textContent = `Order Status: ${order.orderStatus}`;
        orderElement.appendChild(orderStatus);

        const showDetailsButton = document.createElement('button');
        // showDetailsButton.classList.add('show-details');
        showDetailsButton.className = 'show-order-details';
        showDetailsButton.textContent = 'Show Details';
        showDetailsButton.style.cursor = 'pointer';

        showDetailsButton.addEventListener('click', () => this.toggleOrderDetails(order, orderElement));
        
        orderElement.appendChild(showDetailsButton);

        // const details = document.createElement('div');
        // details.className = 'order-details';
        // details.classList.add('details', 'hidden');

        // const detailsContent = document.createElement('p');
        // detailsContent.innerHTML = `<strong>Details:</strong><br>`;
        // order.details.forEach((item) => {
        //     detailsContent.innerHTML += `Item: ${item.itemName} (Quantity: ${item.quantity})<br>`;
        // });
        // detailsContent.innerHTML += `Special Request: ${order.specialRequest}<br>`;
        // detailsContent.innerHTML += `Order Time: ${order.orderTime}<br>`;
        // detailsContent.innerHTML += `Order Total: $${order.orderTotal.toFixed(2)}`;
        // details.appendChild(detailsContent);

        // orderElement.appendChild(details);

        ordersContainer.appendChild(orderElement);
    }

    toggleOrderDetails(order, listItem) {
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
            insertDetailRow(detailsTable, 'Created At', order.created_at);
            insertDetailRow(detailsTable, 'Updated At', order.updated_at);
    
            detailsDiv.appendChild(detailsTable);
            detailsDiv.style.display = 'none';
            listItem.appendChild(detailsDiv);
        }
        
        // Toggle the visibility of the details div
        detailsDiv.style.display = detailsDiv.style.display === 'none' ? 'block' : 'none';
    }

    // This function is called when an order is updated on a click, update button.
    updateListItem(orderID, updatedOrder) {
        const orderElement = document.querySelector(`.order[data-order-id="${orderID}"]`);

        if (orderElement) {
            
            const details = orderElement.querySelector('.details');
            // Clear existing details
            details.innerHTML = '';
            // Update details based on 'updatedOrder' data
            details.innerHTML += `<strong>Details:</strong><br>`;
            updatedOrder.details.forEach((item) => {
                details.innerHTML += `Item: ${item.itemName} (Quantity: ${item.quantity})<br>`;
            });
            details.innerHTML += `Special Request: ${updatedOrder.specialRequest}<br>`;
            details.innerHTML += `Order Time: ${updatedOrder.orderTime}<br>`;
            details.innerHTML += `Order Total: $${updatedOrder.orderTotal.toFixed(2)}`;
        }
    }

    // This function would be called on click, something like a delete button.
    removeListItem(orderID) {
        const orderElement = document.querySelector(`.order[data-order-id="${orderID}"]`);

        if (orderElement) {
            // Remove the order list item from the container
            orderElement.remove();
        }
    }
}

const view = new View();
const controller = new OrdersController(view, Orders);

// This looks good!
document.addEventListener("DOMContentLoaded", function () {
    const showDetailsButtons = document.querySelectorAll(".show-details");

    showDetailsButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const orderElement = button.closest(".order");
            const details = orderElement.querySelector(".details");
            details.classList.toggle("hidden");
        });
    });

    
    // There is a variable on the order data called created_at that you can implement somewhere in the code to sort.
    // I'm not sure right now where would be the best place to implement it but you might have some ideas.


});
