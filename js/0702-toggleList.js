$(function(){

    // console.log($('nav .navItem').length);
    $('#listBtn').on('click', function(){
        $('.tog').css('visibility','hidden');
        
    });
    
    var navItem0 = $('nav .navItem')[0]

    $(navItem0).on('mouseenter', function(){
        var list0 = $('.tog ul')[0];
        $(list0).css('visibility','visible');
    });

    $('button').on('click',function(){
        
        $(window).scrollTop(1700);
        alert('購物系統建立中，購買請參考訂購方式')
    });
    $('#btn3').on('click',function(){
        console.log($('#order').offset().top);
    });














});