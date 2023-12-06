
function changetoPrepareMeal(parentId) {
  // change to prepare meal button on click
  var parent = document.getElementById(parentId)

  resetHiddenButtonsOnClcik(parent)

  var button = parent.firstElementChild
  button.click(); // click to remove scrolldown
  button.outerHTML = '<button type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Preparing Meal</button>'
  hidePrepareMealOption(parent, 'PrepareMeal')
  changeIndividual(parent, "PrepareMeals")
}

function changetoReadyToServe(parentId) {
  // change to ready to serve button on click
  var parent = document.getElementById(parentId)

  resetHiddenButtonsOnClcik(parent)

  var button = parent.firstElementChild
  button.click();
  button.outerHTML = '<button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Ready To Serve</button>'
  hidePrepareMealOption(parent, 'readyToServe')
  changeIndividual(parent, "readyToServeMeals")
}

function changetoWaitingforOrder(parentId) {
  // not sure if outer html replaces everything or just the tag itself . try that
  var parent = document.getElementById(parentId)

  resetHiddenButtonsOnClcik(parent)

  var button = parent.firstElementChild
  button.click();
  button.outerHTML = '<button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Waiting for Order</button>'
  hidePrepareMealOption(parent, 'WaitingForOrder')
  changeIndividual(parent, "WaitingForOrders")
}


function changetoServedMeal(parentId) {
  // not sure if outer html replaces everything or just the tag itself . try that
  var parent = document.getElementById(parentId)

  resetHiddenButtonsOnClcik(parent)

  var button = parent.firstElementChild
  button.click();
  button.outerHTML = '<button type="button" class="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Served Meal</button>'
  hidePrepareMealOption(parent, 'ServedMeal')
  changeIndividual(parent, "ServedMeals")
}



function changetoPlaceOrder(parentId){
  var parent = document.getElementById(parentId)
  var para = document.createElement("div");
  parent.appendChild(para)
  para.outerHTML = `
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Place Order</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div id="categories">
            <button id="breakfast">Breakfast</button>
            <button id="appetizer">Appetizers</button>
            <button id="entree">Entrees</button>
            <button id="burger">Burgers</button>
            <button id="salad">Soups/Salad</button>
            <button id="beverage">Beverages</button>
            <button id="kids">Kids Menu</button>
        </div>

        <div id="menuItems" class="grid-view"></div>

        <div id="order">
            <h3>Selected Items</h3>
            <ul id="selectedItems"></ul>
            <button id="placeOrderButton">Place Order</button>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>`
  modalbutton = document.getElementById("modalButton");
  modalbutton.click()
  changetoPrepareMeal(parentId)
}

// hide some scrolldown options
function hidePrepareMealOption(parentDiv, removeButtonClassName) {
  var buttonToHide = parentDiv.getElementsByClassName(removeButtonClassName)[0]
  buttonToHide.style.display = 'none'
}

function resetHiddenButtonsOnClcik(parentDiv) {
  // show all hidden buttons on click
  var buttonsToHide = parentDiv.getElementsByClassName('dropdown-item');
  for (let i = 0; i < buttonsToHide.length; i++) {
    if (buttonsToHide[i].style.display == 'none')
      buttonsToHide[i].style.display = 'block';
  }
}

function defaultHide() {
  //hide default button. Run onload
  addDropDowns()
  hideColumns()
  var tables = document.getElementsByClassName('list-group-item')
  var parent
  var button
  var scrolldownOptionToHide

  for (let i = 0; i < tables.length; i++) {
    button = tables[i].firstElementChild
    id = "Table " + (i + 1);
    parent = document.getElementById(id)

    if (button.classList.contains('btn-primary')) {
      scrolldownOptionToHide = parent.getElementsByClassName('WaitingForOrder')[0]
      scrolldownOptionToHide.style.display = 'none'
    }
    else if (button.classList.contains('btn-success')) {
      scrolldownOptionToHide = parent.getElementsByClassName('readyToServe')[0]
      scrolldownOptionToHide.style.display = 'none'
    }
    else if (button.classList.contains('btn-warning')) {
      scrolldownOptionToHide = parent.getElementsByClassName('PrepareMeal')[0]
      scrolldownOptionToHide.style.display = 'none'
    }
    else if (button.classList.contains('btn-info')) {
      scrolldownOptionToHide = parent.getElementsByClassName('ServedMeal')[0]
      scrolldownOptionToHide.style.display = 'none'
    }
    else {
      // alert('error')
    }
  }
}

function arrangeTables(){
  // var emptyTableArray = []
  var waitingForOrderArray = []
  var preparingMealArray = []
  var readyToServeArray = []
  var servedMealArray = []
  var allArrays = [waitingForOrderArray, preparingMealArray, readyToServeArray, servedMealArray]
  var names = ["WaitingForOrders", "PrepareMeals", "readyToServeMeals", "ServedMeals"]
  var tables = document.getElementsByClassName('list-group-item')
  for (var i = 0; i < tables.length; i++) {
    button = tables[i].firstElementChild
    switch(button.className){
      case "btn btn-primary dropdown-toggle":
        waitingForOrderArray.push(tables[i])
        break;
      case "btn btn-success dropdown-toggle":
        readyToServeArray.push(tables[i])
        break;
      case "btn btn-warning dropdown-toggle":
        preparingMealArray.push(tables[i])
        break;
      case "btn btn-info dropdown-toggle":
        servedMealArray.push(tables[i])
        break;
    }
  };
  fillOutAllCulumns(allArrays, names)
}

function fillOutAllCulumns(data, names){
  for (let i = 0; i < data.length; i++) {
    fillOutColumn(data[i], names[i])
  }
  var columns = document.getElementById("columns")
  // console.log(columns)
  columns.style.display = 'block'
}

function fillOutColumn(columnArray, columnName){
  var names = "col " + columnName
  column = document.getElementsByClassName(names)[0]
  columnArray.forEach(table => {
    column.appendChild(table)
  })
}

function changeIndividual(element, columnName){
  var names = "col " + columnName
  column = document.getElementsByClassName(names)[0]
  column.appendChild(element)
}

function hideColumns(){
  var columns = document.getElementById("columns")
  // console.log(columns)
  columns.style.display = 'none'
}

function addDropDowns(){
  allTables = document.getElementsByClassName('list-group-item')
  for (var i = 0; i < allTables.length; i++) {
    placeHolderDiv = allTables[i].getElementsByClassName('placeHolder')[0];
    ID = allTables[i].id
    dropdowns(placeHolderDiv, ID)
  }
}
function dropdowns(dropdown, tableID){
  dropdown.outerHTML = `<ul class="dropdown-menu">
  <li><a class="dropdown-item waitingForOrder" href="#" onclick="changetoWaitingforOrder('${tableID}')">Waiting for Order</a></li>
  <li><a class="dropdown-item prepareMeal" href="#" onclick="changetoPrepareMeal('${tableID}')">Preparing Meal</a></li>
  <li><a class="dropdown-item readyToServe" href="#" onclick="changetoReadyToServe('${tableID}')">Ready to Serve</a></li>
  <li><a class="dropdown-item servedMeal" href="#" onclick="changetoServedMeal('${tableID}')">Served Meal</a></li>
  <li><a class="dropdown-item placeOrder" href="#" onclick="changetoPlaceOrder('${tableID}')">Place Order</a></li>
</ul>
`
}



// import { getMenuItemsByCategory, createNewOrder, addItemsToOrder } from '../controllers/placeOrderController.js';

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
        orderStatus: "preparing",
        menuItems: orderItems,
        restaurantTable: 420
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
