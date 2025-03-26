document.querySelector('.navbar-toggler').addEventListener('click', function () {
    const navCollapse = document.getElementById('navbarSupportedContent');
    navCollapse.classList.toggle('show');
});
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});
 document.getElementById('contact-btn').addEventListener('click', function(e) {
    const name = document.querySelector('input[placeholder="Name"]').value;
    const email = document.querySelector('input[placeholder="Email"]').value;
    const phone = document.querySelector('input[placeholder="phone"]').value;
    
    if (!name || !email || !phone) {
      alert('Please fill in all fields.');
      e.preventDefault(); 
       // Prevent form submission
    } else {
      alert('Message sent successfully!');
    }
  });
  const navberlinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
// Smooth scroll for navigation links
document.querySelectorAll('a.nav-link').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
// Scroll to Top Button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
// Contact form validation
document.getElementById('contact-btn').addEventListener('click', function(e) {
  e.preventDefault();
  
  const name = document.querySelector('input[placeholder="Name"]');
  const email = document.querySelector('input[placeholder="Email"]');
  const phone = document.querySelector('input[placeholder="phone"]');
  
  if (name.value.trim() === "") {
      alert("Name is required");
      return;
  }
  if (!email.value.includes('@') || email.value.trim() === "") {
      alert("Valid email is required");
      return;
  }
  if (phone.value.trim() === "" || isNaN(phone.value)) {
      alert("Valid phone number is required");
      return;
  }
  
});
// Menu search filter
document.getElementById('menuSearch').addEventListener('keyup', function() {
  const filter = this.value.toLowerCase();
  const cards = document.querySelectorAll('#menu .card');
  
  cards.forEach(card => {
      const itemName = card.querySelector('h3').innerText.toLowerCase();
      if (itemName.includes(filter)) {
          card.style.display = "";
      } else {
          card.style.display = "none";
      }
  });
});
// Star rating interaction
document.querySelectorAll('.star').forEach(starContainer => {
  const stars = starContainer.querySelectorAll('i');
  
  stars.forEach((star, index) => {
      star.addEventListener('mouseover', () => {
          stars.forEach((s, i) => {
              if (i <= index) s.classList.add('hovered');
              else s.classList.remove('hovered');
          });
      });
      
      star.addEventListener('mouseout', () => {
          stars.forEach(s => s.classList.remove('hovered'));
      });
      
      star.addEventListener('click', () => {
          starContainer.setAttribute('data-stars', index + 1);
          stars.forEach((s, i) => {
              if (i <= index) s.classList.add('selected');
              else s.classList.remove('selected');
          });
      });
  });
});

// Image gallery modal
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("imgModal");
const galleryImages = document.querySelectorAll("#gallary img");

galleryImages.forEach(image => {
    image.addEventListener('click', function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    });
});

document.querySelector(".close").addEventListener('click', () => {
    modal.style.display = "none";
});




