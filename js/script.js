/*
  Coffie — client JS
  - mobile navigation toggle
  - modal request form (mailto fallback for demo)
  - set current year in footer
*/
document.addEventListener('DOMContentLoaded', ()=>{
  // set year
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // mobile nav
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('primary-nav');
  if(navToggle && nav){
    navToggle.addEventListener('click', ()=>{
      const open = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
  }

  // modal + request buttons
  const modal = document.getElementById('modal');
  const modalClose = document.getElementById('modal-close');
  const quoteForm = document.getElementById('quote-form');

  document.querySelectorAll('button[data-product]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const p = btn.getAttribute('data-product');
      if(quoteForm) quoteForm.product.value = p;
      if(modal) modal.setAttribute('aria-hidden','false');
    });
  });

  if(modalClose) modalClose.addEventListener('click', ()=> modal && modal.setAttribute('aria-hidden','true'));

  if(quoteForm){
    quoteForm.addEventListener('submit', function(e){
      e.preventDefault();
      const form = new FormData(quoteForm);
      const name = form.get('name') || '';
      const company = form.get('company') || '';
      const email = form.get('email') || '';
      const product = form.get('product') || '';
      const subject = encodeURIComponent('Request info — '+product);
      const body = encodeURIComponent('Name: '+name+'\nCompany: '+company+'\nEmail: '+email+'\nProduct: '+product+'\n\nPlease reply with pricing and sample availability.');
      // mailto fallback (suitable for static deploys)
      window.location.href = `mailto:hello@coffie.example?subject=${subject}&body=${body}`;
    });
  }

  // contact form mailto
  const contactForm = document.getElementById('contact-form');
  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      const data = new FormData(contactForm);
      const subject = encodeURIComponent('Contact from '+(data.get('name')||''));
      const body = encodeURIComponent('Company: '+(data.get('company')||'')+'\nEmail: '+(data.get('email')||'')+'\n\n'+(data.get('message')||''));
      window.location.href = `mailto:hello@coffie.example?subject=${subject}&body=${body}`;
    });
  }
});
