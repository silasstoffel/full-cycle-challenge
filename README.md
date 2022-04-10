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
 docker-compose up
```