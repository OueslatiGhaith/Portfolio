//DOM elements
const darkButton = document.getElementById('dark')
const lightButton = document.getElementById('light')
const solarButton = document.getElementById('solalr')
const body = document.body;
// cashe
const theme = localStorage.getItem('theme');
const isSolar = localStorage.getItem('isSolar');

if (theme) {
    body.classList.add(theme);
    isSolar && body.classList.add('solar');
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
solarButton.onclick = () => {
    if (body.classList.contains('solar')) {
        body.classList.remove('solar');
        solarButton.innerText = 'solarize';
        localStorage.removeItem('isSolar');
    } else {
        body.classList.add('solar');
        solarButton.innerText = 'normalize';
        localStorage.add('isSolar', true);
    }
};