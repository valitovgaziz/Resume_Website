window.onload = function() {
    var slider = document.getElementsByClassName('switch');
    slider.addEventListener('click', function() {
        if(this.checked) {
            alert("checked");
        } else {
            alert("unchecked");
        }
    });
}