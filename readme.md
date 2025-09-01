## Prerequisites

- Docker & Docker compose
- Pnpm (Package Manager)


### Install Pnpm

- `# npm install -g pnpm` - Install pnpm globally

## Project Setup

- `# pnpm install` – Install dependencies
- `# docker compose up -d` – Start Postgres, Minio, PgAdmin, etc. in background
- `# pnpm api dev` – Start backend server
- `# pnpm dash dev` – Start frontend

# Commands to build image and run containers

- `# docker build -f Dockerfile.api -t drs-api:latest` – build api image
- `# docker build -f Dockerfile.dash -t drs-dash:latest` – build frontend image
- `# docker compose -f docker-compose-build.yml up -d` – start the containers


- **Endpoints:**
  - `GET /api/swagger.json` – OpenAPI JSON (served by NestJS SwaggerModule)
  - `http://localhost:8080/` - Frontend
  - `http://localhost:8080/api` - Backend Api
