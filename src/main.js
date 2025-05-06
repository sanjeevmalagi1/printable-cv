import './style.css'

const editSaveButton = document.getElementById('edit-content-button');

editSaveButton.addEventListener('click', () => {
  const isEditing = document.body.contentEditable === 'true';
  document.body.contentEditable = isEditing ? 'false' : 'true';
  editSaveButton.textContent = isEditing ? 'Edit' : 'Save';
});

const printButton = document.getElementById('print-button');

printButton.addEventListener('click', () => {
  window.print();
});
