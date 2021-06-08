const links = document.querySelector('.links')

tippy('.tooltip', {
    content: links.innerHTML,
    allowHTML: true,
    placement: 'bottom-end',
    interactive: true

})



var swiper = new Swiper(".swiper-container", {
    slidesPerView: 5,
    spaceBetween: 30,
    freeMode: true,
    direction: 'horizontal',
    breakpoints: {
        320: {
            slidesPerView: 2
        },
        640: {
            slidesPerView: 3
        },
        768: {
            slidesPerView: 4
        },
        1024: {
            slidesPerView: 5
        }

    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

$(document).ready(function() {
    $('.hamburger').click(function() {
        $('.menu-heading').slideToggle();
        $('.menu-heading').show()
        $('.mobile-menu').slideUp()
        $('.mobile-menu').hide()


    })

    $('.menu-heading').click(function() {
        $('.mobile-menu').slideToggle();
        $('.mobile-menu').show()
        $('.right-arrow').toggle()
        $('.down-arrow').toggle()



    })
})