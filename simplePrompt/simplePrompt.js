function simpleMultiPrompt(message, fields) {
  return new Promise(function (resolve) {
    const inputs = fields
      .map(
        (field) =>
          `<label for="${field.id}">${field.label}</label>
             <input type="text" id="${field.id}" placeholder="${field.placeholder}" required>`
      )
      .join("<br>");
    const actions = [`<button type="submit">OK</button>`];
    const el = createPromptEl(message + "<br><br>" + inputs, actions);
    document.body.appendChild(el);
    $("#custom-prompt").addEventListener("submit", function (e) {
      e.preventDefault();
      const values = {};
      fields.forEach((field) => {
        values[field.id] = $(`#${field.id}`).value.trim();
      });
      document.body.removeChild(el);
      resolve(values);
    });
    $(`#${fields[0].id}`).focus();
  });
}
function createPromptEl(message, actions, title = "") {
  const el = document.createElement("div");
  el.id = "custom-prompt-container";
  el.innerHTML = `
        <form id="custom-prompt">
          ${title ? `<h3 class="prompt-title">${title}</h3>` : ""}
          <label for="custom-prompt-input">${message}</label>
          <div class="actions">
            ${actions.join("")} 
          </div>
        </form>`;
  return el;
}
