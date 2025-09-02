const apiUrl = 'http://localhost:5000/api/contacts';

const form = document.getElementById('contact-form');
const contactList = document.getElementById('contact-list');
const contactIdInput = document.getElementById('contact-id');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');

const getContacts = async () => {
    const response = await fetch(apiUrl);
    const contacts = await response.json();
    contactList.innerHTML = '';

    contacts.forEach(contact => {
        const contactItem = document.createElement('div');
        contactItem.classList.add('contact-item');
        contactItem.innerHTML = `
            <div class="info">
                <p class="name">${contact.firstName} ${contact.lastName}</p>
                <p class="details">${contact.email} | ${contact.phone}</p>
            </div>
            <div class="actions">
                <button class="btn-edit" data-id="${contact._id}"><i class="fas fa-pencil-alt"></i></button>
                <button class="btn-delete" data-id="${contact._id}"><i class="fas fa-trash-alt"></i></button>
            </div>
        `;
        contactList.appendChild(contactItem);
    });
};

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const id = contactIdInput.value;
    const contactData = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
    };

    if (id) {
        await fetch(`${apiUrl}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(contactData),
        });
    } else {
        await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(contactData),
        });
    }

    form.reset();
    contactIdInput.value = '';
    form.querySelector('button').textContent = 'Add Contact';
    getContacts();
});

contactList.addEventListener('click', async (e) => {
    // Find the closest delete button ancestor
    const deleteButton = e.target.closest('.btn-delete');
    if (deleteButton) {
        const id = deleteButton.dataset.id;
        // Add a confirmation before deleting
        if (confirm('Are you sure you want to delete this contact?')) {
            await fetch(`${apiUrl}/${id}`, { method: 'DELETE' });
            getContacts();
        }
        return; // Stop the function here
    }

    // Find the closest edit button ancestor
    const editButton = e.target.closest('.btn-edit');
    if (editButton) {
        const id = editButton.dataset.id;
        const response = await fetch(apiUrl);
        const contacts = await response.json();
        const contact = contacts.find(c => c._id === id);

        if (contact) {
            contactIdInput.value = contact._id;
            firstNameInput.value = contact.firstName;
            lastNameInput.value = contact.lastName || '';
            emailInput.value = contact.email || '';
            phoneInput.value = contact.phone;
            form.querySelector('button').textContent = 'Update Contact';
        }
    }
});
getContacts();
