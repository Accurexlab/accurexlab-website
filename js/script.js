const IMG = {
  svc1_thumb: "images/visual-inspection.jpg",
  svc1_large: "images/visual-inspection-large.jpg",
  svc2_thumb: "images/copper-peel-strength.jpg",
  svc2_large: "images/copper-peel-strength-large.jpg",
  svc3_thumb: "images/solderability-testing.jpg",
  svc3_large: "images/solderability-testing-large.jpg",
  svc4_thumb: "images/microsection-analysis.jpg",
  svc4_large: "images/microsection-analysis-large.jpg",
  svc5_thumb: "images/coupon-cutting.jpg",
  svc5_large: "images/coupon-cutting-large.jpg",
  svc6_thumb: "images/grinding-polishing.jpg",
  svc6_large: "images/grinding-polishing-large.jpg",
  about1_thumb: "images/vacuum-packing.jpg",
  about1_large: "images/vacuum-packing-large.jpg"
};
// ===================== DATA =====================
const ICON_PCB = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><rect x="9" y="9" width="6" height="6" rx="1"/><path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3"/></svg>';
const ICON_GEAR = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3.2"/><path d="M12 2.5v2.6M12 18.9v2.6M4.2 6.2l2 1.5M17.8 16.3l2 1.5M2.5 12h2.6M18.9 12h2.6M4.2 17.8l2-1.5M17.8 7.7l2-1.5M6.2 4.2l1.5 2M16.3 17.8l1.5 2M6.2 19.8l1.5-2M16.3 6.2l1.5-2"/></svg>';
const ICON_CAR = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 16V11l2-4.5A2 2 0 0 1 7.8 5h8.4a2 2 0 0 1 1.8 1.5L20 11v5"/><path d="M4 16h16v2.2a.8.8 0 0 1-.8.8h-1.4a.8.8 0 0 1-.8-.8V17H7v1.2a.8.8 0 0 1-.8.8H4.8a.8.8 0 0 1-.8-.8V16Z"/><circle cx="7.5" cy="14" r="1.2"/><circle cx="16.5" cy="14" r="1.2"/><path d="M4 11h16"/></svg>';
const ICON_FACTORY = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21V11l5 3.5V11l5 3.5V11l5 3.5V21"/><path d="M3 21h18"/><path d="M7 21v-4M12 21v-4M17 21v-4"/><path d="M17 7V3M20 7V3"/></svg>';
const ICON_MEDICAL = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h4l1.5-4L11 16l2-8 1.5 4H21"/></svg>';
const ICON_PHONE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="2.5" width="10" height="19" rx="2"/><path d="M10.5 5.5h3"/><path d="M11 18.2h2"/></svg>';
const ICON_SIGNAL = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v7"/><path d="M8.5 6.5a5 5 0 0 0 0 7M15.5 6.5a5 5 0 0 1 0 7M5.5 3.5a9 9 0 0 0 0 13M18.5 3.5a9 9 0 0 1 0 13"/><circle cx="12" cy="11.5" r="1.6"/><path d="M12 13v9M9 22h6"/></svg>';

const ICON_INSPECT = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="10.5" cy="10.5" r="6.5"/><circle cx="10.5" cy="10.5" r="2"/><path d="M15.2 15.2L21 21"/></svg>';
const ICON_PEEL = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19h16"/><path d="M12 16V5"/><path d="M7.5 9.5L12 5l4.5 4.5"/><path d="M4 15h5M15 15h5"/></svg>';
const ICON_DROPLET = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c3.2 4.2 6 7.8 6 11.2A6 6 0 0 1 6 14.2C6 10.8 8.8 7.2 12 3Z"/><path d="M9.5 14a2.5 2.5 0 0 0 2.5 2.5"/></svg>';
const ICON_LAYERS = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3.5" width="16" height="17" rx="2"/><path d="M4 10h16M4 15h16"/></svg>';
const ICON_SCISSORS = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6.5" r="2.2"/><circle cx="6" cy="17.5" r="2.2"/><path d="M7.8 7.8L20 19M7.8 16.2L20 5"/></svg>';
const ICON_POLISH = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="6.5"/><path d="M12 1.5v3M12 19.5v3M1.5 12h3M19.5 12h3M4.6 4.6l2.1 2.1M17.3 17.3l2.1 2.1M4.6 19.4l2.1-2.1M17.3 6.7l2.1-2.1"/></svg>';
const ICON_PACKAGE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8.2 12 3l9 5.2v7.6L12 21l-9-5.2Z"/><path d="M3 8.2 12 13l9-4.8"/><path d="M12 13v8"/></svg>';


const SERVICES = [
  {
    icon:ICON_INSPECT, tag:'SERVICE-01', title:'Visual Inspection',
    short:'Detects surface defects, circuit pattern issues, plating quality and board profile problems before they become failures.',
    desc:'A thorough visual and dimensional examination of every board, checking surface integrity, circuit fidelity and finish quality against documented acceptance criteria.',
    points:[
      'Surface defects, missing or damaged features',
      'Circuit patterns and markings verification',
      'Plating and surface finish quality',
      'Solder mask condition assessment',
      'Board profile and thickness checks'
    ],
    specs:[['Method','Magnified Visual Exam'],['Standard','IPC-A-600'],['Output','Defect Map + Report'],['Turnaround','24–48 hrs']],
    img:'svc1', imgcap:'Inspection Station'
  },
  {
    icon:ICON_PEEL, tag:'SERVICE-02', title:'Copper Peel Strength Testing',
    short:'Verifies copper adhesion quality and confirms your boards resist conductor lifting and delamination in the field.',
    desc:'Measures the force required to peel copper conductors from the base laminate, confirming bond strength meets IPC requirements for long-term reliability.',
    points:[
      'Verifies copper adhesion quality',
      'Prevents conductor lifting and delamination',
      'Ensures compliance with IPC requirements',
      'Quantified peel-force measurement'
    ],
    specs:[['Method','Mechanical Peel Test'],['Standard','IPC-TM-650'],['Unit','N/mm (peel force)'],['Turnaround','24–48 hrs']],
    img:'svc2', imgcap:'Peel Strength Tester'
  },
  {
    icon:ICON_DROPLET, tag:'SERVICE-03', title:'Solderability Testing',
    short:'Confirms your boards will form reliable solder joints in production — before they reach the assembly line.',
    desc:'Evaluates surface wettability, oxidation resistance and coating integrity to predict how a board will perform during solder assembly.',
    points:[
      'Surface wetting performance',
      'Oxidation resistance evaluation',
      'Coating integrity checks',
      'Solder joint formation capability'
    ],
    specs:[['Method','Wetting Balance / Dip Test'],['Standard','IPC J-STD-003'],['Output','Wetting Curve + Report'],['Turnaround','24–48 hrs']],
    img:'svc3', imgcap:'Solderability Test Rig'
  },
  {
    icon:ICON_LAYERS, tag:'SERVICE-04', title:'Microsection Analysis',
    short:'Provides an accurate cross-section view to detect internal defects that visual inspection alone can never catch.',
    desc:'Cross-sections the PCB to examine copper plating thickness, hole wall quality, inner-layer connectivity and resin integrity at a microscopic level.',
    points:[
      'Copper plating thickness measurement',
      'Hole wall quality & via integrity',
      'Inner-layer connectivity verification',
      'Resin recession assessment',
      'Delamination and voids detection'
    ],
    specs:[['Method','Cross-Section Microscopy'],['Standard','IPC-TM-650 2.1.1'],['Magnification','up to 400x'],['Turnaround','48–72 hrs']],
    img:'svc4', imgcap:'Microsection Microscope'
  },
  {
    icon:ICON_SCISSORS, tag:'SERVICE-05', title:'Coupon Cutting',
    short:'Prepares precisely located test coupons that protect internal board layers throughout the sample-prep process.',
    desc:'Accurately extracts test coupons from panels at defined locations, preserving structural integrity for downstream microsection and reliability testing.',
    points:[
      'Precise, defined coupon extraction',
      'Prevents damage to internal layers',
      'Supports compliance with IPC quality standards',
      'Consistent, repeatable sample preparation'
    ],
    specs:[['Method','Precision Coupon Extraction'],['Standard','IPC-TM-650 2.1.1'],['Output','Ready-to-mount Coupons'],['Turnaround','24 hrs']],
    img:'svc5', imgcap:'Coupon Cutting Machine'
  },
  {
    icon:ICON_POLISH, tag:'SERVICE-06', title:'Grinding & Polishing',
    short:'Delivers optically clear sample surfaces that reveal true internal structure without introducing artifacts.',
    desc:'Mechanically grinds and polishes prepared coupons to a defect-free finish, essential for confirming plating quality and reliability of vias.',
    points:[
      'Confirms plating quality and via reliability',
      'Detects defects not visible through visual inspection',
      'Verifies the internal quality of multilayer PCBs',
      'Optically clear finish for microscopy'
    ],
    specs:[['Method','Multi-stage Mechanical Polish'],['Standard','IPC-TM-650 2.1.1'],['Finish','Mirror / Sub-micron'],['Turnaround','24–48 hrs']],
    img:'svc6', imgcap:'Grinding & Polishing Station'
  },
  {
    icon:ICON_PACKAGE, tag:'SERVICE-07', title:'Vacuum Packing',
    short:'Protects tested boards from moisture, static and handling damage with proper vacuum-sealed packaging before dispatch.',
    desc:'Seals PCBs in vacuum bubble sheet with humidity indicator cards and silica gel packs, protecting boards from moisture ingress, oxidation and physical damage between testing and delivery.',
    points:[
      'Vacuum-sealed bubble sheet protection',
      'Humidity indicator card included for moisture monitoring',
      'Silica gel packs to control internal humidity',
      'Reduces oxidation and handling damage risk',
      'Ready for safe storage or dispatch'
    ],
    specs:[['Method','Vacuum Skin Packing'],['Includes','Humidity Card + Silica Gel'],['Protection','Moisture & Static'],['Turnaround','24 hrs']],
    img:'about1', imgcap:'Vacuum Packing Machine'
  }
];

const INDUSTRIES = [
  {ic:ICON_PCB, name:'PCB Manufacturing', desc:'Incoming and outgoing quality verification for PCB manufacturers.'},
  {ic:ICON_GEAR, name:'Electronics Manufacturing Services (EMS)', desc:'Independent verification supporting EMS quality and supplier audits.'},
  {ic:ICON_CAR, name:'Automotive Electronics', desc:'Reliability-focused testing for boards used in demanding automotive environments.'},
  {ic:ICON_FACTORY, name:'Industrial Electronics', desc:'Rugged-use verification for industrial control and power electronics.'},
  {ic:ICON_MEDICAL, name:'Medical Electronics', desc:'Precision testing supporting the reliability demands of medical devices.'},
  {ic:ICON_PHONE, name:'Consumer Electronics', desc:'High-volume, fast-turnaround testing for consumer product cycles.'},
  {ic:ICON_SIGNAL, name:'Telecommunications Equipment', desc:'Testing to support long service-life telecom infrastructure hardware.'}
];

const FAQS = [
  {q:'What is PCB testing and why does it matter?', a:'PCB testing verifies an unpopulated circuit board\'s quality — plating, copper adhesion, solderability and internal structure — before components are assembled, catching defects when they are cheapest to fix.'},
  {q:'How long does testing typically take?', a:'Most individual tests complete within 24–48 hours. Microsection analysis can take up to 72 hours depending on batch size. We confirm exact timelines with every quote.'},
  {q:'Do you test against IPC standards?', a:'Yes — our test methodologies are aligned with recognised IPC requirements including IPC-A-600, IPC-TM-650 and IPC J-STD-003.'},
  {q:'Can you handle multilayer and HDI boards?', a:'Yes, our microsection, grinding & polishing and coupon-cutting capabilities are built to handle multilayer and HDI constructions.'},
  {q:'How do I get a quote?', a:'Use the Request Quote page to share your board details and required tests — our team responds within 24 hours with pricing and timeline.'}
];

const WHY = [
  {t:'Accurate Results', d:'Every test performed to documented, repeatable procedures.'},
  {t:'Technical Expertise', d:'Engineers specialised specifically in PCB inspection.'},
  {t:'Industry Compliance', d:'Methods aligned to recognised IPC requirements.'},
  {t:'Fast Turnaround', d:'Responsive scheduling that keeps your line moving.'}
];

// ===================== RENDER =====================
function renderCapabilitiesCards(){
  const el = document.getElementById('capabilitiesCards');
  if(!el) return;
  el.innerHTML = SERVICES.map((s,i)=>`
    <div class="card reveal">
      <span class="tag">${s.tag}</span>
      <div class="icowrap icowrap-lg">${s.icon}</div>
      <h4>${s.title}</h4>
      <p>${s.short}</p>
      <a class="learn" href="#capabilities" onclick="goToCapability(${i+1});return false;">Learn more →</a>
    </div>`).join('');
}
function renderIndustryCards(){
  const el = document.getElementById('industryCards');
  el.innerHTML = INDUSTRIES.map(i=>`
    <div class="card reveal">
      <div class="icowrap icowrap-lg">${i.ic}</div>
      <h4>${i.name}</h4>
      <p>${i.desc}</p>
    </div>`).join('');
}
function renderWhyChoose(){
  const el = document.getElementById('whyChooseGrid');
  el.innerHTML = WHY.map((w,i)=>`
    <div class="glass reveal">
      <div style="font-family:'Inter',sans-serif;color:var(--copper-light);font-size:12px;margin-bottom:10px;">0${i+1}</div>
      <h4>${w.t}</h4>
      <p>${w.d}</p>
    </div>`).join('');
}
function renderFaq(){
  const el = document.getElementById('faqPageList');
  if(!el) return;
  el.innerHTML = FAQS.map((f,i)=>`
    <div class="faq-item" id="faq-${i}">
      <div class="faq-q" onclick="toggleFaq(${i})"><span>${f.q}</span><span class="plus">+</span></div>
      <div class="faq-a"><p>${f.a}</p></div>
    </div>`).join('');
}
function renderServiceBlocks(){
  const el = document.getElementById('serviceBlocks');
  el.innerHTML = SERVICES.map((s,i)=>`
    <div class="service-block reveal" id="cap-detail-${i+1}">
      <div class="service-flex">
        <div class="service-media" onclick="openLightbox('${s.img}','${s.imgcap}')">
          <img src="${IMG[s.img+'_thumb']}" alt="${s.title} equipment">
          <div class="cap"><span>${s.imgcap}</span><span class="zoom-hint">⤢</span></div>
        </div>
        <div class="service-left">
          <div class="service-num">${s.tag}</div>
          <h3>${s.title}</h3>
          <p>${s.desc}</p>
          <div class="spec-grid">
            ${s.specs.map(sp=>`<div class="spec-card"><div class="k">${sp[0]}</div><div class="v">${sp[1]}</div></div>`).join('')}
          </div>
        </div>
        <div>
          <ul class="check-list">
            ${s.points.map(p=>`<li><span class="ico">✓</span>${p}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>`).join('');
}

// ===================== ROUTING =====================
function go(page){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  const target = document.getElementById('page-'+page);
  if(target) target.classList.add('active');
  document.querySelectorAll('nav.links a').forEach(a=>a.classList.toggle('active', a.dataset.page===page));
  window.scrollTo({top:0, behavior:'instant' in document.documentElement.style ? 'auto':'auto'});
  window.location.hash = page;
  document.getElementById('mobileMenu').style.display='none';
  requestAnimationFrame(initReveal);
}
function goToCapability(n){
  go('capabilities');
  requestAnimationFrame(()=>{
    requestAnimationFrame(()=>{
      const el = document.getElementById('cap-detail-'+n);
      if(el){
        const navH = document.querySelector('header.site-nav').offsetHeight || 70;
        const y = el.getBoundingClientRect().top + window.pageYOffset - navH - 16;
        window.scrollTo({top:y, behavior:'smooth'});
      }
    });
  });
}
function toggleMobile(){
  const m = document.getElementById('mobileMenu');
  m.style.display = m.style.display==='none' ? 'block' : 'none';
}
function toggleFaq(i){
  document.getElementById('faq-'+i).classList.toggle('open');
}
function submitForm(e, successId, formId){
  e.preventDefault();
  document.getElementById(successId).classList.add('show');
  document.getElementById(formId).reset();
  document.getElementById(successId).scrollIntoView({behavior:'smooth', block:'center'});
  return false;
}
function openLightbox(key, caption){
  const lb = document.getElementById('lightbox');
  document.getElementById('lightboxImg').src = IMG[key+'_large'];
  document.getElementById('lightboxCap').textContent = caption || '';
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox(){
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') closeLightbox(); });

// ===================== ANIMATIONS =====================
function initReveal(){
  const els = document.querySelectorAll('.reveal:not(.in)');
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add('in'); obs.unobserve(en.target);} });
  }, {threshold:0.12});
  els.forEach(el=>obs.observe(el));
}
function animateCounters(){
  document.querySelectorAll('[data-count]').forEach(el=>{
    const target = parseInt(el.dataset.count,10);
    let cur = 0;
    const step = Math.max(1, Math.round(target/40));
    const t = setInterval(()=>{
      cur += step;
      if(cur>=target){ cur = target; clearInterval(t);}
      el.textContent = cur;
    }, 30);
  });
}

// init on load
window.addEventListener('DOMContentLoaded', ()=>{
  renderCapabilitiesCards();
  renderIndustryCards();
  renderWhyChoose();
  renderFaq();
  renderServiceBlocks();
  initReveal();
  setTimeout(animateCounters, 500);
  const startHash = window.location.hash.replace('#','');
  if(startHash) go(startHash); else go('home');
});
