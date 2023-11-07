function changetoPrepareMeal(parentId) {
  // change to prepare meal button on click
  var parent = document.getElementById(parentId)

  resetHiddenButtonsOnClcik(parent)

  var button = parent.firstElementChild
  button.click(); // click to remove scrolldown
  button.outerHTML = '<button type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Preparing Meal</button>'
  hidePrepareMealOption(parent, 'PrepareMeal')
}

function changetoReadyToServe(parentId) {
  // change to ready to serve button on click
  var parent = document.getElementById(parentId)

  resetHiddenButtonsOnClcik(parent)

  var button = parent.firstElementChild
  button.click();
  button.outerHTML = '<button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Ready To Serve</button>'
  hidePrepareMealOption(parent, 'readyToServe')
}

function changetoWaitingforOrder(parentId) {
  // not sure if outer html replaces everything or just the tag itself . try that
  var parent = document.getElementById(parentId)

  resetHiddenButtonsOnClcik(parent)

  var button = parent.firstElementChild
  button.click();
  button.outerHTML = '<button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Waiting for Order</button>'
  hidePrepareMealOption(parent, 'WaitingForOrder')
}

function changetoEmptyTable(parentId) {
  // not sure if outer html replaces everything or just the tag itself . try that
  var parent = document.getElementById(parentId)

  resetHiddenButtonsOnClcik(parent)

  var button = parent.firstElementChild
  button.click();
  button.outerHTML = '<button type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Table Empty</button>'
  hidePrepareMealOption(parent, 'EmptyTable')

}

function changetoServedMeal(parentId) {
  // not sure if outer html replaces everything or just the tag itself . try that
  var parent = document.getElementById(parentId)

  resetHiddenButtonsOnClcik(parent)

  var button = parent.firstElementChild
  button.click();
  button.outerHTML = '<button type="button" class="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Served Meal</button>'
  hidePrepareMealOption(parent, 'ServedMeal')

}

function changetoDirtyTable(parentId) {
  // not sure if outer html replaces everything or just the tag itself . try that
  var parent = document.getElementById(parentId)

  resetHiddenButtonsOnClcik(parent)

  var button = parent.firstElementChild
  button.click();
  button.outerHTML = '<button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Table Dirty</button>'
  hidePrepareMealOption(parent, 'DirtyTable')

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
    else if (button.classList.contains('btn-light')) {
      scrolldownOptionToHide = parent.getElementsByClassName('EmptyTable')[0]
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
    else if (button.classList.contains('btn-secondary')) {
      scrolldownOptionToHide = parent.getElementsByClassName('DirtyTable')[0]
      scrolldownOptionToHide.style.display = 'none'
    }
    else {
      alert('error')
    }
  }
}

function arrangeTables(){
  var emptyTableArray = []
  var waitingForOrderArray = []
  var preparingMealArray = []
  var readyToServeArray = []
  var servedMealArray = []
  var dirtyTableArray = []
  var tables = document.getElementsByClassName('list-group-item')
  var content
  tables.forEach(table => {
    button = table.firstElementChild
    switch(button.className){
      case "btn btn-primary dropdown-toggle":
        waitingForOrderArray.push(table)
      case "btn btn-light dropdown-toggle":
        emptyTableArray.push(table)
      case "btn btn-success dropdown-toggle":
        readyToServeArray.push(table)
      case "btn btn-warning dropdown-toggle":
        preparingMealArray.push(table)
      case "btn btn-info dropdown-toggle":
        servedMealArray.push(table)
      case "btn btn-secondary dropdown-toggle":
        dirtyTableArray.push(table)
    }
  });
}
  
function fillOutColumn(columnArray, columnName){
  column = document.getElementById(columnName)
  columnArray.forEach(table => {
    column.innerHTML += table.innerHTML
  })
}