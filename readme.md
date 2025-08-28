# Commands to build and run containers

- `# docker build -f Dockerfile.api -t drs-api:latest` – build api image
- `# docker build -f Dockerfile.dash -t drs-dash:latest` – build frontend image
- `# docker compose up -f docker-compose-build.yml -d` – start the containers