# Base image for frontend
FROM oven/bun:1.1.8-alpine
WORKDIR /app

# Copy files and install dependencies using Bun
COPY package.json bun.lockb ./
RUN bun install

# Copy all source code
COPY . .

# Expose port 5173
EXPOSE 5173

# Start Vite using Bun
CMD ["bun", "run", "dev"]
