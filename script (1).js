const enquiryBtn = document.querySelector('.enquiry_btn');
const enquiryOverlay = document.getElementById('enquiry_overlay');
const enquiryCloseBtn = document.getElementById('enquiry_close_btn');
const enquiryForm = document.getElementById('enquiry_form');

function openEnquiry() {
  enquiryOverlay.classList.add('open');
  enquiryOverlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  document.body.classList.add('enquiry-open');
  enquiryForm.querySelector('input')?.focus();
}

function closeEnquiry() {
  enquiryOverlay.classList.remove('open');
  enquiryOverlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  document.body.classList.remove('enquiry-open');
}

enquiryBtn.addEventListener('click', openEnquiry);
enquiryCloseBtn.addEventListener('click', closeEnquiry);

enquiryOverlay.addEventListener('click', (e) => {
  if (e.target === enquiryOverlay) closeEnquiry();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && enquiryOverlay.classList.contains('open')) {
    closeEnquiry();
  }
});

enquiryForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you! Your enquiry has been sent.');
  enquiryForm.reset();
  closeEnquiry();
});