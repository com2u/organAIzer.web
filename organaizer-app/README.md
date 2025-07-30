# OrganAIzer.App Website

A modern, responsive React web application for OrganAIzer.App - an AI-powered meeting planning and task management solution.

## Features

- **Modern React Architecture**: Built with React 18, TypeScript, and Vite
- **Responsive Design**: Fully responsive for mobile and desktop devices
- **Internationalization**: Support for German (DE) and English (EN) languages
- **Modern Styling**: Tailwind CSS with custom pastel color scheme
- **Font Awesome Icons**: Consistent iconography throughout the application
- **SEO Optimized**: Meta tags, OpenGraph tags, and structured data
- **Production Ready**: Optimized build for NGINX deployment

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Font Awesome
- **Routing**: React Router DOM
- **Language**: English & German (i18n)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the project directory:
   ```bash
   cd organaizer-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

Create a production build:
```bash
npm run build
```

The built files will be in the `dist` directory, ready to be served by NGINX.

## Project Structure

```
organaizer-app/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components
│   ├── contexts/      # React contexts
│   ├── config/        # Configuration files
│   ├── types/         # TypeScript type definitions
│   ├── index.css      # Global styles
│   └── main.tsx       # Application entry point
├── public/            # Static assets
├── index.html         # Main HTML template
├── tailwind.config.js # Tailwind CSS configuration
├── vite.config.ts     # Vite configuration
└── package.json       # Dependencies and scripts
```

## Deployment

### Docker Deployment (Recommended)

The application is containerized using Docker for easy deployment and scalability.

#### Prerequisites

- Docker (v20.10 or higher)
- Docker Compose (v2.0 or higher)

#### Quick Start with Docker

1. **Build and run the container:**
   ```bash
   ./docker-build.sh
   ```

2. **Access the application:**
   - Open your browser and navigate to `http://localhost:7703`

3. **Stop the container:**
   ```bash
   ./docker-stop.sh
   ```

#### Manual Docker Commands

**Build the Docker image:**
```bash
docker-compose build
```

**Start the container:**
```bash
docker-compose up -d
```

**Stop the container:**
```bash
docker-compose down
```

**View logs:**
```bash
docker-compose logs -f
```

#### Docker Configuration

The Docker setup includes:

- **Multi-stage build**: Optimized image size using Node.js for building and NGINX for serving
- **NGINX configuration**: Custom configuration for SPA routing and performance optimization
- **Port 7703**: Application runs on port 7703 as specified
- **Security headers**: Implemented security best practices
- **Gzip compression**: Enabled for better performance
- **Static asset caching**: Optimized caching for CSS, JS, and image files

#### Production Deployment

For production deployment on a server:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd organaizer-app
   ```

2. **Build and deploy:**
   ```bash
   ./docker-build.sh
   ```

3. **Verify deployment:**
   ```bash
   curl http://localhost:7703
   ```

#### Environment Variables

The Docker container supports the following environment variables:

- `NODE_ENV=production` (set by default)

#### Docker Files Structure

```
organaizer-app/
├── Dockerfile              # Multi-stage Docker build configuration
├── docker-compose.yml      # Docker Compose configuration
├── nginx.conf              # NGINX server configuration
├── docker-build.sh         # Build and deployment script
└── docker-stop.sh          # Container stop script
```

### Traditional NGINX Deployment

If you prefer traditional deployment without Docker:

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Copy built files to NGINX web root:**
   ```bash
   sudo cp -r dist/* /var/www/html/
   ```

3. **Configure NGINX:**
   ```bash
   sudo cp nginx.conf /etc/nginx/sites-available/organaizer
   sudo ln -s /etc/nginx/sites-available/organaizer /etc/nginx/sites-enabled/
   sudo nginx -t && sudo systemctl reload nginx
   ```

## Customization

### Language Configuration

Language translations are managed in `src/config/languages.ts`. Add new languages or modify existing translations there.

### Styling

The color scheme uses Tailwind CSS with custom pastel colors defined in `tailwind.config.js`. Available colors:

- pastel-blue: #A0C4FF
- pastel-purple: #BDB2FF
- pastel-pink: #FFC6FF
- pastel-red: #FFADAD
- pastel-orange: #FFD6A5
- pastel-yellow: #FDFFB6
- pastel-green: #CAFFBF
- pastel-cyan: #9BF6FF

### Font Awesome

To use Font Awesome icons, ensure you have a valid kit ID and update the script tag in `index.html`:

```html
<script src="https://kit.fontawesome.com/YOUR-KIT-ID.js" crossorigin="anonymous"></script>
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## License

This project is open source and available under the MIT License.

## Contact

For questions or support, please contact:
- Email: info@organAIzer.app
- Website: https://organAIzer.app
- Location: Munich, Germany
