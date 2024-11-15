FROM oven/bun:1-alpine AS build

WORKDIR /app
COPY package.json .
RUN bun i --production
COPY . .
RUN bun run -b build

ENV PORT=9040

FROM ghcr.io/static-web-server/static-web-server:2

COPY --from=build /app/build /app/build

CMD [ "-d", "/app/build", "-p", "8080", "-z", "true", "--redirect-trailing-slash", "false" ]
