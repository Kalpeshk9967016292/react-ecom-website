# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Folder Structures:

ecommerce-app/
│
├── public/
│ ├── index.html
│ ├── favicon.ico
│ └── assets/
│ └── images/
│
├── src/
│ ├── assets/
│ │ ├── images/
│ │ ├── icons/
│ │ └── styles/
│ │ ├── global.css
│ │ └── variables.css
│ │
│ ├── components/
│ │ ├── common/
│ │ ├── layout/
│ │ └── ui/
│ │
│ ├── features/
│ │ ├── auth/
│ │ ├── products/
│ │ ├── cart/
│ │ ├── wishlist/
│ │ └── orders/
│ │
│ ├── pages/
│ │ ├── Home/
│ │ ├── ProductDetails/
│ │ ├── Cart/
│ │ ├── Checkout/
│ │ ├── Login/
│ │ ├── Register/
│ │ └── Profile/
│ │
│ ├── routes/
│ │ └── AppRoutes.js
│ │
│ ├── services/
│ │ ├── api.js
│ │ ├── authService.js
│ │ ├── productService.js
│ │ ├── cartService.js
│ │ └── orderService.js
│ │
│ ├── store/
│ │ ├── store.js
│ │ └── slices/
│ │ ├── authSlice.js
│ │ ├── productSlice.js
│ │ ├── cartSlice.js
│ │ └── orderSlice.js
│ │
│ ├── hooks/
│ │ ├── useAuth.js
│ │ ├── useCart.js
│ │ └── useProducts.js
│ │
│ ├── utils/
│ │ ├── constants.js
│ │ ├── helpers.js
│ │ └── validation.js
│ │
│ ├── context/ (optional if not using redux)
│ │ └── AuthContext.js
│ │
│ ├── App.js
│ ├── main.js (or index.js)
│ └── config.js
│
├── .env
├── package.json
└── README.md
