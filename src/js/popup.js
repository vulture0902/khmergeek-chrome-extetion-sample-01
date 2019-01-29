document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('link').addEventListener('click', function() {

    chrome.windows.create({
      url: 'html/keyboard.html',
      type: 'popup',
      width: 600,
      height: 250
    });

    window.close();

  });
});

