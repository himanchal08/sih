const chatBox = document.getElementById('chat-box');

const responses = {
    "hi": "Hello! Welcome to our online ticketing system. How can I assist you today? Please select an option below.",
    "view schedule": "Here are the available schedules:\n1. Museum A - 10:00 AM\n2. Museum B - 1:00 PM\n3. Museum C - 4:00 PM\nSelect a schedule to continue.",
    "book ticket": "Which museum would you like to book a ticket for?\n1. Museum A\n2. Museum B\n3. Museum C",
    "cancel ticket": "To cancel your ticket, please provide your booking reference number.",
    "help": "You can choose to view the schedule, book a ticket, or cancel a ticket. Click on any option to proceed.",
    "goodbye": "Thank you for using our online ticketing system. Have a great day!"
};

const initialOptions = ["View Schedule", "Book Ticket", "Cancel Ticket", "Help"];

function displayMessage(sender, message) {
    const messageElement = `<p><strong>${sender}:</strong> ${message}</p>`;
    chatBox.innerHTML += messageElement;
    chatBox.scrollTop = chatBox.scrollHeight;
}

function displayOptions(options) {
    options.forEach(option => {
        const buttonElement = document.createElement('button');
        buttonElement.innerText = option;
        buttonElement.onclick = () => handleUserInput(option.toLowerCase());
        chatBox.appendChild(buttonElement);
    });
    chatBox.scrollTop = chatBox.scrollHeight;
}

function handleUserInput(input) {
    const formattedInput = input.toLowerCase();
    displayMessage("You", formattedInput);
    
    chatBox.querySelectorAll('button').forEach(button => button.remove()); // Remove previous options
    
    if (responses[formattedInput]) {
        displayMessage("Bot", responses[formattedInput]);
        if (formattedInput === "hi") {
            displayOptions(initialOptions);
        } else if (formattedInput === "view schedule" || formattedInput === "book ticket") {
            displayOptions(["Book Now", "Cancel"]);
        } else if (formattedInput === "cancel ticket" || formattedInput === "help") {
            displayOptions(initialOptions);
        } else if (formattedInput === "goodbye") {
            // End of conversation, no options to display.
        }
    } else {
        displayMessage("Bot", "I'm not sure how to respond to that. Please choose one of the options.");
        displayOptions(initialOptions);
    }
}

// Initial greeting when the chatbot is loaded
window.onload = function() {
    displayMessage("Bot", responses["hi"]);
    displayOptions(initialOptions);
};
