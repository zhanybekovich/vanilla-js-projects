const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");
const clearBtn = document.getElementById("clear");
const itemFilter = document.getElementById("filter");

/* Function declarations */

// Create icon function
function createIcon(classes) {
  const icon = document.createElement("i");
  icon.className = classes;

  return icon;
}

// Create button function
function createButton(classes) {
  const button = document.createElement("button");
  button.className = classes;

  const icon = createIcon("fa-solid fa-xmark");

  button.appendChild(icon);

  return button;
}

// Add item on form submit
function addItem(e) {
  e.preventDefault();

  const newItem = itemInput.value;

  // Validate input
  if (newItem === "") {
    alert("Add your item!");
    return;
  }

  // Create list item
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(newItem));

  const button = createButton("remove-item btn-link text-red");

  li.appendChild(button);

  itemList.appendChild(li);

  // check UI
  checkUI();
  itemInput.value = "";
}

// Remove Item
function removeItem(e) {
  if (e.target.parentElement.classList.contains("remove-item")) {
    if (confirm("Are You Sure?")) {
      e.target.parentElement.parentElement.remove();
      // checkUI
      checkUI();
    }
  }
}

// Clear All Items
function clearItems() {
  // itemList.innerHTML = "";

  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }

  // checkUI
  checkUI();
}

// Check UI if there is any item
function checkUI() {
  const items = itemList.querySelectorAll("li");

  if (items.length === 0) {
    clearBtn.style.display = "none";
    itemFilter.style.display = "none";
  } else {
    clearBtn.style.display = "block";
    itemFilter.style.display = "block";
  }
}

// Filter item function
function filterItems(e) {
  const text = e.target.value.toLowerCase();

  const items = itemList.querySelectorAll("li");

  items.forEach((item) => {
    const itemName = item.firstChild.textContent.toLowerCase();

    if (itemName.indexOf(text) != -1) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

// Event Listeners
itemForm.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
clearBtn.addEventListener("click", clearItems);
itemFilter.addEventListener("input", filterItems);
checkUI();
