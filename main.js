var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
    e.preventDefault(); //otherwise you cannot see the console.log message in console
    console.log(e);

    //get input value
    var newItem = document.getElementById('item').value; //use value, it may not show in the guide

    //create new li element
    var li = document.createElement('li');
    // add class name
    li.className = 'list-group-item';
    console.log(li);
    // add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Crate delete buttion element
    var deleteBtn = document.createElement('button');
    // add classes to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    // append button to li
    li.appendChild(deleteBtn);

    //Add the new li to the list
    itemList.appendChild(li);

}

// Delete item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        console.log(e);
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter items
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    console.log(text);

    var items = itemList.getElementsByTagName('li');
    console.log(items); //HTML collection

    //Covert HTMLCollection to Array
    Array.from(items).forEach(item => {
        var itemName = item.firstChild.textContent;
        console.log(itemName);

        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block'; //Match so show it
        } else {
            item.style.display = 'none';  // does not mach, hide it
        }
    });

}

/*
var a = '12345';
console.log(a.indexOf('')); // 0
console.log(a.indexOf('3')); // 2 the postion of the text
console.log(a.indexOf('9')); // -1
*/
