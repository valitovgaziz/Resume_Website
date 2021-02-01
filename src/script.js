window.onload = function() {
    const blackTheme = document.getElementsByClassName("blackTheme");
    blackTheme.addEventListener('click',
        function() {
            alert(blackTheme.valueAsString);
        }, false);
}