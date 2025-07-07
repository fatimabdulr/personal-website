
const colors = ["lavender", "honeydew", "beige", "mintcream", "aliceblue"];
let index = 0;

setInterval(() => {
  document.body.style.backgroundColor = colors[index];
  index = (index + 1) % colors.length;
}, 4000);


const welcomeMessage = document.createElement("h2");
welcomeMessage.textContent = "مرحباً بك في صفحتي!";
welcomeMessage.style.textAlign = "center";
welcomeMessage.style.marginTop = "30px";
welcomeMessage.style.color = "gray";


document.body.prepend(welcomeMessage);

 
