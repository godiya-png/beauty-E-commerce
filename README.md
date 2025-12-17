# Beauty E-Commerce Website

A fully functional frontend-only e-commerce website for skincare and lipcare products with a beautiful burgundy and blonde color theme.

## Features

- **User Authentication**: Login and signup functionality using localStorage
- **Personalized Experience**: Welcome message using the user's actual name
- **Product Categories**: Separate sections for skincare and lipcare products
- **Shopping Cart**: Full cart functionality with add, remove, and quantity controls
- **Product Details**: Modal view for detailed product information
- **Responsive Design**: Works on desktop and mobile devices
- **Smooth Navigation**: Easy-to-use interface with smooth scrolling

## How to Use

### Opening the Website

1. Open the project folder in VS Code
2. Right-click on `index.html` and select "Open with Live Server" (if you have Live Server extension)
   - OR simply open `index.html` in Chrome by dragging the file into the browser
3. You'll start at the login/signup page

### Creating an Account

1. Click "Create Account" on the login page
2. Fill in your details:
   - Full Name
   - Email
   - Password
   - Phone Number
   - Address
3. Click "Create Account"
4. You'll be automatically logged in and redirected to the shop

### Logging In

1. If you already have an account, enter your email and password
2. Click "Login"
3. You'll be redirected to the shop page

### Shopping Experience

1. **Browse Products**: Scroll through skincare and lipcare sections
2. **View Details**: Click "Details" button on any product to see more information
3. **Add to Cart**: Click "Add to Cart" to add products
4. **Adjust Quantity**: In the product detail modal, use +/- buttons to select quantity
5. **View Cart**: Click the cart button in the header to see your items
6. **Manage Cart**: 
   - Increase/decrease quantities
   - Remove items
   - Clear entire cart
7. **Checkout**: Click "Checkout" to complete your purchase

## Color Theme

- **Burgundy** (#800020): Primary color for headers, buttons, and accents
- **Blonde** (#f5deb3): Secondary color for backgrounds and highlights
- Creates an elegant, luxurious feel perfect for beauty products

## Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript
- localStorage for data persistence

## Product Categories

### Skincare (8 Products)
- Hydrating Facial Serum
- Vitamin C Brightening Cream
- Gentle Cleansing Foam
- Night Repair Cream
- Exfoliating Scrub
- Moisturizing Face Mask
- Anti-Aging Eye Cream
- SPF 50 Sunscreen

### Lipcare (8 Products)
- Nourishing Lip Balm
- Tinted Lip Treatment
- Lip Scrub - Sugar & Honey
- Overnight Lip Mask
- Plumping Lip Gloss
- Matte Liquid Lipstick
- Lip Oil - Rose
- SPF 30 Lip Protector

## Data Storage

All data is stored in the browser's localStorage:
- **users**: Array of registered user accounts
- **currentUser**: Currently logged-in user
- **cart**: Shopping cart items

## Notes

- This is a frontend-only application with no backend
- Data persists in browser localStorage
- Clearing browser data will remove all accounts and cart items
- Each browser/device maintains separate data
