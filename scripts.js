// scripts.js

// Sample data to be shown initially
const goals = [
    { title: 'Lose 10 pounds', progress: 50 },
    { title: 'Read 12 books this year', progress: 20 }
];

const tasks = [
    { title: 'Buy groceries', dueDate: '2025-04-30', status: 'In Progress' },
    { title: 'Finish project report', dueDate: '2025-05-05', status: 'Not Started' }
];

const bills = [
    { title: 'Internet Bill', amount: '$50', dueDate: '2025-05-01', paid: false },
    { title: 'Electricity Bill', amount: '$100', dueDate: '2025-05-10', paid: false }
];

const events = [
    { title: 'Team Meeting', date: '2025-05-01', time: '2:00 PM', location: 'Office' },
    { title: 'Doctor Appointment', date: '2025-05-03', time: '10:00 AM', location: 'Clinic' }
];

// Function to display goals
function displayGoals() {
    const goalList = document.getElementById('goal-list');
    goalList.innerHTML = '';
    goals.forEach(goal => {
        const goalItem = document.createElement('div');
        goalItem.className = 'goal-item';
        goalItem.innerHTML = `<strong>${goal.title}</strong> - ${goal.progress}% complete`;
        goalList.appendChild(goalItem);
    });
}

// Function to display tasks
function displayTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const taskItem = document.createElement('div');
        taskItem.className = 'task-item';
        taskItem.innerHTML = `<strong>${task.title}</strong> - Due: ${task.dueDate} - Status: ${task.status}`;
        taskList.appendChild(taskItem);
    });
}

// Function to display bills
function displayBills() {
    const billList = document.getElementById('bill-list');
    billList.innerHTML = '';
    bills.forEach(bill => {
        const billItem = document.createElement('div');
        billItem.className = 'bill-item';
        billItem.innerHTML = `<strong>${bill.title}</strong> - Amount: ${bill.amount} - Due: ${bill.dueDate} - Paid: ${bill.paid ? 'Yes' : 'No'}`;
        billList.appendChild(billItem);
    });
}

// Function to display events
function displayEvents() {
    const eventList = document.getElementById('event-list');
    eventList.innerHTML = '';
    events.forEach(event => {
        const eventItem = document.createElement('div');
        eventItem.className = 'event-item';
        eventItem.innerHTML = `<strong>${event.title}</strong> - Date: ${event.date} - Time: ${event.time} - Location: ${event.location}`;
        eventList.appendChild(eventItem);
    });
}

// Placeholder functions for adding new items (could be expanded with form inputs)
function addGoal() {
    goals.push({ title: 'New Goal', progress: 0 });
    displayGoals();
}

function addTask() {
    tasks.push({ title: 'New Task', dueDate: '2025-05-10', status: 'Not Started' });
    displayTasks();
}

function addBill() {
    bills.push({ title: 'New Bill', amount: '$0', dueDate: '2025-05-10', paid: false });
    displayBills();
}

function addEvent() {
    events.push({ title: 'New Event', date: '2025-05-10', time: '1:00 PM', location: 'Location' });
    displayEvents();
}

// Initial display of data
displayGoals();
displayTasks();
displayBills();
displayEvents();
