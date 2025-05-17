class Products{

render(){
    let htmlCatalog = '';
    CATALOG.forEach(({id,name,price,img}) =>{
        htmlCatalog += `
            <li class="products-element">
            <span class="products-continer__name">${name}</span>
            <img src="${img}" class="products-continer__img"/>
            <span class="products-continer__price">${price}</span>
            <button class="products-continer__btn">Add card</button>
            </li>
        `;
        })
        const html = `
            <ul class="products-continer">
            ${htmlCatalog}
            </ul>
        `;

        ROOT_PRODUCTS.innerHTML = html;
    }
}

const productsPage = new Products();
productsPage.render();
