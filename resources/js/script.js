

//******SCROLL WHEEL Kom Ghuralei Taratari Scroll Hobe*******
 $(function() {
          $.scrollify({
            section : ".scroll",
              setHeights: false,
              updateHash: false,
              scrollSpeed: 1100,
          });
        });








//***********MOBILE MENU/HAMBURGER MENU*************
function openNav()
{
    document.getElementById('myNav').style.width = "100%";
}



function closeNav()
{
    document.getElementById('myNav').style.width = "0%";
}








//***********SMOOTH SCROLL*************

$(function(){
    $('.overlay-content a , .down-arrow a , .header-section a').on('click',function(){
        $('html,body').animate({
            scrollTop : $($.attr(this,'href')).offset().top
        },1000);
        return false;
    });
});


















