.DEFAULT_GOAL := help

VERSION = $(shell git describe --tags --always)
DOCKER_IMAGE = sre
DOCKER_COMPOSE = docker-compose --env-file .env

start-db:
	@echo "Starting the database container..."
	$(DOCKER_COMPOSE) up -d mysql

migrate-db:
	@echo "Running database migrations..."
	$(DOCKER_COMPOSE) exec app npm run migration:run


build-api:
	@echo "Building the REST API Docker image..."
	DOCKER_HOST=tcp://localhost:2375 docker build -t $(DOCKER_IMAGE):$(VERSION) .

start-api: start-db migrate-db
	@echo "Starting the API container..."
	$(DOCKER_COMPOSE) up -d app

lint:
	@echo "Linting..."
	$(DOCKER_COMPOSE) run lint

stop:
	@echo "Stopping all containers..."
	$(DOCKER_COMPOSE) down

clean:
	@echo "Removing all containers, volumes, and networks..."
	$(DOCKER_COMPOSE) down --volumes --remove-orphans

logs:
	@echo "Showing logs..."
	$(DOCKER_COMPOSE) logs -f

help:
	@echo "Makefile targets:"
	@echo "  start-db     - Start the database container"
	@echo "  migrate-db   - Run database migrations"
	@echo "  build-api    - Build the REST API Docker image"
	@echo "  start-api    - Start the API container (with DB setup)"
	@echo "  stop         - Stop all running containers"
	@echo "  clean        - Remove all containers, volumes, and networks"
	@echo "  logs         - Show logs from running containers"
