FROM node:latest

RUN npm install -g pnpm

CMD ["pnpm", "start"]