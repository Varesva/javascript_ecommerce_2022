 const items = [
        {
            name: 'Plate 0' + 1,
            price: Math.floor(Math.random() * (40 - 20) + 20),
            image: `./img/item/items (${1}).jpg`
        },
        {
            name: 'Plate 0' + 2,
            price: Math.floor(Math.random() * (40 - 20) + 20),
            image: `./img/item/items (${2}).jpg`
        },
        {
            name: 'Plate 0' + 3,
            price: Math.floor(Math.random() * (40 - 20) + 20),
            image: `./img/item/items (${3}).jpg`
        },
];

let cart = [];

let list = document.querySelector('div#contain');
let cartItems = document.querySelector('div#cartContainer');
let showPriceTotal = document.querySelector('div#total');

// l'ordre du item et i est important ! le i peut etre remplacé par autre chose (exemple: x)
items.forEach((item, x) => {
    list.innerHTML +=
        `<div id="product">
            <img width="120" height="120" src="${item.image}"/>
            <p>${item.price}€</p>
            <p>${item.name}</p>
            <input type="number" placeholder="quantity" onchange="inputChange(${x}, '${item.name}', '${item.price}', '${item.image}')"/>
            <button>Buy item</button>
        </div>`
});

//  += permet d'ajouter et de concaténer plus rapidement 
function showCart() {
    let priceTotal = 0;
    cartItems.innerHTML = '';
    
    cart.forEach((item, x) => {
        priceTotal += item.price * item.quantity;
        cartItems.innerHTML +=
            `<div id="cart">
                <img width="120" height="120" src="${item.image}"/>
                <p>${item.price}€</p>
                <p>${item.name}</p>
                <p>Quantity: ${item.quantity}</p>
            </div>`
    });
    showPriceTotal.innerHTML += `<h1>${priceTotal}€</h1>`;
}

function inputChange(x, name, price, image) {
    let listItem = document.querySelectorAll('div#product')[x];
    let input = listItem.querySelector('input');
    let button = listItem.querySelector('button');
    console.log(button);

     button.onclick = function(){
        cart.push({
            quantity: input.value,
            name: name,
            price: price,
            image: image
        })
        console.log(cart)
        showCart()
    }
}