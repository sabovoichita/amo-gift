let cart = [];

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

function sendOrderToWhatsApp() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  let customerName = prompt("Enter your name:");
  let customerAddress = prompt("Enter your address:");
  let customerPhone = prompt("Enter your phone number:");

  if (!customerName || !customerAddress || !customerPhone) {
    alert("Please fill in all details before placing an order.");
    return;
  }

  let message = `🛍 *New Order from Amo Gift!*\n\n`;
  cart.forEach((item, index) => {
    message += `${index + 1}. ${item.name} (x${item.quantity})\n`;
  });

  message += `\n📞 *Customer Details:*\n- Name: ${customerName}\n- Address: ${customerAddress}\n- Phone: ${customerPhone}`;

  const encodedMessage = encodeURIComponent(message);
  const phone = "0034642771871";
  const whatsappURL = `https://wa.me/${phone}?text=${encodedMessage}`;

  window.open(whatsappURL, "_blank");
}

function showCategory(category) {
  const allSections = document.querySelectorAll(".productCategory");

  allSections.forEach((section) => {
    if (category === "all") {
      section.style.display = "block"; // Show all categories
    } else {
      section.style.display =
        section.id === `category-${category}` ? "block" : "none";
    }
  });
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

function generateCategorySection(category, count) {
  return `
    <div class="productCategory" id="category-${category}">
      <h3>${
        category.charAt(0).toUpperCase() + category.slice(1)
      } Collection</h3>
      <div class="productGrid">
        ${generateProductImages(category, count)}
      </div>
    </div>
  `;
}

function loadReviews() {
  const reviewsContainer = document.getElementById("reviewsContainer");
  reviewsContainer.innerHTML = "";

  const defaultReviews = [
    { name: "Ana", text: "Best gifts ever! Totally recommend.", rating: 5 },
    { name: "Dana", text: "Great quality and fast delivery.", rating: 4 },
    { name: "Alina", text: "Great quality gifts! 🎁", rating: 5 },
    { name: "Raul", text: "Fast delivery and awesome products!", rating: 4 },
    { name: "Emma", text: "Will definitely order again. 🌟", rating: 5 },
  ];

  const savedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
  const allReviews = [...defaultReviews, ...savedReviews];

  allReviews.forEach((review) => {
    const reviewElement = document.createElement("div");
    reviewElement.classList.add("review");
    reviewElement.innerHTML = `
      <p><strong>${review.name}</strong> ${"⭐".repeat(review.rating)}</p>
      <p>${review.text}</p>
      <hr/>
    `;
    reviewsContainer.appendChild(reviewElement);
  });
}

function saveReview(event) {
  event.preventDefault();
  const form = document.getElementById("reviewForm");
  const name = document.getElementById("name").value;
  const reviewText = document.getElementById("review").value;
  const rating = document.getElementById("rating").value;
  const newReview = {
    name: name,
    text: reviewText,
    rating: rating,
  };
  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  reviews.push(newReview);
  localStorage.setItem("reviews", JSON.stringify(reviews));
  form.reset();
  loadReviews();
}

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
  return `
    <section id="products">
      <h2>🎈 Our Products!</h2>
      <p>🎀 Choose from our unique and personalized gifts.</p>

      <nav class="product-menu">
        <button onclick="showCategory('all')">📦 All Products</button>
        <button onclick="showCategory('martisor')">🎁 Mărțișor</button>
        <button onclick="showCategory('lumanare')">🕯 Lumânare</button>
        <button onclick="showCategory('licheni')">🖼 Tablouri Licheni</button>
        <button onclick="showCategory('aranjament')">💐 Aranjament</button>
        <button onclick="showCategory('martie')">🌻 Martie</button>
        <button onclick="showCategory('tricouri')">💑 Tricouri</button>
        <button onclick="showCategory('botez')">👶 Botez</button>
        <button onclick="showCategory('cana')">☕ Cană</button>
        <button onclick="showCategory('sticla')">🍾 Sticlă</button>
        <button onclick="showCategory('bratari')">🔗 Brățări</button>
        <button onclick="showCategory('body')">👕 Body</button>
        <button onclick="showCategory('buchet')">💐 Buchet</button>
        <button onclick="showCategory('perna')">🛏 Pernă</button>
        <button onclick="showCategory('eticheta')">🏷 Etichetă</button>
        <button onclick="showCategory('set')">🎁 Set</button>
        <button onclick="showCategory('ceramica')">🏺 Ceramica</button>
      </nav>

      <div id="productsContainer">
        ${generateCategorySection("martisor", 9)}
        ${generateCategorySection("lumanare", 4)}
        ${generateCategorySection("licheni", 10)}
        ${generateCategorySection("aranjament", 23)}
        ${generateCategorySection("martie", 6)}
        ${generateCategorySection("tricouri", 13)}
        ${generateCategorySection("botez", 1)}
        ${generateCategorySection("cana", 7)}
        ${generateCategorySection("sticla", 7)}
        ${generateCategorySection("bratari", 3)}
        ${generateCategorySection("body", 3)}
        ${generateCategorySection("buchet", 1)}
        ${generateCategorySection("perna", 1)}
        ${generateCategorySection("eticheta", 2)}
        ${generateCategorySection("set", 2)}
        ${generateCategorySection("ceramica", 6)}
      </div>
    </section>
  `;
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
      <p id="reviewText">📚 At the end of your order please leave us a review! Thank you</p>
      
      <img src="images/logo.jpg" alt="Amo Gift Logo" />

      <form id="reviewForm" onsubmit="saveReview(event)">
        <input type="text" id="name" placeholder="Your Name" required />
        <textarea
          id="review"
          placeholder="Write your review"
          required
        ></textarea>
        <input
          type="number"
          id="rating"
          min="1"
          max="5"
          placeholder="Rating (1-5)"
          required
        />
        <button type="submit">Submit Review</button>
      </form>
      <div id="reviewsContainer">
        <div class="review">
          <p><strong>Ana</strong> ⭐⭐⭐⭐⭐</p>
          <p>Best gifts ever! Totally recommend.</p>
          <hr />
        </div>
        <div class="review">
          <p><strong>Dana</strong> ⭐⭐⭐⭐</p>
          <p>Great quality and fast delivery.</p>
          <hr />
        </div>
        <div class="review">
          <p><strong>Alina</strong> ⭐⭐⭐⭐⭐</p>
          <p>Great quality gifts! 🎁</p>
          <hr />
        </div>
      </div>
    </section>
    `;
}

function createContactPage() {
  return `
    <section id="contact">
      <h2>☎ Contact us for your order!</h2>
      <p>📚 We are here to help!</p>
      <p>🙏 Thank you!</p>
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
      <div id="footerTiktok">
        <div class="footerImg">
          <img
            src="images/icons/tiktok.webp"
            alt="Amo Gift Tiktok"
            height="40px"
          />
        </div>
        <a href="https://www.tiktok.com/@amogiftoficial/" target="_blank"
          >🎶 Tiktok</a
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
        <a href="mailto:hristachem@yahoo.com">📩 Email</a>
      </div>
      <div id="footerAddress">
        <div class="footerImg">
          <img
            src="images/icons/address.webp"
            alt="Amo Gift Icon"
            height="40px"
          />
        </div>
        <span>📌 Str. Moigradului. Bl Nr.1/A, Zalau, Romania</span>
      </div>
      
    </section>
    `;
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
       <div id="footerTiktok">
        <div class="footerImg">
          <img
            src="images/icons/tiktok.webp"
            alt="Amo Gift Tiktok"
            height="40px"
          />
        </div>
        <a href="https://www.tiktok.com/@amogiftoficial/" target="_blank"
          >🎶 Tiktok</a
        >
      </div>
      <div id="footerEmail">
        <div class="footerImg">
        <img src="images/icons/contact.webp" alt="Amo Gift Icon"  height="40px" />
        </div>
        <a href="mailto:hristachem@yahoo.com">📩 Email</a>
      </div>
      <div id="footerAddress">
        <div class="footerImg">
        <img src="images/icons/address.webp" alt="Amo Gift Icon"  height="40px" />
        </div>
        <span id="footerAdd">🏡 Str. Moigradului. Bl Nr.1/A, Zalau, Romania</span>
      </div>
    </footer>`;
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

function removeFromCart(index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity -= 1;
  } else {
    cart.splice(index, 1);
  }
  updateCartUI();
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

function initEvents() {
  document.body.innerHTML =
    createHeader() + `<main id="main"></main>` + createFooter();
  loadPage("reviews");
  document
    .getElementById("top-menu-ul")
    .addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        const page = e.target.getAttribute("data-page");
        loadPage(page);
      }
    });
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("addToCart")) {
      const category = e.target.getAttribute("data-category");
      const index = e.target.getAttribute("data-index");
      addToCart(category, index);
    } else if (e.target.id === "placeOrder") {
      sendOrderToWhatsApp();
    }
  });
}

initEvents();
