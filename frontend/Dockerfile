# Use Node.js 14 Alpine
FROM node:21-bookworm

RUN apt update
RUN apt install -y debian-keyring debian-archive-keyring apt-transport-https
RUN curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
RUN curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | tee /etc/apt/sources.list.d/caddy-stable.list
RUN apt install caddy -y

WORKDIR /calendar

ADD ./package.json ./
ADD package-lock.json ./
RUN npm install
COPY ./src ./src
COPY ./public ./public
RUN npm run build

ADD Caddyfile ./
CMD ["caddy", "run"]