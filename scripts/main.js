(function () {

  var location = window.history.location || window.location,
      formFields = document.querySelectorAll('.j-field-text, .j-field-select'),
      sliderBtns = document.getElementsByClassName('j-btn-nav'),
      pagerBtns = document.getElementsByClassName('pager__item'),
      slides = document.getElementsByClassName('slider__item'),
      pageHeight = document.querySelector('.page-scroll').offsetHeight,
      activeSlide,
      scrollTop,
      hash,
      oldHash;

  var scrollConfig = [
    {
      range: [0, 0.33],
      hash: "#home"
    },
    {
      range: [0.33, 0.6],
      hash: "#features"
    },
    {
      range: [0.6, 1],
      hash: "#form"
    }
  ];

  if (isMobile.tablet) {
    document.querySelector('body').classList.add("device-tablet");

    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, false);

    var xDown = null;
    var yDown = null;

    function handleTouchStart(evt) {
      xDown = evt.touches[0].clientX;
      yDown = evt.touches[0].clientY;
    }

    function handleTouchMove(evt) {
      if ( ! xDown || ! yDown ) {
        return;
      }

      var xUp = evt.touches[0].clientX;
      var yUp = evt.touches[0].clientY;

      var xDiff = xDown - xUp;
      var yDiff = yDown - yUp;

      var nextSlide = scrollConfig[activeSlide + 1];
      var prevSlide = scrollConfig[activeSlide - 1];

      if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/

        if ( xDiff > 0 &&  nextSlide) {
          setView(nextSlide.hash);
          history.pushState(null, null, nextSlide.hash)
        }
        if ( xDiff < 0 &&  prevSlide) {
          setView(prevSlide.hash);
          history.pushState(null, null, prevSlide.hash)
        }
      }
      else {
        if ( yDiff > 0 ) {
          // up
        } else {
          // down
        }
      }
      /* reset values */
      xDown = null;
      yDown = null;
    }
  }

  if (!isMobile.any) {
    // Change slide by scroll event
    window.addEventListener('scroll', function (e) {
      scrollTop = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);

      scrollConfig.forEach(function(param) {
        if (scrollTop >= pageHeight * param.range[0] && scrollTop < pageHeight * param.range[1]) {
          hash = param.hash;

          if (oldHash != hash) {
            oldHash = hash;
            setView(hash);
            history.pushState(null, null, hash)
          }
        }
      })
    })
  }

  window.addEventListener("onpopstate", function (e) {
    setView(location.hash);
  });

  for (var i = 0; i < sliderBtns.length; i++) {
    sliderBtns[i].addEventListener('click', function (e) {
      if (window.innerWidth >= 768) {
        e.preventDefault();
        setView(this.hash);
        history.pushState(null, null, this.hash)
      }
    });
  }

  // Set active slide
  function setView(hash) {
    for (var i = 0; i < slides.length; i++) {
      slides[i].classList.remove('active');
      pagerBtns[i].classList.remove('active');
    }
    scrollConfig.forEach(function(page, index) {
      if (page.hash == hash) {
        activeSlide = index;
      }
    });

    pagerBtns[activeSlide].classList.add('active');
    slides[activeSlide].classList.add('active', 'in');
    setTimeout(function () {
      slides[activeSlide].classList.remove('in');
    }, 700);
  }

  // Add form fields behavior
  for (var i = 0; i < formFields.length; i++) {
    if (formFields[i].value) {
      formFields[i].classList.add('not-empty');
    }
    else {
      formFields[i].addEventListener('focus', function (e) {
        e.target.classList.add("not-empty");
        e.target.classList.remove("error");
      });

      formFields[i].addEventListener('blur', function (e) {
        if (!e.target.value || e.target.value == '') {
          e.target.classList.remove("not-empty");
        }
      });
      formFields[i].addEventListener('change', function (e) {
        if (e.target.nodeName.toLowerCase() == 'select') {
          if ( e.target.value == '') {
            e.target.classList.remove("not-empty");
          }
          else {
            e.target.classList.add("not-empty");
          }
        }
      });
    }
  }

  // Set container height
  function setContainerHeight() {
    // Aspect ratio for laptop image
    var aspectRatio = 0.578;

    if (window.innerWidth >= 992) {
      document.getElementsByClassName('page')[0].setAttribute("style", "height:" + (window.innerWidth * aspectRatio) + "px");
    }
    else {
      document.getElementsByClassName('page')[0].removeAttribute("style");
    }
  }



  window.location.hash ? setView(window.location.hash) : setView('#home');
  // END OF SLIDER

  setContainerHeight();
  window.addEventListener("resize", setContainerHeight);

})();
