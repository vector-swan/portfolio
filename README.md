# Mia Donnell Portfolio

A minimal, clean portfolio website for a Senior Product Designer specializing in AI.

## Features

- Clean white background with generous spacing
- Inter font family for modern typography
- Muted blue accent color (#4A5568)
- Fully responsive design
- React Router for navigation
- Tailwind CSS for styling

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

Create a production build:

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
  components/
    Navigation.jsx    # Main navigation component
    ProjectCard.jsx   # Reusable project card component
  pages/
    Homepage.jsx      # Homepage with hero and featured projects
    About.jsx         # About page with bio and contact links
    Contact.jsx       # Contact page
  App.jsx             # Main app component with routing
  main.jsx            # Entry point
  index.css           # Global styles with Tailwind
```

## Customization

### Update Contact Information

Edit the following files to add your contact information:

- `src/pages/About.jsx` - Update email and LinkedIn links
- `src/pages/Contact.jsx` - Update email and LinkedIn links

### Add Bio Text

Edit `src/pages/About.jsx` and replace `[Bio text will be provided]` with your actual bio.

### Add Photo

Replace the placeholder div in `src/pages/About.jsx` with an actual image:

```jsx
<img 
  src="/path-to-your-photo.jpg" 
  alt="Mia Donnell" 
  className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full object-cover"
/>
```

## Tech Stack

- React 18
- Vite
- React Router DOM
- Tailwind CSS
- Inter Font (Google Fonts)

