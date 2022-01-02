const article = document.querySelector("#article");
const itemList = document.querySelector("#itemList");
const hash = location.hash;

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

fetch('itemList').then(function(response){
    response.text().then(function(text){
        let tags = ''
        const itemListValues = text.split(',');
        for (const idx in itemListValues){
            const itemName = itemListValues[idx];
            const newList = `<li><a href="#!${itemName}" onclick="contentsFetch('${itemName}')">${itemName}</a></li>`
            tags = tags + newList;
        }

        itemList.innerHTML = tags;
    })
})


if (hash){
    contentsFetch(hash.substring(2));
}
else{
    contentsFetch('welcome');
}
