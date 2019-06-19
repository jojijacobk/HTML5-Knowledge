import fileUploadHandler from './file-upload.js';

window.onload = function onload() {
  const fileInput = document.getElementsByName('fileinput');
  fileInput[0].addEventListener('change', fileUploadHandler);
};
