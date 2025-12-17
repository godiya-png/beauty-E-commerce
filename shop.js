// Check authentication
const currentUser = JSON.parse(localStorage.getItem('currentUser'));
if (!currentUser) {
    window.location.href = 'index.html';
}

// Display welcome message with user's name
document.getElementById('welcomeMessage').textContent = `Welcome, ${currentUser.name}!`;

// Product Data
const products = {
    skincare: [
        {
            id: 1,
            name: 'Hydrating Facial Serum',
            description: 'Deep hydration serum with hyaluronic acid for plump, glowing skin.',
            category: 'Skincare',
            price: 45.99,
            icon: '💧'
        },
        {
            id: 2,
            name: 'Vitamin C Brightening Cream',
            description: 'Brightening cream that reduces dark spots and evens skin tone.',
            category: 'Skincare',
            price: 52.99,
            icon: '🍊'
        },
        {
            id: 3,
            name: 'Gentle Cleansing Foam',
            description: 'Mild foaming cleanser that removes impurities without stripping skin.',
            category: 'Skincare',
            price: 28.99,
            icon: '🧼'
        },
        {
            id: 4,
            name: 'Night Repair Cream',
            description: 'Rich overnight cream that repairs and rejuvenates skin while you sleep.',
            category: 'Skincare',
            price: 68.99,
            icon: '🌙'
        },
        {
            id: 5,
            name: 'Exfoliating Scrub',
            description: 'Gentle exfoliator with natural beads for smooth, radiant skin.',
            category: 'Skincare',
            price: 34.99,
            icon: '✨'
        },
        {
            id: 6,
            name: 'Moisturizing Face Mask',
            description: 'Intensive hydration mask for instant moisture boost.',
            category: 'Skincare',
            price: 38.99,
            icon: '🎭'
        },
        {
            id: 7,
            name: 'Anti-Aging Eye Cream',
            description: 'Reduce fine lines and dark circles around delicate eye area.',
            category: 'Skincare',
            price: 55.99,
            icon: '👁️'
        },
        {
            id: 8,
            name: 'SPF 50 Sunscreen',
            description: 'Broad spectrum protection against harmful UV rays.',
            category: 'Skincare',
            price: 32.99,
            icon: '☀️'
        }
    ],
    lipcare: [
        {
            id: 9,
            name: 'Nourishing Lip Balm',
            description: 'Ultra-moisturizing balm with shea butter for soft, healthy lips.',
            category: 'Lipcare',
            price: 12.99,
            icon: '💋'
        },
        {
            id: 10,
            name: 'Tinted Lip Treatment',
            description: 'Hydrating treatment with a hint of color for natural beauty.',
            category: 'Lipcare',
            price: 18.99,
            icon: '💄'
        },
        {
            id: 11,
            name: 'Lip Scrub - Sugar & Honey',
            description: 'Exfoliating scrub that removes dead skin for smooth lips.',
            category: 'Lipcare',
            price: 15.99,
            icon: '🍯'
        },
        {
            id: 12,
            name: 'Overnight Lip Mask',
            description: 'Intensive overnight treatment for deeply hydrated lips.',
            category: 'Lipcare',
            price: 22.99,
            icon: '🌺'
        },
        {
            id: 13,
            name: 'Plumping Lip Gloss',
            description: 'Volumizing gloss with natural extracts for fuller-looking lips.',
            category: 'Lipcare',
            price: 24.99,
            icon: '✨'
        },
        {
            id: 14,
            name: 'Matte Liquid Lipstick',
            description: 'Long-lasting matte formula in rich burgundy shade.',
            category: 'Lipcare',
            price: 19.99,
            icon: '💅'
        },
        {
            id: 15,
            name: 'Lip Oil - Rose',
            description: 'Lightweight nourishing oil with delicate rose essence.',
            category: 'Lipcare',
            price: 16.99,
            icon: '🌹'
        },
        {
            id: 16,
            name: 'SPF 30 Lip Protector',
            description: 'Sun protection for lips with moisturizing benefits.',
            category: 'Lipcare',
            price: 14.99,
            icon: '🛡️'
        }
    ]
};

// Shopping cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update cart count
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = totalItems;
}

// Display products
function displayProducts(category, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    products[category].forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-icon">${product.icon}</div>
            <div class="product-category">${product.category}</div>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="product-price">$${product.price.toFixed(2)}</div>
            <div class="product-actions">
                <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
                <button class="btn btn-secondary" onclick="showProductDetail(${product.id})">Details</button>
            </div>
        `;
        container.appendChild(productCard);
    });
}

// Find product by ID
function findProduct(productId) {
    return [...products.skincare, ...products.lipcare].find(p => p.id === productId);
}

// Add to cart
function addToCart(productId, quantity = 1) {
    const product = findProduct(productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...product,
            quantity: quantity
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    
    // Show confirmation
    alert(`${product.name} added to cart!`);
}

// Show product detail modal
let selectedProduct = null;

function showProductDetail(productId) {
    selectedProduct = findProduct(productId);
    if (!selectedProduct) return;
    
    document.getElementById('modalProductName').textContent = selectedProduct.name;
    document.getElementById('modalProductIcon').textContent = selectedProduct.icon;
    document.getElementById('modalProductDescription').textContent = selectedProduct.description;
    document.getElementById('modalProductCategory').textContent = selectedProduct.category;
    document.getElementById('modalProductPrice').textContent = `$${selectedProduct.price.toFixed(2)}`;
    document.getElementById('modalQuantity').value = 1;
    
    document.getElementById('productModal').classList.add('active');
}

// Close product modal
document.getElementById('closeProductModal').addEventListener('click', () => {
    document.getElementById('productModal').classList.remove('active');
});

// Quantity controls in product modal
document.getElementById('decreaseQty').addEventListener('click', () => {
    const input = document.getElementById('modalQuantity');
    const current = parseInt(input.value);
    if (current > 1) {
        input.value = current - 1;
    }
});

document.getElementById('increaseQty').addEventListener('click', () => {
    const input = document.getElementById('modalQuantity');
    const current = parseInt(input.value);
    input.value = current + 1;
});

// Add to cart from modal
document.getElementById('addToCartFromModal').addEventListener('click', () => {
    const quantity = parseInt(document.getElementById('modalQuantity').value);
    if (selectedProduct) {
        addToCart(selectedProduct.id, quantity);
        document.getElementById('productModal').classList.remove('active');
    }
});

// Show cart modal
document.getElementById('cartBtn').addEventListener('click', () => {
    displayCart();
    document.getElementById('cartModal').classList.add('active');
});

// Close cart modal
document.getElementById('closeCart').addEventListener('click', () => {
    document.getElementById('cartModal').classList.remove('active');
});

// Display cart items
function displayCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="empty-cart"><p>Your cart is empty</p></div>';
        document.getElementById('cartTotal').textContent = '$0.00';
        return;
    }
    
    cartItemsContainer.innerHTML = '';
    let total = 0;
    
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <h4>${item.icon} ${item.name}</h4>
                <p>$${item.price.toFixed(2)} each</p>
            </div>
            <div class="cart-item-quantity">
                <button onclick="updateQuantity(${index}, -1)">-</button>
                <span>${item.quantity}</span>
                <button onclick="updateQuantity(${index}, 1)">+</button>
            </div>
            <div class="cart-item-total">
                <p>$${itemTotal.toFixed(2)}</p>
            </div>
            <button class="remove-item" onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItem);
    });
    
    document.getElementById('cartTotal').textContent = `$${total.toFixed(2)}`;
}

// Update quantity
function updateQuantity(index, change) {
    if (cart[index]) {
        cart[index].quantity += change;
        
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        displayCart();
    }
}

// Remove from cart
function removeFromCart(index) {
    if (confirm('Remove this item from cart?')) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        displayCart();
    }
}

// Clear cart
document.getElementById('clearCartBtn').addEventListener('click', () => {
    if (cart.length === 0) return;
    
    if (confirm('Are you sure you want to clear your cart?')) {
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        displayCart();
    }
});

// Checkout
document.getElementById('checkoutBtn').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    if (confirm(`Proceed with checkout?\n\nTotal: $${total.toFixed(2)}\n\nShipping to:\n${currentUser.name}\n${currentUser.address}\n${currentUser.phone}`)) {
        alert(`Thank you for your order, ${currentUser.name}!\n\nOrder Total: $${total.toFixed(2)}\n\nYour order will be delivered to:\n${currentUser.address}\n\nWe'll contact you at: ${currentUser.phone}`);
        
        // Clear cart after checkout
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        document.getElementById('cartModal').classList.remove('active');
    }
});

// Logout
document.getElementById('logoutBtn').addEventListener('click', () => {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('currentUser');
        window.location.href = 'index.html';
    }
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Close modals when clicking outside
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
    }
});

// Initialize page
displayProducts('skincare', 'skincareProducts');
displayProducts('lipcare', 'lipcareProducts');
updateCartCount();
