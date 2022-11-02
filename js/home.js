"use strict";

// all items
let items = [
   {
        id : 1,
        name: 'Plate 01',
        price: Math.floor(Math.random() * (40 - 20) + 20),
        image: `./img/item/items (1).jpg`
    },
   {
        id : 2,
        name: 'Plate 02',
        price: Math.floor(Math.random() * (40 - 20) + 20),
        image: `./img/item/items (2).jpg`
    },
   {
        id : 3,
        name: 'Plate 03',
        price: Math.floor(Math.random() * (40 - 20) + 20),
        image: `./img/item/items (3).jpg`
    },

];

// let i = 1;

// while (i <= 13) {
//     const items = [
//         {
//             name: 'Plate 0' + i,
//             price: Math.floor(Math.random() * (40 - 20) + 20),
//             image: `./img/item/items (${i}).jpg`
//         },
//     ];

// ----------------CART-----------------
let cart = {
    key: "cartjsecommerce",
    content : [],
};
let countItemsInCart = 0;

let storedContent = localStorage.getItem(cart.key);

if (storedContent) {
    cart.content = JSON.parse(storedContent);
} else {
    localStorage.setItem(cart.key, JSON.stringify(cart.content));
};

// loop through items and show
function showHomeItems() {
    let itemsContainer = document.getElementById('itemsContainer');

    items.forEach((item, i) => {
        itemsContainer.innerHTML +=
            `<div id="itemCard" class="card">
            <figure>
                <a href="#"><img class="img-card" src="${item.image}" loading="lazy" alt="ceramic plate"></a>
            </figure>
            <div class="text-card">
                <p class="title-card"><a href="#">${item.name}</a></p>
                <div class="add-cart">
                    <p class="price-card"><a href="#">${item.price} € </a></p>
                    <div id="control">
                        <button id="btnCart" class="cart-toggle-btn" onclick="addingToCart('${i}','${item.id}','${item.name}', '${item.price}', '${item.image}')">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="-6 -5 28 28"><path d="M14 13.1V12H4.6l.6-1.1 9.2-.9L16 4H3.7L3 1H0v1h2.2l2.1 8.4L3 13v1.5c0 .8.7 1.5 1.5 1.5S6 15.3 6 14.5 5.3 13 4.5 13H12v1.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5c0-.7-.4-1.2-1-1.4zM4 5h10.7l-1.1 4-8.4.9L4 5z"/></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>`;

    });
    // showInput(i);
};

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", showHomeItems());
} else {
    showHomeItems();
};

// -----------CART--------------
function addingToCart(i, id, name, price, image) {
    // create i in array cart
    if (i in cart.content) {
     
        showInput(i);
    } else {
        // push i in cart 
        cart.content.push({
            id : id,
            qty: 1,
            name: name,
            price: price,
            image: image,
        });
    };
    // save to local storage
    localStorage.setItem(cart.key, JSON.stringify(cart.content));
    updateCountCart();
};

function showInput(i) {
    let oneItem = document.querySelectorAll("div#itemCard")[i];
    let btnControl = oneItem.getElementById("control");
    console.log(btnControl);

    // if i is in cart - returns true
    if (i in cart.content) { 
        btnControl.textContent = "";
        btnControl.classList.add("quantityContainer");
        btnControl.insertAdjacentHTML("afterbegin", 
        `
        <button type="button" title="remove item" class="btn-quantity" id="minus">
            <svg xmlns="http://www.w3.org/2000/svg" id="minusSvg" x="0" y="0" version="1.1" viewBox="0 3 20 20" xml:space="preserve"><path stroke="#3b3832" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M22 14.5H7"/></svg>
        </button>
        <input id="quantity" type="number" min="1" max="15" value="1">
        <button type="button" title="add item to cart" class="btn-quantity" id="addBtnCart">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 22 22" class="addSvg" ><path fill-rule="evenodd" d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"></path></svg>
        </button>
        `);
        // plusOneInCart(i);
    };
};
// showInput(i);


function plusOneInCart(i) {
    let oneItem = document.querySelectorAll('div#itemCard')[i];
    let btnAdd = oneItem.querySelector('button#addBtnCart');
    // let input = oneItem.querySelector('input#quantity');

    btnAdd.onclick = function () {
        addingToCart();
    };

   

    // // in operator - refers to parameters of function addingtocart
    // if (i in cart) { // if i is in cart - returns true
    //     // get cart 
    //     cart = JSON.parse(localStorage.getItem("cart"));
    //     // get i in cart and add qt + 1
    //     cart[i].quantity++;
    // };

    // let quant = input.value + 1;
    // let updatedTotal = item.price * item.quantity;
    // sessionStorage.setItem("total", updatedTotal);
};


// HEADER cart
function updateCountCart() {
    let cartCountContainer = document.querySelector("div#cartCount>p");

    if (cart.content.length != 0) {
        // cartCountContainer.textContent = ""; 
        countItemsInCart = cart.content.length;
        cartCountContainer.textContent = countItemsInCart; 
    console.log("plein");
    } else {
        // countItemsInCart = 0;
        countItemsInCart = cart.content.length;
        cartCountContainer.textContent = countItemsInCart; 
    console.log("rien");
    };
};
updateCountCart();