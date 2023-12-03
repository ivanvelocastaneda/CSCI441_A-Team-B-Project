import { createOrder, createOrderItem } from "../controllers/placeOrderController.js";
import { OrdersController } from "../controllers/orderChecksController.js";
import { Orders } from "../models/orders.js";

class View {
    createListItem(order) {
        const ordersContainer = document.getElementById('orders');
        const orderElement = document.createElement('div');
        orderElement.classList.add('order');
        orderElement.setAttribute('data-order-id', order.orderID); 

        const orderTitle = document.createElement('h2');
        orderTitle.textContent = `Table #${order.tableNumber}`;
        orderElement.appendChild(orderTitle);

        const totalItems = document.createElement('p');
        totalItems.textContent = `Total Items: ${order.totalItems}`;
        orderElement.appendChild(totalItems);

        const showDetailsButton = document.createElement('button');
        showDetailsButton.classList.add('show-details');
        showDetailsButton.textContent = 'Show Details';
        orderElement.appendChild(showDetailsButton);

        const details = document.createElement('div');
        details.classList.add('details', 'hidden');

        const detailsContent = document.createElement('p');
        detailsContent.innerHTML = `<strong>Details:</strong><br>`;
        order.details.forEach((item) => {
            detailsContent.innerHTML += `Item: ${item.itemName} (Quantity: ${item.quantity})<br>`;
        });
        detailsContent.innerHTML += `Special Request: ${order.specialRequest}<br>`;
        detailsContent.innerHTML += `Order Time: ${order.orderTime}<br>`;
        detailsContent.innerHTML += `Order Total: $${order.orderTotal.toFixed(2)}`;
        details.appendChild(detailsContent);

        orderElement.appendChild(details);

        ordersContainer.appendChild(orderElement);
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
    class OrdersController {
        constructor(view, orders) {
            this.view = view;
            this.orders = orders;
        }
    
        initialize() {
            // Sort the orders by 'created_at' in descending order (newest first)
            this.orders.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    
            this.orders.forEach((order) => {
                this.view.createListItem(order);
            });
        }
    }


});
