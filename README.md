# 🌐 My Portfolio Website  

[![Deploy](https://img.shields.io/badge/Deploy-GitHub%20Pages-blue)](https://nour-developer1.github.io/My-Portfolio-Website/)  
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)  
[![Status](https://img.shields.io/badge/Status-Live-success)](https://nour-developer1.github.io/My-Portfolio-Website/)  
[![Made with HTML, CSS, JS](https://img.shields.io/badge/Made%20with-HTML%2C%20CSS%2C%20JS-orange)](#-tech-stack)  

---

## 🖼️ Homepage Preview  

![Homepage Preview](./assets/images/homepage.png)  

👉 **Live Demo:** [nour-developer1.github.io/My-Portfolio-Website](https://nour-developer1.github.io/My-Portfolio-Website/)  

---

## 📌 Overview  

This repository contains the source code for my **personal portfolio website**.  
It highlights my **skills, projects, and professional journey** in:  
- System Integration  
- Data Management  
- Business Intelligence  
- Digital Transformation  

---

## ✨ Features  

- 🎯 **Professional Introduction** — summary of expertise and focus areas  
- 💼 **Projects Showcase** — completed projects with technologies used  
- 🛠️ **Skills Section** — frameworks, tools, and methodologies  
- 📱 **Responsive Design** — optimized for desktop, tablet, and mobile  
- 📬 **Contact Section** — GitHub, LinkedIn, and direct communication options  

---

## ⚛️ React + Vite Setup  

The portfolio is built using **React** and **Vite**, ensuring fast development and optimized builds.  
This setup provides **HMR (Hot Module Replacement)**, ESLint rules, and modern tooling.  

### Available Plugins  

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) — uses [Babel](https://babeljs.io/) for Fast Refresh.  
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) — uses [SWC](https://swc.rs/) for blazing-fast builds.  

### ESLint & TypeScript  

For production-grade applications, it’s recommended to:  
- Use **TypeScript** with type-aware linting rules  
- Extend the ESLint configuration for stricter code quality  
- Reference the [Vite React + TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts)  
- Integrate [`typescript-eslint`](https://typescript-eslint.io) for static analysis  

This combination ensures **clean code, scalability, and maintainability**.  

---

## 🛠️ Tech Stack  

| Category        | Tools / Libraries |
|-----------------|-------------------|
| **Frontend**    | React, Vite |
| **Styling**     | CSS3, Responsive Design, Flexbox/Grid |
| **Linting**     | ESLint, TypeScript ESLint (optional) |
| **Deployment**  | GitHub Pages |
| **Other**       | SEO basics, performance optimization |

---

## 📂 Project Structure  

```bash
.
├── index.html
├── src/
│   ├── assets/        # Images, fonts, icons
│   ├── components/    # Reusable components
│   ├── pages/         # Page-level components
│   ├── App.jsx        # Main App component
│   └── main.jsx       # Entry point
├── public/            # Static files
├── vite.config.js     # Vite configuration
└── README.md
