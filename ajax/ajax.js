const article = document.querySelector("#article");
const hash = location.hash
function contentsFetch(itemName){
    fetch(`content-${itemName}`).then(function(response){
        if(response.status === 404){
            alert('File Not Found')
        }
        else{
            response.text().then(function(text){
                article.innerHTML = text;
            })
        }
    })
}

if (hash){
    contentsFetch(hash.substring(2));
}
else{
    contentsFetch('welcome');
}
