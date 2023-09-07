$('.phone-carousel').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
        {
          breakpoint: 980,
          arrows: false,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 1
          }
        }
      ]
  });
