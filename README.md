# Portfolio Template 3

A modern, fully responsive portfolio template built with **React** and **Tailwind CSS**. This template is designed to provide a high-quality, customizable starting point for your personal portfolio website.

## ✨ Features

- **Responsive Design**: Looks great on all devices, from mobile to desktop.
- **Modern UI**: Clean and professional aesthetic with smooth animations.
- **Easy Customization**: Built with Tailwind CSS for rapid styling changes.
- **Performance Optimized**: Powered by Vite for fast development and production builds.

## 🚀 Getting Started

Follow these steps to get your portfolio up and running:

### 1. Clone the Repository

```bash
git clone https://github.com/Mahesh2-3/PortfolioTemplate3.git
cd PortfolioTemplate3
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` to see your portfolio.

## 🎨 Customization

### 1. Update Personal Data

Navigate to `src/constants.js`. This file contains all the data for the website.

- **Hero Section**: Update the `hero` object with your name, role, and bio.
- **Experience**: modifications to `works` array.
- **Skills**: Update `skills` array with your technical skills (images are in `public/tech`).
- **Projects**: Update `projects` array with your project details, images, and links.
- **Contact**: Update `ContactContent` with your email and social media links.

### 2. Update Images

- Place your images in the `public/` folder.
- Update the image paths in `src/constants.js` to match your filenames (e.g., `/your-image.png`).
- Make sure to replace `profile.png`, `logo.png` and project images with your own.

### 3. Update Links

- Check `src/constants.js` for `Navlinks` and social media links in `ContactContent`.
- Ensure all external links (GitHub, LinkedIn, live demos) are pointing to your profiles/projects.

## 🛠️ Built With

- [React](https://react.dev/) - UI Library
- [Vite](https://vitejs.dev/) - Build Tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [React Icons](https://react-icons.github.io/react-icons/) - Icon Library

## 📦 Building for Production

To create a production-ready build:

```bash
npm run build
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

If you find this template helpful, please give it a ⭐ on [GitHub](https://github.com/Mahesh2-3/PortfolioTemplate1)!
