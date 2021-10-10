const $formichka = document.querySelector("#but");

const editor = ace?.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/javascript");
editor.getSelectedText();
editor.session.getTextRange(editor.getSelectionRange());

$formichka?.addEventListener("click", async (event) => {
  event.preventDefault();
  const getValue = editor.getValue();
  let taskId = event.target.closest('div').id
  let categoryId = event.target.closest('span').id
  const response = await fetch(`/tasks/${categoryId}/${taskId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ getValue }),
  });
  if (response.ok) {
    window.location = `/tasks/${categoryId}/${Number(taskId) + 1}`
  } else if (response.status === 500) {
    window.location = `/tasks`
  }
});
