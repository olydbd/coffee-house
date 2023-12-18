let n = 1;
showCards(n);

function showCards(n) {
    let cards = document.querySelectorAll(".menu-cards");

    let buttonLink = document.getElementsByClassName("menu-button");
    let buttonsIcon = document.getElementsByClassName("menu-tabs-icon");
    let buttonText = document.getElementsByClassName("tab-text");

    for (i = 0; i < cards.length; i++) {
        cards[i].style.display = "none";  
    }

    for (i = 0; i < buttonLink.length; i++) {
        buttonLink[i].className = buttonLink[i].className.replace(" menu-button-active", "");
        buttonsIcon[i].className = buttonsIcon[i].className.replace(" menu-tabs-icon-active", "");
        buttonText[i].className = buttonText[i].className.replace(" tab-text-active", "");
    }

    cards[n - 1].style.display = "flex";
    buttonLink[n - 1].className += " menu-button-active";
    buttonsIcon[n - 1].className += " menu-tabs-icon-active";
    buttonText[n - 1].className += " tab-text-active";
}