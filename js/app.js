var modal = document.getElementById('messageModal');
var btn = document.getElementById("donate-btn");
var a = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
a.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
