# Farm to Table

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/)

## Step 0: Project Setup - Using a local Web Service Server (Optional)

This step is only necessary if user wants to use a web service server hosted on a local computer.
The Front-End Website is already connected to the same web service hosted on [Render](https://render.com/). 

> Render is a unified cloud to build and run all your apps and websites with free TLS certificates, a global CDN, DDoS protection, private networks, and auto deploys from Git.

So if you want to try the Restaurant Website without having to set up a local development web service **skip this step**

***Be aware that because this is a free service being used it can take around 20-30 seconds for it start up for the first time once the Restaurant Website has been accessed***

### Step 0.1: Install Node.js from the following link

- [Node.js](https://nodejs.org/en/)

### Step 0.2: Clone the following github repository into Visual Studio Code

```
    git clone https://github.com/ivanvelocastaneda/Team-B-Project-Server
```

### Step 0.3: Change directory

```
    cd Team-B-Project-Server
```

### Step 0.4: Install required packages

```
    npm install
```

### Step 0.5: Start development server:

```
    node index.js
```

## Step 1: Project Setup - Restaurant Website

### Step 1.1: Clone the following github repository into Visual Studio Code

```
    git clone https://github.com/ivanvelocastaneda/CSCI441_A-Team-B-Project
```

### Step 1.2: Change directory

```
    cd Team-B-Project-Server
```

### Step 1.3: Change Web Service IP address (Only if you did Step 0)

Navigate to 'models/api.js' and change the 'BASE_URL' variable to your local ip address plus the 3100 port being used to host the server.

### Step 1.4: Install Live Server extension for VSCODE from the following link

- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

### Step 1.5: Run Live Server

Press F1 or ctrl+shift+P and type Live Server: Open With Live Server to start a server or type Live Server: Stop Live Server to stop a server.

## Step 2: Using the Application

### Clocking In

When accessing employee interface, you will be prompted with a clock in screen.
Already available employees and their pin:

* Bjarni Jonsson: 1406
* Ivan Velo: 1357
* Cheikh Faye: 9999

Clock in and out using the pin-pad or continue to the employee interface.
Once in the employee interface, employees and menu items can be added and updated by pressing the functions button in the navigation bar.

### Placing an Order

By navigating to the tables page, 'Tables' in the navigation bar of the employee interface, orders can be placed.

The status of the latest order for each table can be seen on this page.

By pressing the dropdown menu for a certain table the status of the order can be changed.
And a new order for a table can also be placed by pressing 'Place Order' in the dropdown menu.

After placing an order you will be taken to the Orders page where you can see all the orders placed, sorted by the date they were created.