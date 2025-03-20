FROM node:20-bookworm-slim AS base

RUN addgroup --gid 2000 --system appgroup && \
        adduser --uid 2000 --system appuser --gid 2000

ENV NODE_ENV=production

WORKDIR /app

RUN apt-get update && \
        apt-get upgrade -y && \
        apt-get autoremove -y && \
        rm -rf /var/lib/apt/lists/*


COPY --chown=appuser:appgroup . .
RUN npm ci

USER 2000

CMD [ "npm", "start" ]
