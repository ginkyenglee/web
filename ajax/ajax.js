const article = document.querySelector("#article");

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
