const image = document.querySelector("#animation");
const afterContainer = document.querySelector(".after");

const eyeRadius = 15;

const leftEye = document.querySelector(".left-eye");
const rightEye = document.querySelector(".right-eye");

image.addEventListener("animationend", () => {
  afterContainer.style.display = "block";
});

const container = document.querySelector(".container");
document.body.addEventListener("mousemove", (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const deltaX = mouseX / window.innerWidth - 0.5;
  const deltaY = mouseY / window.innerHeight - 0.5;

  leftEye.style.left = `${deltaX * eyeRadius}px`;
  leftEye.style.top = `${deltaY * eyeRadius}px`;

  rightEye.style.left = `${deltaX * eyeRadius}px`;
  rightEye.style.top = `${deltaY * eyeRadius}px`;
});
