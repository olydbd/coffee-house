showBurger();
function showBurger() {
    let headerMenuBurger = document.querySelector(".header-menu__burger");
    let buttonSticks = document.querySelectorAll(".burger-menu__container span");
    let main = document.querySelector(".main");
    let footer = document.querySelector(".footer");
  
    if (footer.style.display == "block") {
      headerMenuBurger.style.position = "absolute";
      headerMenuBurger.style.transition = "0.5s";
      headerMenuBurger.style.left = "0%";
  
      buttonSticks[0].style.transform = "rotate(45deg)";
      buttonSticks[0].style.position = "relative";
      buttonSticks[0].style.top = "5px";
  
      buttonSticks[1].style.transform = "rotate(-45deg)";
      buttonSticks[1].style.position = "relative";
      buttonSticks[1].style.top = "-5px";
  
      main.style.display = "none";
      footer.style.display = "none";
    } else {
      headerMenuBurger.style.position = "relative";
      headerMenuBurger.style.left = "100%";
      headerMenuBurger.style.transition = "0.5s";
  
      buttonSticks[0].style.transform = "rotate(0)";
      buttonSticks[0].style.top = "0";
  
      buttonSticks[1].style.transform = "rotate(0)";
      buttonSticks[1].style.top = "0";
  
      main.style.display = "block";
      footer.style.display = "block";
    }
  }
  
  function hideBurger() {
    let headerMenuBurger = document.querySelector(".header-menu__burger");
    let buttonSticks = document.querySelectorAll(".burger-menu__container span");
    let main = document.querySelector(".main");
    let footer = document.querySelector(".footer");
  
    headerMenuBurger.style.position = "relative";
    headerMenuBurger.style.left = "100%";
    headerMenuBurger.style.transition = "0.5s";
  
    buttonSticks[0].style.transform = "rotate(0)";
    buttonSticks[0].style.top = "0";
  
    buttonSticks[1].style.transform = "rotate(0)";
    buttonSticks[1].style.top = "0";
  
    main.style.display = "block";
    footer.style.display = "block";
  }