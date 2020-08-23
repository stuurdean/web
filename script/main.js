const menuIcon = document.getElementById('menu-icon');
const mobileNav = document.getElementById('mobile-navigation');

menuIcon.addEventListener('click',function(){
    if(mobileNav.style.opacity == "1"){
        mobileNav.style.opacity == "0";
        mobileNav.style.pointerEvents == "none";
    }
    else{
        mobileNav.style.opacity == "1";
        mobileNav.style.pointerEvents == "auto";
    }
})