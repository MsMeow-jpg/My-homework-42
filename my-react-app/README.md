# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# My React App (Homework 42)

## 📌 Project Description

This is a tutorial project created using **React + Vite**.

The project demonstrates how to fetch data from an external API using **Axios**, **useEffect**, and **async/await**.

The project has a custom **Ale Abbey inspired medieval archive design** with warm tavern colors, parchment-style cards, scroll records, and abbey-themed text.

The project implements:
- `DataFetcher` component that fetches data from an API
- `useEffect` for running an asynchronous request when the component loads
- `axios` for making HTTP requests
- `async/await` for handling asynchronous logic
- loading state while data is being fetched
- error state if the request fails
- successful data rendering after the request is completed
- refetching data when the `postId` changes
- custom Ale Abbey inspired UI design

---

## 🚀 Technologies

- React
- Vite
- JavaScript (ES6+)
- CSS
- Axios
- useEffect
- useState
- async/await

---

## 📁 Project Structure

---

```bash
HOMEWORK 42/
   └── my-react-app/
         ├── node_modules/
         ├── public/
         │   ├── favicon.svg
         │   └── icons.svg
         ├── src/
         │   ├── assets/
         │   ├── components/
         │   │     └── DataFetcher.jsx
         │   ├── App.css
         │   ├── App.jsx
         │   ├── index.css
         │   └── main.jsx
         ├── .gitignore
         ├── eslint.config.js
         ├── index.html
         ├── package-lock.json
         ├── package.json
         ├── README.md
         └── vite.config.js
```
---
⚙️ Installation and Launch
1. Clone the repository:
```bash
git clone https://github.com/MsMeow-jpg/My-homework-41.git
```
2. Go to the project folder:
```bash
cd My-homework-41/my-react-app
```
3. Install dependencies:
```bash
npm install
```
4. Launch the project:
```bash
npm run dev
```
---
After this, the project will be available at:
```
http://localhost:5173
```
---
🌐 Demo

🔗 Live demo:
https://my-homework-41.vercel.app/
---
📦 Functionality
- MessageComponent uses the use() hook to read data from a Promise
- asynchronous message loading is wrapped with Suspense
- fallback message is displayed while data is loading
- ErrorBoundary catches component rendering errors
- counter updates its value with useState
- Vite starter design with hero image, React and Vite logos, and useful links
---
🧠 What we learned
- Creating React components
- Splitting components into separate files
- Using the use() hook with asynchronous data
- Working with Promise
- Using Suspense for async rendering
- Handling errors with ErrorBoundary
- Managing state with useState
- Vite project structure
---
✍️ Author

GitHub: MsMeow-jpg
---
📌 Note

This project was completed as part of a React + Vite course assignment.