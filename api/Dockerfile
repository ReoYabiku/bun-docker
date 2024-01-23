FROM oven/bun:1 AS builder
WORKDIR /app
COPY package.json ./
COPY api/. ./api/

WORKDIR /app/api

RUN bun install

# ENTRYPOINT ["bun", "run", "build"]
RUN bun run build


# FROM oven/bun:1
# WORKDIR /app
# COPY --from=builder /app/api/dist/ ./dist/

EXPOSE 4000
ENTRYPOINT ["bun", "run", "./dist/main.js"]