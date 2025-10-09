// Тема сайту
const toggleBtn = document.getElementById('themeToggle');
const body = document.body;
if(toggleBtn){
  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
    toggleBtn.textContent = body.classList.contains('dark') ? '☀️' : '🌙';
  });
}

// Форма контактів
const contactForm = document.getElementById('contactForm');
if(contactForm){
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Ваше повідомлення надіслано!');
  });
}

// FAQ
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    item.classList.toggle('active');
  });
});

// Відгуки
const reviews = document.querySelectorAll('.review');
let current = 0;

function showReview(index) {
  reviews.forEach((r,i)=>r.style.display=i===index?'block':'none');
}

if(reviews.length > 0){
  showReview(0);
  setInterval(()=>{
    current = (current+1) % reviews.length;
    showReview(current);
  },5000);
}

// Анімації IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
},{ threshold: 0.15 });

document.querySelectorAll('.animate, .animate-left, .animate-right').forEach(el => {
  el.classList.add('animate-hidden');
  observer.observe(el);
});

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.animate').forEach(el => {
  io.observe(el);
});
