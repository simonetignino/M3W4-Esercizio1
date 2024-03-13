window.onload = function() {
    let twitter = document.querySelector(`.blog-sidebar div:nth-child(3) .list-unstyled li:nth-of-type(2)`);
    //console.log(twitter);
    twitter.remove();
}

let aFiglio = document.getElementsByClassName(`stretched-link`)
aFiglio[0].onclick = function(event){
    event.preventDefault();
    console.log(event);
    event.target.closest(`.mb-4`).remove();//closest prende l'elemento più vicino

}
aFiglio[1].onclick = function(event){
    event.preventDefault();
    console.log(event);
    event.target.closest(`.mb-4`).remove();
}
