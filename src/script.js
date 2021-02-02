window.onload = function() {
    const blackTheme = document.getElementsByClassName("blackTheme");
    alert(blackTheme.valueOf())
    blackTheme.addEventListener('onclick',
        function(e) {
            alert(e);
        }, false);
}