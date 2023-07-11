// html에서 속성 가져오기
const navToggleT = nav_toggle.getElementsByTagName("i");
const navListUl = document.getElementsByClassName("nav-list")[0];

// Event Handling
nav_toggle.onclick = () => {
    navListUl.classList.toggle("show-menu");
}