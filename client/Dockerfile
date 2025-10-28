# Imatge base de Node
FROM node:18-alpine

# Carpeta de treball dins del contenidor
WORKDIR /app

# Copiem package.json i instal·lem dependències
COPY package.json ./
RUN npm install --production

# Copiem tot el codi del frontend
COPY . .

# Exposem el port del frontend
ENV PORT=3000
EXPOSE 3000

# Comença el servidor Node amb proxy
CMD ["node", "server.js"]
