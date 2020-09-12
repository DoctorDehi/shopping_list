var button = document.getElementById("add-item-button");
var input = document.querySelector("#input-item");
var list = document.querySelector("#shopping-list");

function addItemToList() {
	if (input.value.length > 0) {
		list.appendChild(createItem());
		input.value = "";
	}
} 

function addItemToListOnEnter(event) {
	if (event.keyCode === 13) {
		addItemToList();
	}
}

function createItem() {
	var item = document.createElement("li");
	item.innerHTML = input.value;
	item.addEventListener("click", function() {
		item.classList.toggle("done");
	});
	item.id = input.value;
	item.appendChild(createDelButton());
	return item;
}

function deleteItem(event) {
	let item_id  =  event.srcElement.id.substring(4, 10000000)
	document.getElementById(item_id).remove();

}

function createDelButton() {
	var del_button = document.createElement("button");
	del_button.id =  "del_" + input.value;
	del_button.innerHTML = "Delete";
	del_button.addEventListener("click", deleteItem);
	return del_button;
}

button.addEventListener("click", addItemToList);
input.addEventListener("keypress", addItemToListOnEnter);

