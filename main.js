///////////////////////////////////////// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

///////////////////////////////////////////// toggle slider

const lampToggle = document.getElementById('lamp-toggle');
const body = document.body;
const homeImg = document.querySelector('.home-img img');
const aboutImg = document.querySelector('.about-img img');

// Ensure the initial state matches the theme
if (body.getAttribute('data-theme') === 'dark') {
  lampToggle.classList.add('active');
  homeImg.src = 'dark.png';
} else {
  homeImg.src = 'light.png';
}

if (body.getAttribute('data-theme') === 'dark') {
    lampToggle.classList.add('active');
    aboutImg.src = 'dark.png';
  } else {
    aboutImg.src = 'light.png';
  }

lampToggle.addEventListener('click', () => {
  const isDarkMode = body.getAttribute('data-theme') === 'dark';
  body.setAttribute('data-theme', isDarkMode ? 'light' : 'dark');
  lampToggle.classList.toggle('active', !isDarkMode);

  ///////////////////////////////////////////////Home img Animation

  // Add fade-out animation
  homeImg.classList.remove('fade-in');
  homeImg.classList.add('fade-out');

  setTimeout(() => {
    // Switch the image source
    homeImg.src = isDarkMode
      ? 'light.png'
      : 'dark.png';

    // Add fade-in animation
    homeImg.classList.remove('fade-out');
    homeImg.classList.add('fade-in');

    

    // Update the theme attribute
    body.setAttribute('data-theme', isDarkMode ? 'light' : 'dark');
  }, 200); // Match the duration of the fade-out animation

  ///////////////////////////////////////////////////About img animation

  // Add fade-out animation
  aboutImg.classList.remove('fade-in');
  aboutImg.classList.add('fade-out');

  setTimeout(() => {
    // Switch the image source
    aboutImg.src = isDarkMode
      ? 'light.png'
      : 'dark.png';

    // Add fade-in animation
    aboutImg.classList.remove('fade-out');
    aboutImg.classList.add('fade-in');

    

    // Update the theme attribute
    body.setAttribute('data-theme', isDarkMode ? 'light' : 'dark');
  }, 200); // Match the duration of the fade-out animation
});



  


  


///////////////////////////////////////////////////Scroll Section
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if (top >= offset && top < offset + height) {
            // Active navbar links
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
            });
            // Active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        // Show animation on Scroll
        else {
            sec.classList.remove('show-animate'); 
        }
    });
    
    //sticky header
    let header = document.querySelector('header');
    
    header.classList.toggle('sticky', window.scrollY > 100);
    
    //remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

///////////////////////////////////////////////////animation footer on scroll
let footer = document.querySelector('footer');

window.addEventListener('scroll', function() {
  footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
});

//////////////////////////////////////////////////// Language Change

const translations = {
    en: {
      'about': 'About',
      'journey': 'Journey',
      'skills': 'Skills',
      'contact': 'Contact',
      'Hi': 'Hi, i am',
      'name': 'Mark Gor',
      
    },
    hu: {
      'about': 'Rólam',
      'journey': 'Utazásom',
      'skills': 'Tudásom',
      'contact': 'Kontakt',
      'Hi': 'Szia, a nevem',
      'name': 'Gór Márk',
    },
    de: {
      'about': 'Über',
      'journey': 'Reise',
      'skills': 'Fähigkeiten',
      'contact': 'Kontakt',
    }
  };

  function changeLanguage(lang) {
    document.querySelectorAll('.language-selector button').forEach(btn => {
      btn.classList.remove('active');
    });
    document.getElementById(`btn-${lang}`).classList.add('active');

    Object.keys(translations[lang]).forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        element.textContent = translations[lang][id];
      }
    });
  }