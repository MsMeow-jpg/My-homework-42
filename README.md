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
git clone https://github.com/MsMeow-jpg/My-homework-42.git
```
2. Go to the project folder:
```bash
cd My-homework-42/my-react-app
```
3. Install dependencies:
```bash
npm install
```
4. Install Axios:
```bash
npm install axios
```
5. Launch the project:
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
https://my-homework-42.vercel.app/
---
📦 Functionality
- DataFetcher uses useEffect to start an API request
- data is fetched from JSONPlaceholder API using axios
- asynchronous request is handled with async/await
- loading message is displayed while data is loading
- error message is displayed if the request fails
- fetched data is saved in component state
- postId is passed as a prop from App.jsx
- when postId changes, the component sends a new request
- buttons allow switching between different scroll records
- custom Ale Abbey inspired design is used for the interface
---
🧠 What we learned
- Creating a React project with Vite
- Installing and using Axios
- Creating components in separate files
- Using useEffect for side effects
- Making asynchronous API requests
- Working with async/await
- Managing loading, error, and data states
- Passing props between components
- Refetching data when a dependency changes
- Using conditional rendering in React
- Styling a React app with custom CSS
- Creating a themed UI design
---
🎨 Design
The application uses a medieval abbey-inspired visual style:

- parchment-style content cards
- warm brown and golden colors
- scroll-themed data records
- wax seal decoration
- tavern and monastery archive atmosphere
- custom styled buttons and loading state
---
✍️ Author

GitHub: MsMeow-jpg
---
📌 Note

This project was completed as part of a React + Vite course assignment.

The main goal of the project is to practice fetching data from an API using axios, useEffect, and async/await, while also handling loading and error states correctly.