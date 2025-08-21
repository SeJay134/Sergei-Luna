const footer = document.querySelector(".container_footer");
const div = document.createElement("div");
div.classList.add("footer_box");
div.textContent = "div";
footer.appendChild(div);

const today = new Date().getFullYear();
const copyright = "Sergei Patrushev";

const find_footer_box = document.querySelector(".footer_box");
const footer_box_p = document.createElement("p");
footer_box_p.classList.add("footer_box_p");
footer_box_p.textContent = copyright + " " + today + " " + "©";
find_footer_box.appendChild(footer_box_p);