let thisPage = 1;
let limit = 6;
let list = document.querySelectorAll('.list .item');

function loadItem(){
    // limit * (thisPage - 1) = 6 * (1 - 1) = 6 * 0 = 0
    let beginGet = limit * (thisPage - 1);
    // limit * thisPage - 1 = (6 * 1) - 1 = 6 - 1 = 5
    let endGet = limit * thisPage - 1;
    list.forEach((item, key)=>{
        if(key >= beginGet && key <= endGet){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    })
    listPage();
}
loadItem();

function listPage(){
    let count = Math.ceil(list.length / limit);
    document.querySelector('.listPage').innerHTML = "";
    if(thisPage != 1){
        let prev = document.createElement('li');
        prev.innerText = "PREV";
        prev.setAttribute("onclick", "changePage("+(thisPage-1) + ")");
        document.querySelector(".listPage").appendChild(prev);

    }
    for(i = 1; i <=count; i++){
        let newPage = document.createElement('li');
        newPage.innerText = i;
        if(i == thisPage){
            newPage.classList.add("active");
        }
        newPage.setAttribute("onclick","changePage(" + i + ")");
        document.querySelector(".listPage").appendChild(newPage);
    }
}

function changePage(i){
    thisPage = i;
    loadItem();
}