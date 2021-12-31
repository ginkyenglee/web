const article = document.querySelector("#article");
const itemBtnList = itemList.querySelectorAll('input');

function contentsExpose(event){
    const clickedItem = event.path[0].value;

    fetch(`content-${event.path[0].value}`).then(function(response){
        response.text().then(function(text){
            article.innerHTML = text;
        })
    })
}

itemBtnList.forEach(element => {
    element.addEventListener("click", contentsExpose);
});