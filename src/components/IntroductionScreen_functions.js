let screenSize      = window.innerHeight/3.5;
let homeContent     = document.getElementById('home-content');
//About Variables
let aboutSection    = document.getElementById('about-us')
let aboutTitle      = document.getElementById('about-title');
let aboutLeft       = document.getElementById('about-left');
let aboutRight      = document.getElementById('about-right');
//Teammates Variables
let teamSection     = document.getElementById('teammates');
let teamTitle       = document.getElementById('team-title');
let teamLeft        = document.getElementById('team-left');
let teamCenter      = document.getElementById('team-center');
let teamRight       = document.getElementById('team-right');
//Projects Variables
let projectSection  = document.getElementById('projects');
let projectTitle    = document.getElementById('projects-title');
let projectCarousel = document.getElementById('carousel');
let projectsButton  = document.getElementById('more-projects');
//Contact Variables
let contactSection  = document.getElementById('contact');
let contactTitle    = document.getElementById('contact-title');
let contactLeft     = document.getElementById('contact-left');
let contactright    = document.getElementById('contact-right');
//Footer Variables
let footerSection   = document.getElementById('footer')

//Animation Script
window.addEventListener('scroll', function(){
    let screenSize = window.innerHeight/3.5;
    
    //About Generator
    let aboutPosition = aboutSection.getBoundingClientRect().top;
    if(aboutPosition < screenSize){
        $('#about-title').addClass("show");
        $('.about-content').addClass("show");
        aboutTitle.style.animation = 'fadeInDown 1s ease-in';
        aboutLeft.style.animation  = 'fadeInLeft 1s ease-in';
        aboutRight.style.animation = 'fadeInRight 1s ease-in';
    }

    //Teammates Generator
    let teamPosition = teamSection.getBoundingClientRect().top;
    if(teamPosition < screenSize){
        $('#team-title').addClass("show");
        $('.teammates-content').addClass("show");
        teamTitle.style.animation   = 'fadeInDown 1s ease-in';
        teamLeft.style.animation    = 'fadeInLeft 1s ease-in';
        teamCenter.style.animation  = 'fadeIn 1s ease-in';
        teamRight.style.animation   = 'fadeInRight 1s ease-in';
    }

    //Project Generator
    let projectPosition = projectSection.getBoundingClientRect().top;
    if(projectPosition < screenSize){
        $('#projects-title').addClass("show");
        $('#carousel').addClass("show");
        $('#more-projects').addClass("show");
        projectTitle.style.animation    = 'fadeInDown 1s ease-in';
        projectCarousel.style.animation = 'fadeInUp 1s ease-in';
        projectsButton.style.animation  = 'fadeInUp 1s ease-in';
    }

    //Contact Generator
    let contactPosition = contactSection.getBoundingClientRect().top;
    if(contactPosition < 270){
        $('.contact').addClass("show");
        $('#contact-title').addClass("show");
        $('.contact-content').addClass("show");
        $('#footer-span').addClass("show");
        contactTitle.style.animation = 'fadeInDown 1s ease-in';
        contactLeft.style.animation  = 'fadeInLeft 1s ease-in';
        contactright.style.animation = 'fadeInRight 1s ease-in';
        // footerSection.style

    }
})

$(document).ready(function(){
    //Home Animation
    $('.home-content').addClass("show");
    homeContent.style.animation = 'fadeInLeft 1s ease-in'

    //Stick Navbar Script
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        } else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        } else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    //Toggle Menu/navbar Script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    //Carousel Configuration Script
    $('.carousel').owlCarousel({
        margin: 30,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 1,
                nav: false
            },
            1000:{
                items: 1,
                nav: false
            },
        }
    });
});