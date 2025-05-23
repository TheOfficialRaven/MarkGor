////////////////////////////////////////////// Pre-Loader

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        let preloader = document.getElementById("preloader");
        document.body.classList.add("loaded");

        if (preloader) {
            preloader.classList.add("fade-out"); // Fade-out animáció
            preloader.addEventListener("animationend", function () {
                preloader.style.display = "none"; // Csak az animáció vége után tűnik el
                startPageAnimations(); // Az oldal animációi ekkor indulnak
            });
        } else {
            startPageAnimations();
        }
    }, 500); // 3 másodperc elteltével kezd el eltűnni

    
});



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
  homeImg.src = 'imgs/dark.png';
} else {
  homeImg.src = 'imgs/light.png';
}

if (body.getAttribute('data-theme') === 'dark') {
    lampToggle.classList.add('active');
    aboutImg.src = 'imgs/dark.png';
  } else {
    aboutImg.src = 'imgs/light.png';
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
      ? 'imgs/light.png'
      : 'imgs/dark.png';

    // Add fade-in animation
    homeImg.classList.remove('fade-out');
    homeImg.classList.add('fade-in');

    

    // Update the theme attribute
    body.setAttribute('data-theme', isDarkMode ? 'light' : 'dark');
  }, 300); // Match the duration of the fade-out animation

  

  ///////////////////////////////////////////////////About img animation

  // Add fade-out animation
  aboutImg.classList.remove('fade-in');
  aboutImg.classList.add('fade-out');

  setTimeout(() => {
    // Switch the image source
    aboutImg.src = isDarkMode
      ? 'imgs/light.png'
      : 'imgs/dark.png';

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
        let offset = sec.offsetTop - 400;
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

  function changeLanguage(lang) {
    let url = window.location.href;
    let baseUrl = url.substring(0, url.lastIndexOf('/') + 1); // Alap URL meghatározása
    
    if (lang === 'hu') {
        window.location.href = baseUrl + 'hu-index.html';
    } else if (lang === 'de') {
        window.location.href = baseUrl + 'de-index.html';
    } else {
        window.location.href = baseUrl + 'index.html'; // Angol az alapértelmezett
    }
}


  
  