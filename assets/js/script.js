$('.categories-silder').slick({
  dots: false,
  infinite: true,
  autoplaySpeed: 0,
  speed: 8000,
  slidesToShow: 3,
  // autoplaySpeed: 900, 
  autoplay: true,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");
  const showLoginFormBtn = document.getElementById("showLoginForm");
  const showSignupFormBtn = document.getElementById("showSignupForm");

  showLoginFormBtn.addEventListener("click", function () {
    loginForm.classList.remove("hidden");
    signupForm.classList.add("hidden");
  });

  showSignupFormBtn.addEventListener("click", function () {
    loginForm.classList.add("hidden");
    signupForm.classList.remove("hidden");
  });
});


// let loginpage = document.querySelector(".login-page");
// let user = document.querySelector(".login")

// user.addEventListener("click", () => {
//   loginpage.classList.add(".active-login-page")
// })



$('.prdocut-silder').slick({
  dots: false,
  infinite: true,
  speed: 300,
  autoplay:true,
  // autoplay:0,
  slidesToShow: 1,
  adaptiveHeight: true
});