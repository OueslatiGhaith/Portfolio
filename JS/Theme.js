//DOM elements
const darkButton = document.getElementById('dark')
const lightButton = document.getElementById('light')

const body = document.body;
// cashe
const theme = localStorage.getItem('theme');

if (theme) {
    body.classList.add(theme);
    body.classList.add('solar');
}
//button event handler
darkButton.onclick = () => {
    body.classList.replace('light', 'dark')
    localStorage.setItem('theme', 'dark');
};
lightButton.onclick = () => {
    body.classList.replace('dark', 'light')
    localStorage.setItem('theme', 'light');
};