
cd "$(dirname "$0")"

set -a
source ../.env
set +a

docker run -d \
  --name rabbitmq \
  -p 5672:5672 \
  -p 15672:15672 \
  -e RABBITMQ_DEFAULT_USER=$RABBITMQ_USER \
  -e RABBITMQ_DEFAULT_PASS=$RABBITMQ_PASS \
  rabbitmq:3-management

pnpm install