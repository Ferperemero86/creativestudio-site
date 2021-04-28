document.addEventListener('DOMContentLoaded', function() {

  // Projects slider
  const bodyContentBtn = document.querySelector('.o-projects .body-content-btn');
  const headerImg = document.querySelectorAll('.o-projects img');

  let currentIndex = 0;
  const images = ['first', 'second', 'third'];
  const imageUrls = {
    'first' : [
      'https://res.cloudinary.com/dby4kdmbv/image/upload/v1617469176/creative-site/mobile/monirn1ybzxr31mh0osd.jpg',
      'https://res.cloudinary.com/dby4kdmbv/image/upload/v1617469021/creative-site/desktop/nyzwb1qbbsijvj8otp1y.jpg',
      'https://res.cloudinary.com/dby4kdmbv/image/upload/v1617469021/creative-site/desktop/nyzwb1qbbsijvj8otp1y.jpg'
    ],
    'second': [
      'https://res.cloudinary.com/dby4kdmbv/image/upload/v1617469177/creative-site/mobile/barvrsdva3ilaovzoi0k.jpg',
      'https://res.cloudinary.com/dby4kdmbv/image/upload/v1617469271/creative-site/tablet/hgxxol6lrquoniod1hwp.jpg',
      'https://res.cloudinary.com/dby4kdmbv/image/upload/v1617469023/creative-site/desktop/ygcdewlzhl4c5ayxqqww.jpg'
    ],
    'third': [
      'https://res.cloudinary.com/dby4kdmbv/image/upload/v1617469212/creative-site/mobile/wvufgeaa8ihtpxk0n2pv.jpg',
      'https://res.cloudinary.com/dby4kdmbv/image/upload/v1617469271/creative-site/tablet/hgxxol6lrquoniod1hwp.jpg',
      'https://res.cloudinary.com/dby4kdmbv/image/upload/v1617469023/creative-site/desktop/ygcdewlzhl4c5ayxqqww.jpg',
      
    ]
  }


  function addClasses(classVal) {
    for (let i=0; i < headerImg.length; i++) {
      headerImg[i].classList.add(classVal);
    }
  }

  function removeClasses(classVal) {
    for (let i=0; i < headerImg.length; i++) {
      headerImg[i].classList.remove(classVal);
    }
  }

  function addUrls(currentUrlImages) {
    for (let i=0; i<headerImg.length; i++) {
      headerImg[i].src = currentUrlImages[i];
    }

    setTimeout(function(){
      addClasses('slide-in');
      removeClasses('slide-out-left');
    }, 10); 

  }

 
  bodyContentBtn.addEventListener('click', function(e) {
    const btn = e.target;

    removeClasses('slide-in');
    addClasses('slide-out-left');

    if (btn.classList.contains('left')) {

      if (currentIndex === 0) {
        currentIndex = images.length-1;

      } else {
        currentIndex--;
      }
     

    } else if (btn.classList.contains('right')) {
      
      if (currentIndex === images.length-1) {
        currentIndex = 0;

      } else {
        currentIndex++;
      }

    }

    const currentUrlImages = imageUrls[images[currentIndex]];
    addUrls(currentUrlImages);

  });
});