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
const SERVICES = [
  {
    icon:'◉', tag:'SERVICE-01', title:'Visual Inspection',
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
    icon:'⇈', tag:'SERVICE-02', title:'Copper Peel Strength Testing',
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
    icon:'⟠', tag:'SERVICE-03', title:'Solderability Testing',
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
    icon:'⊡', tag:'SERVICE-04', title:'Microsection Analysis',
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
    icon:'✂', tag:'SERVICE-05', title:'Coupon Cutting',
    short:'Prepares precisely located test coupons that protect internal board layers throughout the sample-prep process.',
    desc:'Accurately extracts test coupons from panels at defined locations, preserving structural integrity for downstream microsection and reliability testing.',
    points:[
      'Precise, defined coupon extraction',
      'Prevents damage to internal layers',
      'Supports compliance with IPC quality standards',
      'Consistent, repeatable sample preparation'
    ],
    specs:[['Method','Precision Coupon Extraction'],['Standard','IPC-2221'],['Output','Ready-to-mount Coupons'],['Turnaround','24 hrs']],
    img:'svc5', imgcap:'Coupon Cutting Machine'
  },
  {
    icon:'◐', tag:'SERVICE-06', title:'Grinding & Polishing',
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
    icon:'📦', tag:'SERVICE-07', title:'Vacuum Packing',
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
  {ic:'🔲', name:'PCB Manufacturing', desc:'Incoming and outgoing quality verification for PCB manufacturers.'},
  {ic:'⚙️', name:'Electronics Manufacturing Services (EMS)', desc:'Independent verification supporting EMS quality and supplier audits.'},
  {ic:'🚗', name:'Automotive Electronics', desc:'Reliability-focused testing for boards used in demanding automotive environments.'},
  {ic:'🏭', name:'Industrial Electronics', desc:'Rugged-use verification for industrial control and power electronics.'},
  {ic:'⚕️', name:'Medical Electronics', desc:'Precision testing supporting the reliability demands of medical devices.'},
  {ic:'📱', name:'Consumer Electronics', desc:'High-volume, fast-turnaround testing for consumer product cycles.'},
  {ic:'📡', name:'Telecommunications Equipment', desc:'Testing to support long service-life telecom infrastructure hardware.'}
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
  el.innerHTML = SERVICES.map(s=>`
    <div class="card reveal">
      <span class="tag">${s.tag}</span>
      <div class="icowrap">${s.icon}</div>
      <h4>${s.title}</h4>
      <p>${s.short}</p>
      <a class="learn" href="#services" onclick="go('services')">Learn more →</a>
    </div>`).join('');
}
function renderIndustryCards(){
  const el = document.getElementById('industryCards');
  el.innerHTML = INDUSTRIES.map(i=>`
    <div class="card reveal">
      <div class="icowrap" style="font-size:22px;">${i.ic}</div>
      <h4>${i.name}</h4>
      <p>${i.desc}</p>
    </div>`).join('');
}
function renderWhyChoose(){
  const el = document.getElementById('whyChooseGrid');
  el.innerHTML = WHY.map((w,i)=>`
    <div class="glass reveal">
      <div style="font-family:'IBM Plex Mono',monospace;color:var(--copper-light);font-size:12px;margin-bottom:10px;">0${i+1}</div>
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
    <div class="service-block reveal">
      <div class="service-flex">
        <div class="service-media" onclick="openLightbox('${s.img}','${s.imgcap}')">
          <img src="${IMG[s.img+'_thumb']}" alt="${s.title} equipment">
          <div class="cap"><span>${s.imgcap}</span><span class="zoom-hint">⤢</span></div>
        </div>
        <div class="service-left">
          <div class="service-num">${s.tag} / 0${i+1}</div>
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
