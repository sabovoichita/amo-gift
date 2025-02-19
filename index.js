console.log("Welcome");

function createTitle() {
  return `<h1>Amo Gift</h1>`;
}

function createHeader() {
  return `
  <header>
    <img src="images/logo.jpg" alt="logo" id="logo"/>
    ${createTitle()}
    ${createMenuBar()}
  </header>`;
}

function createMenuBar() {
  return `<div id="top-menu">
      <ul id="top-menu-ul">
        <li><a href="#" data-page="home">🏡Home</a></li>
        <li><a href="#" data-page="products">🎈Products</a></li>
        <li><a href="#" data-page="orders">🛒Orders</a></li>
        <li><a href="#" data-page="reviews">🎞Reviews</a></li>
        <li><a href="#" data-page="contact">🖋Contact</a></li>
      </ul>
    </div>
    `;
}
function createHomePage() {
  return `
      <section id="home">
        <h2>🎁 Welcome to Amo Gift!</h2>
        <p>🧧 Your one-stop shop for unique and personalized gift.</p>
        <img src="images/home-banner.jpg" alt="Amo Gift Banner"  height="600px" />
      </section>
      `;
}
function loadPage(page) {
  const main = document.getElementById("main");
  if (page === "home") {
    main.innerHTML = createHomePage();
  } else {
    console.log("creating page");
    main.innerHTML = `<h2>${page} page is under construction</h2>`;
  }
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
  document.body.innerHTML =
    createHeader() + `<main id="main"></main>` + createFooter();
  loadPage("home");
  document
    .getElementById("top-menu-ul")
    .addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        const page = e.target.getAttribute("data-page");
        loadPage(page);
      }
    });
}
initEvents();
