const burguer = document.querySelector(".js-burguer");
const menu = document.querySelector(".js-menu");

burguer.addEventListener("click", hideShowMenu);

function hideShowMenu()
{
    menu.classList.toggle("active");
}

