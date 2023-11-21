# Use Node.js 14 Alpine
FROM node:21-bookworm

RUN apt update && apt install -y python3 python3-pip python3-jinja2

RUN apt install -y debian-keyring debian-archive-keyring apt-transport-https
RUN curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
RUN curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | tee /etc/apt/sources.list.d/caddy-stable.list
RUN apt install caddy -y

WORKDIR /calendar

COPY build_script.py Caddyfile.j2 ./

# Set the argument and default value
ARG BA_USER
ARG BA_PW
ARG DOMAINNAME


# Hash the password during build time and set it as an environment variable
RUN HASHED_PW=$(caddy hash-password --plaintext ${BA_PW}) \
    && python3 build_script.py --ba-user ${BA_USER} \
    --ba-pw-hashed ${HASHED_PW} \
    --domainname ${DOMAINNAME}

ADD ./package.json ./
ADD package-lock.json ./
RUN npm install
COPY ./src ./src
COPY ./public ./public
RUN npm run build

CMD ["caddy", "run"]