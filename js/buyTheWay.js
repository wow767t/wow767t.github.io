function order(price,qty){
    result =  price * qty
    if (qty >= 20) {
        result = result * 0.90;
    }else if (qty >= 10) {
        result = result * 0.95;
    }
    document.getElementById('show').innerText = result;

}
order(20,20);