# React Portfolio Template

A modern portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- 🎨 Modern and responsive design
- ⚡ Fast development with Vite
- 🎯 TypeScript for better development experience
- 🎨 Tailwind CSS for styling
- 📱 Mobile-first responsive design
- 🚀 Optimized for production

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

### Development

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

To build the application for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

To preview the production build:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable components
├── sections/           # Page sections
├── utils/             # Utility functions
├── App.tsx            # Main App component
├── main.tsx           # Application entry point
└── index.css          # Global styles
```

## Technologies Used

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Material Tailwind** - React components library
- **Heroicons** - Icon library

## Customization

1. Update the content in the section components
2. Modify the styling using Tailwind CSS classes
3. Replace images in the `public` directory
4. Update the color scheme in `tailwind.config.ts`

## Deployment

This project can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use the GitHub Actions workflow

## License

This project is licensed under the MIT License. 