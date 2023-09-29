// Import necessary modules
// Initialize models, views, and controllers
// Set up event listeners and manage application state

import * as API from '../models/api.js';


const accountType = "1";

window.onload = function() {
    API.fetchAccount(accountType)
        .then(account => {
            document.getElementById("account-first").textContent = account.first;
            document.getElementById("account-last").textContent = account.last;
            // Update other fields as needed
        })
        .catch(error => {
            console.error("There was a problem fetching the user data:", error);
        });
}