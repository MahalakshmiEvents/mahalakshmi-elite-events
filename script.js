function toggleMenu() {
  const menu = document.getElementById("sideMenu");
  const overlay = document.getElementById("overlay");
  if (menu.style.left === "0px") {
    menu.style.left = "-250px";
    overlay.style.display = "none";
  } else {
    menu.style.left = "0px";
    overlay.style.display = "block";
  }
}
