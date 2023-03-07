function embedChatWidget() {
  const chatBubble = document.createElement("div");
  const chatWindow = document.createElement("iframe");

  chatBubble.id = "chat-bubble";
  chatWindow.id = "chat-window";
  chatWindow.src = "https://app.writepanda.io/embed?";
  chatWindow.frameBorder = "0";
  chatWindow.style.display = "none";

  const styles = `
    #chat-bubble {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: #0084ff;
      cursor: pointer;
    }
  
    #chat-bubble:after {
      content: "\f086";
      font-family: FontAwesome;
      font-size: 24px;
      color: #ffffff;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  
    #chat-window {
      position: fixed;
      bottom: 90px;
      right: 40px;
      width: 300px;
      height: 600px;
      border-radius: 25px;
    }
  `;

  const styleElement = document.createElement("style");
  styleElement.innerHTML = styles;

  chatBubble.appendChild(styleElement);
  chatBubble.appendChild(chatWindow);
  document.body.appendChild(chatBubble);

  chatBubble.addEventListener("click", function() {
    if (chatWindow.style.display === "none") {
      chatWindow.style.display = "block";
    } else {
      chatWindow.style.display = "none";
    }
  });
}

export { embedChatWidget };
