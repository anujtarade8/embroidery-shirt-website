// CART

let cart = JSON.parse(localStorage.getItem("cart")) || [];


// ADD PRODUCT TO CART

function addToCart(name, price, image) {

    let product = {
        name: name,
        price: price,
        image: image
    };

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " has been added to your cart!");
}


// DISPLAY CART

function displayCart() {

    let cartItems = document.getElementById("cart-items");

    let cartTotal = document.getElementById("cart-total");

    if (!cartItems) {
        return;
    }

    cartItems.innerHTML = "";

    let total = 0;


    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p style="text-align:center;">
                Your cart is empty.
            </p>
        `;

        cartTotal.innerText = "0";

        return;
    }


    cart.forEach(function(product, index) {

        total = total + product.price;

        cartItems.innerHTML += `

            <div class="cart-item">

                <img src="${product.image}">

                <div class="cart-item-info">

                    <h3>${product.name}</h3>

                    <p>₹${product.price}</p>

                </div>

                <button
                    class="remove-button"
                    onclick="removeFromCart(${index})">

                    Remove

                </button>

            </div>

        `;

    });


    cartTotal.innerText = total;

}


// REMOVE PRODUCT

function removeFromCart(index) {

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

}


// CHECKOUT

function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;
    }

    window.location.href = "billing.html";
}


// DISPLAY CART

displayCart();