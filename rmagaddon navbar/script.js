document.addEventListener('DOMContentLoaded', function(){
  const btn = document.getElementById('hamburgerBtn');
  const mobile = document.getElementById('mobileMenu');
  if (!btn || !mobile) return;


  mobile.hidden = true;

  function openMenu(){
    requestAnimationFrame(() => mobile.classList.add('open'));
    btn.classList.add('active');
    btn.setAttribute('aria-expanded','true');
  }
  function closeMenu(){
    // animate out, then hide after transition completes
    mobile.classList.remove('open');
    btn.classList.remove('active');
    btn.setAttribute('aria-expanded','false');
    const onEnd = function(e){
      if (e.target === mobile && e.propertyName === 'transform') {
        mobile.hidden = true;
        mobile.removeEventListener('transitionend', onEnd);
      }
    };
    mobile.addEventListener('transitionend', onEnd, { once: true });
  }

  btn.addEventListener('click', function(e){
    if (mobile.classList.contains('open')) closeMenu(); else openMenu();
  });
  mobile.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

  document.addEventListener('click', function(e){
    if (!mobile.contains(e.target) && !btn.contains(e.target)) closeMenu();
  });
  document.addEventListener('keydown', function(e){ if (e.key === 'Escape') closeMenu(); });
});