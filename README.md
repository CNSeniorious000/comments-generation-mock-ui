# Mock UI

A Svelte-based web application for creating interactive UI mockups and presentations.

## Features

- **Component Library**: Reusable UI components including:
  - Cards
  - Emoji displays
  - Line elements (Box, Horizontal, Vertical)
  - Markdown rendering

- **Data Visualization**:
  - Number charts
  - Pie charts
  - Timeline visualizations
  - Event displays

- **Demo Sections**:
  - Emoji carousel with grid layout options
  - Interactive feature demonstrations
  - Design mockups

- **Slide Presentations**:
  - Data-driven slides
  - Event timelines
  - Platform-specific displays (Douyin, Weibo, Xiaohongshu)

## Project Structure

```
├── src/
│   ├── lib/
│   │   ├── components/    # Reusable UI components
│   │   └── utils/         # Helper functions and utilities
│   └── routes/           # Application routes and pages
│       ├── data/         # Data management
│       ├── demo/         # Interactive demos
│       ├── design/       # Design mockups
│       └── slides/       # Presentation slides
```

## Technical Stack

- **Framework**: SvelteKit
- **Styling**: UnoCSS
- **TypeScript**: Full TypeScript support
- **Build Tools**: Vite
- **Docker**: Containerization support
- **CI/CD**: GitHub Actions workflow

## Development

### Prerequisites

- Node.js
- npm/yarn

### Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`

### Docker Support

Build and run using Docker:

```bash
docker build -t mock-ui .
docker run -p 3000:3000 mock-ui
```

## License

This project uses standard development tooling including ESLint for code quality and follows modern web development practices.
