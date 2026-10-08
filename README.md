# 🚀 HERO.IO — App Discovery Platform

A modern and responsive app discovery platform built with **Next.js, TypeScript, Tailwind CSS, and DaisyUI**.

HERO.IO allows users to explore applications, view detailed information, install applications, and manage their installed apps through a clean and user-friendly interface.

---

## 🌐 Live Demo

🔗 **Live Website:** Coming Soon

🔗 **GitHub Repository:**  
https://github.com/BonyAminAIUB/Hero-App

---

## 📖 About The Project

**HERO.IO** is a modern application discovery platform designed to provide users with an easy way to explore and manage different applications.

The project focuses on building a clean user interface while implementing important Next.js concepts such as:

- Dynamic routes
- Server Components
- Client Components
- Context API
- Dynamic data rendering
- Loading states
- Reusable components
- Responsive layouts
- App installation management

The application is designed with a modern UI using **Tailwind CSS and DaisyUI**.

---

## ✨ Features

### 🏠 Home Page

- Modern hero/banner section
- Featured application information
- Statistics section
- Responsive navigation
- Social media footer

### 📱 Applications

- Browse all available applications
- Responsive application grid
- Application cards with important information
- Application rating and download statistics
- Dynamic application details

### 🔎 Application Details

- Dynamic application details page
- Application image and title
- Developer/company information
- Download statistics
- Average rating
- Total reviews
- Dynamic rating distribution
- Full application description
- Install application functionality
- Back to Applications navigation

### 📥 Installation Management

- Install applications dynamically
- Prevent duplicate application installation
- View all installed applications
- Display installed application information
- Uninstall applications
- Show empty state when no applications are installed

### ⏳ Loading Experience

- Page-level loading states
- Skeleton UI using DaisyUI
- Smooth loading experience while fetching application data

### 📱 Responsive Design

The application is designed to work smoothly across:

- Desktop
- Laptop
- Tablet
- Mobile devices

---

## 🛠️ Technologies Used

### Frontend

- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **DaisyUI**

### Development Tools

- **VS Code**
- **Git**
- **GitHub**
- **npm**

### Next.js Concepts

- App Router
- Server Components
- Client Components
- Dynamic Routes
- `loading.tsx`
- `next/image`
- Context API
- Dynamic Data Fetching

---

## 📂 Project Structure

```text
Hero-App/
│
├── public/
│   └── data.json
│
├── src/
│   ├── app/
│   │   ├── apps/
│   │   │   ├── [id]/
│   │   │   │   ├── page.tsx
│   │   │   │   └── loading.tsx
│   │   │   │
│   │   │   ├── page.tsx
│   │   │   └── loading.tsx
│   │   │
│   │   ├── installation/
│   │   │   └── page.tsx
│   │   │
│   │   ├── components/
│   │   │   └── shared/
│   │   │       ├── AppCard.tsx
│   │   │       ├── Footer.tsx
│   │   │       ├── NavBar.tsx
│   │   │       └── InstallAppButton.tsx
│   │   │
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── context/
│   │   └── AppProvider.tsx
│   │
│   ├── lib/
│   │   └── app.ts
│   │
│   └── types/
│       └── apps.type.ts
│
├── .gitignore
├── next.config.ts
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
