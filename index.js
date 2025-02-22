let cart = [];

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
        <img src="images/home-banner.jpg" alt="Amo Gift Banner" />
      </section>
      `;
}

function createProductsPage() {
  setTimeout(() => {
    document.querySelectorAll(".addToCart").forEach((button) => {
      button.addEventListener("click", function () {
        const category = this.getAttribute("data-category");
        const index = this.getAttribute("data-index");
        addToCart(category, index);
      });
    });
  }, 100);
  return `
    <section id="products">
      <h2>🎈 Our Products!</h2>
      <p>🎀 Choose from our unique and personalized gifts.</p>

      <h3>🎁 Mărțișor Collection</h3>
      <div class="productGrid">
        ${generateProductImages("martisor", 9)}
      </div>

      <h3>🕯 Lumânare Collection</h3>
      <div class="productGrid">
        ${generateProductImages("lumanare", 3)}
      </div>

      <h3>🖼 Tablouri Licheni Collection</h3>
      <div class="productGrid">
        ${generateProductImages("licheni", 10)}
      </div>

      <h3>💐 Aranjament Collection</h3>
      <div class="productGrid">
        ${generateProductImages("aranjament", 23)}
      </div>

      <h3>🌻 Martie Collection</h3>
      <div class="productGrid">
        ${generateProductImages("martie", 6)}
      </div>

      <h3>💑 Tricouri Collection</h3>
      <div class="productGrid">
        ${generateProductImages("tricouri", 13)}
      </div>

      <h3>👶 Botez Collection</h3>
      <div class="productGrid">
        ${generateProductImages("botez", 1)}
      </div>

      <h3>☕ Cană Collection</h3>
      <div class="productGrid">
        ${generateProductImages("cana", 7)}
      </div>

      <h3>🍾 Sticlă Collection</h3>
      <div class="productGrid">
        ${generateProductImages("sticla", 7)}
      </div>
      
      <h3>🍾 Brățări Collection</h3>
      <div class="productGrid">
        ${generateProductImages("bratari", 3)}
      </div>

      <h3>🍾 Body Collection</h3>
      <div class="productGrid">
        ${generateProductImages("body", 3)}
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
             <button class="addToCart" data-category="${category}" data-index="${i}">🛒 Add to Cart</button>
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
      <div id="cart">
         <h3>🛍 Your Cart</h3>
          <ul id="cartItems"></ul>
          <button id="placeOrder">✅ Place Order</button>
      </div>
    </section>
    `;
}

function createReviewsPage() {
  return `
    <section id="reviews">
      <h2>🏆 Here are our reviews!</h2>
      <p>📚 At the end of your order please leave us a review!</p>
      <p>Thank you!</p>
      <img src="images/logo.jpg" alt="Amo Gift Logo" />
    </section>
    `;
}

function createContactPage() {
  return `
    <section id="contact">
      <h2>☎ Contact us for your order!</h2>
      <p>📚 We are here to help!</p>
      <p>🙏 Thank you!</p>
      <img src="images/icons/contact.webp" alt="Amo Gift Icon" height="40px" />
      <div id="footerMobile">
        <div class="footerImg">
          <img
            src="images/icons/phone.webp"
            alt="Amo Gift Icon"
            height="40px"
          />
        </div>
        <span>🤙 Telefon: 0759142186</span>
        <span>📞 WhatsApp: 0756921941</span>
      </div>
      <div id="footerFacebook">
        <div class="footerImg">
          <img
            src="images/icons/facebook.webp"
            alt="Amo Gift Icon"
            height="40px"
          />
        </div>
        <a href="https://www.facebook.com/AmoGiftOficial" target="_blank"
          >🔎 Facebook</a
        >
      </div>
      <div id="footerEmail">
        <div class="footerImg">
          <img
            src="images/icons/contact.webp"
            alt="Amo Gift Icon"
            height="40px"
          />
        </div>
        <a href="mailto:hristachem@yahoo.com">📩 Email us</a>
      </div>
      <div id="footerAddress">
        <div class="footerImg">
          <img
            src="images/icons/address.webp"
            alt="Amo Gift Icon"
            height="40px"
          />
        </div>
        <span>📌 Str. Moigradului. Nr.1/A Bl. Ortelec, Zalau, Romania</span>
      </div>
      <img src="images/home-banner.jpg" alt="Amo Gift Banner" />
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
    updateCartUI();
  } else if (page === "reviews") {
    main.innerHTML = createReviewsPage();
  } else if (page === "contact") {
    main.innerHTML = createContactPage();
  } else {
    console.log("creating page");
    main.innerHTML = `<h2>${page} page is under construction</h2>`;
  }
}

function addToCart(category, index) {
  const productName = `${
    category.charAt(0).toUpperCase() + category.slice(1)
  } ${index}`;
  const existingItem = cart.find(
    (item) => item.category === category && item.index === index
  );
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      category: category,
      index: index,
      name: productName,
      image: `images/${category}/${category}-${index}.jpg`,
      quantity: 1,
    });
  }

  updateCartUI();
  showNotification(`${productName} added to cart!`);
}

function showNotification(message) {
  const notification = document.createElement("div");
  notification.classList.add("cart-notification");
  notification.textContent = message;
  document.body.appendChild(notification);
  setTimeout(() => {
    notification.style.opacity = "1";
  }, 100);

  setTimeout(() => {
    notification.style.opacity = "0";
    setTimeout(() => {
      notification.remove();
    }, 500);
  }, 2000);
}

function updateCartUI() {
  const cartItems = document.getElementById("cartItems");
  if (cartItems) {
    cartItems.innerHTML = "";
    cart.forEach((item, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <img src="${item.image}" alt="${item.name}" height="50px"/>
        <span>${item.name} (x ${item.quantity} pieces)</span>
        <button onclick="removeFromCart(${index})">❌ Remove</button>
      `;
      cartItems.appendChild(li);
    });
  }
}

function removeFromCart(index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity -= 1;
  } else {
    cart.splice(index, 1);
  }
  updateCartUI();
}

function createFooter() {
  return `
    <footer id="footer">
      <div id="footerMobile">
      <div class="footerImg">
        <img src="images/icons/phone.webp" alt="Amo Gift Icon"  height="40px" />
      </div>
        <span>🤙 Telefon: 0759142186</span>
        <span>📞 WhatsApp: 0756921941</span>
      </div>
      <div id="footerFacebook">
        <div class="footerImg">
        <img src="images/icons/facebook.webp" alt="Amo Gift Icon"  height="40px" />
        </div>
        <a href="https://www.facebook.com/AmoGiftOficial" target="_blank"
          >🔎 Facebook</a>
      </div>
      <div id="footerEmail">
        <div class="footerImg">
        <img src="images/icons/contact.webp" alt="Amo Gift Icon"  height="40px" />
        </div>
        <a href="mailto:hristachem@yahoo.com">📩 Email us</a>
      </div>
      <div id="footerAddress">
        <div class="footerImg">
        <img src="images/icons/address.webp" alt="Amo Gift Icon"  height="40px" />
        </div>
        <span>🏡 Str. Moigradului. Nr.1/A Bl. Ortelec, Zalau, Romania</span>
      </div>
    </footer>`;
}

function sendOrderToWhatsApp() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  let message = "🛍 *New Order from Amo Gift!*\n\n";
  cart.forEach((item, index) => {
    message += `${index + 1}. ${item.name} (x${item.quantity})\n`;
  });

  message +=
    "\n📞 *Please confirm your contact details:*\n- Name:\n- Address:\n- Phone:\n";

  const encodedMessage = encodeURIComponent(message);
  const phone = "0034642771871"; //
  const whatsappURL = `https://wa.me/${phone}?text=${encodedMessage}`;

  window.open(whatsappURL, "_blank");
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
  document.addEventListener("click", function (e) {
    if (e.target.id === "placeOrder") {
      sendOrderToWhatsApp();
    }
  });
}
initEvents();
