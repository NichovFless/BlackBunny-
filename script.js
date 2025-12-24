(function(){
  const btn = document.getElementById('autoBtn');
  const input = document.getElementById('searchInput');

  const messages = [
    "Hey,",
    "Vài lời chúc tôi ngại nói",
    "Nói ở đây diện tích hơi nhỏ",
    "Bạn ấn cái chữ này đi 👉"
  ];

  let typingTimer = null;
  let msgIndex = 0;
  let charIndex = 0;

  function typeMessage(text, callback) {
    input.value = "";
    charIndex = 0;

    typingTimer = setInterval(() => {
      if (charIndex >= text.length) {
        clearInterval(typingTimer);
        typingTimer = null;

        if (callback) callback();
        return;
      }

      input.value += text[charIndex++];
    }, 60); // tốc độ gõ từng ký tự
  }

    function startTypingSequence() {
    // ✅ Disable nút để tránh spam
    btn.disabled = true;
    msgIndex = 0;

    function nextMessage() {
      if (msgIndex >= messages.length) {
        // ✅ Enable lại nút sau khi xong chuỗi
        btn.disabled = false;

        // ✅ Tạo link sau khi hết tất cả câu
                const link = document.createElement('a');
        link.href = "index2.html"; 
        link.textContent = "Đây nè :33";
        link.style.color = "#fff";
        link.style.fontWeight = "bold";
        link.style.textDecoration = "underline";
        link.target = "_blank";
        input.parentElement.parentElement.appendChild(link);
        return;
      }

      typeMessage(messages[msgIndex], () => {
        msgIndex++;

        // chờ rồi gõ câu tiếp theo
        setTimeout(nextMessage, 1000);
      });
    }

    nextMessage();
  }

  btn.addEventListener("click", startTypingSequence);

})();
