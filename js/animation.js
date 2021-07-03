document.getElementById("logo").addEventListener("mouseover", mouseOver);
document.getElementById("logo").addEventListener("mouseout", mouseOut);

function mouseOver() {
    document.getElementById("logo").innerHTML = 
    '<img src="/img/logoAnimation.png">';
}

function mouseOut() {
    document.getElementById("logo").innerHTML = 
    '<img src="/img/logo.png">';
}