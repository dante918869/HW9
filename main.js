// #1
const btn1 = document.querySelector(".btn-black");
btn1.addEventListener("click", () => {
  document.body.style.backgroundColor = "black";
});

// #2

const btn2 = document.querySelector(".btn");
const inputColor = document.querySelector(".change-color");

btn2.addEventListener("click", () => {
  document.body.style.backgroundColor = inputColor.value;
  if ((inputColor.value !== "red", "blue", "green")) {
    alert("wrong color");
  }
});
