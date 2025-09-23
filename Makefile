setup:
	docker run -it --rm -v ${PWD}/ssh:/root/.ssh alpine sh -c "apk add openssh && ssh-keygen -t ed25519 -C 'sftp-test' -f ~/.ssh/id_ed25519 -N '' -q"
	docker run -it --rm -v ${PWD}/apps/client:/app -w /app node:20-alpine sh -c "npm install"

start:
	docker compose up -d --build

upload:
	docker compose exec client npm start