const waNumber = "554731802477";
const waMessage = "Olá! Quero agendar uma higienização com a Almah Clean.";
const waLink = "https://wa.me/" + waNumber + "?text=" + encodeURIComponent(waMessage);
["waNav","waHero","waFinal","waFooter","waFab"].forEach(id => {
  const el = document.getElementById(id);
  if(el) el.href = waLink;
});

const igLink = "https://instagram.com/almahclean";
["igNav","igFinal","igFooter","igFab"].forEach(id => {
  const el = document.getElementById(id);
  if(el) el.href = igLink;
});

const nav = document.getElementById('siteNav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 8);
}, { passive:true });

const fill = document.getElementById('dropFill');
if (fill) {
  requestAnimationFrame(() => {
    setTimeout(() => { fill.style.height = '68%'; }, 350);
  });
}
