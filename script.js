"strict mode";

const notification = document.querySelectorAll(".notifications");
// const Weber = document.querySelector(".Weber");
const markAll = document.querySelector(".mark-all");
const unread = document.querySelectorAll(".unread");
let count = document.querySelector(".count");
let Ncount;

///fxn
Ncount = function () {
  const n = [...notification].reduce((acc, el) => {
    //   console.log(el);

    if (el.classList.contains("unread-notifications")) {
      acc++;
    }
    return acc;
  }, 0);
  return n;
};

/////////////

notification.forEach((el) => {
  el.addEventListener("click", function (e) {
    e.target.children;

    const Childnodez = e.target.closest("li").children;

    const d = [...Childnodez].find((el) => {
      //   //////////////
      return el.classList.contains("notification-details");
    });
    d.children;
    const detailschild = d.querySelector(".details").children;

    //////////
    [...detailschild].forEach((el) => {
      if (el.classList.contains("unread")) {
        console.log(el);
        el.style.display = "none";
        e.target.closest("li").classList.remove("unread-notifications");
      }
    });
    count.textContent = Ncount();
  });
});

console.log(Ncount());
////////////
markAll.addEventListener("click", function (e) {
  notification.forEach((el) => {
    el.classList.remove("unread-notifications");
  });
  /////////////
  unread.forEach((el) => {
    el.style.display = "none";
  });

  ////
  count.textContent = Ncount();
});
