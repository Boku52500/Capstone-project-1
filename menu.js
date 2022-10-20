const closeBtn = document.querySelector('.closeButton');
closeBtn.addEventListener('click', () => {
  const menuBackground = document.querySelector('#menuBackground');
  menuBackground.classList.add('display-none');
  const menuContent = document.querySelector('#menuContent');
  menuContent.classList.add('display-none');
  const menuButton = document.querySelectorAll('.dropdowns');
  menuButton.forEach((item) => {
    item.classList.add('display-none');
  });
});

const hambBtn = document.querySelector('#hamb-button');
hambBtn.addEventListener('click', () => {
  const menuContent = document.querySelector('#menuContent');
  menuContent.classList.remove('display-none');
  const menuBackground = document.querySelector('#menuBackground');
  menuBackground.classList.remove('display-none');
  const closeButt = document.querySelector('.closeButton');
  closeButt.classList.remove('display-none');
  const menuButton = document.querySelectorAll('.dropdowns');
  menuButton.forEach((item) => {
    item.classList.remove('display-none');
  });
});

const menuLink = document.querySelectorAll('.dropdowns');

menuLink.forEach((item) => {
  item.addEventListener('click', () => {
    const menuBackground = document.querySelector('#menuBackground');
    menuBackground.classList.add('display-none');
    const menuContent = document.querySelector('#menuContent');
    menuContent.classList.add('display-none');
    const menuButton = document.querySelectorAll('.dropdowns');
    menuButton.forEach((item) => {
      item.classList.add('display-none');
    });
  });
});