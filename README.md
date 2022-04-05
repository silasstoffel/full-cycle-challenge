### Full Cycle - Challenge 1

## 1 - GO

For build image

```shell
 docker build -t silasstofel/codeeducation . -f ./infrastructure/go/Dockerfile
 ```
Run builded image
 ```shell
 docker run silasstofel/codeeducation
 ```

 Run from dockerhub
 ```shell
 docker run silasstofel/codeeducation
 ```

 ## 2 - Node + Nginx + Postgres


Automatic setup

```shell
$ ./infrastructure/scripts/setup.sh
```

Manual setup

```shell
# Create network
docker network create full-cycle-network

# Install dependencies
npm install

# docker-compose
 docker compose up
```