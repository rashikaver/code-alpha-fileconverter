document.getElementById('imageInput').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file && file.type.startsWith('image/')) {
    showLoadingSection();
    convertToPDF(file)
      .then(downloadPDF)
      .catch(handleError);
  }
});

function convertToPDF(file) {
  return new Promise(function(resolve, reject) {
    // Simulating conversion delay
    setTimeout(function() {
      resolve();
    }, 3000);
  });
}

function downloadPDF() {
  hideLoadingSection();
  showResultSection();
  const downloadLink = document.getElementById('downloadLink');
  downloadLink.href = 'path/to/converted.pdf'; 
}

function handleError(error) {
  hideLoadingSection();
  const loadingText = document.querySelector('.loading-text');
  loadingText.textContent = 'Oops! Something went wrong.';
  console.error(error);
}

function showLoadingSection() {
  const uploadSection = document.querySelector('.upload-section');
  const loadingSection = document.querySelector('.loading-section');
  uploadSection.style.display = 'none';
  loadingSection.style.display = 'block';
}

function hideLoadingSection() {
  const loadingSection = document.querySelector('.loading-section');
  loadingSection.style.display = 'none';
}

function showResultSection() {
  const resultSection = document.querySelector('.result-section');
  resultSection.style.display = 'block';
}