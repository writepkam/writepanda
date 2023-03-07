<script>const CHAT_BUTTON_SIZE = 60;
const CHAT_BUTTON_RADIUS = 30;
const CHAT_BUTTON_BACKGROUND_COLOR = "#0084ff";
const scriptTag = document.currentScript;

const CHAT_BUTTON_ICON = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H6L4 18V4H20V16Z" fill="#FFFFFF"/>
  </svg>
`;

const chatBubble = document.createElement("div");
chatBubble.id = "chat-bubble";
chatBubble.style.position = "fixed";
chatBubble.style.bottom = "20px";
chatBubble.style.right = "20px";
chatBubble.style.width = `${CHAT_BUTTON_SIZE}px`;
chatBubble.style.height = `${CHAT_BUTTON_SIZE}px`;
chatBubble.style.borderRadius = `${CHAT_BUTTON_RADIUS}px`;
chatBubble.style.backgroundColor = CHAT_BUTTON_BACKGROUND_COLOR;
chatBubble.style.cursor = "pointer";
chatBubble.style.zIndex = 999999999;

const chatBubbleIcon = document.createElement("div");
chatBubbleIcon.style.display = "flex";
chatBubbleIcon.style.alignItems = "center";
chatBubbleIcon.style.justifyContent = "center";
chatBubbleIcon.style.width = "100%";
chatBubbleIcon.style.height = "100%";
chatBubbleIcon.innerHTML = CHAT_BUTTON_ICON;
chatBubble.appendChild(chatBubbleIcon);

const chatWindow = document.createElement("iframe");
chatWindow.id = "chat-window";
chatWindow.src = "https://app.writepanda.io/embed?";
chatWindow.frameBorder = "0";
chatWindow.style.position = "fixed";
chatWindow.style.bottom = "90px";
chatWindow.style.right = "40px";
chatWindow.style.borderRadius = "25px";
chatWindow.style.width = "300px";
chatWindow.style.height = "600px";
chatWindow.style.border = "2px solid #0084ff";
chatWindow.style.display = "block"; // make chat window visible by default

const mediaQuery = window.matchMedia("(min-width: 550px)");

function handleChatWindowSizeChange(mq) {
  if (mq.matches) {
    chatWindow.style.width = "400px";
    chatWindow.style.height = "600px";
  } else {
    chatWindow.style.width = "100%";
    chatWindow.style.height = "100%";
  }
}

mediaQuery.addListener(handleChatWindowSizeChange);
handleChatWindowSizeChange(mediaQuery);

chatBubble.addEventListener("click", function() {
  if (chatWindow.style.display === "none") {
    chatWindow.style.display = "block";
  } else {
    chatWindow.style.display = "none";
  }
});

const styleElement = document.createElement("style");
styleElement.innerHTML = `
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
`;

document.body.appendChild(chatBubble);
document.body.appendChild(chatWindow);
document.head.appendChild(styleElement);
</script>
