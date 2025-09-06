//Write your code here
let attendee = {
  attendeeId: "T001",
  name: "Alice Smith",
  event: "JavaScript Conference",
  ticketType: "VIP",
  ticketPrice: 150.00
};

function logAttendeeName(attendee) {
  console.log(attendee.name);
}

function logTicketPrice(attendee) {
  console.log(attendee.ticketPrice);
}

function updateTicketType(attendee, newTicketType) {
  attendee.ticketType = newTicketType;
  console.log(`${attendee.ticketType}`);
}

function updateTicketPrice(attendee, newTicketPrice) {
  attendee.ticketPrice = newTicketPrice;
  console.log(`${attendee.ticketPrice}`);
}

function removeEventProperty(attendee) {
  delete attendee.event;
  console.log("Event property removed.");
}

function addCheckedInProperty(attendee) {
  attendee.checkedIn = true;
  console.log("Checked-in property added.");
}

module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};