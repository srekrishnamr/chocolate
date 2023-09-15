// const checkboxes = document.querySelectorAll('.chocolate');
// const totalPriceElement = document.getElementById('totalPrice');
// const selectedCountElement = document.getElementById('selectedCount');
// const resetButton = document.getElementById('resetButton');
// const MAX_CHOCOLATES = 8;
// let total = 0;
// let selectedChocolates = 0;

// function updateTotalPrice() {
//     total = 0;
//     selectedChocolates = 0;
//     checkboxes.forEach(checkbox => {
//             if (selectedChocolates >= MAX_CHOCOLATES && !checkbox.checked) {
//                 checkbox.disabled = true;
//             } else {
//                 checkbox.disabled = false;
//             }
//         });
//     }

// checkboxes.forEach(checkbox => {
//     checkbox.addEventListener('change', () => {
//         updateTotalPrice();

//         if (selectedChocolates > MAX_CHOCOLATES) {
//             alert('You can select up to 8 chocolates.');
//             checkbox.checked = false;
// checkbox.classList.add('invalid-selection');
//             updateTotalPrice();
//         } else {
//             checkbox.classList.remove('invalid-selection');
//         }
//     });
// });

// resetButton.addEventListener('click', () => {
//     checkboxes.forEach(checkbox => {
//         checkbox.checked = false;
//         checkbox.classList.remove('invalid-selection');
//         checkbox.disabled = false;
//     });
//     updateTotalPrice();
// });


// const dmenu = document.querySelector('.d-menu')
// const mmenu = document.querySelector('.m-menu')
// const navbar = document.querySelector('.nav-bar')
// const mnavbar = document.querySelector('.m-navbar')
// const container = document.querySelector('.container')
// const cartContent = document.querySelector('.cart-content')
// const cartTotal = document.querySelector('.cart-total')
// const closeCart = document.querySelector('.close-cart')
// const carto = document.querySelector('.cart')
// const clearCart = document.querySelector('.clear-cart')

// // Initialize variables
// let selectedChocolates = 

// Initialize an empty shopping cart
// let shoppingCart =  [
//             {
//             id: 1,
//             title: "Dark chocolate",
//             img: src = "/Media/mug-8235059_1280.jpg",
//             price: 100,
    
//         }, {
//             id: 2,
//             title: "Strawberry Chocolate",
//             img: src = "/Media/strawberry.jpg",
//             price: 150,
    
//         }, {
//             id: 3,
//             title: "Coffe Chocolate",
//             img: src = "/Media/love-chocolate.jpg",
//             price: 120,
    
//         }, {
//             id: 4,
//             title: "Coffe",
//             img: src = "/Media/mug-8235059_1280.jpg",
//             price: 140,
    
//         },
    
// ];

// Function to update the cart and calculate the total price
// function updateCart() {
//     const cartContent = document.querySelector(".cart-content");
//     const cartTotal = document.querySelector(".cart-total");

//     // Clear the existing cart content
//     cartContent.innerHTML = "";

//     // Initialize variables for the total price and item count
//     let totalPrice = 0;
//     let itemCount = 0;

//     // Loop through the items in the shopping cart
//     for (const item of shoppingCart) {
//         // Create a new cart item element
//         const cartItem = document.createElement("div");
//         cartItem.classList.add("cart-item");
//         cartItem.innerHTML = `
//                     <span>${item.name}</span>
//                     <span>${item.price}</span>
//                 `;

//         // Append the cart item to the cart content
//         cartContent.appendChild(cartItem);

//         // Update the total price and item count
//         totalPrice += item.price;
//         itemCount++;
//     }

//     // Display the total price in the cart
//     cartTotal.textContent = totalPrice;

//     // Enable or disable the "Add to cart" buttons based on item count
//     const addToCartButtons = document.querySelectorAll(".add-to-cart");
//     addToCartButtons.forEach((button) => {
//         button.disabled = itemCount >= 8;
//     });
// }

// // Function to add an item to the cart
// function addItem(event, name, price) {
//     event.preventDefault();
//     if (shoppingCart.length < 8) {
//         shoppingCart.push({ name, price });
//         updateCart();
//     }
// }

// // Function to clear the cart
// function clearCart() {
//     shoppingCart = [];
//     updateCart();
// }

// // Attach click event handlers to "Add to cart" buttons
// const addToCartButtons = document.querySelectorAll(".add-to-cart");
// addToCartButtons.forEach((button) => {
//     button.addEventListener("click", (event) => {
//         const cardBody = event.target.closest(".card-body");
//         const itemName = cardBody.querySelector(".card-title").textContent;
//         const itemPrice = parseFloat(cardBody.querySelector(".bi-currency-rupee").textContent.slice(1));
//         addItem(event, itemName, itemPrice);
//     });
// });

// // Attach click event handler to "Clear Cart" button
// const clearCartButton = document.querySelector(".clear-cart");
// clearCartButton.addEventListener("click", clearCart);
    

    // Define an array to store the selected chocolates
    const selectedChocolates = [
        {
            id: 1,
            title: "Dark chocolate",
            img: src = "/Media/mug-8235059_1280.jpg",
            price: 100,
    
        }, {
            id: 2,
            title: "Strawberry Chocolate",
            img: src = "/Media/strawberry.jpg",
            price: 150,
    
        }, {
            id: 3,
            title: "Coffe Chocolate",
            img: src = "/Media/love-chocolate.jpg",
            price: 120,
    
        }, {
            id: 4,
            title: "Coffe",
            img: src = "/Media/mug-8235059_1280.jpg",
            price: 140,
    
        },
    ];

    // Define a function to add a chocolate to the custom pack
    function addItem(event) {
        event.preventDefault();

        const card = event.target.closest('.card');
        const title = card.querySelector('.card-title').textContent;
        const price = parseFloat(card.querySelector('.bi-currency-rupee').textContent.replace('$', ''));

        // Check if the total number of selected chocolates does not exceed 8
        if (selectedChocolates.length < 8) {
            selectedChocolates.push({ title, price });
            updateCart();
        } else {
            alert('You have already selected 8 chocolates for your custom pack.');
        }
    }

    // Define a function to update the cart
    function updateCart() {
        const cartContent = document.querySelector('.cart-content');
        const cartTotal = document.querySelector('.cart-total');

        // Clear the cart content
        cartContent.innerHTML = '';

        // Calculate the total price and display selected chocolates in the cart
        let totalPrice = 0;
        selectedChocolates.forEach((chocolate, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <span class="item-name">${chocolate.title}</span>
                <span class="item-price">$${chocolate.price}</span>
                <button class="remove-item" onclick="removeItem(${index})">Remove</button>
            `;
            cartContent.appendChild(cartItem);

            totalPrice += chocolate.price;
        });

        // Update the total price in the cart
        cartTotal.textContent = totalPrice.toFixed(2);
    }

    // Define a function to remove a chocolate from the custom pack
    function removeItem(index) {
        selectedChocolates.splice(index, 1);
        updateCart();
    }

    // Define a function to clear the cart
    function clearCart() {
        selectedChocolates.length = 0;
        updateCart();
    }

    // Attach event listeners to Add to Cart buttons
    const addToCartButtons = document.querySelectorAll('.btn.btn-primary');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addItem);
    });

    // Attach event listener to Clear Cart button
    const clearCartButton = document.querySelector('.clear-cart');
    clearCartButton.addEventListener('click', clearCart);


