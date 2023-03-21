
const manuitemsarr = getRefFromFirebase("manuitems");


setTimeout(function(){
    const displaymenuitem=document.querySelector("#displaymenuitem"); 
    displaymenuitem.style.display = "flex";
    manuitemsarr.forEach((manuitems) => {
        console.log(manuitems)
        displaymenuitem.innerHTML += `
          <div class="manuitems" style="width: 18rem;" id="${manuitems.id}">
            <img class="manuitems-img-top" src="${manuitems.data.dishimgfile}" alt="image"  style="width: 150px; height: 150px">
            <div class="manuitems-body">
              <h5 class="manuitems-title">${manuitems.data.dishname}</h5>
              <p class="manuitems-text">${manuitems.data.dishprice}</p>
              <button class="btn btn-danger" onclick="removemanuitems('${manuitems.id}')">Delete</button>
            </div>
          </div>`
      });
}, 6000);



function removeCard(id) {
    removeElementFromFirebase("manuitems", id);
    setTimeout(() => {
      location.reload();
    }, 1500);
  }