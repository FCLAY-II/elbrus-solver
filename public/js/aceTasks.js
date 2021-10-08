const $formichka = document.querySelector("#but");
const out = document.querySelector("#butL");

const editor = ace.edit("editor");
editor.setTheme("ace/theme/chrome");
editor.session.setMode("ace/mode/javascript");
editor.getSelectedText(); // or for a specific range
editor.session.getTextRange(editor.getSelectionRange());

$formichka?.addEventListener("click", async (event) => {
  console.log(event.target);
  event.preventDefault();
  const getValue = editor.getValue();
  let taskId = event.target.closest('article').id
  console.log('tsk', taskId);
  let categoryId = event.target.closest('span').id
  console.log('catego',categoryId );
  const response = await fetch(`/tasks/${categoryId}/${taskId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ getValue }),
  });
console.log(response.status);
  if (response.ok) {
    window.location = `/tasks/${categoryId}/${Number(taskId) + 1}`
  } else if (response.status === 500) {
    window.location = `/`
  }
});

out?.addEventListener('click',()=>{
  window.location = '/user/solve'
})
