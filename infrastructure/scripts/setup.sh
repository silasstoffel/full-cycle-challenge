#!/bin/sh

APP_NETWORK='full-cycle-network'

echo "";

npm i

docker-compose build

if [ -z "$(docker network ls --filter name=^${APP_NETWORK}$ --format="{{ .Name }}")" ]; then
    echo "$(date '+%Y-%m-%d %H:%M:%S,%3N') $(tput bold)$(tput setaf 4)INFO$(tput sgr0) Criando docker network da aplicação: ${APP_NETWORK}."
    docker network create ${APP_NETWORK}
fi

echo ""

echo "start container ...";

docker-compose up --remove-orphans --force-recreate

echo "stop container ...";
docker-compose down

echo ""