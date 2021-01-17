function toggleFlipLogo(){
        // logo flip on click
        var iteration = $(this).data('iteration')||1
        switch (iteration) {
            case 1:
                $('.container').css('transform', 'scaleX(-1)');
                $('.logo').css('transform', 'scaleX(-1)');
                
                $('.container').css('color', 'white').delay(120).queue(function(n) {
                    $('.logo').addClass('fontchange'); 
                    $('.logo').html('Ray');
                    n();
                });
                break;
            case 2:
                $('.container').css('transform', 'scaleX(1)');
                $('.logo').css('transform', 'scaleX(1)');
                $('.container').css('color', 'white').delay(120).queue(function(n) {
                    $('.logo').removeClass('fontchange'); 
                    $('.logo').html('冷');
                    n();
                });
                break;
        }
        iteration++;
        if (iteration > 2) iteration = 1
        $(this).data('iteration', iteration)
}

// function showAboutMe(){
//     console.log("Working")
//     var x = document.getElementById("about")
//     if (x.style.display === "none"){
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }
