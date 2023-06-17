let query = document.querySelector('.input');
let searchBtn = document.querySelector('.loader');
searchBtn.onclick = function (){
    let url = 'https://www.google.com/search?q='+ query.value;
    window.open(url, '_self');
}