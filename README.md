# VidMan - Video Collection Manager

A modern, responsive web application for managing and exploring your video collection. Built with React, Vite, and Tailwind CSS.

## Features

- 🎥 Video collection management with grid layout
- 🌓 Light/Dark mode with smooth transitions
- 📱 Fully responsive design
- 🔍 Search and filter functionality
- 💫 Smooth hover animations and transitions
- 🎨 Modern UI with blue accent colors

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
