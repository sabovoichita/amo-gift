console.log("Welcome");
function createHeader() {
  return `<header><img src="images/logo.jpg" alt="logo" id="logo"/></header>`;
}

function createTitle() {
  return `<h1>Amo Gift</h1>`;
}
document.body.innerHTML = createHeader() + createTitle();
