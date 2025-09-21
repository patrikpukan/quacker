FROM node:22.15.0-alpine

USER root

RUN apk add --no-cache openssl

WORKDIR /app

COPY package.json .
COPY prisma ./prisma/

RUN yarn install
RUN mkdir -p uploads
RUN chown -R node:node /app

USER node

# Create .env file if it doesn't exist
RUN touch .env

# Fix the command to actually run the application
CMD ["yarn", "start:dev"]
