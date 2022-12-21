function verMenu() {
  const menu = document.getElementById("menu");
  menu.addEventListener("click", () => {
    const menuLateral = document.getElementById("menu-lateral");
    menuLateral.classList.remove("none");
    menu.classList.add("none");
  });
}

function fechaMenu() {
  const menu = document.getElementById("menu-lateral");
  const menuBase = document.getElementById("menu");
  menu.addEventListener("click", () => {
    const menuLateral = document.getElementById("menu-lateral");
      menuLateral.classList.add("none");
      menuBase.classList.remove("none");
  });
}