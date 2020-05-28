
window.addEventListener('load', function () {
    console.log('All assets are loaded')
    const el = document.getElementsByClassName("text");
    el[0].style.visibility = "visible";
    var container = document.getElementById("container");
    container.style.animation = "clip 2s ease";
    setTimeout(function () { 
        el[0].style.display = "none";
        el[1].style.visibility = "visible";
        container.style.animation = "clipan 2s ease";
        setTimeout(function () {
            el[1].style.display = "none";
            el[2].style.visibility = "visible";
            container.style.animation = "clipans 2s ease";
        }, 3000);  
    }, 3000);
})