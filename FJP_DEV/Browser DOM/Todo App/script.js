let mybutton = document.querySelector(".toolbar-actionButton .addSection");
let InputDiv = document.querySelector(".inputDiv");
let ticketMain = document.querySelector(".ticket-main");
let Addtext = document.querySelector(".Addtext");
let Allinputchosecolor = document.querySelectorAll(".colorDiv");
let Allticket = document.querySelectorAll(".ticket .top-color");
let removebutton = document.querySelector(".removeSection");
let arr = ["pink", "blue", "green", "black"];
let allPriorityColors = document.querySelectorAll(".colorDiv ");
let flag = true;
let lock = true;
let prioritycolor = "black";
// document.createElement.
let AllticketArr = [];
let leftPrioritycolor = "black";

allPriorityColors.forEach(function (colorElem) {
  colorElem.addEventListener("click", function (e) {
    allPriorityColors.forEach(function (priorityColorElem) {
      priorityColorElem.classList.remove("active");
    });
    colorElem.classList.add("active");

    leftPrioritycolor = colorElem.classList[1];
  });
});

//filter ticket according to colur
let Allprioritycolor = document.querySelectorAll(".PriorityColor");

//handel ticket creation on changing head colour

  
Allprioritycolor.forEach(function (ele) {
  ele.addEventListener("click", (e) => {
    let prioritycolour = ele.classList[ele.classList.length - 1];
    console.log("prioritycolor", prioritycolour);

    let filterArray = AllticketArr.filter((obj) => {
      // console.log(prioritycolour, obj.ticketcolor);
      return prioritycolour == obj.ticketcolor;
    });

    let AllticketToberemove = document.querySelectorAll(".ticket");
    AllticketToberemove.forEach((ticket) => {
      ticket.remove();
      console.log("removed");
    });

    console.log(filterArray);
    filterArray.forEach((obj) => {
      createTicket(obj.ticketcolor, obj.tickttask, obj.AlreadyId);
    });
  });

  ele.addEventListener("dblclick", (e) => {
    console.log("dbclick");
    AllticketArr.forEach((obj) => {
      createTicket(obj.ticketcolor, obj.tickttask, obj.AlreadyId);
    });
  });
});

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
  if (key == "Shift") {
    // let id = shortid();;
    let message = InputDiv.textContent.trim();
    createTicket(leftPrioritycolor, message);
  }
});
function createTicket(ticketcolor, tickttask, AlreadyId) {
  let id = AlreadyId || shortid();
  let ticket = document.createElement("div");
  let idx = findIdx();
  let colortobeadd = arr[idx];
  console.log("ticket colour", ticketcolor);
  ticket.className = "ticket";
  ticket.innerHTML = `<div class=" top-color ${ticketcolor} "></div>
        <div class="ticket-id">${id}</div>
        <div class="ticket-contant">${tickttask}</div>
        <div class="ticket-lock"><i class="fa-solid fa-lock"></i></div>`;
  ticketMain.appendChild(ticket);
  InputDiv.style.display = "none";
  flag = true;
  Addtext.textContent = "";
  fn(ticket);
  // changeticketHeader(ticket.childNodes[0]);
  handleColor(ticket);
  lockUnlock(ticket);
  if (!AlreadyId) AllticketArr.push({ ticketcolor, tickttask, AlreadyId: id });
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

function lockUnlock(ticket) {
  // let lockbutton = ticket.querySelector("ticket-lock").children[0];
  let ticketLockElem = ticket.querySelector(".ticket-lock");
  let contantCon = ticket.querySelector(".ticket-contant");
  let lockbutton = ticketLockElem.children[0];
  let lockClass = "fa-lock";
  let unlockClass = "fa-lock-open";
  lockbutton.addEventListener("click", function () {
    if (lockbutton.classList.contains(lockClass)) {
      contantCon.setAttribute("contenteditable", "true");
      lockbutton.classList.remove(lockClass);
      lockbutton.classList.add(unlockClass);
    } else {
      contantCon.setAttribute("contenteditable", "false");
      lockbutton.classList.remove(unlockClass);
      lockbutton.classList.add(lockClass);
    }
  });
}

const colors = ["black", "pink", "blue", "green"];

function handleColor(ticket) {
  let ticketColorBand = ticket.querySelector(".top-color");

  ticketColorBand.addEventListener("click", function (e) {
    let currentTicketColor = ticketColorBand.classList[1];

    let currentTicketColoridx = colors.findIndex(function (color) {
      return currentTicketColor === color;
    });

    currentTicketColoridx++;

    let newTicketColorIdx = currentTicketColoridx % colors.length;
    let newTicketColor = colors[newTicketColorIdx];

    ticketColorBand.classList.remove(currentTicketColor);
    ticketColorBand.classList.add(newTicketColor);
  });
  console.log(Allprioritycolor);
  AllticketArr.forEach((ele) => {
    let headofticket = ele.querySelector(".top-color");
    if (headofticket != null) {
      console.log(headofticket);
      headofticket.addEventListener("click", (e) => {
        let tikcetheadcolur = ele.querySelector("top-color").classList[1];
        let ticketdeta = ele
          .querySelector(".ticket-contant")
          .textContent.trim();
        let ticketId = ele.querySelector(".ticket-id").textContent.trim();
        ele.remove();
        createTicket(tikcetheadcolur, ticketdeta);
      });
    }
  });

}
