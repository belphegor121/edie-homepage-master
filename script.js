const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav");

const menuHamburger = () => {
  menu.addEventListener("click", (e) => {
    nav.classList.toggle("is-active");

    if (nav.classList.contains("is-active")) {
      menu.innerHTML = `<i class="fa-solid fa-xmark close"></i>`;
      menu.style.backgroundColor = '#b3b0b0a8'
      document.querySelector('body').style.overflow = 'hidden'  
    }
    else {
      menu.innerHTML = `<i class="fa-solid fa-bars"></i>`;
      menu.style.backgroundColor = ''
      document.querySelector('body').style.overflow = ''
    }
  });

  document.addEventListener('click', (e) => {

    if(e.target.matches('.nav li')){
      menu.innerHTML = `<i class="fa-solid fa-bars"></i>`;
      nav.classList.remove('is-active')
      document.querySelector('body').style.overflow = ''
    }
  })
}


menuHamburger()