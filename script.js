console.log("Checking Log");
$(document).ready(function () {
  $("#navBar").load("navbar.html", function () {
  console.log("Navbar loaded");
  if (window.location.pathname === "/" || window.location.pathname.endsWith("index.html")) {
    runLogoAnimation();
  }
});
  $("#footer").load("footer.html");
});

function runLogoAnimation() {
  const desktopOverlayLogo = document.getElementById("desktopOverlayLogo");
  const desktopOverlayImg = desktopOverlayLogo.querySelector("img");
  const desktopNavLogo = document.getElementById("navBarLogoDesktop");
  const mobileNavlogo = document.getElementById("navBarLogoMobile");
  //const content = document.getElementById("homeContent");

  // Wait for layout to settle
  requestAnimationFrame(() => {
    const startRect = desktopOverlayImg.getBoundingClientRect();
    let endRect;

    if (window.innerWidth <= 768) {
      endRect = mobileNavlogo.getBoundingClientRect();
    } else {
      endRect = desktopNavLogo.getBoundingClientRect();
    }
    
    // Calculate distance to move
    const deltaX = endRect.left + endRect.width / 2 - (startRect.left + startRect.width / 2);
    const deltaY = endRect.top + endRect.height / 2 - (startRect.top + startRect.height / 2);
    const scale = endRect.height / startRect.height;

    // Apply transform animation
    desktopOverlayImg.style.transition = "transform 1.5s ease-in-out";
    desktopOverlayImg.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(${scale})`;

    // Fade out overlay after animation
    setTimeout(() => {
      desktopOverlayLogo.style.opacity = "0";
      desktopOverlayLogo.style.pointerEvents = "none";
    }, 1200);
  });

}






