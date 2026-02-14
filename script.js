// Mobile nav toggle
document.addEventListener('DOMContentLoaded',function(){
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('primary-nav');
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  if(navToggle && nav){
    navToggle.addEventListener('click',()=>{
      const open = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
  }

  // Modal logic
  const modal = document.getElementById('modal');
  const modalClose = document.getElementById('modal-close');
  const quoteForm = document.getElementById('quote-form');

  document.querySelectorAll('button[data-product]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const p = btn.getAttribute('data-product');
      if(quoteForm) quoteForm.product.value = p;
      if(modal){ modal.setAttribute('aria-hidden','false'); }
    });
  });

  if(modalClose) modalClose.addEventListener('click', ()=> modal && modal.setAttribute('aria-hidden','true'));

  if(quoteForm){
    quoteForm.addEventListener('submit', function(e){
      e.preventDefault();
      const data = new FormData(quoteForm);
      const name = data.get('name');
      const email = data.get('email');
      const product = data.get('product') || '';
      const company = data.get('company') || '';
      // open mailto for dealer handling (user can change)
      const subject = encodeURIComponent('Quote request: '+product);
      const body = encodeURIComponent('Name: '+name+'\nCompany: '+company+'\nEmail: '+email+'\nProduct: '+product+'\n\nPlease contact with pricing and availability.');
      window.location.href = `mailto:sales@greentech.example?subject=${subject}&body=${body}`;
    });
  }

  // contact form fallback
  const contactForm = document.getElementById('contact-form');
  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      const data = new FormData(contactForm);
      const subject = encodeURIComponent('Contact form: '+(data.get('name')||''));
      const body = encodeURIComponent('Company: '+(data.get('company')||'')+'\nEmail: '+(data.get('email')||'')+'\n\n'+(data.get('message')||''));
      window.location.href = `mailto:sales@greentech.example?subject=${subject}&body=${body}`;
    });
  }
});
