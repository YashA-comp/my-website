const bookedTickets = [];

function showBookingForm(type) {
    document.getElementById('bookingForm').style.display = type === 'domestic' || type === 'international' ? 'block' : 'none';
    document.getElementById('ticketDetails').style.display = type === 'confirm' ? 'block' : 'none';
    document.getElementById('bookedMembers').style.display = type === 'viewBooked' ? 'block' : 'none';
}

document.getElementById('flightForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const destination = document.getElementById('destination').value;
    const passport = document.getElementById('passport').value;

    let fare, flightNo, time;
    if (destination === "sydney") {
        fare = 10000; flightNo = "AA-1440"; time = "13:30";
    } else if (destination === "london") {
        fare = 20000; flightNo = "BA-14"; time = "22:10";
    } else if (destination === "bangkok") {
        fare = 15000; flightNo = "TG-87"; time = "23:30";
    } else if (destination === "frankfurt") {
        fare = 8000; flightNo = "LF-285"; time = "13:30";
    } else if (destination === "delhi") {
        fare = 10000; flightNo = "DL-1440"; time = "13:30";
    }

    const ticket = { name, age, gender, destination, passport, fare, flightNo, time };
    bookedTickets.push(ticket);

    alert("Booking Successful!");
    showBookingForm('');
});

function viewBookedMembers() {
    const tbody = document.getElementById('ticketListBody');
    tbody.innerHTML = '';
    bookedTickets.forEach(ticket => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${ticket.name}</td>
            <td>${ticket.destination}</td>
            <td>${ticket.age}</td>
            <td>${ticket.flightNo}</td>
            <td>${ticket.time}</td>
        `;
        tbody.appendChild(row);
    });
}