console.log("Welcome");

function createTitle() {
  return `<h1>Amo Gift</h1>`;
}

function createHeader() {
  return `
  <header>
    <div id="logo-wrapper">
        <img src="images/logo.jpg" alt="logo" id="logo"/>
    </div>
    ${createTitle()}
    ${createMenuBar()}
  </header>`;
}

function createMenuBar() {
  return `<div id="top-menu">
      <ul id="top-menu-ul">
        <li><a href="#" data-page="home">🏡 Home</a></li>
        <li><a href="#" data-page="products">🎈 Products</a></li>
        <li><a href="#" data-page="orders">🛒 Orders</a></li>
        <li><a href="#" data-page="reviews">🎞 Reviews</a></li>
        <li><a href="#" data-page="contact">🖋 Contact</a></li>
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

function createProductsPage() {
  return `
    <section id="products">
      <h2>🎈 Our Products!</h2>
      <p>🎀 Choose from our unique and personalized gifts.</p>

      <h3>🎁 Mărțișor Collection</h3>
      <div class="productGrid">
        ${generateProductImages("martisor", 6)}
      </div>

      <h3>🕯 Lumânare Collection</h3>
      <div class="productGrid">
        ${generateProductImages("lumanare", 3)}
      </div>

      <h3>🖼 Tablouri Licheni Collection</h3>
      <div class="productGrid">
        ${generateProductImages("licheni", 9)}
      </div>
    </section>
  `;
}

function generateProductImages(category, count) {
  let imagesHTML = "";
  for (let i = 1; i <= count; i++) {
    imagesHTML += `
        <div class="productCard">
          <div class="productImgWrap">
            <img src="images/${category}/${category}-${i}.jpg" alt="${category} ${i}" class="productImage" height="200px"/>
          </div>
          <div class="productDetails">
            <h3>${
              category.charAt(0).toUpperCase() + category.slice(1)
            } ${i}</h3>
          </div>
        </div>
      `;
  }
  return imagesHTML;
}

function createOrdersPage() {
  return `
    <section id="orders">
      <h2>🛒 Your Orders are here!</h2>
      <p>🥂 Thank you for shopping with us!</p>
      <img src="images/logo.jpg" alt="Amo Gift Logo"  height="400px" />
    </section>
    `;
}

function createReviewsPage() {
  return `
    <section id="reviews">
      <h2>🏆 Here are our reviews!</h2>
      <p>📚 At the end of your order please leave us a review!</p>
      <p>Thank you!</p>
      <img src="images/logo.jpg" alt="Amo Gift Logo"  height="400px" />
    </section>
    `;
}

function createContactPage() {
  return `
    <section id="contact">
      <h2>☎ Contact us for your order!</h2>
      <p>📚 We are here to help!</p>
      <p>🙏 Thank you!</p>
      <img src="images/logo.jpg" alt="Amo Gift Logo"  height="400px" />
    </section>
    `;
}

function loadPage(page) {
  const main = document.getElementById("main");
  if (page === "home") {
    main.innerHTML = createHomePage();
  } else if (page === "products") {
    main.innerHTML = createProductsPage();
  } else if (page === "orders") {
    main.innerHTML = createOrdersPage();
  } else if (page === "reviews") {
    main.innerHTML = createReviewsPage();
  } else if (page === "contact") {
    main.innerHTML = createContactPage();
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
        <h3>🔊 Contact</h3>
      </div>
      <div id="footerMobile">
      <div class="footerImg">img</div>
        <span>🤙 Telefon: 0759142186</span>
        <span>📞 WhatsApp: 0756921941</span>
      </div>
      <div id="footerFacebook">
        <div class="footerImg">img</div>
        <a href="https://www.facebook.com/AmoGiftOficial" target="_blank"
          >🔎 Facebook</a>
      </div>
      <div id="footerEmail">
        <div class="footerImg">img</div>
        <a href="mailto:hristachem@yahoo.com">📩 Email us</a>
      </div>
      <div id="footerAddress">
        <div class="footerImg">img</div>
        <span>🏡 Str. Moigradului. Nr.1/A Bl. Ortelec, Zalau, Romania</span>
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
