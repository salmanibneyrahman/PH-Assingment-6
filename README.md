# DigiTools - Premium Digital Tools Marketplace

## About The Project

DigiTools is a single-page web application where users can explore a collection of premium digital tools like resume builders, design toolkits, social media schedulers, and more. Each product has its own card with details like pricing, features, and a tag showing whether it is popular, a best seller, or new. Users can add products to their cart, remove them, and proceed to checkout. I also added toast notifications so users get proper feedback on every action they take. The whole project is responsive and works well on mobile, tablet, and desktop screens.


## Technologies I Used

- **React.js** - For building the UI with reusable components
- **Tailwind CSS** - For styling everything quickly without writing custom CSS
- **DaisyUI** - As a Tailwind plugin for some extra utility
- **React Toastify** - For showing toast notifications on cart actions
- **Font Awesome** - For all the icons across the site
- **Vite** - As the build tool for fast development


## Key Features

- **Product and Cart Toggle** - There are two buttons in the product section that let users switch between viewing all products and viewing their cart. The active tab is highlighted and the cart button shows the current item count dynamically.

- **Full Cart Functionality** - Users can add products to cart with a single click, remove individual items from the cart, see the total price update in real time, and clear the entire cart by clicking Proceed to Checkout. Every action triggers a toast notification so nothing happens silently.

- **Pixel-Perfect Responsive Design** - I built every section following the Figma design closely including the navbar, banner, stats bar with dividers, product cards in a 3-column grid, steps section, pricing cards with gradient backgrounds, CTA section, and a detailed footer. The layout adjusts properly across all screen sizes.