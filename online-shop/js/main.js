const navIcon = document.querySelector('.hum-icon');navIcon.addEventListener('click', showNav);

function showNav(){
  const navList = document.querySelector('.nav-list');
  navList.classList.toggle('hidden')
}