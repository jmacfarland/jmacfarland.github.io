const list = document.getElementById("one").parentElement;

// ADD NEW ITEM TO END OF LIST (cream)
var cream = document.createElement("li");
cream.innerHTML = "cream";
list.appendChild(cream);

// ADD NEW ITEM START OF LIST (kale)
var kale = document.createElement("li");
kale.innerHTML = "kale";
list.insertBefore(kale, list.childNodes[0]);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
for (let i = 0; i < list.childNodes.length; i++) {
  list.childNodes[i].className = "cool";
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
const page = document.getElementById("page")
num = document.createElement("h2")
num.innerHTML = list.childElementCount;//.length;
page.insertBefore(num, list);
