window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_wqdwfzw', 'template_hkr913l', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}

$(function() {
    $.fn.scrollToTop = function() {
     $(this).hide().removeAttr("href");
     if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
     var scrollDiv = $(this);
     $(window).scroll(function() {
      if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
      else $(scrollDiv).fadeIn("slow")
     });
     $(this).click(function() {
         $("html, body").animate({scrollTop: 0}, 1500)
     })
    }
   });
   $(function() {
    $("#go-top").scrollToTop();
   });


   $(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
