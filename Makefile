install:
	docker run -it --rm -v ${PWD}/apps/client:/app -w /app node:20-alpine sh -c "npm install"
	docker compose build

start:
	docker compose up -d

upload:
	docker compose exec client npm start