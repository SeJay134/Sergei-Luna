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
let skills = ["JavaScript", "HTML", "CSS", "Git", "GitHub", "DevTool"];
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

    // add edit button
    let edit_button = document.createElement("button"); // create button
    edit_button.innerText = "Edit"; // text
    edit_button.type = "button"; // type
    edit_button.classList.add("edit_button"); // class

    edit_button.addEventListener("click", (event) => { // get click
        let li = event.target.parentNode; // get element li
        let message_span = li.querySelector("span"); // get element span
        let curent_text = message_span.textContent; // save a message
        let input = document.createElement("input"); // create input
        input.value = curent_text;
        edit_button.innerText = "Submit"; // rename Edit to Submit

        input.addEventListener("blur", () => { // out field or enter
            let span = document.createElement("span");
            span.textContent = input.value;
            li.replaceChild(span, input); // replace values
            edit_button.innerText = "Edit"; // rename Submit to Edit
        });

        li.replaceChild(input, message_span); // replace new to old parentNode.replaceChild(new, old)
        input.focus();
    })



    /* Add an event listener to the removeButton element that handles the "click" event */
    removeButton.addEventListener("click", function(event){
        /* Inside the callback function, create a variable named entry that finds the button's parent element using DOM Traversal (hint: parentNode property) */
        let entry = event.target.parentNode;
        console.log("del", entry)  /* for checking */
        /* Remove the entry element from the DOM (hint: remove method) */
        entry.remove();
    });
    
    newMessage.appendChild(edit_button);
    /* Append the removeButton to the newMessage element */
    newMessage.appendChild(removeButton);
    /* Append the newMessage to the messageList element */
    messageList.appendChild(newMessage);

// add hide elements after submit
let span = messageList.querySelector("span");
console.log("span", span);
    if (span && span.textContent.trim() !== "") {
        console.log("span not empty", span.textContent);
        emailInput.style.display = "none"; // email form haded
        messageInput.style.display = "none"; // message form hided
    } else if (span) {
        console.log("span empty", span.textContent);
    } else {
        console.log("span not finded");
    }

/* Inside the callback function, on the very last line, add a new line of code to clear the form */
    this.reset();
});





/* hided elements */
const emailInput = document.querySelector(".input_email");
const messageInput = document.querySelector(".users_message");
// not hided
const textInput = document.querySelector(".input_text");
const buttonSubmitInput = document.querySelector(".button_submit");

textInput.addEventListener("input", function() { // listener input form .input_text
    if (this.value.trim() !== "") { // not empty
        emailInput.style.display = "block"; // will see email form
    } else {
        messageInput.style.display = "none"; // hided
        buttonSubmitInput.style.display = "none"; // hided
    }
});

emailInput.addEventListener("input", function() { // listener email form .input_email
    if (this.value.trim() !== "") {
        messageInput.style.display = "block"; // will see form
        buttonSubmitInput.style.display = "block"; // will see form
    }
});

/* Ls - 13 */
/*
https://github.com/SeJay134?tab=repositories
https://api.github.com/users/{GITHUB_USERNAME}/repos

https://api.github.com/users/SeJay134/repos
*/
/*
Using the Fetch API, create a "GET" request to https://api.github.com/users/{GITHUB_USERNAME}/repos 
where {GITHUB_USERNAME} is your username for your GitHub account
*/
/*Chain a then method to your fetch call and pass it a function that returns the response JSON data*/
/* Chain a catch() function to your fetch call to handle errors from the server so the user would know 
what happened if your Projects section was empty. */
/*
Chain another then method and pass it a callback function to parse the response and store it in a variable named repositories
hint: JSON.parse(this.response)
Console.log the value of repositories to better see the data returned from your API fetch
Save and refresh your browser (or just check your browser for changes if using live extension)
You should see the list of your GitHub repositories displayed in your console.
*/

/* Create a variable names projectSection; using "DOM Selection" to select the projects section by id */
let projectSection = document.getElementById("Projects");
console.log("projectSection", projectSection);
/* Create a variable named projectList; using "DOM Selection" query the projectSection (instead of the entire 
document) to select the element */
let projectList = projectSection.querySelector(".elementUl");

let repositories;

fetch('https://api.github.com/users/sejay134/repos')
    .then(respond => {
        console.log("respond", respond)
        if (respond.ok === false) {
            throw new Error(`Error: ${respond.status} ${respond.text}`);
        }
        return respond.json();
    })
    .then(data => {
        console.log("myData", data)
        repositories = data;
        console.log("repo", repositories);
        
        
        if (repositories.length === 0) {
            let noItem = document.createElement("li");
            noItem.innerHTML = "No added Projects";
            projectList.appendChild(noItem);
        }
        /* Create a for loop to iterate over your repositories Array, starting at index 0 */
        /* Inside the loop, create a variable named project to make a new list item (li) element
            hint: createElement method */
        for (let x = 0; x < repositories.length; x++) {
            let project = document.createElement("li");
            console.log("project_li", project);
            /* On the next line, set the inner text of your project variable to the current Array element's name property
            hint: access the Array element using bracket notation */
            let url = document.createElement("a");
            url.href = repositories[x].html_url;
            url.target = "_blank";
            url.classList.add("project_link");
            url.textContent = repositories[x].name;
            
            // tooltip
            //let tooltip = document.createElement('span');
            //tooltip.classList.add('tooltip');
            //tooltip.textContent = repositories[x].description || "No description available.";

            project.appendChild(url);
            //project.appendChild(tooltip);
            projectList.appendChild(project);
            
        }
        return data; // return data from GitHub
    })
    .then(repo_url => {
        repo_url.forEach(data_url => {
            console.log("repos_url", data_url.html_url); // take URL, checker
        })
    })
    .catch(error => {
        console.log("error", error)
        let noproject = document.createElement("li");
        noproject.textContent = "error";
        projectList.appendChild(noproject);
    })

// Dark mode .button_dark_mode
let d = document.querySelector(".button_dark_mode"); // get the selector of button
d.addEventListener("click", () => { // lisen a click of button
document.body.classList.toggle("dark"); // add the class to body body.dark
})
    


