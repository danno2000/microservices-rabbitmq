
# This appears to be the easiest way to embed
# pnpm in a Node image to avoid startup issues.
docker build -f pnpm.Dockerfile -t node-pnpm .

# The containers are all using a shared volume,
# so only need to run the install on one container.
docker compose run --rm --no-deps api pnpm install