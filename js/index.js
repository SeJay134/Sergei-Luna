const footer = document.querySelector(".container_footer");
const div = document.createElement("div");
div.classList.add("footer_box");

footer.appendChild(div);

const today = new Date().getFullYear();
const copyright = "Sergei Patrushev";

const find_footer_box = document.querySelector(".footer_box");
const footer_box_p = document.createElement("p");
footer_box_p.classList.add("footer_box_p");
footer_box_p.textContent = copyright + " " + "©" + " " + today;
find_footer_box.appendChild(footer_box_p);

let skills = ["JavaScript", "HTML", "CSS", "Adobe Photoshop", "GitHub"];
const skillsSection = document.getElementById("Skills");
let skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
    if () {
        let skill = document.createComment("ul");
        skill[0].innerHTML;
        skillsList.appendChild(li);
    }
   

}