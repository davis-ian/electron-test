# Electron Vue App

A modern desktop application built with Electron, Vue 3, TypeScript, and Tailwind CSS.

## Tech Stack

- **Electron**: Desktop application framework
- **Vue 3**: Frontend framework
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Build tool and development server
- **ESBuild**: Fast bundler for the Electron main process

## Prerequisites

- Node.js 16+ (Tested with Node.js 22)
- npm (comes with Node.js)

## Project Setup

```bash
# Install dependencies
npm install
```

## Development

To run the application in development mode:

```bash
npm run electron:dev
```

This command will:

1. Build the Electron main process
2. Start the Vite dev server
3. Launch Electron when the dev server is ready
4. Enable hot reload for both frontend and main process

## Building for Production

To create a production build:

```bash
npm run electron:build
```

This will:

1. Build the Vue frontend
2. Build the Electron main process
3. Package the application using electron-builder

## Available Scripts

- `npm run dev`: Start Vite dev server (frontend only)
- `npm run electron:dev`: Start the application in development mode
- `npm run electron:build`: Build the application for production
- `npm run electron:build-main`: Build only the Electron main process
- `npm run type-check`: Run TypeScript type checking
- `npm run build`: Build the frontend only
- `npm run preview`: Preview the built frontend

## Project Structure

```
electron-vue-app/
├── electron/              # Electron main process files
│   ├── main.ts           # Main process entry point
│   └── build.js          # ESBuild configuration
├── src/                  # Vue frontend source files
│   ├── App.vue           # Root Vue component
│   └── ...              # Other Vue components
├── dist/                 # Built frontend files
├── dist-electron/        # Built Electron files
└── package.json          # Project configuration
```

## Development Notes

- The application uses ESM for the Vue frontend and CommonJS for the Electron main process
- Hot reload is enabled for both frontend and main process changes
- TypeScript is used throughout the project for better type safety
- Tailwind CSS is configured and ready to use in any component

## Troubleshooting

If you encounter any issues:

1. Make sure you're in the correct directory (`electron-vue-app`)
2. Try removing `node_modules` and `dist` directories and reinstalling dependencies
3. Check that port 5173 is available for the dev server
4. Ensure you have the correct Node.js version installed

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
