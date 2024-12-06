// Back Button Functionality
function goBack() {
  window.history.back(); // Navigates to the previous page
}

// Google Drive PDF Download Function
function downloadPDF(fileId) {
  const driveURL = `https://drive.google.com/uc?export=download&id=${fileId}`;
  window.open(driveURL, "_blank");
}
