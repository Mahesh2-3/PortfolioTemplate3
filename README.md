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

## 🎨 Configuration

This project is designed to be easily customizable without touching the code. ALL data is located in `src/constants.js`.

### 1. Update Content

Open `src/constants.js` in your code editor. You will see several sections:

- **Site Configuration**: Change the `siteConfig` object to update the browser tab title and SEO description.
- **Navigation**: Update or reorder links in `Navlinks`.
- **Hero Section**: Update your name, role, and "About Me" text in the `hero` object.
- **Section Titles**: You can rename "About Me", "Experience", etc., in the `sectionTitles` object.
- **Work Experience**: Add your jobs to the `works` array.
- **Skills**: Add your skills to the `skills` array.
- **Projects**: Add your projects to the `projects` array.
- **Contact**: Update your email and social links in `ContactContent`.

### 2. Add Your Images

1.  Go to the `public` folder.
2.  Paste your images here (e.g., `my-profile.jpg`, `project-1.png`).
3.  In `src/constants.js`, update the image paths to match your filenames. For example, if you added `my-profile.jpg`, change the path to `/my-profile.jpg`.

## 🍴 How to Fork (Copy) this Repository

To create your own copy of this template:

1.  Click the **Fork** button in the top-right corner of this GitHub page.
2.  Select your GitHub profile as the owner.
3.  This will create a copy of the repository in your own GitHub account.
4.  You can now clone your own forked repository and push changes to it.

## 🚀 Deployment to Vercel

The easiest way to publish your website is using Vercel.

1.  Create an account at [vercel.com](https://vercel.com).
2.  Click **Add New...** -> **Project**.
3.  Select **Continue with GitHub**.
4.  Find your forked repository (`PortfolioTemplate3`) and click **Import**.
5.  Click **Deploy**.
6.  Vercel will give you a live URL (e.g., `portfolio-template-3.vercel.app`) where your site is online!

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

If you find this template helpful, please give it a ⭐ on [GitHub](https://github.com/Mahesh2-3)!
