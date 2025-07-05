$(document).ready(function(){
    $('.tabs-nav li').click(function(){
      var tab_id = $(this).data('tab');

      $('.tabs-nav li').removeClass('active');
      $('.tab-content').removeClass('active');

      $(this).addClass('active');
      $("#" + tab_id).addClass('active');
    });
  });
  $(document).ready(function () {
    $('.set-heading').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active')
            $(this).siblings('.set-container').slideUp(1000);
            $('.set-heading span i').removeClass('fa-minus').addClass('fa-plus');
        }
        else {
            $('.set-heading span i').removeClass('fa-minus').addClass('fa-plus');
            $(this).find('i').removeClass('fa-plus').addClass('fa-minus');

            $('.set-heading').removeClass('active');
            $(this).addClass('active');

            $('.set-container').slideUp(1000);
            $(this).siblings('.set-container').slideDown(1000)
        }
    })
});
$(document).ready(function(){
    let carouselItem=$('.carousel-item')
    carouselItem.first().addClass('active');
    
    let currIndex=0;
    let carouselLength=carouselItem.length;
    carouselItem.first().addClass('active')

    function showItem(currInd){
        carouselItem.removeClass('active')
        carouselItem.eq(currInd).addClass('active');
    }
    $('.carousel-prev-indicator').click(function(){
        currIndex=(currIndex-1)% carouselLength;
        showItem(currIndex);
    })
    $('.carousel-next-indicator').click(function(){
        currIndex=(currIndex+1)% carouselLength;
        showItem(currIndex);
    })
    function autoplay(){
        // currIndex=(currIndex+1) % carouselItem.length;
        currIndex=(currIndex+1) % carouselLength;
        showItem(currIndex);
    }
   

})
$(document).ready(function () {
  // Set future date: 70 days 12h 35m 60s from now
  const now = new Date();
  const future = new Date(now.getTime() + (20 * 24 * 60 * 60 + 5 * 3600 + 35 * 60 + 60) * 1000);

  function updateCountdown() {
    const currentTime = new Date().getTime();
    const distance = future.getTime() - currentTime;

    if (distance <= 0) {
      $('#days, #hours, #minutes, #seconds').text('00');
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    $('#days').text(String(days).padStart(2, '0'));
    $('#hours').text(String(hours).padStart(2, '0'));
    $('#minutes').text(String(minutes).padStart(2, '0'));
    $('#seconds').text(String(seconds).padStart(2, '0'));
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
});
    $(document).ready(function(){
            $('.open-popup').click(function(){
                $('#popup').fadeIn();
            });
            $('#confirm').click(function(){
                alert('confirmed');
                $('#popup').fadeOut();
            })
            $('#cancel').click(function(){
              
                $('#popup').fadeOut();
            })
        });   

