import './style.css'

const LOCALSTORAGE_NAME = "cv_content";
const CV_CONTENT_ID = "cv-content";

const editSaveButton = document.getElementById('edit-content-button');
const printButton = document.getElementById('print-button');
const resetButton = document.getElementById('reset');

const saveToLocalStorage = () => {
  const bodyHTML = document.getElementById(CV_CONTENT_ID).innerHTML;
  localStorage.setItem(LOCALSTORAGE_NAME, bodyHTML);
}

const restoreFromLocalStorage = () => {
  const savedHTML = localStorage.getItem(LOCALSTORAGE_NAME);
  if (savedHTML !== null) {
    document.getElementById(CV_CONTENT_ID).innerHTML = savedHTML;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  restoreFromLocalStorage();
});

resetButton.addEventListener('click', () => {
  localStorage.removeItem(LOCALSTORAGE_NAME);
  location.reload();
});

editSaveButton.addEventListener('click', () => {
  const cvContentDiv = document.getElementById(CV_CONTENT_ID);

  const isEditing = cvContentDiv.contentEditable === 'true';
  cvContentDiv.contentEditable = isEditing ? 'false' : 'true';
  editSaveButton.textContent = isEditing ? 'Edit' : 'Save';

  if (isEditing) {
    saveToLocalStorage();
  }
});

printButton.addEventListener('click', () => {
  window.print();
});
