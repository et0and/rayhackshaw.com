$(document).ready(function(){
    setTimeout(function() {
        $.getJSON('./assets/data.json', function(data) {
            $.each(data.courses, function(_, e) {
                $('body').append('<p style="text-align: center;">' + e.code + ' | ' + e.title + '</p>' + '<p style="margin: 0 30%;">' + e.description + '</p>' + '<p>' + e.projects + '</p>');
            })
    }, 40000)
    })
});
