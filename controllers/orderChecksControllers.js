function fetchOrderDetails(orderId) {
    
    const apiUrl = `https://csci441-teamb.onrender.com/${orderId}`;
    return fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            
            const orderDetails = `Order #${data.id} Details:
            - Table: ${data.tableNumber}
            - Total Items: ${data.totalItems}
            - Total: $${data.totalAmount.toFixed(2)}`;
            return orderDetails;
        });
}



