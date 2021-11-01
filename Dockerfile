FROM node:16-alpine

# Set working directory.
WORKDIR /app

# Add `/app/node_modules/.bin` to $PATH.
ENV PATH /app/node_modules/.bin:$PATH

# Expose api port.
EXPOSE 3000

# Build app.
CMD yarn install && yarn install --dev && yarn dev