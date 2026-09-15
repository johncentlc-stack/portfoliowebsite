/* ================= CENTRALIZED EDITABLE CONTENT ================= */
const PROJECTS = [
 
  {title: "Multi-Trade Construction Cost Estimate & BOQ",
   category: "Estimating",
   description: "Prepared a detailed multi-trade Bill of Quantities (BOQ) and cost estimate for a non-residential construction project, covering quantity takeoffs, material and labor pricing, wastage allowances, and overall project costing.",
   software: "PlanSwift, Microsoft Excel",
   image: "MARKUP.png",
   pdf: "https://drive.google.com/drive/folders/1yAWD4m9E4aSExX88Ad3qP6FKM4-BSMQ9?usp=sharing",
   overview: "This sample project demonstrates the preparation of a comprehensive construction BOQ from quantity takeoff through cost estimation. Measured quantities were organized by trade and incorporated into a structured cost estimate with wastage allowances, unit rates, labor and material costs, and overall project pricing.",
   scope: "Quantity takeoff and cost estimation across general requirements, metals, ceiling works, flooring, mechanical, electrical, plumbing, millwork, signage, doors, and windows. The estimate also incorporated applicable wastage allowances and trade-level cost summaries.",
   deliverables: "Detailed Bill of Quantities (BOQ), trade-by-trade quantity takeoff, labor and material cost breakdown, wastage-adjusted quantities, trade cost summaries, and overall project cost estimate.",
   takeaways: "Strengthened my ability to interpret construction drawings, organize multi-trade quantities, apply appropriate measurement units and wastage factors, develop structured cost breakdowns, and consolidate individual trade estimates into a comprehensive project BOQ."
  },
  {
    title: "Commercial Painting Quantity Takeoff",
    category: "Estimating",
    description: "Prepared a detailed painting quantity takeoff for a commercial project using architectural plans and interior elevations, with quantities separated by paint finish, location, and surface type.",
    software: "PlanSwift, Microsoft Excel",
    image: "Paint.png",
    pdf: "https://drive.google.com/drive/folders/1NQva7LCTOIYIgNEnGVy2SzMUJSAgoV5o?usp=sharing",
    overview: "This project involved reviewing architectural drawings and interior elevations to identify paintable surfaces and specified finish codes. Quantities were measured, categorized by location and finish, and transferred into a structured estimating worksheet for pricing and bid preparation.",
    scope: "Performed quantity takeoffs for wall paint, ceiling paint, baseboards, and painted doors. Measurements were separated by room and specified finish, including primary and accent paint colors. Drawing markups were prepared to visually identify measured areas and support quantity verification.",
    deliverables: "Color-coded takeoff markups, room-by-room painting quantities, finish-specific measurements, wastage-adjusted quantities, and a structured Division 09 painting estimate worksheet ready for labor and material pricing.",
    takeaways: "Improved my ability to interpret architectural finish information and interior elevations, distinguish multiple paint systems, measure irregular and room-specific surfaces, organize quantities by CSI trade and finish code, and maintain traceable takeoff markups for review and verification."
  }
 
];

/* ================= CERTIFICATES ================= */

const CERTIFICATES = [
  {
    title: "Bluebeam Training and Workshop: Digital Quantity Takeoff and Estimation for AEC Professionals",
    organization: "Xstructures",
    year: "2026",
    image: "2026-BBPS-W1A-015_page-0001.jpg",
    link: "https://drive.google.com/file/d/1ONIpBC1AObsucbQa5TeIB-GVoh7gp1fl/view?usp=sharing"
  },
  {
    title: "PlanSwift Training and Workshop: Digital Quantity Takeoff and Estimation for AEC Professionals",
    organization: "Xstructures",
    year: "2026",
    image: "2026-BBPS-W1B-015_page-0001.jpg",
    link: "https://drive.google.com/file/d/1lBBIpg1640cOdHJ1oTFtCiNgJRvhk-K3/view?usp=sharing"
  },
  {
    title: "Bluebeam Revu: Construction Takeoffs",
    organization: "LinkedIn Learning",
    year: "2026",
    image: "1772730898969.jpg",
    link: "https://drive.google.com/file/d/15XtyJeBTLm5K75j7wZMu-vHHIkyuAaKe/view?usp=sharing"
  },
  {
    title: "Basics of Estimating Construction Costs",
    organization: "Alison",
    year: "2026",
    image: "Alison.png",
    link: "https://drive.google.com/file/d/1cdrcU_tn3rB0m1y6tdu0l06arlORRGzf/view?usp=sharing"
  },
   {
    title: "Plan Reading and Specifications",
    organization: "UC Davis",
    year: "2026",
    image: "CERTIFICATE_LANDING_PAGE~651AP28P52U4.jpg",
    link: "https://drive.google.com/file/d/1URL9y-qkcx3B3UabMSaZdUamGC-L2zsc/view?usp=sharing"
  },
   {
    title: "Advanced Manual Construction Building Estimates with the aid of Microsoft Excel & AutoCAD 2026: Advanced cost strategy, professional estimating & bidding, risk analysios, and profit-focused estimation for construction projects",
    organization: "MSTConnect",
    year: "2026",
    image: "ENGR. JOHNCENT L. CAYAMSO_page-0001.jpg",
    link: "https://drive.google.com/file/d/1wP1usk_2_QriQjHxzKq0rb3waDMn8NsF/view?usp=sharing"
  },
 {
    title: "Structural Design 101: Structural Detailing of Low-Mid Rise Reinforced COncrete Structures",
    organization: "MSTConnect",
    year: "2025",
    image: "JOHNCENT L. CAYAMSO (1)_page-0001.jpg",
    link: "https://drive.google.com/file/d/10rsT8PAak0AaJzVOwF_5gUI34af-OiY9/view?usp=sharing"
  },
   {
    title: "Construction Project Cost COntrol & Management: Mitigate Risks and Increase Your Profit by at Least 2.6%",
    organization: "MSTConnect",
    year: "2024",
    image: "CAYAMSO, JOHNCENT L.jpg",
    link: "https://drive.google.com/file/d/1aW4RmkO1SPNYpggGSpLPHegjJv5DSbgd/view?usp=sharing"
  },

 
];

const certificatesGrid = document.getElementById("certificatesGrid");

if (certificatesGrid) {
  certificatesGrid.innerHTML = CERTIFICATES.map(cert => `
    <article class="certificate-card">

      <div class="certificate-image">
        <img src="${cert.image}" alt="${cert.title}">
      </div>

      <div class="certificate-content">
        <span class="certificate-label">CERTIFICATE</span>

        <h3>${cert.title}</h3>

        <p>${cert.organization}</p>

        <span class="certificate-year">${cert.year}</span>

        <a
          href="${cert.link}"
          target="_blank"
          rel="noopener"
          class="certificate-link"
        >
          View Certificate →
        </a>
      </div>

    </article>
  `).join("");
}

/* ================= RENDER PORTFOLIO ================= */
const grid = document.getElementById('portfolioGrid');
function renderProjects(){
  grid.innerHTML = PROJECTS.map((p, i) => `
    <article class="proj-card" data-category="${p.category}">
      <div class="proj-img">
  <img src="${p.image}" alt="${p.title}">
</div>
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
  document.getElementById('modalImage').src = p.image;
  document.getElementById('modalImage').alt = p.title;
  document.getElementById('modalPdf').href = p.pdf;
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
