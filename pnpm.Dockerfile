# Use official Node.js base image
FROM node:latest

# Install pnpm globally
RUN npm install -g pnpm

# Default command
CMD ["pnpm", "start"]