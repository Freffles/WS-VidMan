# VidMan - Video Collection Manager

A modern, responsive web application for managing and exploring your video collection. Built with React, Vite, and Tailwind CSS.

## Features

- 🎥 Video collection management with grid layout
- 🌓 Light/Dark mode with smooth transitions
- 📱 Fully responsive design
- 🔍 Search and filter functionality
- 💫 Smooth hover animations and transitions
- 🎨 Clean UI with subtle borders and contrasting text
- 🖼️ Elegant card design with translucent info bars
- ♿ Accessibility features with ARIA labels

## UI Design

- **Card Design**:
  - Subtle borders with increased visibility in light mode
  - Translucent gray info bar with high-contrast text
  - Smooth hover transitions for interactive elements
  - Responsive aspect ratio for video thumbnails

- **Theme Support**:
  - Light mode with clean, subtle grays
  - Dark mode with balanced contrast
  - Persistent theme preference storage

- **Typography**:
  - Bold titles for clear hierarchy
  - Medium weight for supporting text
  - High contrast ratios for readability

## Tech Stack

- **Frontend Framework**: React
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: React Context (Theme)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/vidman.git
cd vidman
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
vidman/
├── src/                    # Source files
│   ├── App.jsx            # Main application component
│   ├── ThemeContext.jsx   # Theme context and provider
│   ├── main.jsx          # Application entry point
│   └── index.css         # Global styles and Tailwind directives
├── public/                # Static assets
├── index.html            # HTML template
└── package.json          # Project dependencies and scripts
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
