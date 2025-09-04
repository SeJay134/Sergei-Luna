/* footer div */
const footer = document.querySelector(".container_footer");
const div = document.createElement("div");
div.classList.add("footer_box");
footer.appendChild(div);

/* date */
const today = new Date().getFullYear();
/* name */
const copyright = "Sergei Patrushev";

/* copyright */
const find_footer_box = document.querySelector(".footer_box");
const footer_box_p = document.createElement("p");
footer_box_p.classList.add("footer_box_p");
footer_box_p.textContent = copyright + " " + "©" + " " + today;
find_footer_box.appendChild(footer_box_p);

/* Create List of Skills */

/* List your technical skills by creating an Array of String values and store it in a variable named skills */
let skills = ["JavaScript", "HTML", "CSS", "Git", "GitHub"];
/* Create a variable named skillsSection and use "DOM Selection" to select the skills section by id */
const skillsSection = document.getElementById("Skills");
/* Create a variable named skillsList and use "DOM Selection" to query the skillsSection (instead of the entire document) to select the <ul> element you created earlier in this assignment */
let skillsList = skillsSection.querySelector("ul");


/* Create a for loop to iterate over your skills Array */
for (let i = 0; i < skills.length; i++) {
        /* Inside the loop, create a variable named skill to create a new list item (li) element */
        let skill = document.createElement("li");
        /* Still inside the loop, use the skill variable to set the inner text to the current Array element */
        skill.innerHTML = skills[i];
        /* The last thing we'll do inside the loop is append the skill element to the skillsList element */
        skillsList.appendChild(skill);
}

/*--------------- 12 -----------------*/
/* Create a variable named messageForm that uses "DOM Selection" to select the "leave_message" form by name attribute */
let messageForm = document.querySelector(".leave_message");
    /* Add an event listener to the messageForm element that handles the "submit" event */
    messageForm.addEventListener("submit", function(event) {
        /* Inside the callback function, above the other code you just wrote, add a new line to prevent the default refreshing behavior of the "submit" event */
        event.preventDefault();
        /* Inside the callback function for your event listener, create three new variables (one for each of the three form fields) and retrieve the value from the event */
        let usersName = event.target.usersName.value;
        let usersEmail = event.target.usersEmail.value;
        let usersMessage = event.target.usersMessage.value;
    /* Inside the callback function for your event listener, add a console.log statement to log the three variables you created in the previous step */
    console.log("Name:", usersName);
    console.log("Email:", usersEmail);
    console.log("Message:", usersMessage);

    /* Create a variable named messageSection and use "DOM Selection" to select the #messages section by id */
    let messageSection = document.getElementById("messages");
    console.log("messageSection", messageSection); /* for checking */
    /* Create a variable named messageList and use "DOM Selection" to query the messageSection (instead of the entire document) to find the <ul> element */
    let messageList = messageSection.querySelector(".messages_ul");
    /* Create a variable named newMessage that makes a new list item (li) element */
    let newMessage = document.createElement("li");
    messageList.appendChild(newMessage);
    
    /* On the next line, set the inner HTML of your newMessage element with the following information: */
    /* <a> element that displays the "usersName" and is a clickable link to the "usersEmail" (hint: use the mailto: prefix) */
    /* <span> element that displays the "usersMessage" */
    newMessage.innerHTML = `<a href = "mailto:${usersEmail}">${usersName}</a>&nbsp;&nbsp;<span>${usersMessage}</span>`
    
    /* Create a variable named removeButton that makes a new <button> element */
    let removeButton = document.createElement("button");
    console.log("button", removeButton);  /* for checking */
    /* Set the inner text to "remove" */
    removeButton.innerText = "Remove";
    /* Set the type attribute to "button" */
    removeButton.type = "button";
    removeButton.classList.add("remove_button");

    /* Add an event listener to the removeButton element that handles the "click" event */
    removeButton.addEventListener("click", function(event){
        /* Inside the callback function, create a variable named entry that finds the button's parent element using DOM Traversal (hint: parentNode property) */
        let entry = event.target.parentNode;
        console.log("del", entry)  /* for checking */
        /* Remove the entry element from the DOM (hint: remove method) */
        entry.remove();
    });
    
    /* Append the removeButton to the newMessage element */
    newMessage.appendChild(removeButton);
    /* Append the newMessage to the messageList element */
    messageList.appendChild(newMessage);

/* Inside the callback function, on the very last line, add a new line of code to clear the form */
    this.reset();
});
