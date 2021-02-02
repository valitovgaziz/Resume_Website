window.onload = function() {
    const blackTheme = document.getElementById("blackTheme");
    blackTheme.addEventListener('click', blackWhiteTheme, false);
    function blackWhiteTheme() {
        if(blackTheme.value === "black theme") {
            blackTheme.value = "white theme";
            document.getElementById('_html').style.background = "black";
        } else {
            let text = document.getElementsByTagName('p');
            blackTheme.value = "black theme";
            document.getElementById('_html').style.background = "white";
            for (let i = 0; i < text.length; i++) {
                text[i].style.color = "white";
            }
        }
    }
}