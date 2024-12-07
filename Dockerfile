FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json . 

RUN npm install

COPY . . 

# Build the project for production
RUN npm run build

# Serve with Nginx
FROM nginx:1.27.3-alpine-slim AS production

# Clean the default Nginx static directory
RUN rm -rf /usr/share/nginx/html/*

# Copy the built React app from the build stage to Nginx's static directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration to the container
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
