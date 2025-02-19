console.log("Welcome");

function createTitle() {
  return `<h1>Amo Gift</h1>`;
}

function createHeader() {
  return `
  <header>
    <img src="images/logo.jpg" alt="logo" id="logo"/>
    ${createTitle()}
  </header>`;
}

function createFooter() {
  return `
    <footer id="footer">
      <div id=footerContact>
        <div class="footerImg">img</div>
        <h3>🔊Contact</h3>
      </div>
      <div id="footerMobile">
      <div class="footerImg">img</div>
        <span>🤙Telefon: 0759142186</span>
        <span>📞WhatsApp: 0756921941</span>
      </div>
      <div id="footerFacebook">
        <div class="footerImg">img</div>
        <a href="https://www.facebook.com/AmoGiftOficial" target="_blank"
          >🔎Facebook</a>
      </div>
      <div id="footerEmail">
        <div class="footerImg">img</div>
        <a href="mailto:hristachem@yahoo.com">📩Email us</a>
      </div>
      <div id="footerAddress">
        <div class="footerImg">img</div>
        <span>🏡Str. Moigradului. Nr.1/A Bl. Ortelec, Zalau, Romania</span>
      </div>
    </footer>`;
}

function initEvents() {
  document.body.innerHTML = createHeader() + createFooter();
}
initEvents();
