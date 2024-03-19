var scrollToTopButton=document.getElementById(scrollToTopBtn)

function scrollToTop(){
    console.log("scroll to top button pressed");
    scrollY=0;
}

scrollToTopButton.onclick=scrollToTop();