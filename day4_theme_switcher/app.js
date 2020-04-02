const darkBtn = document.getElementById('dark');
const lightBtn = document.getElementById('light');
const solarBtn = document.getElementById('solar');
const body = document.body;

// apply the cached theme on reload
const theme = localStorage.getItem('theme');
const isSolar = localStorage.getItem('isSolar');

if(theme) {
  body.classList.add(theme);
  isSolar && body.classList.add('solar');
}


darkBtn.onclick = () => {
  body.classList.replace('light', 'dark');
  localStorage.setItem('theme', 'dark');
};

lightBtn.onclick = () => {
  body.classList.replace('dark', 'light');
  localStorage.setItem('theme', 'light');
};

solarBtn.onclick = () => {
  if(body.classList.contains('solar')) {
    body.classList.remove('solar');
    solarBtn.innerText = 'solarize';
    localStorage.removeItem('isSolar');
  } else {
    body.classList.add('solar');
    solarBtn.innerText = 'normalize';
    localStorage.setItem('isSolar', true);
  }
}