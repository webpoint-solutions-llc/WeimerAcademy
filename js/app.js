const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    const navLinks = document.querySelectorAll('.nav-links li');
   
//    toggle nav
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');

         // animation nav links
    navLinks.forEach((link, index)=>{
      
        if (link.style.animation) {
           link.style.animation = ''
        } else {
           link.style.animation = `navLinkFade 0.5s ease forwards ${index / 22 + 0.3}s`;
        }
       
       })
     
         // Burger animation
    burger.classList.toggle('toggle');
    });
  

 
   
}

navSlide();

  
  












// slick carosel
$('.home-carosel-wrapper').slick({
    infinite: true,
    // speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    arrows: false,
    autoplay: true,
    dots:false,
    useTransform: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]

  });
      

  // drop down cards
   const dropDownAnimation = () => {
    const dropDown = document.querySelectorAll('.drop-down-link');
    const dropDownIcon = document.querySelectorAll('.drop-icon');
    const bio = document.querySelectorAll('.faculty-members-description');

    dropDown.forEach((anchor, index) => {
      
      
      anchor.addEventListener('click', ()=> {
     
        if (bio[index].style.display === "block" && dropDownIcon[index].style.animation) {
          bio[index].style.display = "none";
         
          dropDownIcon[index].style.animation = ''
        } else {
          bio[index].style.display = "block";
          dropDownIcon[index].style.animation = `dropDownUp 0.2s ease forwards`;
        
        }
      });
    })
  

 

  



   }

   dropDownAnimation();