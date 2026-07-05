client/
├── public/
│
├── src/
│ ├── app/
│ │ ├── App.jsx
│ │ ├── main.jsx
│ │ ├── router.jsx
│ │ └── queryClient.js
│ │
│ ├── assets/
│ │ ├── images/
│ │ ├── icons/
│ │ └── fonts/
│ │
│ ├── components/
│ │ ├── common/
│ │ │ ├── Button.jsx
│ │ │ ├── Input.jsx
│ │ │ ├── Loader.jsx
│ │ │ ├── Modal.jsx
│ │ │ ├── EmptyState.jsx
│ │ │ └── ErrorMessage.jsx
│ │ │
│ │ ├── layout/
│ │ │ ├── Navbar.jsx
│ │ │ ├── Footer.jsx
│ │ │ ├── Container.jsx
│ │ │ └── ProtectedRoute.jsx
│ │ │
│ │ └── ui/
│ │ ├── Pagination.jsx
│ │ ├── SearchInput.jsx
│ │ ├── Rating.jsx
│ │ └── Price.jsx
│ │
│ ├── pages/
│ │ ├── HomePage.jsx
│ │ ├── AboutPage.jsx
│ │ ├── ContactPage.jsx
│ │ └── NotFoundPage.jsx
│ │
│ ├── features/
│ │ ├── auth/
│ │ │ ├── pages/
│ │ │ │ ├── LoginPage.jsx
│ │ │ │ ├── RegisterPage.jsx
│ │ │ │ └── ProfilePage.jsx
│ │ │ ├── authApi.js
│ │ │ ├── authHooks.js
│ │ │ └── authSlice.js
│ │ │
│ │ ├── products/
│ │ │ ├── pages/
│ │ │ │ ├── ProductsPage.jsx
│ │ │ │ └── ProductDetailsPage.jsx
│ │ │ ├── components/
│ │ │ │ ├── ProductCard.jsx
│ │ │ │ ├── ProductGrid.jsx
│ │ │ │ ├── ProductFilter.jsx
│ │ │ │ └── ProductImages.jsx
│ │ │ ├── productApi.js
│ │ │ ├── productHooks.js
│ │ │ └── productUtils.js
│ │ │
│ │ ├── categories/
│ │ │ ├── categoryApi.js
│ │ │ └── categoryHooks.js
│ │ │
│ │ ├── cart/
│ │ │ ├── pages/
│ │ │ │ └── CartPage.jsx
│ │ │ ├── components/
│ │ │ │ ├── CartItem.jsx
│ │ │ │ └── CartSummary.jsx
│ │ │ └── cartSlice.js
│ │ │
│ │ ├── wishlist/
│ │ │ ├── pages/
│ │ │ │ └── WishlistPage.jsx
│ │ │ └── wishlistSlice.js
│ │ │
│ │ ├── checkout/
│ │ │ ├── pages/
│ │ │ │ └── CheckoutPage.jsx
│ │ │ ├── checkoutApi.js
│ │ │ └── checkoutHooks.js
│ │ │
│ │ └── orders/
│ │ ├── pages/
│ │ │ ├── OrdersPage.jsx
│ │ │ └── OrderDetailsPage.jsx
│ │ ├── orderApi.js
│ │ └── orderHooks.js
│ │
│ ├── services/
│ │ ├── request.js
│ │ └── storage.js
│ │
│ ├── store/
│ │ ├── store.js
│ │ ├── hooks.js
│ │ └── slices/
│ │ └── uiSlice.js
│ │
│ ├── hooks/
│ │ ├── useDebounce.js
│ │ └── usePagination.js
│ │
│ ├── utils/
│ │ ├── constants.js
│ │ ├── formatCurrency.js
│ │ └── validators.js
│ │
│ └── styles/
│ ├── globals.css
│ └── variables.css
│
├── .env
├── package.json
└── vite.config.js
