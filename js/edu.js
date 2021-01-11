$(document).ready(function(){
    setTimeout(function() {
        $.getJSON('./assets/data.json', function(data) {
            $.each(data.courses, function(_, e) {
                $('body').append('<p>' + e.code + ' - ' + e.title + '</p>' + '<p>' + e.description + '</p>' + '<p>' + e.projects + '</p>');
            })
    }, 40000)
    })
});
