const input = document.getElementById("taskinput");
const list = document.getElementById("list");
const btn = document.getElementById("addBtn");
const trashSrc = "trash.png";

btn.addEventListener("click", addtask)
function addtask() {
    if(input.value.trim() === "")return;

const li = document.createElement("li");
li.textContent = input.value + " ";

const deleatimg = document.createElement("img");
deleatimg.src = trashSrc;

deleatimg.onclick = () => li.remove();

li.appendChild(deleatimg);
list.appendChild(li);
input.value = "";
};

const DarkMood = document.getElementById("DarkMood");
 
DarkMood.addEventListener("click", (m) => {
    m.stopPropagation();
    DarkMood.classList.toggle("active");
    document.body.classList.toggle("dark")

});

const hamb = document.getElementById("Hamb");
const Menu = document.getElementById("Menu");

hamb.addEventListener("click", () => {
    Menu.classList.toggle("open");
});
