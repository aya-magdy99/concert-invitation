//pre loader 
$(document).ready(function() {
    $('.loader').fadeOut(1500, () => {
        $('body').css({
            overflow: 'auto'
        });
    });

});
////////////////

//singer section
$('.singers-link').click(function() {

    if ($(this).siblings().css('display') == 'none') {
        $('.singers-info').slideUp(500);
        $(this).siblings().slideDown(700);

    } else {
        $(this).siblings().slideUp(700);
    };

});

$('.singers-info').eq(1).css('display', 'block'); //to display the second one auto
////////////////////////////


//count down function
function dueDate() {
    let due = new Date(2023, 1, 18, 10) - new Date();
    console.log(new Date());
    let dueDay = due / 86400000;
    let dueHour = (dueDay - Math.floor(dueDay)) * 24;
    let dueMin = (dueHour - Math.floor(dueHour)) * 60;
    let dueSec = (dueMin - Math.floor(dueMin)) * 60;
    fullDueDate = {
        due: due,
        day: dueDay,
        hour: dueHour,
        min: dueMin,
        sec: dueSec
    };
    return fullDueDate;
};

//setting the count down section
if (dueDate().due >= 0) {
    setInterval(() => {
        document.querySelector('.sec').innerText = Math.floor(dueDate().sec);
        document.querySelector('.min').innerText = Math.floor(dueDate().min);
        document.querySelector('.hour').innerText = Math.floor(dueDate().hour);
        document.querySelector('.day').innerText = Math.floor(dueDate().day);
    }, 800);
} else {
    document.querySelector('.p-time').innerHTML = `the event already happened.`;
    document.querySelector('.p-ticket').innerHTML = `No tickets available`;
    document.querySelector('.p-sec').innerHTML = `visit our website <a href="#">EgyParty.com</a>`;
    document.querySelector('.p-min').innerText = `for more information`;
    document.querySelector('.p-hour').innerHTML = `join us for the next one`;
    document.querySelector('.p-day').innerHTML = `you missed the event :(`;
};
////////////////////////////////

//characters counter
let textArea = document.querySelector('#message');
let left = document.querySelector('.char');
textArea.addEventListener('keyup', function() {

    if (textArea.value.length >= 100) {
        document.querySelector('.btn').classList.add('disabled');
        document.querySelector('.char').innerHTML = 'No characters Left.';
    } else {
        left.innerHTML = ` <span class="char-left">${100 - textArea.value.length}</span> Characters Reamining.`;
        document.querySelector('.btn').classList.remove('disabled');
    };
});
//////////////////////////////////


// menu control
$('.menu').css('left', `-${$('.menu').css('width')}`); //closig the menu auto

$('.menu-icon').click(function() {
    if ($(this).find('i').hasClass('fa-bars')) {
        $('.menu-icon').html(`<i class="fas fa-times"></i>`);
        $('.menu').css('left', `0%`);
        //console.log($('.menu').css('width'))
    } else {
        let menuWidth = $('.menu').css('width');
        $('.menu').css('left', `-${menuWidth}`);
        $('.menu-icon').html(`<i class="fas fa-bars"></i>`);
    };
});

////////////////////////////
//smooth scroll
$('.menu-list li a').click(function() {

    let href = $(this).attr('href');
    console.log(this)
    let secTop = $(href).offset().top;


    $('body, html').animate({
        scrollTop: secTop
    }, 800)

});
// scroll indicator
$(window).scroll(function() {
    let cur_pos = $(window).scrollTop();

    $('section').each(function() {
        // console.log(this);
        let top = $(this).offset().top - 20;
        let bottom = top + $(this).outerHeight() + 100;

        if (cur_pos >= top && cur_pos <= bottom) {
            $('.menu-list li').find('a').removeClass('active-link');

            $('.menu-list li').find(`a[href="#${$(this).attr('id')}"]`).addClass('active-link');
            // console.log($('.singers').offset().top);
        }
        if (cur_pos < $('.singers').offset().top) {
            $('.menu-list li').find('a').removeClass('active-link');
            $(".menu-list li a").eq(0).addClass('active-link');
        }
    })


});

//////////////////
//animation on scroll firing function
AOS.init({
    easing: 'ease-out-back',
    duration: 800
});