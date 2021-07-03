// // 售價*數量
function showPrice() {
    let p = parseInt(document.getElementById('p119').innerText);
    let qty = document.getElementById('qty119').value;
    result = p * qty;
    document.getElementById('sum119').innerText = result;
}
// for (var i = 0; i < $('.pdBox').length; i++) {
// }
function thisSum0() {
    let price = parseInt($('.pdBox #sell')[0].innerText);
    let qty = parseInt($('.pdBox input')[0].value);
    var temp = $('.pdBox #sum119')[0]
    $(temp).text(price * qty);
}
function thisSum1() {
    let price = parseInt($('.pdBox #sell')[1].innerText);
    let qty = parseInt($('.pdBox input')[1].value);
    var temp = $('.pdBox #sum119')[1]
    $(temp).text(price * qty);
}
function thisSum2() {
    let price = parseInt($('.pdBox #sell')[2].innerText);
    let qty = parseInt($('.pdBox input')[2].value);
    var temp = $('.pdBox #sum119')[2]
    $(temp).text(price * qty);
}
// 5包促銷

$(function () {
    // function thisSum(){
    //     let price = parseInt($('.pdBox #sell')[0].innerText);
    //     let qty = parseInt($('.pdBox input')[0].value);
    //     $('#sum119').text(price * qty);
    // }
    $('#ckBtn').click(function () {
        console.log($('.pdBox').length);

        // console.log($('.pdBox input')[0].value);
        // let price = parseInt($('.pdBox #sell')[0].innerText);
        // let qty = parseInt($('.pdBox input')[0].value);
        // $('#sum119').text(price * qty);
        console.log($('.pdBox #sum119').length);
    })



});