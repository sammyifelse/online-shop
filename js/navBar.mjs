const navBar = (navIconSelector, closeMenuSelector, navListSelector) => {
  const toggleNav = () => {
    const navList = document.querySelector(navListSelector);
    navList.classList.toggle('hidden');
    navHamIcon.classList.toggle('hidden');
  }
  const navHamIcon = document.querySelector(navIconSelector);
  navHamIcon.addEventListener('click', toggleNav);

  const closeMenu = document.querySelector(closeMenuSelector);
  closeMenu.addEventListener('click', toggleNav);
}

export default navBar;