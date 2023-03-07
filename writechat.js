const CHAT_BUTTON_SIZE = 70;
const CHAT_BUTTON_RADIUS = 20;
const BUTTON_BACKGROUND_COLOR = "#f2f2f2";
const SOURCES_SEPARATOR = "$*%^$";
const scriptTag = document.currentScript;

const CHAT_BUTTON_ICON = `
  <svg fill="#800080" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 60 60" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M42,15.5H5.93C2.66,15.5,0,18.16,0,21.429V42.57c0,3.27,2.66,5.93,5.93,5.93H12v10c0,0.413,0.254,0.784,0.64,0.933 C12.757,59.478,12.879,59.5,13,59.5c0.276,0,0.547-0.115,0.74-0.327L23.442,48.5H42c3.27,0,5.93-2.66,5.93-5.929V21.43 C47.93,18.16,45.27,15.5,42,15.5z"></path> <path d="M54.072,0.57L19.93,0.5C16.66,0.5,14,3.16,14,6.43v6.122c0,0.266,0.105,0.52,0.293,0.708 c0.188,0.187,0.442,0.292,0.707,0.292c0,0,0.001,0,0.002,0L40.07,13.5c8.951,0,9.93,2.021,9.93,7.93v21.141 c0,0.091-0.01,0.181-0.014,0.271l1.274,1.401c0.193,0.212,0.463,0.327,0.74,0.327c0.121,0,0.243-0.022,0.361-0.067 C52.746,44.354,53,43.983,53,43.57v-10h1.07c3.27,0,5.93-2.66,5.93-5.929V6.5C60,3.23,57.34,0.57,54.072,0.57z"></path> </g> </g></svg>
`;

const createDiv = (id, styles) => {
  const div = document.createElement("div");
  div.setAttribute("id", id);
  Object.assign(div.style, styles);
  return div;
};

const chatButton = createDiv("chatbase-bubble-button", {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  width: "50px",
  height: "50px",
  borderRadius: "25px",
  backgroundColor: "green",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
  cursor: "pointer",
  zIndex: 999999999,
});

const chatButtonIcon = createDiv(null, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  zIndex: 999999999,
  backgroundColor: BUTTON_BACKGROUND_COLOR,
  borderRadius: `${CHAT_BUTTON_RADIUS}px`,
});

chatButtonIcon.innerHTML = CHAT_BUTTON_ICON;
chatButton.appendChild(chatButtonIcon);

document.body.appendChild(chatButton);

const chat = createDiv("chatbase-bubble-window", {
  position: "fixed",
  flexDirection: "column",
  justifyContent: "space-between",
  bottom: "80px",
  right: "20px",
  width: "90vw",
  height: "80vh",
  backgroundColor: "#fff",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
  display: "none",
  border: "1px solid #D5D4D5",
  zIndex: 999999999,
});

document.body.appendChild(chat);

chat.innerHTML = `
  <iframe
    src="https://app.writepanda.io/embed?${scriptTag.getAttribute(
      'data-chatbotId'
    )}"
    width="100%"
    height="100%"
    frameborder="0"
  ></iframe>
`;

const mediaQuery = window.matchMedia("(min-width: 550px)");

const handleChatWindowSizeChange = (mq) => {
  if (mq.matches) {
    chat.style.height = "600px";
    chat.style.width = "400px";
  }
};

mediaQuery.addEventListener("change", handleChatWindowSizeChange);
handleChatWindowSizeChange(mediaQuery);

chatButton.addEventListener("click", () => {
  chat.style.display = chat.style.display === "none" ? "flex" : "none";
});
