// Target the elements
const modal = document.querySelector('.modal');
const modalAbout = document.querySelector('#modalAbout');
const body = document.querySelector('body');

// Create the mobile menu dynamically
const createMobileMenu = () => {
  const homeMenu = `
  <i class="fa fa-close" id="hide-menu-btn"></i>
  <div class="mobile-menu">
    <ul id="mobile-menu-links">
      <li><a href="./about.html" rel="noopenner">About</a></li>
      <li><a href="#" rel="noopenner">Program</a></li>
      <li><a href="#" rel="noopenner">Join</a></li>
      <li><a href="#" rel="noopenner">Sponsor</a></li>
      <li><a href="#" rel="noopenner">News</a></li>
    </ul>
    <a class="btn-campaign" href="#" rel="noopenner">CC Campaign</a>
  </div>`;
  if (modal != null) modal.innerHTML = homeMenu;

  const aboutMenu = `
    <i class="fa fa-close" id="hide-menu-btn"></i>
    <div class="mobile-menu">
      <ul id="mobile-menu-links">
        <li><a href="./index.html" rel="noopenner">Home</a></li>
        <li><a href="#" rel="noopenner">Program</a></li>
        <li><a href="#" rel="noopenner">Join</a></li>
        <li><a href="#" rel="noopenner">Sponsor</a></li>
        <li><a href="#" rel="noopenner">News</a></li>
      </ul>
      <a class="btn-campaign" href="#" rel="noopenner">CC Campaign</a>
    </div>`;
  if (modalAbout != null) modalAbout.innerHTML = aboutMenu;
};

createMobileMenu();

const menuIcon = document.querySelector('#menu-icon');
// Target the elements from the mobile menu
// const menuLinks = document.querySelector('.mobile-menu-links');
const hideMenuBtn = document.querySelector('#hide-menu-btn');

const showMenu = () => {
  modal.classList.remove('hide-menu');
  modal.classList.toggle('show-menu');
  // Desable scrolling
  body.classList.add('stop-scrolling');
};
const hideMenu = () => {
  modal.classList.remove('show-menu');
  modal.classList.toggle('hide-menu');
  // Ensable scrolling
  body.classList.remove('stop-scrolling');
};
menuIcon.addEventListener('click', showMenu);
hideMenuBtn.addEventListener('click', hideMenu);
