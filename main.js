

// ===================== Dark Theme ====================
let theme = localStorage.getItem("theme")
const themeBtn = document.getElementById("light")


if (theme === "dark-theme") {
  document.body.classList.add("dark-theme")
}

themeBtn.onclick = function () {
  if (theme === "dark-theme") {
    localStorage.setItem("theme", "light-theme");
    document.body.classList.remove("dark-theme")
    theme = "light-theme"

  }

  else {
    localStorage.setItem("theme", "dark-theme");
    document.body.classList.add("dark-theme")
    theme = "dark-theme"
  }
};



// =========================== Category Clicked =======================
let btn = document.querySelector(".category")

let items = document.querySelector('.category-items')

btn.onclick = function () {
  items.classList.toggle('none')
}
