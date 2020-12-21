const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    const navLinks = document.querySelectorAll('.nav-links li');
    console.log(navLinks)
    const navMainLinks = document.querySelectorAll('.nav-main-links > li img');
   
    
  
   const navUl =  document.querySelectorAll('.nav-main-links > li ul');
//    toggle nav
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');

  
     
         // Burger animation
    burger.classList.toggle('toggle');
    });
  
   navMainLinks.forEach((list, index)=> {
     navMainLinks[index].addEventListener('click', ()=>{
   
     
       navUl[index].classList.toggle('nav-ul-active');
     
     })
   })
 
   
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

  //  back-to-top
  const backToTop = document.querySelector('.backtotop');

window.addEventListener('scroll', () => {
  if(window.scrollY > 1500) {
    backToTop.classList.add("backtotop-active")
  
  }else{
    backToTop.classList.remove("backtotop-active")
  }

})
