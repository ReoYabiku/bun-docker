FROM oven/bun:1
WORKDIR /app
COPY package.json ./
COPY api/. ./api/

WORKDIR /app/api

RUN bun install

EXPOSE 4000
ENTRYPOINT ["bun", "run", "start"]