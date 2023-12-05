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

// function changetoEmptyTable(parentId) {
//   // not sure if outer html replaces everything or just the tag itself . try that
//   var parent = document.getElementById(parentId)

//   resetHiddenButtonsOnClcik(parent)

//   var button = parent.firstElementChild
//   button.click();
//   button.outerHTML = '<button type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Table Empty</button>'
//   hidePrepareMealOption(parent, 'EmptyTable')
//   changeIndividual(parent, "emptyTables")
// }

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

// function changetoDirtyTable(parentId) {
//   // not sure if outer html replaces everything or just the tag itself . try that
//   var parent = document.getElementById(parentId)

//   resetHiddenButtonsOnClcik(parent)

//   var button = parent.firstElementChild
//   button.click();
//   button.outerHTML = '<button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Table Dirty</button>'
//   hidePrepareMealOption(parent, 'DirtyTable')
//   changeIndividual(parent, "DirtyTables")
// }

function changetoPlaceOrder(parentId){
  alert("works")
}

// hide some scrolldown options
function hidePrepareMealOption(parentDiv, removeButtonClassName) {
  var buttonToHide = parentDiv.getElementsByClassName(removeButtonClassName)[0]
  buttonToHide.style.display = 'none'
}

function resetHiddenButtonsOnClcik(parentDiv) {
  // show all hidden buttons on click
  var buttonsToHide = parentDiv.getElementsByClassName('dropdown-item')
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
    // else if (button.classList.contains('btn-light')) {
    //   scrolldownOptionToHide = parent.getElementsByClassName('EmptyTable')[0]
    //   scrolldownOptionToHide.style.display = 'none'
    // }
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
    // else if (button.classList.contains('btn-secondary')) {
    //   scrolldownOptionToHide = parent.getElementsByClassName('DirtyTable')[0]
    //   scrolldownOptionToHide.style.display = 'none'
    // }
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
      // case "btn btn-light dropdown-toggle":
      //   emptyTableArray.push(tables[i])
      //   break;
      case "btn btn-success dropdown-toggle":
        readyToServeArray.push(tables[i])
        break;
      case "btn btn-warning dropdown-toggle":
        preparingMealArray.push(tables[i])
        break;
      case "btn btn-info dropdown-toggle":
        servedMealArray.push(tables[i])
        break;
      // case "btn btn-secondary dropdown-toggle":
      //   dirtyTableArray.push(tables[i])
      //   break;
    }
  };
  // console.log('emptyTableArray')
  // console.log(emptyTableArray)
  // console.log(allArrays)
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
  <li><a class="dropdown-item PrepareMeal" href="#" onclick="changetoPrepareMeal('${tableID}')">Preparing Meal</a></li>
  <li><a class="dropdown-item readyToServe" href="#" onclick="changetoReadyToServe('${tableID}')">Ready to Serve</a></li>
  <li><a class="dropdown-item WaitingForOrder" href="#" onclick="changetoWaitingforOrder('${tableID}')">Waiting for Order</a></li>
  <li><a class="dropdown-item ServedMeal" href="#" onclick="changetoServedMeal('${tableID}')">Served Meal</a></li>
  <li><a class="dropdown-item PlaceOrder" href="#" onclick="changetoPlaceOrder('${tableID}')">Place Order</a></li>
</ul>
`
}


let globalVariable = 0
