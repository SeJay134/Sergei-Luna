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

/* Create List of Skills */

/* List your technical skills by creating an Array of String values and store it in a variable named skills */
let skills = ["JavaScript", "HTML", "CSS", "Adobe Photoshop", "GitHub"];
/* Create a variable named skillsSection and use "DOM Selection" to select the skills section by id */
const skillsSection = document.getElementById("Skills");
/* Create a variable named skillsList and use "DOM Selection" to query the skillsSection (instead of the entire document) to select the <ul> element you created earlier in this assignment */
let skillsList = skillsSection.querySelector("ul");

/* Create a for loop to iterate over your skills Array */
for (let i = 0; i < skills.length; i++) {
        /* Inside the loop, create a variable named skill to create a new list item (li) element */
        let skill = document.createElement("li");
        /* Still inside the loop, use the skill variable to set the inner text to the current Array element */
        skill[i].innerHTML;
        /* The last thing we'll do inside the loop is append the skill element to the skillsList element */
        skillsList.appendChild(skill);
    
   

}