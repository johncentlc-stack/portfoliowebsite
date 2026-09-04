/* ================= CENTRALIZED EDITABLE CONTENT ================= */
const PROJECTS = [
  {
    title: "Painting Works",
    category: "Quantity Takeoff",
    description: "[PROJECT DESCRIPTION — short summary of the takeoff scope, e.g. flooring and tiling quantities for a residential renovation.]",
    software: "PlanSwift",
    image: "PMU.png",
    overview: "[PROJECT OVERVIEW — describe the project background and objective.]",
    scope: "Painting",
    deliverables: "marked-up drawings",
    takeaways: "[KEY TAKEAWAYS — what this project demonstrates about your approach.]"
  },
  {
    title: "[PROJECT TITLE]",
    category: "Estimating",
    description: "[PROJECT DESCRIPTION — short summary of the estimating support provided.]",
    software: "Bluebeam Revu, Excel",
    role: "[MY ROLE]",
    date: "[PROJECT DATE]",
    overview: "[PROJECT OVERVIEW]",
    scope: "[SCOPE]",
    deliverables: "[DELIVERABLES]",
    takeaways: "[KEY TAKEAWAYS]"
  },
  {
    title: "[PROJECT TITLE]",
    category: "CAD",
    description: "[PROJECT DESCRIPTION — short summary of the CAD drafting work.]",
    software: "AutoCAD, SketchUp",
    role: "[MY ROLE]",
    date: "[PROJECT DATE]",
    overview: "[PROJECT OVERVIEW]",
    scope: "[SCOPE]",
    deliverables: "[DELIVERABLES]",
    takeaways: "[KEY TAKEAWAYS]"
  },
  {
    title: "[PROJECT TITLE]",
    category: "Construction",
    description: "[PROJECT DESCRIPTION — short summary of a renovation or fitout scope.]",
    software: "Bluebeam Revu, PlanSwift",
    role: "[MY ROLE]",
    date: "[PROJECT DATE]",
    overview: "[PROJECT OVERVIEW]",
    scope: "[SCOPE]",
    deliverables: "[DELIVERABLES]",
    takeaways: "[KEY TAKEAWAYS]"
  },
  {
    title: "[PROJECT TITLE]",
    category: "Engineering",
    description: "[PROJECT DESCRIPTION — short summary of the engineering support task.]",
    software: "STAAD Pro, Excel",
    role: "[MY ROLE]",
    date: "[PROJECT DATE]",
    overview: "[PROJECT OVERVIEW]",
    scope: "[SCOPE]",
    deliverables: "[DELIVERABLES]",
    takeaways: "[KEY TAKEAWAYS]"
  },
  {
    title: "[PROJECT TITLE]",
    category: "Quantity Takeoff",
    description: "[PROJECT DESCRIPTION — short summary of a fixture and finish quantity count.]",
    software: "PlanSwift, Excel",
    role: "[MY ROLE]",
    date: "[PROJECT DATE]",
    overview: "[PROJECT OVERVIEW]",
    scope: "[SCOPE]",
    deliverables: "[DELIVERABLES]",
    takeaways: "[KEY TAKEAWAYS]"
  }
];

/* ================= RENDER PORTFOLIO ================= */
const grid = document.getElementById('portfolioGrid');
function renderProjects(){
  grid.innerHTML = PROJECTS.map((p, i) => `
    <article class="proj-card" data-category="${p.category}">
      <div class="proj-img"><span>[PROJECT IMAGE]</span></div>
      <div class="proj-body">
        <span class="proj-cat">${p.category}</span>
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <p class="proj-soft">Software: ${p.software}</p>
        <button class="proj-btn" data-index="${i}">View Project →</button>
      </div>
    </article>
  `).join('');
}
renderProjects();

/* Filtering */
document.getElementById('filterRow').addEventListener('click', (e) => {
  const btn = e.target.closest('.filter-btn');
  if(!btn) return;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const filter = btn.dataset.filter;
  document.querySelectorAll('.proj-card').forEach(card => {
    const match = filter === 'all' || card.dataset.category === filter;
    card.hidden = !match;
  });
});

/* Modal */
const overlay = document.getElementById('modalOverlay');
grid.addEventListener('click', (e) => {
  const btn = e.target.closest('.proj-btn');
  if(!btn) return;
  const p = PROJECTS[btn.dataset.index];
  document.getElementById('modalCat').textContent = p.category;
  document.getElementById('modalTitle').textContent = p.title;
  document.getElementById('modalOverview').textContent = p.overview;
  document.getElementById('modalScope').textContent = p.scope;
  document.getElementById('modalRole').textContent = p.role;
  document.getElementById('modalDeliverables').textContent = p.deliverables;
  document.getElementById('modalSoftware').textContent = p.software;
  document.getElementById('modalTakeaways').textContent = p.takeaways;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
});
function closeModal(){
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('modalClose').addEventListener('click', closeModal);
overlay.addEventListener('click', (e) => { if(e.target === overlay) closeModal(); });
document.addEventListener('keydown', (e) => { if(e.key === 'Escape') closeModal(); });

/* ================= MOBILE MENU ================= */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', open);
});
document.querySelectorAll('#mobileMenu a').forEach(a => {
  a.addEventListener('click', () => { mobileMenu.classList.remove('open'); hamburger.setAttribute('aria-expanded', false); });
});

/* ================= ACTIVE NAV ON SCROLL ================= */
const navLinks = document.querySelectorAll('#navLinks a');
const sections = [...navLinks].map(l => document.querySelector(l.getAttribute('href')));
function updateActiveNav(){
  let current = sections[0];
  const scrollPos = window.scrollY + 120;
  sections.forEach(sec => { if(sec && sec.offsetTop <= scrollPos) current = sec; });
  navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + current.id));
}
window.addEventListener('scroll', updateActiveNav);
updateActiveNav();

/* ================= BACK TO TOP ================= */
const toTop = document.getElementById('toTop');
window.addEventListener('scroll', () => {
  toTop.classList.toggle('show', window.scrollY > 500);
});
toTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

/* ================= REVEAL ON SCROLL ================= */
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => { if(entry.isIntersecting){ entry.target.classList.add('in'); io.unobserve(entry.target); } });
}, { threshold: 0.12 });
revealEls.forEach(el => io.observe(el));

/* ================= CONTACT FORM ================= */
/*
  NOTE FOR SITE OWNER:
  This form currently opens the visitor's email client (mailto:) pre-filled with
  their message, addressed to johncentlc@gmail.com. Browsers do not allow static
  HTML pages to send email directly for security reasons, so if you want messages
  to be delivered silently in the background (without opening the visitor's email
  app), connect this form to a form backend such as:
    - Formspree (formspree.io)
    - Web3Forms (web3forms.com)
    - EmailJS (emailjs.com)
  All three offer a free tier and let you POST this form's fields straight to your
  Gmail address with a few lines of configuration (an endpoint URL or API key).
*/
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('cf-name').value;
  const email = document.getElementById('cf-email').value;
  const company = document.getElementById('cf-company').value;
  const subject = document.getElementById('cf-subject').value;
  const message = document.getElementById('cf-message').value;

  const body = `Name: ${name}%0AEmail: ${email}%0ACompany: ${company}%0A%0A${message}`;
  const mailto = `mailto:johncentlc@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Contact Form')}&body=${body}`;
  window.location.href = mailto;

  status.textContent = "Opening your email app to send this to johncentlc@gmail.com...";
  status.classList.add('show', 'ok');
  form.reset();
});

document.getElementById('year').textContent = new Date().getFullYear();
