// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// toggle slider

const lampToggle = document.getElementById('lamp-toggle');
    const body = document.body;

    // Ensure the initial state matches the theme
    if (body.getAttribute('data-theme') === 'dark') {
      lampToggle.classList.add('active');
    }

    lampToggle.addEventListener('click', () => {
      const isDarkMode = body.getAttribute('data-theme') === 'dark';
      body.setAttribute('data-theme', isDarkMode ? 'light' : 'dark');
      lampToggle.classList.toggle('active', !isDarkMode);
    });


//Scroll Section
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

//animation footer on scroll
let footer = document.querySelector('footer');

window.addEventListener('scroll', function() {
  footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
});