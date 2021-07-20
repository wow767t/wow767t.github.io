$(function () {
    $('#plusBtn').on('click', function () {
        if ($('article').is('visible') == false) {
            $('#plusBtn').css('transform', 'rotate(45deg)');
            $('article').css('display', 'block');
        } else {
            $('article').css('display', 'none');
        }






    });




});