document.addEventListener("DOMContentLoaded", () => {
  const loadingPage = document.getElementById("loading-page");
  const mainContent = document.getElementById("main-content");

  const tl = gsap.timeline();

 
  tl.to("#loading-page", {
    opacity: 0,
    duration: 0.5,
    delay: 3, 
    onComplete: () => {
      loadingPage.style.display = "none"; 
    },
  }).to(
    mainContent,
    {
      opacity: 1,
      duration: 0.5,
      display: "block",
      ease: "power1.out",
    },
    
  ); 
});
