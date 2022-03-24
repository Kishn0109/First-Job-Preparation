let mybutton = document.querySelector(".toolbar-actionButton .addSection");
let InputDiv = document.querySelector(".inputDiv");
let flag = true;
let lock = true;
mybutton.addEventListener("click", function (e) {
  console.log("clicked");
  console.log(flag);
  //   console.log(InputDiv.style);
  flag = !flag;
  flag == true
    ? (InputDiv.style.display = "none")
    : (InputDiv.style.display = "flex");
});

