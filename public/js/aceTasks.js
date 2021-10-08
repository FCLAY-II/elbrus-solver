const $formichka = document.querySelector("#but");

const editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/javascript");
editor.getSelectedText(); // or for a specific range
editor.session.getTextRange(editor.getSelectionRange());

$formichka.addEventListener("click", async (event) => {
  event.preventDefault();
  const getValue = editor.getValue();
  console.log(getValue);
  const response = await fetch("/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ getValue }),
  });
});
