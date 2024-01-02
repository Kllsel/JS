const addBtn = document.querySelector('#submit-btn');
const tableBody = document.querySelector('#ticket-table tbody');
const clearBtn = document.querySelector('#clear-btn');
const gobtn = document.querySelector('#gobtn');
// get form by name
const form = document.forms.creationForm;
// get input by name
const FromPlace = form.elements.from;
const ToPlace = form.elements.to;
const date = form.elements.date;
const price = form.elements.price;
const search = document.getElementById('search');
const tickets = [];

class Ticket {
    static initial = 3;

    constructor(from, to, date, price) {
        this.from = from;
        this.to = to;
        this.date = date;
        this.price = price;

        this.id = Ticket.initial++;
    }
}
gobtn.addEventListener('click', () => {
    searchTickets();
});

function searchTickets() {
    const searchTerm = search.value.toLowerCase().trim();
    
    const filteredTickets = tickets.filter(ticket => 
        ticket.from.toLowerCase().includes(searchTerm) ||
        ticket.to.toLowerCase().includes(searchTerm) ||
        ticket.date.includes(searchTerm) ||
        ticket.price.toString().includes(searchTerm)
    );

    updateTable(filteredTickets);
}

function updateTable(filteredTickets) {
  
    if (filteredTickets.length === 0) {
        alert('Tickets with your requirements are not found');
        return;
    }

    filteredTickets.forEach(ticket => {
        tableBody.innerHTML += `<tr>
            <td>${ticket.id}</td>
            <td>${ticket.from}</td>
            <td>${ticket.to}</td>
            <td>${ticket.date}</td>
            <td>${ticket.price}$</td>
        </tr>`;
    });
}
addBtn.onclick = (event) => {
    event.preventDefault();
    const ticket = new Ticket(FromPlace.value, ToPlace.value, date.value, price.value);

    tickets.push(ticket);
    addTicketToTable(ticket);
}

clearBtn.onclick = () => {
    tableBody.innerHTML = '';
    tickets.splice(0);
}
function checkIfIsFilled() {
    // Check if the values are not empty
    if (FromPlace.value.trim() !== '' && ToPlace.value.trim() !== '' && date.value.trim() !== '' && price.value.trim() !== '') {
        return true;
    } else {
        return false;
    }
}
function addTicketToTable(item) {
    if(checkIfIsFilled()){
    tableBody.innerHTML += `<tr>
                                <td>${item.id}</td>
                                <td>${item.from}</td>
                                <td>${item.to}</td>
                                <td>${item.date}</td>
                                <td>${item.price}$</td>
                            </tr>`;
    }
    else alert("Invalid data!");
}