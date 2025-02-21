FROM node:23-alpine AS builder

WORKDIR /build

COPY *.json .
COPY Caddyfile .
COPY src src
COPY public public

RUN npm i -g @angular/cli && \
    npm ci && \
    npm run build



FROM caddy:2-alpine

WORKDIR /app

COPY --from=builder /build/dist/csf_31t/browser /browser
COPY --from=builder build/public/error.html /browser
COPY --from=builder build/Caddyfile Caddyfile

ENV PORT=8080
EXPOSE ${PORT}

SHELL ["/bin/sh", "c"]
ENTRYPOINT caddy run --config Caddyfile