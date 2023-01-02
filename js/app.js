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
    <a class="btn-campaign" href="#" rel="noopenner">VG Campaign</a>
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
      <a class="btn-campaign" href="#" rel="noopenner">VG Campaign</a>
    </div>`;
  if (modalAbout != null) modalAbout.innerHTML = aboutMenu;
};

createMobileMenu();

const menuIcon = document.querySelector('#menu-icon');
// Target the elements from the mobile menu
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

// ======== Generate the speaker dynamically ==================
const spakers = [
  {
    fullname: 'Yochai Benkler',
    picture: 'speaker-1.png',
    title: 'Video Game Developer',
    bio: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
  },
  {
    fullname: 'SohYeong Noh',
    picture: 'speaker-3.png',
    title: 'Gamer',
    bio: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology,humanities, and the arts.',
  },
  {
    fullname: 'James Blank',
    picture: 'speaker-2.png',
    title: 'Video Game Developer',
    bio: 'James studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
  },
  {
    fullname: 'Yan Schruler',
    picture: 'speaker-5.png',
    title: 'Video Game Expert',
    bio: 'Yan studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
  },
  {
    fullname: 'Martin Darling',
    picture: 'speaker-6.png',
    title: 'Gamer',
    bio: 'Martin studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
  },
  {
    fullname: 'Frank Lepain',
    picture: 'speaker-4.png',
    title: 'Video Game Developer',
    bio: 'Frank studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
  },
];

const genSpeaker = () => {
  // Target the featured speakers section
  const featureSpeakers = document.querySelector('.feature-speakers-section');
  let speakersElement = '';
  let hide = '';
  // Loop over the array
  spakers.forEach((speaker, i) => {
    if (i > 1) {
      hide = 'hide-speaker';
    }
    speakersElement += `
    <div class="speaker ${hide}">
    <div class="speaker-image">
      <img
        class="bg-image"
        src="./assets/bg-img-speaker.png"
        alt="Speaker image background"
      />
      <img
        class="speaker-picture"
        src="./assets/speakers/${speaker.picture}"
        alt="Spaker image"
      />
    </div>
    <div class="speaker-details">
      <h3>${speaker.fullname}</h3>
      <p class="speaker-title">
      ${speaker.title}
      </p>
      <hr />
      <div class="speaker-bio">
      ${speaker.bio}
      </div>
    </div>
  </div>
    `;
  });

  const featuredSection = `
  <div class="title">
  <h2 class="featured-title">Featured Speakers</h2>
  <hr />
</div>
<div class="speakers">${speakersElement}</div>

  <button type="button" class="btn-more" type="button" id="btn-more">
    MORE <i class="fa fa-chevron-down"></i>
  </button>
</div>
  `;

  featureSpeakers.innerHTML = featuredSection;
};
genSpeaker();

// SHOW the hidden speakers

const showHidenSpeaker = () => {
  // Target the last speakers starting at position 3
  const lastSpeakers = document.querySelectorAll('.speaker:nth-child(n+3)');
  // Loop over them
  lastSpeakers.forEach((speaker) => {
    speaker.classList.remove('hide-speaker');
    speaker.classList.add('show-speaker');
  });
};

// Add event on btn-more
const btnMore = document.querySelector('#btn-more');
btnMore.addEventListener('click', showHidenSpeaker);
