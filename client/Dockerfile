# Node + express + proxy
FROM node:18-alpine

WORKDIR /app

# Instal·lar depèndencies
COPY package*.json ./
RUN npm ci --production

# Copiar codi
COPY . .

# Exposar port del frontend
ENV PORT=3000
EXPOSE 3000

# Comença el servidor amb proxy
CMD ["node", "server.js"]
