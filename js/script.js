const listHtml = document.querySelector("#list_js");

items.forEach((item) => {
  const html = `
        <li class="item">
            <img class="item_img" src="${item.img}"> 
            <div>
                <h2>${item.title}</h2>     
                <a class="item_link" target="_blank" href="${item.link}">${item.textBtn}</a>
            </div>
        </li>
    `;

    listHtml.insertAdjacentHTML("beforeend", html);
    // listHtml.insertAdjacentHTML("afterbegin", html);

});
