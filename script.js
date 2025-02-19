// Updated JavaScript for Lost and Found Portal

document.addEventListener("DOMContentLoaded", () => {
    displayItems();
    setupEventListeners();
});

const lostItems = [];
const foundItems = [];

function displayItems() {
    const lostItemsList = document.getElementById('lost-items-list');
    const foundItemsList = document.getElementById('found-items-list');
    lostItemsList.innerHTML = "";
    foundItemsList.innerHTML = "";

    lostItems.forEach(item => {
        lostItemsList.innerHTML += `<li><strong>${item.description}</strong> - ${item.location}<br>Contact: ${item.contact}</li>`;
    });
    foundItems.forEach(item => {
        foundItemsList.innerHTML += `<li><strong>${item.description}</strong> - ${item.location}<br>Contact: ${item.contact}</li>`;
    });
}

function setupEventListeners() {
    document.getElementById('lost-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const lostDescription = document.getElementById('lost-item').value;
        const lostLocation = document.getElementById('lost-location').value;
        const contactInfo = document.getElementById('contact-info').value;
        
        lostItems.push({ description: lostDescription, location: lostLocation, contact: contactInfo });
        displayItems();
        this.reset();
    });

    document.getElementById('found-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const foundDescription = document.getElementById('found-item').value;
        const foundLocation = document.getElementById('found-location').value;
        const contactInfoFound = document.getElementById('contact-info-found').value;
        
        foundItems.push({ description: foundDescription, location: foundLocation, contact: contactInfoFound });
        displayItems();
        this.reset();
    });

    document.getElementById('search-bar').addEventListener('input', function (e) {
        searchItems(e.target.value);
    });
}

function searchItems(query) {
    const lostItemsList = document.getElementById('lost-items-list');
    const foundItemsList = document.getElementById('found-items-list');
    lostItemsList.innerHTML = "";
    foundItemsList.innerHTML = "";

    lostItems.filter(item => item.description.toLowerCase().includes(query.toLowerCase()))
             .forEach(item => {
                 lostItemsList.innerHTML += `<li><strong>${item.description}</strong> - ${item.location}<br>Contact: ${item.contact}</li>`;
             });

    foundItems.filter(item => item.description.toLowerCase().includes(query.toLowerCase()))
             .forEach(item => {
                 foundItemsList.innerHTML += `<li><strong>${item.description}</strong> - ${item.location}<br>Contact: ${item.contact}</li>`;
             });
}

