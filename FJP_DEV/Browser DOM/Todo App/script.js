let mybutton = document.querySelector(".toolbar-actionButton .addSection");
let InputDiv = document.querySelector(".inputDiv");
let ticketMain = document.querySelector(".ticket-main");
let Addtext = document.querySelector(".Addtext");
let Allinputchosecolor = document.querySelectorAll(".colorDiv");
let Allticket = document.querySelectorAll(".ticket .top-color");
let removebutton = document.querySelector(".removeSection");
let arr = ["pink", "blue", "green", "black"];
let flag = true;
let lock = true;
let prioritycolor = "black";
// document.createElement.
mybutton.addEventListener("click", function (e) {
  console.log("clicked");
  console.log(flag);
  //   console.log(InputDiv.style);
  flag = !flag;
  flag == true
    ? (InputDiv.style.display = "none")
    : (InputDiv.style.display = "flex");
});
let tobedelete = false;
Addtext.addEventListener("keydown", (e) => {
  let key = e.key;
  if (key == "Shift") createTicket();
});
function createTicket() {
  let ticket = document.createElement("div");
  let idx = findIdx();
  let colortobeadd = arr[idx];
  let message = InputDiv.textContent.trim();
  ticket.className = "ticket";
  ticket.innerHTML = `<div class=" top-color ${prioritycolor} "></div>
        <div class="ticket-id"></div>
        <div class="ticket-contant">${message}</div>`;
  ticketMain.appendChild(ticket);
  InputDiv.style.display = "none";
  flag = true;
  Addtext.textContent = "";
  fn(ticket);
  changeticketHeader(ticket.childNodes[0]);
}
Allinputchosecolor.forEach((colorDiv) => {
  colorDiv.addEventListener("click", (e) => {
    Allinputchosecolor.forEach((againcolor) => {
      againcolor.classList.remove("active");
    });
    prioritycolor = colorDiv.classList[colorDiv.classList.length - 1];
    colorDiv.classList.add("active");
  });
});
function findIdx() {
  Allinputchosecolor.forEach((colorDiv, idx) => {
    if (colorDiv.classList.contains("active")) {
      return idx;
    }
  });
}
function changeticketHeader(ticket) {
  ticket.addEventListener("click", (e) => {
    let divcolor = ticket.classList[ticket.classList.length - 1];
    console.log(divcolor, "color");
    let myidx = arr.length - 1;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == divcolor) {
        myidx = i;
        break;
      }
    }
    console.log(myidx);
    ticket.classList.remove(arr[myidx]);
    ticket.classList.add(arr[(myidx + 1) % arr.length]);
  });
}
removebutton.addEventListener("click", (e) => {
  tobedelete = !tobedelete;
  tobedelete == true
    ? (removebutton.style.color = "red")
    : (removebutton.style.color = "lightgreen");
});
function fn(ticket) {
  ticket.addEventListener("click", (e) => {
    console.log("ayivalue", tobedelete);
    if (tobedelete == true) ticket.remove();
  });
}


