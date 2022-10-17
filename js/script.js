const itemContainer = document.querySelector('#item-container');

function loopingNb() {
    for (i = 1; i <= 3; i++) {
        // console.log(i);
        // return {...i};
    };
    return i;
}

function allItems() {
    loopingNb();
    items = [
            {
                name: 'Plate 0' + i,
                price: Math.floor(Math.random() * (40 - 20) + 20),
                image: `./img/item/items (${i}).jpg`
            },
    ];
    
    items.forEach(product => {
        itemContainer.innerHTML += `
        <div class="card">
            <img class="img-card" src="${product.image}">
            <div class="text-card">
                <p class="title"><a href="#"> ${product.name}</a></p>
                <p class="price"><a href="#"> ${product.price} € </a></p>
            </div>
        </div>`
    });
}

allItems();

 



// items.forEach(product => {
//     itemContainer.innerHTML += `
//     <div class="card">
//         <img class="img-card" src="${product.image}">
//         <div class="text-card">
//             <p class="title"><a href="#"> ${product.name}</a></p>
//             <p class="price"><a href="#"> ${product.price} € </a></p>
//         </div>
//     </div>`
// });

