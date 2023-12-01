document.addEventListener("DOMContentLoaded", function () {
    const showDetailsButtons = document.querySelectorAll(".show-details");

    showDetailsButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const orderElement = button.closest(".order");
            const details = orderElement.querySelector(".details");
            details.classList.toggle("hidden");
        });
    });

    
    
    orders.sort((a, b) => b.orderTimestamp - a.orderTimestamp);

    const ordersContainer = document.querySelector('.orders');

    orders.forEach((order) => {
        const orderElement = document.createElement('div');
        orderElement.classList.add('order');

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
    });
});
