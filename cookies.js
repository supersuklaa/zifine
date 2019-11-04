
if (localStorage.getItem('acceptCookies') === null) {
  const createEl = (tag, txt) => {
    const el = document.createElement(tag);
    const node = document.createTextNode(txt);
    el.appendChild(node);

    return el;
  };

  const h1 = createEl('h1', 'Hello!');
  const h2 = createEl('h2', 'Cookies?');
  const h3 = createEl('h3', 'Sure.');

  const cookiesDiv = document.getElementById('accept-cookies');

  cookiesDiv.className = 'accept-cookies';

  cookiesDiv.appendChild(h1);
  cookiesDiv.appendChild(h2);
  cookiesDiv.appendChild(h3);

  h3.onclick = () => {
    localStorage.setItem('acceptCookies', true);
    h3.onclick = null;
    h3.innerHTML = 'Fantastic!';
    h3.className = 'accepted';
    setTimeout(() => {
      cookiesDiv.className = 'accept-cookies hidden';
      setTimeout(() => cookiesDiv.remove(), 2000);
    }, 500);
  };
} else {
  document.getElementById('accept-cookies').remove();
}
