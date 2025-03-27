
docker build -f pnpm.Dockerfile -t node-pnpm .

docker compose run --rm --no-deps api pnpm install