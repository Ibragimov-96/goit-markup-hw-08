(() => {
    const refs = {
      openMenuBtn: document.querySelector(".js-open-menu"),
      closeMenuBtn: document.querySelector(".js-close-menu"),
      menu: document.querySelector(".js-menu-container"),
      lock: document.body,
    };
  
    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);
   
  
    function toggleMenu() {
      refs.menu.classList.toggle("is-hidden");
      refs.lock.classList.toggle("scrol-lock")
    }
  })();