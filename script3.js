const yesBtn = document.getElementById('yesBtn');
  const noBtn = document.getElementById('noBtn');

  // No
  noBtn.addEventListener('click', () => {
    let currentSize = parseInt(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = (currentSize + 5) + 'px';
    yesBtn.style.padding = (15 + (currentSize-18)/1.2) + 'px ' + (30 + (currentSize-18)/1.2) + 'px';
  });

  // Yes
  yesBtn.addEventListener('click', () => {
    window.location.href = "index4.html";
  });