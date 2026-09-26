/* =========================================
   ADD PRODUCT TO CART
========================================= */

function addToCart(name, price, image) {

    var cart = JSON.parse(localStorage.getItem("cart")) || [];


    var product = {

        name: name,

        price: price,

        image: image

    };


    cart.push(product);


    localStorage.setItem("cart", JSON.stringify(cart));


    alert(name + " has been added to your cart!");

}


/* =========================================
   DISPLAY CART
========================================= */

function displayCart() {

    var cart = JSON.parse(localStorage.getItem("cart")) || [];

    var cartItems = document.getElementById("cart-items");

    var total = 0;


    if (!cartItems) {

        return;

    }


    cartItems.innerHTML = "";


    if (cart.length === 0) {

        cartItems.innerHTML =
            "<p>Your cart is empty.</p>";

        document.getElementById("cart-total").innerText = "0";

        return;

    }


    for (var i = 0; i < cart.length; i++) {

        total = total + cart[i].price;


        cartItems.innerHTML +=

            '<div class="cart-item">' +

                '<img src="' + cart[i].image + '">' +

                '<div>' +

                    '<h3>' + cart[i].name + '</h3>' +

                    '<p>₹' + cart[i].price + '</p>' +

                    '<button onclick="removeFromCart(' + i + ')">' +

                        'Remove' +

                    '</button>' +

                '</div>' +

            '</div>';

    }


    document.getElementById("cart-total").innerText = total;

}


/* =========================================
   REMOVE PRODUCT FROM CART
========================================= */

function removeFromCart(index) {

    var cart = JSON.parse(localStorage.getItem("cart")) || [];


    cart.splice(index, 1);


    localStorage.setItem("cart", JSON.stringify(cart));


    displayCart();

}


/* =========================================
   DISPLAY BILLING INFORMATION
========================================= */

function displayBilling() {

    var cart = JSON.parse(localStorage.getItem("cart")) || [];

    var billingItems =
        document.getElementById("billing-items");

    var billingTotal =
        document.getElementById("billing-total");


    if (!billingItems) {

        return;

    }


    var total = 0;


    billingItems.innerHTML = "";


    for (var i = 0; i < cart.length; i++) {

        total = total + cart[i].price;


        billingItems.innerHTML +=

            '<p>' +

            cart[i].name +

            ' - ₹' +

            cart[i].price +

            '</p>';

    }


    billingTotal.innerText = total;

}


/* =========================================
   LOGIN
========================================= */

function loginUser(event) {

    event.preventDefault();


    var email =
        document.getElementById("email").value;


    localStorage.setItem("user", email);


    alert("Login successful!");


    window.location.href = "index.html";

}


/* =========================================
   GUEST LOGIN
========================================= */

function guestLogin() {

    localStorage.setItem("user", "Guest");


    alert("Continuing as Guest");


    window.location.href = "index.html";

}


/* =========================================
   SHOW QR CODE
========================================= */

function showQR() {

    var qr =
        document.getElementById("qr-section");


    if (qr) {

        qr.style.display = "block";

    }

}


/* =========================================
   HIDE QR CODE
========================================= */

function hideQR() {

    var qr =
        document.getElementById("qr-section");


    if (qr) {

        qr.style.display = "none";

    }

}


/* =========================================
   PLACE ORDER
========================================= */

function placeOrder(event) {

    event.preventDefault();


    var name =
        document.getElementById("customer-name").value;


    var email =
        document.getElementById("customer-email").value;


    var phone =
        document.getElementById("customer-phone").value;


    var address =
        document.getElementById("customer-address").value;


    var payment =
        document.querySelector(
            'input[name="payment"]:checked'
        ).value;


    var orderID =
        "TS" + Math.floor(Math.random() * 100000);


    localStorage.setItem("orderID", orderID);

    localStorage.setItem("customerName", name);

    localStorage.setItem("customerEmail", email);

    localStorage.setItem("customerPhone", phone);

    localStorage.setItem("customerAddress", address);

    localStorage.setItem("paymentMethod", payment);


    window.location.href = "thankyou.html";

}


/* =========================================
   DISPLAY ORDER ID
========================================= */

function displayOrderID() {

    var orderID =
        localStorage.getItem("orderID");


    var element =
        document.getElementById("order-id");


    if (element && orderID) {

        element.innerText = orderID;

    }

}


/* =========================================
   RUN FUNCTIONS WHEN PAGE LOADS
========================================= */

displayCart();

displayBilling();

displayOrderID();
/* =========================================
   APPLY COUPON
========================================= */

function applyCoupon() {

    var coupon = document.getElementById("coupon-code").value;
    var message = document.getElementById("coupon-message");

    coupon = coupon.toUpperCase();

    var cart = JSON.parse(localStorage.getItem("cart")) || [];

    var total = 0;

    for (var i = 0; i < cart.length; i++) {
        total = total + cart[i].price;
    }

    var discount = 0;

    if (coupon === "THREAD10") {

        discount = total * 0.10;
        message.innerText = "10% coupon applied!";

    } else if (coupon === "STITCH20") {

        discount = total * 0.20;
        message.innerText = "20% coupon applied!";

    } else if (coupon === "WELCOME15") {

        discount = total * 0.15;
        message.innerText = "15% coupon applied!";

    } else {

        message.innerText = "Invalid coupon code.";
        discount = 0;
    }

    var finalTotal = total - discount;

    document.getElementById("discount").innerText =
        Math.round(discount);

    document.getElementById("final-total").innerText =
        Math.round(finalTotal);

    localStorage.setItem("discount", discount);
    localStorage.setItem("finalTotal", finalTotal);
}