document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-sidebar');
    const sidebar = document.querySelector('.sidebar');

    toggleButton.addEventListener('click', function() {
        if (sidebar.style.display === 'block') {
            sidebar.style.display = 'none';
            toggleButton.textContent = '☰';
        } else {
            sidebar.style.display = 'block';
            toggleButton.textContent = '✖';
        }
    });
});

const fileUrl = 'GMDFBT-1.1.0-beta.2-x64-(PRE).zip';

fetch(fileUrl)
  .then(response => {
    const fileName = fileUrl.split('/').pop();
    const fileSize = response.headers.get('Content-Length');
    const lastModified = response.headers.get('Last-Modified');

    if (fileName) document.getElementById('file-name').textContent = fileName;
    if (fileSize) document.getElementById('file-size').textContent =
      (fileSize / (1024 * 1024)).toFixed(1) + 'MB';
    if (lastModified) document.getElementById('file-date').textContent =
      new Date(lastModified).toLocaleDateString(undefined, {
        year: 'numeric', month: 'long', day: 'numeric'
      });
  })
  .catch(err => {
    console.warn('Could not fetch file info:', err);
  });

  