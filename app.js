const scrollButton = document.getElementById('ScrollButton');
const yOffset = -145.82; 
const element = document.getElementById('ContentStart');
const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

$(window).scroll(function() { 
    if ($(document).scrollTop() > 45) { 
        $('nav').addClass('bg-primary'); 
    } else { 
        $('nav').removeClass('bg-primary'); 
    } 
    if ($(document).scrollTop() > 5) { 
        document.getElementById('ScrollAnchorText').style.color = '#FFFFFF00';
        document.getElementById('ScrollAnchorArrow').style.color = '#FFFFFF00';
    } else { 
        document.getElementById('ScrollAnchorText').style.color = 'white';
        document.getElementById('ScrollAnchorArrow').style.color = 'white';
    } 
});


scrollButton.onclick = function () {
    window.scrollTo({top: y, behavior: 'smooth'});
    console.log('i was tapped');
};
