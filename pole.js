let coaches = document.getElementById('coaches');
let infoBlog = document.getElementById('info');
let about = document.getElementById('about');
let classes = document.getElementById('classes');
let contacts = document.getElementById('contacts');
// coaches button
const showCoaches = () => {
    infoBlog.style.fontFamily = 'Monoton';
    coaches.style.color = 'yellow';
    about.style.color = 'white';
    classes.style.color = 'white';
    contacts.style.color = 'white';
};

coaches.addEventListener('click', showCoaches);
// about button
const showAbout = () => {
    infoBlog.style.fontFamily = 'Arial';
    about.style.color = 'yellow';
    coaches.style.color = 'white';
    classes.style.color = 'white';
    contacts.style.color = 'white';
};

about.addEventListener('click', showAbout);
// classes button
const showClasses = () => {
    infoBlog.style.fontFamily = 'Verdana';
    classes.style.color = 'yellow';
    coaches.style.color = 'white';
    about.style.color = 'white';
    contacts.style.color = 'white';
};

classes.addEventListener('click', showClasses);
// contacts button

const showContacts = () => {
    infoBlog.style.fontFamily = 'Arial';
    classes.style.color = 'white';
    coaches.style.color = 'white';
    about.style.color = 'white';
    contacts.style.color = 'yellow';
};

contacts.addEventListener('click', showContacts);