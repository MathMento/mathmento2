const toggleBtn = document.getElementById('themeToggle');
const body = document.body;
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  toggleBtn.textContent = body.classList.contains('dark') ? '☀️' : '🌙';
});
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Ваше повідомлення надіслано!');
});
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    item.classList.toggle('active');
  });
});
const reviews = document.querySelectorAll('.review');
let current = 0;

function showReview(index) {
  reviews.forEach((r,i)=>r.style.display=i===index?'block':'none');
}

showReview(0);
setInterval(()=>{
  current = (current+1) % reviews.length;
  showReview(current);
}, 5000);
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
    // не прибираємо клас show, щоб секції не пропадали
  });
}, { threshold: 0.15 });

// Всі елементи з класом animate
document.querySelectorAll('.animate').forEach(el => {
  io.observe(el);
});
