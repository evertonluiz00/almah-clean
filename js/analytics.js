// Google Ads (gtag.js) — bootstrap + conversao "WhatsApp".

const awId = "AW-18408564787";
const awContato = awId + "/_y0DCLDVxeccELPQ8clE";

window.dataLayer = window.dataLayer || [];
function gtag(){ dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', awId);

// Conversao a cada clique num botao de WhatsApp.
// Os links sao target="_blank": a pagina continua viva depois do clique, entao
// da pra deixar a navegacao seguir normal e so disparar o evento — sem precisar
// segurar o clique num event_callback (que perderia o gesto do usuario e seria
// barrado pelo bloqueador de popup).
document.querySelectorAll('[data-wa]').forEach(el => {
  el.addEventListener('click', () => {
    gtag('event', 'conversion', { send_to: awContato });
  });
});
